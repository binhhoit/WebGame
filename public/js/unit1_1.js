var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, render: render });

var scoretext;
var diem = 0;
var basket;


function preload() {

	game.scale.forceOrientation(false, true);

	game.load.image('carrot1', 'assets/images/unit1_game1/carrot_1.png');
	game.load.image('carrot2', 'assets/images/unit1_game1/carrot_2.png');

	game.load.image('basket', 'assets/images/unit1_game1/basket.png');
	game.load.image('btnNext', 'assets/images/unit1_game1/ic_button_next.png');
	game.load.image('btnRestart', 'assets/images/unit1_game1/ic_button_restart.png');

	game.load.audio('music', 'assets/sounds/unit1_1/score.mp3');
	game.load.audio('music1', 'assets/sounds/unit1_1/fail1.mp3');
	game.load.audio('music5', 'assets/sounds/unit1_1/yeah.mp3');
	game.load.audio('music6', 'assets/sounds/unit1_1/1_Game1.mp3');
	game.load.audio('music_bg', 'assets/sounds/game_bg.mp3');

	game.load.image('background', 'assets/images/unit1_game1/bg.png');

}


function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	var background = game.add.tileSprite(0, 0, 1366, 768, 'background');
	var style = { font: "30px r0c0iLinotte", fill: "#000" };

	start();

	//1->5 carrot 1 / 6->8 carrot 2
	var carrot_one = game.add.sprite(277.7, 223.2, 'carrot1');
	carrot_one.scale.setTo(1, 1);
	carrot_one.inputEnabled = true;

	carrot_one.events.onInputDown.add(score, this);
	carrot_one.events.onInputDown.add(animation, this);
	carrot_one.events.onInputDown.add(process1, this);

	var carrot_two = game.add.sprite(398.6, 223.2, 'carrot1');
	carrot_two.scale.setTo(1, 1);
	carrot_two.inputEnabled = true;

	carrot_two.events.onInputDown.add(score1, this);
	carrot_two.events.onInputDown.add(animation1, this);
	carrot_two.events.onInputDown.add(process1, this);

	var carrot_three = game.add.sprite(779.3, 11, 'carrot1');
	carrot_three.scale.setTo(1, 1);
	carrot_three.inputEnabled = true;

	carrot_three.events.onInputDown.add(score2, this);
	carrot_three.events.onInputDown.add(animation2, this);
	carrot_three.events.onInputDown.add(process1, this);

	var carrot_four = game.add.sprite(721.5, 479.2, 'carrot1');
	carrot_four.scale.setTo(1, 1);
	carrot_four.inputEnabled = true;

	carrot_four.events.onInputDown.add(score2, this);
	carrot_four.events.onInputDown.add(animation3, this);
	carrot_four.events.onInputDown.add(process1, this);

	var carrot_five = game.add.sprite(878, 479.2, 'carrot1');
	carrot_five.scale.setTo(1, 1);
	carrot_five.inputEnabled = true;

	carrot_five.events.onInputDown.add(score2, this);
	carrot_five.events.onInputDown.add(animation4, this);
	carrot_five.events.onInputDown.add(process1, this);

	var carrot_six = game.add.sprite(53.6, 479.2, 'carrot2');
	carrot_six.scale.setTo(1, 1);
	carrot_six.inputEnabled = true;

	carrot_six.events.onInputDown.add(score2, this);
	carrot_six.events.onInputDown.add(animation5, this);

	var carrot_seven = game.add.sprite(932.2, 11, 'carrot2');
	carrot_seven.scale.setTo(1, 1);
	carrot_seven.inputEnabled = true;

	carrot_seven.events.onInputDown.add(fail, this);
	carrot_seven.events.onInputDown.add(animation6, this);

	var carrot_eight = game.add.sprite(1092.3, 11, 'carrot2');
	carrot_eight.scale.setTo(1, 1);
	carrot_eight.inputEnabled = true;

	carrot_eight.events.onInputDown.add(fail, this);
	carrot_eight.events.onInputDown.add(animation7, this);


	basket = game.add.sprite(59.8, 57.2, 'basket');
	basket.scale.setTo(0.4, 0.4);

	//var btnNext = game.add.button(900, 500, 'btnNext', process, this);
	//btnNext.scale.setTo(0.3);
}

function render() {
	//game.debug.spriteInfo(carrot_one, 32, 32);
	//game.debug.spriteInfo(Apple_5,32,32);
}

function start() {
	music_bg = game.add.audio('music_bg');
	music_bg.play();
	music_bg.volume = 0.1;
	music6 = game.add.audio('music6');
	music6.volume = 1;
	music6.play()
	setTimeout(function () {
		music_bg.volume = 1
	}, 5000);

}

function score() {

	music = game.add.audio('music');
	music.play();

	music = game.add.audio('music5');
	music.play();


}

function score1() {
	music = game.add.audio('music');
	music.play();


	music = game.add.audio('music5');
	music.play();

}

function score2() {
	music = game.add.audio('music');
	music.play();
	music = game.add.audio('music5');
	music.play();

}

function fail() {
	music = game.add.audio('music1');
	music.play();

}

function animation(image) {
	image.inputEnabled = false;
	diem++;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [249.2, 33.1], y: [-7.3, 62.1] }, 2000, Phaser.Easing.Quadratic.InOut, true);
	process1();
}

function animation1(image) {
	image.inputEnabled = false;
	diem++;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [249.2, 61.4], y: [-7.3, 62.1] }, 2000, Phaser.Easing.Quadratic.InOut, true);
	process1();
}

function animation2(image) {
	image.inputEnabled = false;
	diem++;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [249.2, 99.7], y: [-7.3, 62.1] }, 3000, Phaser.Easing.Quadratic.InOut, true);
	process1();
}

function animation3(image) {
	image.inputEnabled = false;
	diem++;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [249.2, 130.8], y: [-7.3, 62.1] }, 3000, Phaser.Easing.Quadratic.InOut, true);
	process1();
}

function animation4(image) {
	image.inputEnabled = false;
	diem++;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [249.2, 162.1], y: [-7.3, 62.1] }, 3000, Phaser.Easing.Quadratic.InOut, true);
	process1();
}

function animation5(image) {
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [53.6, 53.6], y: [379.2, 479.2] }, 1000, Phaser.Easing.Quadratic.InOut, true);
}

function animation6(image) {
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [932.2, 932.2], y: [-111, 11] }, 1000, Phaser.Easing.Quadratic.InOut, true);
}

function animation7(image) {
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [1092.3, 1092.3], y: [-111, 11] }, 1000, Phaser.Easing.Quadratic.InOut, true);
}



function process1() {
	if (diem == 5) {
		music = game.add.audio('music');
		music.play();
		setTimeout(function () {
			Delay1();
		}, 3000);

	}
	console.log(diem);
}

function Delay1() {
	var winx = window.location = "/api/unit1_game2";
}

function update() {

}

