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

	// load Duck
	game.load.spritesheet('Duck_1', DUCK_1, 140, 236, 8);
	game.load.spritesheet('Duck_2', DUCK_2, 140, 236, 8);
	game.load.spritesheet('Duck_3', DUCK_3, 140, 236, 8);
	game.load.spritesheet('Duck_4', DUCK_4, 140, 236, 8);
	game.load.spritesheet('Duck_5', DUCK_5, 140, 236, 8);
	game.load.spritesheet('Duck_6', DUCK_6, 140, 236, 8);
	game.load.spritesheet('Duck_7', DUCK_7, 140, 236, 8);


	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.image('next', BUTTON_NEXT);
	game.load.audio('music_bg', SOUND_BG);
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
	
	music_bg = game.add.audio('music_bg');
	music_bg.play();
	music_bg.volume = 0.1;
	setTimeout(function () {
		music_bg.volume = 1;
	}, 5000);



	Duck_1 = game.add.sprite(DUCK_1_POSX, DUCK_1_POSY, 'Duck_1');
	Duck_1.scale.setTo(0.8);
	Duck_2 = game.add.sprite(DUCK_2_POSX, DUCK_2_POSY, 'Duck_2');
	Duck_2.scale.setTo(0.8);
	Duck_3 = game.add.sprite(DUCK_3_POSX, DUCK_3_POSY, 'Duck_3');
	Duck_3.scale.setTo(0.8);
	Duck_4 = game.add.sprite(DUCK_4_POSX, DUCK_4_POSY, 'Duck_4');
	Duck_4.scale.setTo(0.8);
	Duck_5 = game.add.sprite(DUCK_5_POSX, DUCK_5_POSY, 'Duck_5');
	Duck_5.scale.setTo(0.8);
	Duck_6 = game.add.sprite(DUCK_6_POSX, DUCK_6_POSY, 'Duck_6');
	Duck_6.scale.setTo(0.8);
	Duck_7 = game.add.sprite(DUCK_7_POSX, DUCK_7_POSY, 'Duck_7');
	Duck_7.scale.setTo(0.8);

	Duck_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Duck_1.animations.play('walk');
	Duck_2.animations.play('walk');
	Duck_3.animations.play('walk');
	Duck_4.animations.play('walk');
	Duck_5.animations.play('walk');
	Duck_6.animations.play('walk');
	Duck_7.animations.play('walk');

	//create drag and drop Duck		
	Duck_1.inputEnabled = true;					//cho phep nhap						
	Duck_1.input.enableDrag();                     //kich hoat keo tha
	Duck_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Duck_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
	Duck_2.inputEnabled = true;
	Duck_2.input.enableDrag();
	Duck_2.events.onInputDown.add(score_s, this);
	Duck_2.events.onDragStop.add(stopDrag_2);
	Duck_3.inputEnabled = true;
	Duck_3.input.enableDrag();
	Duck_3.events.onInputDown.add(score_s, this);
	Duck_3.events.onDragStop.add(stopDrag_3);
	Duck_4.inputEnabled = true;
	Duck_4.input.enableDrag();
	Duck_4.events.onInputDown.add(score_s, this);
	Duck_4.events.onDragStop.add(stopDrag_4);
	Duck_5.inputEnabled = true;
	Duck_5.input.enableDrag();
	Duck_5.events.onInputDown.add(score_s, this);
	Duck_5.events.onDragStop.add(stopDrag_5);
	Duck_6.inputEnabled = true;
	Duck_6.input.enableDrag();
	Duck_6.events.onInputDown.add(score_s, this);
	Duck_6.events.onDragStop.add(stopDrag_6);
	Duck_7.inputEnabled = true;
	Duck_7.input.enableDrag();
	Duck_7.events.onInputDown.add(score_s, this);
	Duck_7.events.onDragStop.add(stopDrag_7);



}


// sound  drop
function score_s() {
	sound[4].play();
}
//	sound faile
function score_f() {
	sound[2].play();
}

var temp = 1;
//drap and drop Duck 1
function stopDrag_1() {
	Duck_1.scale.setTo(0.9);
	if (temp == 1 && Duck_1.y < 522 && Duck_1.y > 336 && Duck_1.x > 51) {
		Duck_1.inputEnabled = false;
		Duck_1.x = '220';
		Duck_1.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_1.x = DUCK_1_POSX;
		Duck_1.y = DUCK_1_POSY;
		Duck_1.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Duck2
function stopDrag_2() {
	Duck_2.scale.setTo(0.9);
	if (temp == 2 && Duck_2.y < 522 && Duck_2.y > 336 && Duck_2.x > 51) {
		Duck_2.inputEnabled = false;
		Duck_2.x = '360';
		Duck_2.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_2.x = DUCK_2_POSX;
		Duck_2.y = DUCK_2_POSY;
		Duck_2.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Duck3
function stopDrag_3() {
	Duck_3.scale.setTo(0.9);
	if (temp == 3 && Duck_3.y < 522 && Duck_3.y > 336 && Duck_3.x > 51) {
		Duck_3.inputEnabled = false;
		Duck_3.x = '500.9';
		Duck_3.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_3.x = DUCK_3_POSX;
		Duck_3.y = DUCK_3_POSY;
		Duck_3.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

function stopDrag_4() {
	Duck_4.scale.setTo(0.9);
	if (temp == 4 && Duck_4.y < 522 && Duck_4.y > 336 && Duck_4.x > 51) {
		Duck_4.inputEnabled = false;
		Duck_4.x = '630.9';
		Duck_4.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_4.x = DUCK_4_POSX;
		Duck_4.y = DUCK_4_POSY;
		Duck_4.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

function stopDrag_5() {
	Duck_5.scale.setTo(0.9);
	if (temp == 5 && Duck_5.y < 522 && Duck_5.y > 336 && Duck_5.x > 51) {
		Duck_5.inputEnabled = false;
		Duck_5.x = '780.9';
		Duck_5.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_5.x = DUCK_5_POSX;
		Duck_5.y = DUCK_5_POSY;
		Duck_5.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
function stopDrag_6() {
	Duck_6.scale.setTo(0.9);
	if (temp == 6 && Duck_6.y < 522 && Duck_6.y > 336 && Duck_6.x > 51) {
		Duck_6.inputEnabled = false;
		Duck_6.x = '920';
		Duck_6.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_6.x = DUCK_6_POSX;
		Duck_6.y = DUCK_6_POSY;
		Duck_6.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
function stopDrag_7() {
	Duck_7.scale.setTo(0.9);
	if (temp == 7 && Duck_7.y < 522 && Duck_7.y > 336 && Duck_7.x > 51) {
		Duck_7.inputEnabled = false;
		Duck_7.x = '1070';
		Duck_7.y = '421.9';
		Score++;
		temp++;
		sound[1].play();
	} else {
		Duck_7.x = DUCK_7_POSX;
		Duck_7.y = DUCK_7_POSY;
		Duck_7.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

function Process() {
	if (Score == 7) {
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		button = game.add.button(1200, 650, 'next', Process2, this, 2, 1, 0);
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);
	}
}
function Delay1() {
	setTimeout(function () {
		sound[3].play();
	}, 1000);
}
function Process2() {
	setTimeout(function () {
		window.location = "unit7_game2"
	}, 2000);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize(true);

}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Duck_4,32,32);
}