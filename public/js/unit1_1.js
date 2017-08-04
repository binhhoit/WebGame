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
	game.load.audio('music3', 'assets/sounds/unit1_1/gioi_qua.mp3');
	game.load.audio('music4', 'assets/sounds/unit1_1/hoan_ho.mp3');
	game.load.audio('music5', 'assets/sounds/unit1_1/yeah.mp3');
	game.load.audio('music6', 'assets/sounds/unit1_1/1_Game1.mp3');
	game.load.audio('music7', 'assets/sounds/unit1_1/fail1.mp3');

	game.load.image('background', 'assets/images/unit1_game1/bg.png');

}


function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	var background = game.add.tileSprite(0, 0, 1366, 768, 'background');
	//background.scale.setTo(1, 1);
	var style = { font: "30px r0c0iLinotte", fill: "#000" };
	//scoretext = game.add.text(0, 10, '0',style);

	music6 = game.add.audio('music6');
	music6.onDecoded.add(start, this);

	//1->5 carrot 1 / 6->8 carrot 2
	var carrot_one = game.add.sprite(200, 400, 'carrot1');
	carrot_one.scale.setTo(1, 1);
	carrot_one.inputEnabled = true;

	carrot_one.events.onInputDown.add(score, this);
	carrot_one.events.onInputDown.add(action, this);
	carrot_one.events.onInputDown.add(animation, this);
	carrot_one.events.onInputDown.add(process1, this);

	var carrot_two = game.add.sprite(550, 200, 'carrot1');
	carrot_two.scale.setTo(1, 1);
	carrot_two.inputEnabled = true;

	carrot_two.events.onInputDown.add(score1, this);
	carrot_two.events.onInputDown.add(action, this);
	carrot_two.events.onInputDown.add(animation1, this);
	carrot_two.events.onInputDown.add(process1, this);

	var carrot_three = game.add.sprite(550, 500, 'carrot1');
	carrot_three.scale.setTo(1, 1);
	carrot_three.inputEnabled = true;

	carrot_three.events.onInputDown.add(score2, this);
	carrot_three.events.onInputDown.add(action, this);
	carrot_three.events.onInputDown.add(animation1, this);
	carrot_three.events.onInputDown.add(process1, this);

	var carrot_four = game.add.sprite(450, 300, 'carrot1');
	carrot_four.scale.setTo(1, 1);
	carrot_four.inputEnabled = true;

	carrot_four.events.onInputDown.add(score2, this);
	carrot_four.events.onInputDown.add(action, this);
	carrot_four.events.onInputDown.add(animation2, this);
	carrot_four.events.onInputDown.add(process1, this);

	var carrot_five = game.add.sprite(499, 300, 'carrot1');
	carrot_five.scale.setTo(1, 1);
	carrot_five.inputEnabled = true;

	carrot_five.events.onInputDown.add(score2, this);
	carrot_five.events.onInputDown.add(action, this);
	carrot_five.events.onInputDown.add(animation2, this);
	carrot_five.events.onInputDown.add(process1, this);

	var carrot_six = game.add.sprite(120, 400, 'carrot2');
	carrot_six.scale.setTo(1, 1);
	carrot_six.inputEnabled = true;

	carrot_six.events.onInputDown.add(score2, this);
	carrot_six.events.onInputDown.add(action, this);
	carrot_six.events.onInputDown.add(animation2, this);
	carrot_six.events.onInputDown.add(process1, this);

	var carrot_seven = game.add.sprite(350, 400, 'carrot2');
	carrot_seven.scale.setTo(1, 1);
	carrot_seven.inputEnabled = true;

	carrot_seven.events.onInputDown.add(fail, this);
	carrot_seven.events.onInputDown.add(action1, this);
	carrot_seven.events.onInputDown.add(animation3, this);

	var carrot_eight = game.add.sprite(750, 400, 'carrot2');
	carrot_eight.scale.setTo(1, 1);
	carrot_eight.inputEnabled = true;

	carrot_eight.events.onInputDown.add(fail, this);
	carrot_eight.events.onInputDown.add(action1, this);
	carrot_eight.events.onInputDown.add(animation4, this);


	basket = game.add.sprite(79.8, 57.2, 'basket');
	basket.scale.setTo(0.3, 0.3);
	basket.inputEnabled = true;
	basket.input.enableDrag();


	//var btnNext = game.add.button(900, 500, 'btnNext', process, this);
	//btnNext.scale.setTo(0.3);


}

function render() {
	game.debug.spriteInfo(basket, 32, 32);
	//game.debug.spriteInfo(Apple_5,32,32);
}

function start() {

	music6.fadeIn(4000);

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

function action(image) {
	image.visible = image.scale.setTo(0.4);

}
function action1(image1) {

	image1.visible = image1.scale.setTo(0.4);
}

function action(image2) {

	image2.visible = image2.scale.setTo(0.4);
}
function action1(image3) {

	image3.visible = image3.scale.setTo(0.4);
}

function action(image4) {

	image4.visible = image4.scale.setTo(0.4);
}

function animation(image) {
	image.inputEnabled = false;
	diem++;
	//scoretext.text = diem;
	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ y: [100, 400], x: [200, 50] }, 2000, Phaser.Easing.Quadratic.InOut, true);

}

function animation1(image2) {
	image2.inputEnabled = false;
	diem++;
	//scoretext.text = diem;
	image2.animations.add('teeter');
	image2.animations.play('teeter', 5, true);
	game.add.tween(image2).to({ y: [100, 420], x: [200, 70] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animation2(image4) {
	image4.inputEnabled = false;
	diem++;
	//scoretext.text = diem;
	image4.animations.add('teeter');
	image4.animations.play('teeter', 5, true);
	game.add.tween(image4).to({ y: [100, 440], x: [200, 90] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animation3(image1) {
	image1.animations.add('teeter');
	image1.animations.play('teeter', 5, true);
	game.add.tween(image1).to({ y: [250, 450], x: [350, 350] }, 1000, Phaser.Easing.Quadratic.InOut, true);

}

function animation4(image3) {
	image3.animations.add('teeter');
	image3.animations.play('teeter', 5, true);
	game.add.tween(image3).to({ y: [250, 450], x: [750, 750] }, 1000, Phaser.Easing.Quadratic.InOut, true);
}

function process1() {
	if (diem >= 3) {
		music = game.add.audio('music3');
		music.play();
		game.time.events.add(Phaser.Timer.SECOND * 3, Delay1, this);
	}
	else {
		false;
	}
}

function Delay1() {
	var winx = window.location = "/api/unit1_game2";
}

function update() {

}

