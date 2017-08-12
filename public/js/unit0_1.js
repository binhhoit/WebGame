// Initialize Phaser, and creates full game

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var text;
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

	// load Number
	game.load.image('Number_0', NUMBER_0);
	game.load.image('Number_1', NUMBER_1);
	game.load.image('Number_2', NUMBER_2);
	game.load.image('Number_3', NUMBER_3);
	game.load.image('Number_4', NUMBER_4);
	game.load.image('Number_5', NUMBER_5);
	game.load.image('Number_6', NUMBER_6);
	game.load.image('Number_7', NUMBER_7);
	game.load.image('Number_8', NUMBER_8);
	game.load.image('Number_9', NUMBER_9);

	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);

}

// Fuction called after 'preload' to setup the game  
function create() {
	// create background
	background = game.add.image(BACKGROUND_POSX, BACKGROUND_POSY, 'bg');

	// Set Score Text
	style = { font: "64px r0c0iLinotte", fill: "#f00" };
	// create sprite Numbers


	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');


	Number_0 = game.add.sprite(NUMBER_0_POSX, NUMBER_0_POSY, 'Number_0');
	Number_1 = game.add.sprite(NUMBER_1_POSX, NUMBER_1_POSY, 'Number_1');
	Number_2 = game.add.sprite(NUMBER_2_POSX, NUMBER_2_POSY, 'Number_2');
	Number_3 = game.add.sprite(NUMBER_3_POSX, NUMBER_3_POSY, 'Number_3');
	Number_4 = game.add.sprite(NUMBER_4_POSX, NUMBER_4_POSY, 'Number_4');
	Number_5 = game.add.sprite(NUMBER_5_POSX, NUMBER_5_POSY, 'Number_5');
	Number_6 = game.add.sprite(NUMBER_6_POSX, NUMBER_6_POSY, 'Number_6');
	Number_7 = game.add.sprite(NUMBER_7_POSX, NUMBER_7_POSY, 'Number_7');
	Number_8 = game.add.sprite(NUMBER_8_POSX, NUMBER_8_POSY, 'Number_8');
	Number_9 = game.add.sprite(NUMBER_9_POSX, NUMBER_9_POSY, 'Number_9');

	//create drag and drop Number		
	Number_1.inputEnabled = true;					//cho phep nhap						
	Number_1.input.enableDrag();                     //kich hoat keo tha
	Number_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Number_1.events.onDragStop.add(StopDrag_1);		// quy định các luật dừng
	Number_2.inputEnabled = true;
	Number_2.input.enableDrag();
	Number_2.events.onInputDown.add(score_s, this);
	Number_2.events.onDragStop.add(StopDrag_2);
	Number_3.inputEnabled = true;
	Number_3.input.enableDrag();
	Number_3.events.onInputDown.add(score_s, this);
	Number_3.events.onDragStop.add(StopDrag_3);
	Number_4.inputEnabled = true;
	Number_4.input.enableDrag();
	Number_4.events.onInputDown.add(score_s, this);
	Number_4.events.onDragStop.add(StopDrag_4);
	Number_5.inputEnabled = true;
	Number_5.input.enableDrag();
	Number_5.events.onInputDown.add(score_s, this);
	Number_5.events.onDragStop.add(StopDrag_5);
	Number_6.inputEnabled = true;
	Number_6.input.enableDrag();
	Number_6.events.onInputDown.add(score_s, this);
	Number_6.events.onDragStop.add(StopDrag_6);
	Number_7.inputEnabled = true;
	Number_7.input.enableDrag();
	Number_7.events.onInputDown.add(score_s, this);
	Number_7.events.onDragStop.add(StopDrag_7);
	Number_8.inputEnabled = true;
	Number_8.input.enableDrag();
	Number_8.events.onInputDown.add(score_s, this);
	Number_8.events.onDragStop.add(StopDrag_8);
	Number_9.inputEnabled = true;
	Number_9.input.enableDrag();
	Number_9.events.onInputDown.add(score_s, this);
	Number_9.events.onDragStop.add(StopDrag_9);
	Number_0.inputEnabled = true;
	Number_0.input.enableDrag();
	Number_0.events.onInputDown.add(score_s, this);
	Number_0.events.onDragStop.add(StopDrag_0);
}

//function go back position old 
function StopDrag_1() {
	Number_1.x = NUMBER_1_POSX;
	Number_1.y = NUMBER_1_POSY;
	score_f();
}
function StopDrag_2() {
	Number_2.x = NUMBER_2_POSX;
	Number_2.y = NUMBER_2_POSY;
	score_f();
}
function StopDrag_3() {
	Number_3.x = NUMBER_3_POSX;
	Number_3.y = NUMBER_3_POSY;
	score_f();
}

function StopDrag_6() {
	Number_6.x = NUMBER_6_POSX;
	Number_6.y = NUMBER_6_POSY;
	score_f();
}

//drag and drop Number7
function StopDrag_7() {
	Number_7.x = NUMBER_7_POSX;
	Number_7.y = NUMBER_7_POSY;
	score_f();
}

function StopDrag_8() {
	Number_8.x = NUMBER_8_POSX;
	Number_8.y = NUMBER_8_POSY;
	score_f();
}


// sound  drop
function score_s() {
	sound[4].play();
}
//	sound faile
function score_f() {
	sound[2].play();
}

function StopDrag_4() {
	if (Number_4.y < 558 && Number_4.y > 367 && Number_4.x < 323 && Number_4.x > 44) {
		Number_4.inputEnabled = false;
		Number_4.x = '186';
		Number_4.y = '462';
		Score++;
		sound[1].play();
	} else {
		Number_4.x = NUMBER_4_POSX;
		Number_4.y = NUMBER_4_POSY;
		score_f();
	}
	Process();
}

function StopDrag_0() {
	if (Number_0.y < 558 && Number_0.y > 367 && Number_0.x < 700 && Number_0.x > 417) {
		Number_0.inputEnabled = false;
		Number_0.x = '574';
		Number_0.y = '462';
		Score++;
		sound[1].play();
	} else {
		Number_0.x = NUMBER_0_POSX;
		Number_0.y = NUMBER_0_POSY;
		score_f();

	}
	Process();
}

function StopDrag_5() {
	if (Number_5.y < 266 && Number_5.y > 66 && Number_5.x < 354 && Number_5.x > 78) {
		Number_5.inputEnabled = false;
		Number_5.x = '217';
		Number_5.y = '184';
		Score++;
		sound[1].play();
	} else {
		Number_5.x = NUMBER_5_POSX;
		Number_5.y = NUMBER_5_POSY;
		score_f();

	}
	Process();
}
function StopDrag_9() {
	if (Number_5.y < 266 && Number_5.y > 66 && Number_9.x < 716 && Number_9.x > 441) {
		Number_9.inputEnabled = false;
		Number_9.x = '584';
		Number_9.y = '184';
		Score++;
		sound[1].play();
	} else {
		Number_9.x = NUMBER_9_POSX;
		Number_9.y = NUMBER_9_POSY;
		score_f();

	}
	Process();
}


function Process() {
	if (Score == 4) {
		sound[3].play();
		setTimeout(function () {
			Process2();
		}, 4000);
	}
}

function Process2() {
	setTimeout(function () {
		window.location = "/api";
	}, 2000);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Number_1, 32, 32);

}