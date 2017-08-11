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
	game.load.spritesheet('Dragonfly_6', DRAGONFLY_6, 329, 292);
	game.load.spritesheet('Dragonfly_8', DRAGONFLY_8, 329, 292);
	game.load.spritesheet('Dragonfly_2', DRAGONFLY_2, 329, 292);
	game.load.spritesheet('Dragonfly_3', DRAGONFLY_3, 329, 292);

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
	background = game.add.sprite(BACKGROUND_POSX, BACKGROUND_POSY, 'bg');

	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	Dragonfly_6 = game.add.sprite(DRAGONFLY_6_POSX, DRAGONFLY_6_POSY, 'Dragonfly_6');
	Dragonfly_6.scale.setTo(0.8);
	Dragonfly_8 = game.add.sprite(DRAGONFLY_8_POSX, DRAGONFLY_8_POSY, 'Dragonfly_8');
	Dragonfly_8.scale.setTo(0.8);
	Dragonfly_2 = game.add.sprite(DRAGONFLY_2_POSX, DRAGONFLY_2_POSY, 'Dragonfly_2');
	Dragonfly_2.scale.setTo(0.8);
	Dragonfly_3 = game.add.sprite(DRAGONFLY_3_POSX, DRAGONFLY_3_POSY, 'Dragonfly_3');
	Dragonfly_3.scale.setTo(0.8);

	Dragonfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Dragonfly_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Dragonfly_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Dragonfly_8.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Dragonfly_2.animations.play('walk');
	Dragonfly_3.animations.play('walk');
	Dragonfly_6.animations.play('walk');
	Dragonfly_8.animations.play('walk');


	//create drag and drop Number		
	Dragonfly_6.inputEnabled = true;					//cho phep nhap						
	Dragonfly_6.input.enableDrag();                     //kich hoat keo tha
	Dragonfly_6.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Dragonfly_6.events.onDragStop.add(stopDrag_6);		// quy định các luật dừng
	Dragonfly_8.inputEnabled = true;
	Dragonfly_8.input.enableDrag();
	Dragonfly_8.events.onInputDown.add(score_s, this);
	Dragonfly_8.events.onDragStop.add(stopDrag_8);
	Dragonfly_2.inputEnabled = true;
	Dragonfly_2.input.enableDrag();
	Dragonfly_2.events.onInputDown.add(score_s, this);
	Dragonfly_2.events.onDragStop.add(stopDrag_2);
	Dragonfly_3.inputEnabled = true;
	Dragonfly_3.input.enableDrag();
	Dragonfly_3.events.onInputDown.add(score_s, this);
	Dragonfly_3.events.onDragStop.add(stopDrag_3);


}



function score_s() {
	sound[4].play();
}

//drap and drop Number 1
function stopDrag_6() {
	Dragonfly_6.scale.setTo(0.7);
	if (Dragonfly_6.y > 415 && Dragonfly_6.y < 540 && Dragonfly_6.x > 300) {
		Dragonfly_6.inputEnabled = false;
		Dragonfly_6.x = '438.9';
		Dragonfly_6.y = '487';
		Score++;
		sound[1].play();
	} else {
		Dragonfly_6.x = DRAGONFLY_6_POSX;
		Dragonfly_6.y = DRAGONFLY_6_POSY;
		Dragonfly_6.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Number3 vị trí 2
function stopDrag_2() {
	Dragonfly_2.scale.setTo(0.7);
	if (Dragonfly_2.y > 170 && Dragonfly_2.y < 330 && Dragonfly_2.x < 478 && Dragonfly_2.x > 373) {
		Dragonfly_2.inputEnabled = false;
		Dragonfly_2.x = '442';
		Dragonfly_2.y = '284';
		Score++;
		sound[1].play();
	} else {

		Dragonfly_2.x = DRAGONFLY_2_POSX;
		Dragonfly_2.y = DRAGONFLY_2_POSY;
		Dragonfly_2.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop NUMBER5-4
function stopDrag_3() {
	Dragonfly_3.scale.setTo(0.7);
	if (Dragonfly_3.y > 170 && Dragonfly_3.y < 330 && Dragonfly_3.x < 778 && Dragonfly_3.x > 556) {
		Dragonfly_3.inputEnabled = false;
		Dragonfly_3.x = '676';
		Dragonfly_3.y = '280';
		Score++;
		sound[1].play();
	} else {

		Dragonfly_3.x = DRAGONFLY_3_POSX;
		Dragonfly_3.y = DRAGONFLY_3_POSY;
		Dragonfly_3.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

//drag and drop NUMBER8-2

function stopDrag_8() {
	Dragonfly_8.scale.setTo(0.7);
	if (Dragonfly_8.y > 415 && Dragonfly_8.y < 540 && Dragonfly_8.x > 824 && Dragonfly_8.x < 1000) {
		Dragonfly_8.inputEnabled = false;
		Dragonfly_8.x = '946';
		Dragonfly_8.y = '474';
		Score++;
		sound[1].play();
	} else {

		Dragonfly_8.x = DRAGONFLY_8_POSX;
		Dragonfly_8.y = DRAGONFLY_8_POSY;
		Dragonfly_8.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

function Process() {
	if (Score == 4) {
		sound[3].play();
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);
	}
}

function Process2() {
	game.add.tween(winx = window.location = "/api").to(
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Dragonfly_6,32,32);
	//game.debug.spriteInfo(Dragonfly_3, 32, 32);
}