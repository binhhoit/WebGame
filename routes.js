'use strict';
//id = email 
const auth = require('basic-auth');
const jwt = require('jsonwebtoken');

const register = require('./functions/register');
const login = require('./functions/login');
const profile = require('./functions/profile');
const password = require('./functions/password');
const config = require('./config/config.json');

module.exports = router => { 	

	router.get('/', (req, res) => res.render(__dirname + "/view/index"));

	router.post('/authenticate', (req, res) => {
		//get request lấy giá trị thông tin user
		const credentials = auth(req);
		console.log(credentials.name + "co ket noi login");
		if (!credentials) {

			res.status(400).json({ message: 'Invalid Request !' });

		} else {
			// gọi bên login.js loginUser
			login.loginUser(credentials.name, credentials.pass)
				.then(result => {

					const token = jwt.sign(result, config.secret, { expiresIn: 1440 });
					res.status(result.status).json({ message: result.message, token: token, id: result.id });

				})

				.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	router.post('/users', (req, res) => {

		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.password;
		//hàm trim() loại bỏ khảng trắng
		if (!name || !email || !password || !name.trim() || !email.trim() || !password.trim()) {

			res.status(400).json({ message: 'Invalid Request !' });

		} else {

			register.registerUser(name, email, password)

				.then(result => {

					res.setHeader('Location', '/users/' + email);
					res.status(result.status).json({ message: result.message })
				})

				.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	router.get('/users/:id', (req, res) => {

		if (checkToken(req)) {

			profile.getProfile(req.params.id)

				.then(result => { res.json(result) })

				.catch(err => res.status(err.status).json({ message: err.message }));

		} else { res.status(401).json({ message: 'Invalid Token !' }); }

	});

	router.put('/users/:id', (req, res) => {

		if (checkToken(req)) {

			const oldPassword = req.body.password;
			const newPassword = req.body.newPassword;

			if (!oldPassword || !newPassword || !oldPassword.trim() || !newPassword.trim()) {

				res.status(400).json({ message: 'Invalid Request !' });

			} else {

				password.changePassword(req.params.id, oldPassword, newPassword)

					.then(result => {

						res.status(result.status).json({ message: result.message })
					})
					.catch(err => res.status(err.status).json({ message: err.message }));

			}
		} else {

			res.status(401).json({ message: 'Invalid Token !' });
		}
	});

	router.post('/users/:email/password', (req, res) => {

		const email = req.params.email;
		const token = req.body.token;
		const newPassword = req.body.password;

		if (!token || !newPassword || !token.trim() || !newPassword.trim()) {

			password.resetPasswordInit(email)

				.then(result => res.status(result.status).json({ message: result.message }))

				.catch(err => res.status(err.status).json({ message: err.message }));

		} else {

			password.resetPasswordFinish(email, token, newPassword)

				.then(result => res.status(result.status).json({ message: result.message }))

				.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	function checkToken(req) {

		const token = req.headers['x-access-token'];

		if (token) {

			try {

				var decoded = jwt.verify(token, config.secret);
				console.log(decoded);
				console.log(req.params.id);
				return decoded.id === req.params.id;

			} catch (err) {

				return false;
			}

		} else {

			return false;
		}
	}
	//--------------------------------------Web---------------------------------------------------
	router.get('/unit1', (req, res) => {

		res.render(__dirname + ("/view/level1/baihoc/index"));
	});

	router.get('/unit1_game1', (req, res) => {

		res.render(__dirname + ("/view/level1/game1/index"));
	});
	router.get('/unit1_game2', (req, res) => {

		res.render(__dirname + ("/view/level1/game2/index"));
	});

	router.get('/unit2', (req, res) => {

		res.render(__dirname + ("/view/level2/baihoc/index"));
	});

	router.get('/unit2_game1', (req, res) => {

		res.render(__dirname + ("/view/level2/game1/index"));
	});

	router.get('/unit2_game2', (req, res) => {

		res.render(__dirname + ("/view/level2/game2/index"));
	});

	router.get('/unit3', (req, res) => {

		res.render(__dirname + ("/view/level3/baihoc/index"));
	});

	router.get('/unit3_game1', (req, res) => {

		res.render(__dirname + ("/view/level3/game1/index"));
	});

	router.get('/unit3_game2', (req, res) => {

		res.render(__dirname + ("/view/level3/game2/index"));
	});

	router.get('/unit4', (req, res) => {

		res.render(__dirname + ("/view/level4/baihoc/index"));
	});

	router.get('/unit4_game1', (req, res) => {

		res.render(__dirname + ("/view/level4/game1/index"));
	});

	router.get('/unit4_game2', (req, res) => {

		res.render(__dirname + ("/view/level4/game2/index"));
	});

	router.get('/unit5', (req, res) => {

		res.render(__dirname + ("/view/level5/baihoc/index"));
	});

	router.get('/unit5_game1', (req, res) => {

		res.render(__dirname + ("/view/level5/game1/index"));
	});

	router.get('/unit5_game2', (req, res) => {

		res.render(__dirname + ("/view/level5/game2/index"));
	});

	router.get('/unit6', (req, res) => {

		res.render(__dirname + ("/view/level6/baihoc/index"));
	});

	router.get('/unit6_game1', (req, res) => {

		res.render(__dirname + ("/view/level6/game1/index"));
	});

	router.get('/unit6_game2', (req, res) => {

		res.render(__dirname + ("/view/level6/game2/index"));
	});
	router.get('/unit7', (req, res) => {

		res.render(__dirname + ("/view/level7/baihoc/index"));
	});

	router.get('/unit7_game1', (req, res) => {

		res.render(__dirname + ("/view/level7/game1/index"));
	});

	router.get('/unit7_game2', (req, res) => {

		res.render(__dirname + ("/view/level7/game2/index"));
	});

	router.get('/unit8', (req, res) => {

		res.render(__dirname + ("/view/level8/baihoc/index"));
	});

	router.get('/unit8_game1', (req, res) => {

		res.render(__dirname + ("/view/level8/game1/index"));
	});

	router.get('/unit8_game2', (req, res) => {

		res.render(__dirname + ("/view/level8/game2/index"));
	});

	router.get('/unit9', (req, res) => {

		res.render(__dirname + ("/view/level9/baihoc/index"));
	});

	router.get('/unit9_game1', (req, res) => {

		res.render(__dirname + ("/view/level9/game1/index"));
	});

	router.get('/unit9_game2', (req, res) => {

		res.render(__dirname + ("/view/level9/game2/index"));
	});
	router.get('/unit0', (req, res) => {

		res.render(__dirname + ("/view/level0/baihoc/index"));
	});

	router.get('/unit0_game1', (req, res) => {

		res.render(__dirname + ("/view/leve2/game1/index"));
	});

	router.get('/unit0_game2', (req, res) => {

		res.render(__dirname + ("/view/leve0/game2/index"));
	});

}