var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var basket;
var text;
var Frog_1, Frog_2, Frog_3, Frog_4;
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
	game.load.spritesheet('Frog_1', FROG_1, 140, 236, 8);
	game.load.spritesheet('Frog_2', FROG_2, 140, 236, 8);
	game.load.spritesheet('Frog_3', FROG_3, 140, 236, 8);
	game.load.spritesheet('Frog_4', FROG_4, 140, 236, 8);
	game.load.spritesheet('Frog_5', FROG_5, 140, 236, 8);
	game.load.spritesheet('Frog_6', FROG_6, 140, 236, 8);
	game.load.spritesheet('Frog_7', FROG_7, 140, 236, 8);

	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	//game.load.audio('end',SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	// load button
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

	Frog_1 = game.add.sprite(FROG_1_POSX, FROG_1_POSY, 'Frog_1');
	Frog_1.scale.setTo(0.9);
	Frog_2 = game.add.sprite(FROG_2_POSX, FROG_2_POSY, 'Frog_2');
	Frog_2.scale.setTo(0.9);
	Frog_3 = game.add.sprite(FROG_3_POSX, FROG_3_POSY, 'Frog_3');
	Frog_3.scale.setTo(0.9);
	Frog_4 = game.add.sprite(FROG_4_POSX, FROG_4_POSY, 'Frog_4');
	Frog_4.scale.setTo(0.9);
	Frog_5 = game.add.sprite(FROG_5_POSX, FROG_5_POSY, 'Frog_5');
	Frog_5.scale.setTo(0.9);
	Frog_6 = game.add.sprite(FROG_6_POSX, FROG_6_POSY, 'Frog_6');
	Frog_6.scale.setTo(0.9);
	Frog_7 = game.add.sprite(FROG_7_POSX, FROG_7_POSY, 'Frog_7');
	Frog_7.scale.setTo(0.9);



	Frog_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Frog_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Frog_1.animations.play('walk');
	Frog_2.animations.play('walk');
	Frog_3.animations.play('walk');
	Frog_4.animations.play('walk');
	Frog_5.animations.play('walk');
	Frog_6.animations.play('walk');
	Frog_7.animations.play('walk');

	Frog_1.inputEnabled = true;					//cho phep nhap						
	Frog_1.input.enableDrag();                     //kich hoat keo tha
	Frog_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Frog_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
	Frog_2.inputEnabled = true;
	Frog_2.input.enableDrag();
	Frog_2.events.onInputDown.add(score_s, this);
	Frog_2.events.onDragStop.add(stopDrag_2);
	Frog_3.inputEnabled = true;
	Frog_3.input.enableDrag();
	Frog_3.events.onInputDown.add(score_s, this);
	Frog_3.events.onDragStop.add(stopDrag_3);
	Frog_4.inputEnabled = true;
	Frog_4.input.enableDrag();
	Frog_4.events.onInputDown.add(score_s, this);
	Frog_4.events.onDragStop.add(stopDrag_4);
	Frog_5.inputEnabled = true;
	Frog_5.input.enableDrag();
	Frog_5.events.onInputDown.add(score_s, this);
	Frog_5.events.onDragStop.add(stopDrag_5);
	Frog_6.inputEnabled = true;
	Frog_6.input.enableDrag();
	Frog_6.events.onInputDown.add(score_s, this);
	Frog_6.events.onDragStop.add(stopDrag_6);
	Frog_7.inputEnabled = true;
	Frog_7.input.enableDrag();
	Frog_7.events.onInputDown.add(score_s, this);
	Frog_7.events.onDragStop.add(stopDrag_7);

}

function score_s() {
	sound[4].play();
}

//drap and drop Basket 1
function stopDrag_1() {
	Frog_1.scale.setTo(0.7);
	if (Frog_1.y > 264.8 && Frog_1.y < 364.7 && Frog_1.x > -57.8 && Frog_1.x < 200) {
		Frog_1.inputEnabled = false;
		Frog_1.x = '84';
		Frog_1.y = '346';
		Score++;
		sound[1].play();
	} else {
		Frog_1.x = FROG_1_POSX;
		Frog_1.y = FROG_1_POSY;
		Frog_1.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket2
function stopDrag_2() {
	Frog_2.scale.setTo(0.7);
	if (Frog_2.y > 130 && Frog_2.y < 223 && Frog_2.x > 786 && Frog_2.x < 1009) {
		Frog_2.inputEnabled = false;
		Frog_2.x = '910';
		Frog_2.y = '204';
		Score++;
		sound[1].play();
	} else {

		Frog_2.x = FROG_2_POSX;
		Frog_2.y = FROG_2_POSY;
		Frog_2.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket3
function stopDrag_3() {
	Frog_3.scale.setTo(0.7);
	if (Frog_3.y > 447 && Frog_3.y < 606 && Frog_3.x > 325 && Frog_3.x < 681) {
		Frog_3.inputEnabled = false;
		Frog_3.x = '511';
		Frog_3.y = '562';
		Score++;
		sound[1].play();
	} else {
		Frog_3.x = FROG_3_POSX;
		Frog_3.y = FROG_3_POSY;
		Frog_3.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket4
function stopDrag_4() {
	Frog_4.scale.setTo(0.7);
	if (Frog_4.y > 116 && Frog_4.y < 229 && Frog_4.x > 57.8 && Frog_4.x < 172) {
		Frog_4.inputEnabled = false;
		Frog_4.x = '46.7';
		Frog_4.y = '197.5';
		Score++;
		sound[1].play();
	} else {
		Frog_4.x = FROG_4_POSX;
		Frog_4.y = FROG_4_POSY;
		Frog_4.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}

function stopDrag_5() {
	Frog_5.scale.setTo(0.7);
	if (Frog_5.y > 355 && Frog_5.y < 448 && Frog_5.x > 840 && Frog_5.x < 1095) {
		Frog_5.inputEnabled = false;
		Frog_5.x = '988.6';
		Frog_5.y = '433.1';
		Score++;
		sound[1].play();
	} else {
		Frog_5.x = FROG_5_POSX;
		Frog_5.y = FROG_5_POSY;
		Frog_5.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}

function stopDrag_6() {
	Frog_6.scale.setTo(0.7);
	if (Frog_6.y > 86 && Frog_6.y < 189 && Frog_6.x > 252 && Frog_6.x < 500) {
		Frog_6.inputEnabled = false;
		Frog_6.x = '399.9';
		Frog_6.y = '170.9';
		Score++;
		sound[1].play();
	} else {
		Frog_6.x = FROG_6_POSX;
		Frog_6.y = FROG_6_POSY;
		Frog_6.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}

function stopDrag_7() {
	Frog_7.scale.setTo(0.7);
	if (Frog_7.y > 223 && Frog_7.y < 342 && Frog_7.x > 508 && Frog_7.x < 742) {
		Frog_7.inputEnabled = false;
		Frog_7.x = '630.6';
		Frog_7.y = '313.7';
		Score++;
		sound[1].play();
	} else {
		Frog_7.x = FROG_7_POSX;
		Frog_7.y = FROG_7_POSY;
		Frog_7.scale.setTo(0.9);
		sound[2].play();
	}
	Process();
}

function Process() {
	if (Score == 7) {
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		button = game.add.button(1200, 650, 'next', Process2, this, 2, 1, 0);
		button.scale.setTo(1.2);
		setTimeout(function () {
			Process2();
		}, 2000);
	}
}

function Delay1() {
	game.add.tween(sound[3].play()).to(2000, Phaser.Easing.Linear.None, true);
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
	//game.debug.spriteInfo(Frog_1, 32, 32);
}