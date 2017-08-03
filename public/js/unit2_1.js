var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var basket;
var flower = new Array(5);
var sound = new Array(4);
var tween = new Array(5);
var score = 0;
var button, button1;
var grass;
var window_next;
//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background

	game.load.image('bg', BACKGROUND_IMAGE);

	//load basket

	game.load.image('bk', BASKET_IMAGE);

	// load flower 

	game.load.image('flower1', FLOWER_1);
	game.load.image('flower2', FLOWER_2);
	/*game.load.image('flower3',FLOWER_3);*/

	// load sound

	game.load.audio('start', SOUND_START);
	game.load.audio('score', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	// load button

	/*game.load.image('btn','assets/images/nextbutton.png');*/
	game.load.image('again', BUTTON_AGAIN);
	game.load.image('btn', BUTTON_IMAGE);
	game.load.image('next', BUTTON_NEXT);

}


// Fuction called after 'preload' to setup the game  
function create() {

	// create background

	//background = game.add.sprite(BACKGROUND_POSX,BACKGROUND_POSY,'bg');
	background = game.add.sprite(0, 0, 'bg');
	/*background.anchor.setTo(0.01);*/
	/*background.scale.setTo(2);*/

	// create sprite flowers
	flower[0] = game.add.sprite(FLOWER_1_POSX, FLOWER_1_POSY, 'flower1');
	flower[0].scale.setTo(0.5, 0.8);

	flower[1] = game.add.sprite(FLOWER_2_POSX, FLOWER_2_POSY, 'flower2');
	flower[1].scale.setTo(0.5, 0.8);

	flower[2] = game.add.sprite(FLOWER_3_POSX, FLOWER_3_POSY, 'flower2');
	flower[2].scale.setTo(0.5, 0.8);

	flower[3] = game.add.sprite(FLOWER_4_POSX, FLOWER_4_POSY, 'flower1');
	flower[3].scale.setTo(0.5, 0.8);

	flower[4] = game.add.sprite(FLOWER_5_POSX, FLOWER_5_POSY, 'flower2');
	flower[4].scale.setTo(0.5, 0.8);

	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('score');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	// add tween
	tween[0] = game.add.tween(flower[0]);
	tween[1] = game.add.tween(flower[1]);
	tween[2] = game.add.tween(flower[2]);
	tween[3] = game.add.tween(flower[3]);
	tween[4] = game.add.tween(flower[4]);

	// process click
	flower[0].inputEnabled = true;
	flower[0].events.onInputDown.add(listenerWrong1, this);

	flower[1].inputEnabled = true;
	flower[1].events.onInputDown.add(listenerRight1, this);


	flower[2].inputEnabled = true;
	flower[2].events.onInputDown.add(listenerRight2, this);


	flower[3].inputEnabled = true;
	flower[3].events.onInputDown.add(listenerWrong2, this);


	flower[4].inputEnabled = true;
	flower[4].events.onInputDown.add(listenerRight3, this);

	// create basket

	basket = game.add.sprite(8, 350, 'bk');
	basket.scale.setTo(0.4);
	// add button
	button = game.add.button(900, 600, 'btn', Process, this);
	button.scale.setTo(0.4);

	/*button = game.add.button(500, 570, 'btn',process,this, 2, 1, 0);
button.scale.setTo(0.4);*/
	/*process();*/

}
/*function openlink_level2_game2(){
	window.location="http://112.78.11.147/bcm/level2/game2";
}*/

function listenerRight1() {

	sound[1].play();
	flower[1].scale.setTo(0.4);
	tween[1].to({ y: 340, x: 70 }, 1500, Phaser.Easing.Quadratic.InOut, true);
	skew1();
	score++;
	sound[3].play();
	flower[1].inputEnabled = false;
}
function listenerRight2() {

	sound[1].play();
	flower[2].scale.setTo(0.4);
	tween[2].to({ y: 350, x: 150 }, 1500, Phaser.Easing.Quadratic.InOut, true);
	skew2();
	score++;
	sound[3].play();
	flower[2].inputEnabled = false;
}
function listenerRight3() {

	sound[1].play();
	flower[4].scale.setTo(0.4);
	tween[4].to({ y: 380, x: 120 }, 1500, Phaser.Easing.Quadratic.InOut, true);
	skew3();
	score++;
	sound[3].play();
	flower[4].inputEnabled = false;

}
function skew1() {

	flower[1].anchor.setTo(0);
	flower[1].angle = 30;
}
function skew2() {

	flower[2].anchor.setTo(0);
	flower[2].angle = 35;
}

function skew3() {

	flower[4].anchor.setTo(0);
	flower[4].angle = 40;
}

function listenerWrong1() {

	sound[2].play();
	var count = 0;
	/*flower[0].anchor.x=-0.1;
	flower[0].anchor.y=-0.00005;*/
	while (count < 10) {
		if (count % 2 == 0) {
			tween[0].to({ angle: 2 }, 50).start();
		} else {
			tween[0].to({ angle: -2 }, 50).start();
		}
		count++;
	}
	tween[0].to({ angle: 0 }, 50).start();
	flower[0].inputEnabled = false;

}
function listenerWrong2() {

	sound[2].play();
	var count = 0;
	while (count < 10) {
		if (count % 2 == 0) {
			tween[3].to({ angle: 1 }, 50).start();
		} else {
			tween[3].to({ angle: -1 }, 50).start()
		}
		count++;
	}
	tween[3].to({ angle: 0 }, 50).start();
	flower[3].inputEnabled = false;

}
function Process() {

	button.visible = false;
	if (score == 3) {
		button = game.add.button(900, 600, 'next', Next, this, 2, 1, 0);
		button.scale.setTo(0.4);
		sound[1].play();
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay, this);
		/*var String_1 ='Hoan hô, bạn giỏi lắm'
		var info = game.add.text(300, 40,String_1,style);*/
	} else {
		/*var String_2 ='Bạn ơi, thiếu rùi \n mình làm lại nhé'
		var info = game.add.text(300, 40,String_2,style);*/
		sound[2].play();
		Button();
	}
}
function Next() {

	window_next = window.location = "api/unit1_game2";

}
function Delay() {

	game.add.tween(sound[3].play()).to(2000, Phaser.Easing.Linear.None, true);
}
function Button() {

	flower[0].inputEnabled = false;
	flower[1].inputEnabled = false;
	flower[2].inputEnabled = false;
	flower[3].inputEnabled = false;
	flower[4].inputEnabled = false;
	button1 = game.add.button(900, 600, 'again', ProcessAgain, this);
	button1.scale.setTo(0.4);
}
function ProcessAgain() {
	game.state.start(game.state.current);
	//game.state.restart();
	//game.state.start(game.state.current);
	//var winx = window.location="index.html";
}
// Function called 60 times per second
function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.pageAlignHorizontally = true;
	//this.scale.pageAlignVertically = true;
	//this.scale.setScreenSize( true );
}
function render() {
	/*game.debug.inputInfo(32, 32);*/
}