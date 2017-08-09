// Initialize Phaser, and creates full game

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var Bird;
var text;
var Bird_1, Bird_2, Bird_3, Bird_4;
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

	// load Bird
	game.load.spritesheet('Bird_1', BIRD_1, 300, 239, 8);
	game.load.spritesheet('Bird_2', BIRD_2, 300, 239, 8);
	game.load.spritesheet('Bird_3', BIRD_3, 300, 239, 8);
	game.load.spritesheet('Bird_4', BIRD_4, 300, 239, 8);

	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	//game.load.audio('end',SOUND_END);
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
	// create sprite Birds


	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	// cread bird

	Bird_1 = game.add.sprite(BIRD_1_POSX, BIRD_1_POSY, 'Bird_1');
	Bird_2 = game.add.sprite(BIRD_2_POSX, BIRD_2_POSY, 'Bird_2');
	Bird_3 = game.add.sprite(BIRD_3_POSX, BIRD_3_POSY, 'Bird_3');
	Bird_4 = game.add.sprite(BIRD_4_POSX, BIRD_4_POSY, 'Bird_4');

	Bird_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Bird_1.animations.play('walk');
	Bird_2.animations.play('walk');
	Bird_3.animations.play('walk');
	Bird_4.animations.play('walk');

	//create drag and drop Bird		
	Bird_1.inputEnabled = true;					//cho phep nhap						
	Bird_1.input.enableDrag();                     //kich hoat keo tha
	Bird_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Bird_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
	Bird_2.inputEnabled = true;
	Bird_2.input.enableDrag();
	Bird_2.events.onInputDown.add(score_s, this);
	Bird_2.events.onDragStop.add(stopDrag_2);
	Bird_3.inputEnabled = true;
	Bird_3.input.enableDrag();
	Bird_3.events.onInputDown.add(score_s, this);
	Bird_3.events.onDragStop.add(stopDrag_3);
	Bird_4.inputEnabled = true;
	Bird_4.input.enableDrag();
	Bird_4.events.onInputDown.add(score_s, this);
	Bird_4.events.onDragStop.add(stopDrag_4);
	Bird_4.scale.setTo(0.8);
}

function score_s() {
	sound[4].play();
}

//drap and drop Bird 3
function stopDrag_1() {
	Bird_1.scale.setTo(0.8);
	if (Bird_1.y > 320 && Bird_1.y < 443 && Bird_1.x < 1125 && Bird_1.x > 940) {
		Bird_1.inputEnabled = false;
		Bird_1.x = '1033.6';
		Bird_1.y = '363.9';
		Score++;
		sound[1].play();
	} else {
		Bird_1.x = BIRD_1_POSX;
		Bird_1.y = BIRD_1_POSY;
		Bird_1.scale.setTo(1);
		sound[2].play();
	}
	Process();
}
//drag and drop Bird6
function stopDrag_2() {
	Bird_2.scale.setTo(0.8);
	if (Bird_2.y < 277 && Bird_2.y > 130 && Bird_2.x < 143 && Bird_2.x > -40) {
		Bird_2.inputEnabled = false;
		Bird_2.x = '62.4';
		Bird_2.y = '187.4';
		Score++;
		sound[1].play();
	} else {

		Bird_2.x = BIRD_2_POSX;
		Bird_2.y = BIRD_2_POSY;
		Bird_2.scale.setTo(1);
		sound[2].play();
	}
	Process();
}
//drag and drop Bird5
function stopDrag_3() {
	Bird_3.scale.setTo(0.8);
	if (Bird_3.y < 154 && Bird_3.y > 26 && Bird_3.x < 1170 && Bird_3.x > 978) {
		Bird_3.inputEnabled = false;
		Bird_3.x = '1078.9';
		Bird_3.y = '70.2';
		Score++;
		sound[1].play();
	} else {
		Bird_3.x = BIRD_3_POSX;
		Bird_3.y = BIRD_3_POSY;
		Bird_3.scale.setTo(1);
		sound[2].play();
	}
	Process();
}
//drag and drop Bird4
function stopDrag_4() {
	Bird_4.scale.setTo(0.8);
	if (Bird_4.y < 324 && Bird_4.y > 165 && Bird_4.x < 406 && Bird_4.x > 238) {
		Bird_4.inputEnabled = false;
		Bird_4.x = '342.6';
		Bird_4.y = '248.6';
		Score++;
		sound[1].play();
	} else {
		Bird_4.x = BIRD_4_POSX;
		Bird_4.y = BIRD_4_POSY;
		Bird_4.scale.setTo(1);
		sound[2].play();
	}
	Process();
}


function Process() {
	if (Score == 4) {
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		button = game.add.button(1200, 650, 'next', Process2, this, 2, 1, 0);
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);
	}
}
function Delay1() {
	game.add.tween(sound[3].play()).to(2000, Phaser.Easing.Linear.None, true);
}
function Process2() {
	setTimeout(function () {
		window.location = "unit6_game2";
	}, 2000);

}



function update() {
	game.scale.forceOrientation(false, true);
	// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Bird_4,32,32);
}