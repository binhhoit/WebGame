var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var basket;
var text;
var Chestnut_1, Chestnut_2, Chestnut_3, Chestnut_4, Chestnut_5, Chestnut_6, Chestnut_7, Chestnut_8, Chestnut_9, Chestnut_10;
var sound = new Array(4);
var ScoreText;
var Score = 0;
var style;
var tween = new Array(4);
var count = 0;
var button;
var button1;
var strText;

//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background
	game.load.image('bg', BACKGROUND_IMAGE);
	//game.scale.forceOrientation(false, true);

	// load Basket
	game.load.image('Chestnut_1', CHESTNUT_1);
	game.load.image('Chestnut_2', CHESTNUT_2);
	game.load.image('Chestnut_3', CHESTNUT_3);
	game.load.image('Chestnut_4', CHESTNUT_4);
	game.load.image('Chestnut_5', CHESTNUT_5);
	game.load.image('Chestnut_6', CHESTNUT_6);
	game.load.image('Chestnut_7', CHESTNUT_7);
	game.load.image('Chestnut_8', CHESTNUT_8);
	game.load.image('Chestnut_9', CHESTNUT_9);
	game.load.image('Chestnut_10', CHESTNUT_10);

	game.load.spritesheet('Squirrel', SQUIRREL, 189, 256);

	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	// load button
	//game.load.image('again',BUTTON_AGAIN);
	//game.load.image('btn',BUTTON_IMAGE);
	game.load.image('next', BUTTON_NEXT);
	// process responsive

}

// Fuction called after 'preload' to setup the game  
function create() {
	// create background
	background = game.add.sprite(BACKGROUND_POSX, BACKGROUND_POSY, 'bg');

	// Set Score Text
	style = { font: "64px r0c0iLinotte", fill: "#f00" };
	// create sprite Baskets


	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	Chestnut_1 = game.add.sprite(CHESTNUT_1_POSX, CHESTNUT_1_POSY, 'Chestnut_1');
	Chestnut_1.scale.setTo(0.8);
	Chestnut_2 = game.add.sprite(CHESTNUT_2_POSX, CHESTNUT_2_POSY, 'Chestnut_2');
	Chestnut_2.scale.setTo(0.8);
	Chestnut_3 = game.add.sprite(CHESTNUT_3_POSX, CHESTNUT_3_POSY, 'Chestnut_3');
	Chestnut_3.scale.setTo(0.8);
	Chestnut_4 = game.add.sprite(CHESTNUT_4_POSX, CHESTNUT_4_POSY, 'Chestnut_4');
	Chestnut_4.scale.setTo(0.8);
	Chestnut_5 = game.add.sprite(CHESTNUT_5_POSX, CHESTNUT_5_POSY, 'Chestnut_5');
	Chestnut_5.scale.setTo(0.8);
	Chestnut_6 = game.add.sprite(CHESTNUT_6_POSX, CHESTNUT_6_POSY, 'Chestnut_6');
	Chestnut_6.scale.setTo(0.8);
	Chestnut_7 = game.add.sprite(CHESTNUT_7_POSX, CHESTNUT_7_POSY, 'Chestnut_7');
	Chestnut_7.scale.setTo(0.8);
	Chestnut_8 = game.add.sprite(CHESTNUT_8_POSX, CHESTNUT_8_POSY, 'Chestnut_8');
	Chestnut_8.scale.setTo(0.8);
	Chestnut_9 = game.add.sprite(CHESTNUT_9_POSX, CHESTNUT_9_POSY, 'Chestnut_9');
	Chestnut_9.scale.setTo(0.8);
	Chestnut_10 = game.add.sprite(CHESTNUT_10_POSX, CHESTNUT_10_POSY, 'Chestnut_10');
	Chestnut_10.scale.setTo(0.8);

	Squirrel = game.add.sprite(1200, 500, 'Squirrel');
	Squirrel.scale.setTo(0.8);
	Squirrel.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Squirrel.animations.play('walk');

	//create drag and drop Basket		
	Chestnut_1.inputEnabled = true;					//cho phep nhap						
	Chestnut_1.input.enableDrag();                     //kich hoat keo tha
	Chestnut_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Chestnut_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng

	Chestnut_2.inputEnabled = true;
	Chestnut_2.input.enableDrag();
	Chestnut_2.events.onInputDown.add(score_s, this);
	Chestnut_2.events.onDragStop.add(stopDrag_2);

	Chestnut_3.inputEnabled = true;
	Chestnut_3.input.enableDrag();
	Chestnut_3.events.onInputDown.add(score_s, this);
	Chestnut_3.events.onDragStop.add(stopDrag_3);

	Chestnut_4.inputEnabled = true;
	Chestnut_4.input.enableDrag();
	Chestnut_4.events.onInputDown.add(score_s, this);
	Chestnut_4.events.onDragStop.add(stopDrag_4);

	Chestnut_5.inputEnabled = true;
	Chestnut_5.input.enableDrag();
	Chestnut_5.events.onInputDown.add(score_s, this);
	Chestnut_5.events.onDragStop.add(stopDrag_5);

	Chestnut_6.inputEnabled = true;
	Chestnut_6.input.enableDrag();
	Chestnut_6.events.onInputDown.add(score_s, this);
	Chestnut_6.events.onDragStop.add(stopDrag_6);

	Chestnut_7.inputEnabled = true;
	Chestnut_7.input.enableDrag();
	Chestnut_7.events.onInputDown.add(score_s, this);
	Chestnut_7.events.onDragStop.add(stopDrag_7);

	Chestnut_8.inputEnabled = true;
	Chestnut_8.input.enableDrag();
	Chestnut_8.events.onInputDown.add(score_s, this);
	Chestnut_8.events.onDragStop.add(stopDrag_8);

	Chestnut_9.inputEnabled = true;
	Chestnut_9.input.enableDrag();
	Chestnut_9.events.onInputDown.add(score_s, this);
	Chestnut_9.events.onDragStop.add(stopDrag_9);

	Chestnut_10.inputEnabled = true;
	Chestnut_10.input.enableDrag();
	Chestnut_10.events.onInputDown.add(score_s, this);
	Chestnut_10.events.onDragStop.add(stopDrag_10);


}

function score_s() {
	sound[4].play();
}


function stopDrag_1() {

}


function stopDrag_2() {
}


function stopDrag_3() {

}


function stopDrag_4() {

}


function stopDrag_5() {

}


function stopDrag_6() {
}


function stopDrag_7() {

}


function stopDrag_8() {

}


function stopDrag_9() {

}


function stopDrag_10() {

}



function Process() {
	if (Score == 10) {
		sound[3].play();
		setTimeout(function () {
			Process2();
		}, 4000);
	}
}

function Process2() {
	setTimeout(function () {
		window.location = "unit4_game2";
	}, 2000);
}

function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	game.debug.spriteInfo(Chestnut_4, 32, 32);
}