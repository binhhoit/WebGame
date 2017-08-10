

var game = new Phaser.Game(1500, 721, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

	game.load.image('bg','assets/images/unit6/bg.png');


	game.load.image('trung','assets/images/unit6/character/egg.png');
	game.load.image('totrung','assets/images/unit6/character/nest.png');
	
	game.load.image('bird', 'assets/images/unit6/ic_bird.png');
	game.load.image('egg', 'assets/images/unit6/ic_egg.png');
	game.load.image('nest','assets/images/unit6/ic_nest.png')

	game.load.image('text_number6', 'assets/images/unit6/text_number6.png');
	game.load.image('text_bird', 'assets/images/unit6/text_bird.png');
	game.load.image('text_egg', 'assets/images/unit6/text_egg.png');
	game.load.image('text_nest', 'assets/images/unit6/text_nest.png');
	
	game.load.audio('1', 'assets/sound/unit6/6_6 con chim.mp3');
	game.load.audio('2', 'assets/sound/unit6/6_6 qua trung.mp3');
	game.load.audio('3', 'assets/sound/unit6/6_ 6 to chim.mp3');
	game.load.audio('4', 'assets/sound/unit6/6_2.mp3');
	game.load.audio('5', 'assets/sound/unit6/6_3.mp3');
	game.load.audio('6', 'assets/sound/unit6/6_4.mp3');
	game.load.audio('7', 'assets/sound/unit6/6_5.mp3');
	game.load.audio('8', 'assets/sound/unit6/6_gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/unit6/6_So 6.mp3');
	game.load.audio('10', 'assets/sound/unit6/6_1.mp3');


	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);
	// Load button sprite
	game.load.image('nen','assets/images/unit5/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit6/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit6/ic_button_back.png');
}
var flag ;
var loop;
var temp =0;
var backgroundCount = 1;
var start =1;
var sound = new Array();
var bot;
var distance = 1;
var flag_sound = 0;
//Speed di chuyen
var direction = 2;

// Setting sound start
var speed = 2;
function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,6096,720, 'bg');
	game.world.setBounds(0,0,6096,720);
	game.scale.forceOrientation(false, true);
	
	m_player = game.add.sprite(0, 0, 'm_player');
	m_player.scale.setTo(0.1, 0.1);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop
	m_player.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	bird = game.add.sprite(815, 35, 'bird');
	bird.scale.setTo(0.85,0.85);
	
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');
	sound[8] = game.sound.add('9');
	sound[9] = game.sound.add('10');

	flag= true;
	
}

function btn() {
	btnNext = game.add.button(800, 560, 'btnNext', mission, this);
	btnBack = game.add.button(700, 560, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	bird = game.add.tileSprite(-50, 700, 440, 227, 'bird');
	bird.inputEnabled = true;
	bird.scale.setTo(1, 1);
	game.add.tween(bird).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_bird = game.add.tileSprite(550, -50, 348, 66, 'text_bird');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bird.inputEnabled = true;
		game.add.tween(text_bird).to({ x: 580, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');
	
	tao_ = game.add.tileSprite(-50,700,352,232,'tao_');
	tao_.scale.setTo(1,1);
	tao_.inputEnabled = true;

	game.add.tween(tao_).to({ x: 400, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_apple = game.add.tileSprite(530, -50, 342, 66, 'text_apple');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_apple.inputEnabled = true;
		game.add.tween(text_apple).to({ x: 620, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	chuoi_ = game.add.tileSprite(-50, 700, 303, 202, 'chuoi_');
	chuoi_.inputEnabled = true;
	chuoi_.scale.setTo(1.1, 1.1);
	game.add.tween(chuoi_).to({ x: 385, y: 195 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_banana = game.add.tileSprite(450, -50, 395, 66, 'text_banana');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_banana.inputEnabled = true;
		game.add.tween(text_banana).to({ x: 620, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	//m_player.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_monkey.destroy();
		text_number6.destroy();
		khi_.destroy();

		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		text_apple.destroy();
		text_number6.destroy();
		tao_.destroy();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number6.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	start =0 ;
	setTimeout(function () {
		tao = game.add.sprite(200,25,'tao');
		tao.scale.setTo(1,1);

	}, 1000);
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	setTimeout(function () {
		chuoi= game.add.sprite(740,595,'chuoi');
		chuoi.scale.setTo(1,1);

	}, 100);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backPlayer() {
	if (start==0) {
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
	}
	start ++;
}

function update() {
	if(backgroundCount ==3){
		if(bg.x > -1230){
			bg.x -= direction;
			tao.x -= direction;
			khi.x -= direction;

			m_player.animations.play('walk');
		}
		if(bg.x <= -1230)
		{
			backPlayerBackgroundThree();
			start =0 ;
			bg.x = -1215;
			direction = 0;
			m_player.animations.play('idle');
			stop = true;
		}
	}

	backPlayer();


	if(!loop && flag){
		if(backgroundCount ==1){
			setTimeout(function () {
				show1();
			},3000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				show2();
			}, 4000);
		}
		if (backgroundCount == 3 && stop) {
			setTimeout(function () {
				show3();
			}, 3000);
		}
	}
}



