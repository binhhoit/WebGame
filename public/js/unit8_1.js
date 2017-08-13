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
	game.load.image('Number_1', NUMBER_1);
	game.load.image('Number_2', NUMBER_2);
	game.load.image('Number_3', NUMBER_3);
	game.load.image('Number_4', NUMBER_4);
	game.load.image('Number_5', NUMBER_5);
	game.load.image('Number_6', NUMBER_6);
	game.load.image('Number_7', NUMBER_7);
	game.load.image('Number_8', NUMBER_8);

	game.load.spritesheet('Butterfly', BUTTERFLY, 200, 177);
	game.load.spritesheet('Dragonfly', DRAGONFLY, 329, 292);
	game.load.spritesheet('Ladybug', LADYBUG, 250, 239);


	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.audio('music_bg', SOUND_BG);

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

	music_bg = game.add.audio('music_bg');
	music_bg.play();
	music_bg.volume = 0.1;
	setTimeout(function () {
		music_bg.volume = 1;
	}, 7000);

	Number_1 = game.add.sprite(NUMBER_1_POSX, NUMBER_1_POSY, 'Number_1');
	Number_2 = game.add.sprite(NUMBER_2_POSX, NUMBER_2_POSY, 'Number_2');
	Number_3 = game.add.sprite(NUMBER_3_POSX, NUMBER_3_POSY, 'Number_3');
	Number_4 = game.add.sprite(NUMBER_4_POSX, NUMBER_4_POSY, 'Number_4');
	Number_5 = game.add.sprite(NUMBER_5_POSX, NUMBER_5_POSY, 'Number_5');
	Number_6 = game.add.sprite(NUMBER_6_POSX, NUMBER_6_POSY, 'Number_6');
	Number_7 = game.add.sprite(NUMBER_7_POSX, NUMBER_7_POSY, 'Number_7');
	Number_8 = game.add.sprite(NUMBER_8_POSX, NUMBER_8_POSY, 'Number_8');

	Dragonfly_1 = game.add.sprite(DRAGONFLY_1_POSX, DRAGONFLY_1_POSY, 'Dragonfly');
	Dragonfly_1.scale.setTo(0.4);
	Dragonfly_2 = game.add.sprite(DRAGONFLY_2_POSX, DRAGONFLY_2_POSY, 'Dragonfly');
	Dragonfly_2.scale.setTo(0.4);
	Dragonfly_3 = game.add.sprite(DRAGONFLY_3_POSX, DRAGONFLY_3_POSY, 'Dragonfly');
	Dragonfly_3.scale.setTo(0.4);
	Dragonfly_4 = game.add.sprite(DRAGONFLY_4_POSX, DRAGONFLY_4_POSY, 'Dragonfly');
	Dragonfly_4.scale.setTo(0.4);
	Dragonfly_5 = game.add.sprite(DRAGONFLY_5_POSX, DRAGONFLY_5_POSY, 'Dragonfly');
	Dragonfly_5.scale.setTo(0.4);
	Dragonfly_6 = game.add.sprite(DRAGONFLY_6_POSX, DRAGONFLY_6_POSY, 'Dragonfly');
	Dragonfly_6.scale.setTo(0.4);
	Dragonfly_7 = game.add.sprite(DRAGONFLY_7_POSX, DRAGONFLY_7_POSY, 'Dragonfly');
	Dragonfly_7.scale.setTo(0.4);


	Dragonfly_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
	Dragonfly_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);

	Dragonfly_1.animations.play('walk');
	Dragonfly_2.animations.play('walk');
	Dragonfly_3.animations.play('walk');
	Dragonfly_4.animations.play('walk');
	Dragonfly_5.animations.play('walk');
	Dragonfly_6.animations.play('walk');
	Dragonfly_7.animations.play('walk');

	Butterfly_1 = game.add.sprite(BUTTERFLY_1_POSX, BUTTERFLY_1_POSY, 'Butterfly');
	Butterfly_1.scale.setTo(0.6);
	Butterfly_2 = game.add.sprite(BUTTERFLY_2_POSX, BUTTERFLY_2_POSY, 'Butterfly');
	Butterfly_2.scale.setTo(0.6);
	Butterfly_3 = game.add.sprite(BUTTERFLY_3_POSX, BUTTERFLY_3_POSY, 'Butterfly');
	Butterfly_3.scale.setTo(0.6);
	Butterfly_4 = game.add.sprite(BUTTERFLY_4_POSX, BUTTERFLY_4_POSY, 'Butterfly');
	Butterfly_4.scale.setTo(0.6);
	Butterfly_5 = game.add.sprite(BUTTERFLY_5_POSX, BUTTERFLY_5_POSY, 'Butterfly');
	Butterfly_5.scale.setTo(0.6);
	Butterfly_6 = game.add.sprite(BUTTERFLY_6_POSX, BUTTERFLY_6_POSY, 'Butterfly');
	Butterfly_6.scale.setTo(0.6);

	Butterfly_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Butterfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Butterfly_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Butterfly_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Butterfly_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Butterfly_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Butterfly_1.animations.play('walk');
	Butterfly_2.animations.play('walk');
	Butterfly_3.animations.play('walk');
	Butterfly_4.animations.play('walk');
	Butterfly_5.animations.play('walk');
	Butterfly_6.animations.play('walk');

	Ladybug_1 = game.add.sprite(LADYBUG_1_POSX, LADYBUG_1_POSY, 'Ladybug');
	Ladybug_1.scale.setTo(0.4);
	Ladybug_2 = game.add.sprite(LADYBUG_2_POSX, LADYBUG_2_POSY, 'Ladybug');
	Ladybug_2.scale.setTo(0.4);
	Ladybug_3 = game.add.sprite(LADYBUG_3_POSX, LADYBUG_3_POSY, 'Ladybug');
	Ladybug_3.scale.setTo(0.4);
	Ladybug_4 = game.add.sprite(LADYBUG_4_POSX, LADYBUG_4_POSY, 'Ladybug');
	Ladybug_4.scale.setTo(0.4);
	Ladybug_5 = game.add.sprite(LADYBUG_5_POSX, LADYBUG_5_POSY, 'Ladybug');
	Ladybug_5.scale.setTo(0.4);
	Ladybug_6 = game.add.sprite(LADYBUG_6_POSX, LADYBUG_6_POSY, 'Ladybug');
	Ladybug_6.scale.setTo(0.4);
	Ladybug_7 = game.add.sprite(LADYBUG_7_POSX, LADYBUG_7_POSY, 'Ladybug');
	Ladybug_7.scale.setTo(0.4);
	Ladybug_8 = game.add.sprite(LADYBUG_8_POSX, LADYBUG_8_POSY, 'Ladybug');
	Ladybug_8.scale.setTo(0.4);


	Ladybug_1.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_2.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_3.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_4.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_5.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_6.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_7.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	Ladybug_8.animations.add('walk', [0, 1, 2, 3, 4], 5, true);

	Ladybug_1.animations.play('walk');
	Ladybug_2.animations.play('walk');
	Ladybug_3.animations.play('walk');
	Ladybug_4.animations.play('walk');
	Ladybug_5.animations.play('walk');
	Ladybug_6.animations.play('walk');
	Ladybug_7.animations.play('walk');
	Ladybug_8.animations.play('walk');

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

function StopDrag_4() {
	Number_4.x = NUMBER_4_POSX;
	Number_4.y = NUMBER_4_POSY;
	score_f();
}
function StopDrag_5() {
	Number_5.x = NUMBER_5_POSX;
	Number_5.y = NUMBER_5_POSY;
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


//drag and drop Number6
function StopDrag_6() {
	if (Number_6.y > 574 && Number_6.x < 419 && Number_6.x > 300) {
		Number_6.inputEnabled = false;
		Number_6.x = '359.1';
		Number_6.y = '620.9';
		Score++;
		sound[1].play();
	} else {
		Number_6.x = NUMBER_6_POSX;
		Number_6.y = NUMBER_6_POSY;
		score_f();
	}
	Process();
}


//drag and drop Number7
function StopDrag_7() {
	if (Number_7.y > 574 && Number_7.x < 774 && Number_7.x > 660) {
		Number_7.inputEnabled = false;
		Number_7.x = '717.1';
		Number_7.y = '617.9';
		Score++;
		sound[1].play();
	} else {
		Number_7.x = NUMBER_7_POSX;
		Number_7.y = NUMBER_7_POSY;
		score_f();
	}
	Process();
}
//drag and drop NUMBER8
function StopDrag_8() {
	if (Number_8.y > 574 && Number_8.x < 1135 && Number_8.x > 1038) {
		Number_8.inputEnabled = false;
		Number_8.x = '1078.1';
		Number_8.y = '620.9';
		Score++;
		sound[1].play();
	} else {
		Number_8.x = NUMBER_8_POSX;
		Number_8.y = NUMBER_8_POSY;
		score_f();

	}
	Process();
}


function Process() {
	if (Score == 3) {
		sound[3].play();
		setTimeout(function () {
			Process2();
		}, 4000);
	}
}

function Process2() {
	setTimeout(function () {
		window.location = "unit8_game2";
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
	// game.debug.spriteInfo(Ladybug_1, 522, 32);
	// game.debug.spriteInfo(Butterfly_1, 922, 32);
}