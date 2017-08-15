var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var Basket;
var text;
var Honey = new Array(5);
var sound = new Array(4);
var scoreText;
var score = 0;
var style;
var tween = new Array(5);
var count = 0;
var button;
var button1;
var strText;
var firstRunLandscape;


function preload() {
	// load background
	game.load.image('bg', BACKGROUND_IMAGE);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.setScreenSize(true);
	//load Basket
	game.load.image('BearBasket', BASKET_IMAGE);
	// load Honey 
	game.load.image('Honey1', HONEY_1);
	// load sound

	game.load.audio('start', SOUND_START);
	game.load.audio('score', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('thua', SOUND_THUA);
	game.load.audio('thieu', SOUND_THIEU);
	game.load.audio('music_bg', SOUND_BG);
	game.load.audio('finish', SOUND_FINISH);
	// load button
	game.load.image('again', BUTTON_AGAIN);
	game.load.image('btnCheck', BUTTON_CHECK);
	game.load.image('next', BUTTON_NEXT);
	//game.load.image('btnCheck','assets/images/button.png');
	// process responsive

}

// Fuction called after 'preload' to setup the game  
function create() {

	// create background

	background = game.add.sprite(BACKGROUND_POSX, BACKGROUND_POSY, 'bg');

	// Set score Text
	style = { font: "64px r0c0iLinotte", fill: "#f00" };

	// create sprite Honeys
	Honey[0] = game.add.sprite(HONEY_1_POSX, HONEY_1_POSY, 'Honey1');
	Honey[0].scale.setTo(0.8);
	//Honey[0].anchor.set(0.5);

	Honey[1] = game.add.sprite(HONEY_2_POSX, HONEY_2_POSY, 'Honey1');
	Honey[1].scale.setTo(0.8);

	Honey[2] = game.add.sprite(HONEY_3_POSX, HONEY_3_POSY, 'Honey1');
	Honey[2].scale.setTo(0.8);

	Honey[3] = game.add.sprite(HONEY_4_POSX, HONEY_4_POSY, 'Honey1');
	Honey[3].scale.setTo(0.8);

	Honey[4] = game.add.sprite(HONEY_5_POSX, HONEY_5_POSY, 'Honey1');
	Honey[4].scale.setTo(0.8);

	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('score');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('thua');
	sound[5] = game.add.audio('thieu');
	sound[6] = game.add.audio('finish');

	// add tween
	tween[0] = game.add.tween(Honey[0]);
	tween[1] = game.add.tween(Honey[1]);
	tween[2] = game.add.tween(Honey[2]);
	tween[3] = game.add.tween(Honey[3]);
	tween[4] = game.add.tween(Honey[4]);

	// process click

	Honey[0].inputEnabled = true;
	Honey[0].events.onInputDown.add(passBasket1, this);

	Honey[1].inputEnabled = true;
	Honey[1].events.onInputDown.add(passBasket2, this);

	Honey[2].inputEnabled = true;
	Honey[2].events.onInputDown.add(passBasket3, this);

	Honey[3].inputEnabled = true;
	Honey[3].events.onInputDown.add(passBasket4, this);

	Honey[4].inputEnabled = true;
	Honey[4].events.onInputDown.add(passBasket5, this);

	//load button
	button = game.add.button(650, 650, 'btnCheck', Process, this, 2, 1, 0);
	button.scale.setTo(0.8);

	// create basket

	Basket = game.add.sprite(10, 200, 'BearBasket');
	Basket.scale.setTo(1);
	//	game.input.setInteractiveCandidateHandler(handler, this);
	// finish game 

	music_bg = game.add.audio('music_bg');
	music_bg.play();
	music_bg.volume = 0.1;
	setTimeout(function () {
		music_bg.volume = 1;
	}, 9000);


}
function handler(pointer, candidates, favorite) {

	if (candidates.length > 1) {

		for (var i = 0; i < candidates.length; i++) {
			if (candidates[i].sprite.key === 'BearBasket') {
				return candidates[i];
			}
		}

		return favorite;
	}
	else {
		return favorite;
	}

}

//qua game mới
function openlink_level2_game2() {
	var winx = window.location = "api";
}

//vị trí các lọ mật	
function passBasket1() {
	sound[2].play();
	Honey[0].scale.setTo(0.4);
	Honey[0].angle = 330;  //góc quay
	game.add.tween(Honey[0]).to({ x: [438.8, 196.1], y: [349.9, 451.9] }, 1500, Phaser.Easing.Quadratic.InOut, true);
	score++;


}

function passBasket2() {
	sound[2].play();
	Honey[1].scale.setTo(0.4);
	Honey[1].angle = 330;
	game.add.tween(Honey[1]).to({ x: [472.4, 220.36], y: [357, 451.9] }, 1500, Phaser.Easing.Quadratic.InOut, true);
	//Honey[1].anchor.setTo(1);// vị trí trung tâm
	score++;

}

function passBasket3() {
	sound[2].play();
	Honey[2].scale.setTo(0.4);
	Honey[2].angle = 335;
	game.add.tween(Honey[2]).to({ x: [572.5, 244.88], y: [357, 451.9] }, 1500, Phaser.Easing.Quadratic.InOut, true);
	//Honey[2].anchor.setTo(1);
	score++;
}

function passBasket4() {

	sound[2].play();
	Honey[3].scale.setTo(0.4);
	Honey[3].angle = 337;
	game.add.tween(Honey[3]).to({ x: [550.6, 269.14], y: [357, 451.9] }, 1500, Phaser.Easing.Quadratic.InOut, true);
	//Honey[3].anchor.setTo(1);
	score++;
}

function passBasket5() {
	sound[2].play();
	Honey[4].scale.setTo(0.4);
	Honey[4].angle = 340;
	game.add.tween(Honey[4]).to({ x: [600.6, 293.4], y: [357, 451.9] }, 1500, Phaser.Easing.Quadratic.InOut, true);
	//Honey[4].anchor.setTo(1);
	score++;
}
function Process() {
	button.visible = false;
	if (score == 3) {
		button = game.add.button(670, 665, 'next', Next, this, 2, 1, 0);
		button.scale.setTo(1.5);
		sound[1].play();
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		Honey[0].inputEnabled = false;
		Honey[1].inputEnabled = false;
		Honey[2].inputEnabled = false;
		Honey[3].inputEnabled = false;
		Honey[4].inputEnabled = false;


	} else
		if (score < 3) {
			score = 0;
			sound[5].play();
			music_bg.volume = 0.1;
			setTimeout(function () {
				music_bg.volume = 1;
			}, 3000);
			Honey[0].inputEnabled = false;
			Honey[1].inputEnabled = false;
			Honey[2].inputEnabled = false;
			Honey[3].inputEnabled = false;
			Honey[4].inputEnabled = false;
			game.time.events.add(Phaser.Timer.SECOND * 6, Process1, this);
			Button();
		} else {
			music_bg.volume = 0.1;
			setTimeout(function () {
				music_bg.volume = 1;
			}, 3000);
			sound[4].play();
			score = 0;
			Honey[0].inputEnabled = false;
			Honey[1].inputEnabled = false;
			Honey[2].inputEnabled = false;
			Honey[3].inputEnabled = false;
			Honey[4].inputEnabled = false;
			game.time.events.add(Phaser.Timer.SECOND * 6, Process1, this);
			Button();
		}

}

function Delay1() {
	setTimeout(function () {
		sound[3].play();
		setTimeout(function () {
			sound[6].play();
			music_bg.volume = 0.1;
		}, 3000);
	}, 1000);
	setTimeout(function () {
		Next();
	}, 10000);
}

function Next() {
	winx = window.location = "/api";
}


function Button() {
	button1 = game.add.button(670, 665, 'again', Process1, this);
	button1.scale.setTo(1.5);
}

function Process1() {
	game.state.start(game.state.current);
}

var loop = true;
// Function called 60 times per second
function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	loop ? setTimeout(function () {
		button.scale.setTo(0.7);
		loop = false;
	}, 1000) : setTimeout(function () {
		button.scale.setTo(0.8);
		loop = true;
	}, 1000)

}
function render() {
	// game.debug.spriteInfo(Honey[5], 32, 32);
	// game.debug.spriteInfo(Honey[1], 432, 32);
}