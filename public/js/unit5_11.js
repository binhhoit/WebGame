// Initialize Phaser, and creates full game

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var sound = new Array(4);
var Score = 0;
var tween = new Array(4);
var count = 0;
var button;
var button1;

var banana1, banana2, banana3, banana4, banana5;


//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background
	game.load.image('bg', BACKGROUND);
	//game.scale.forceOrientation(false, true);

	// load sound
	game.load.audio('start', SOUND_START);// âm thanh bài này ghi nhầm cần ghi âm lại
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.audio('music_bg', SOUND_BG);
	// load button
	game.load.image('again', BUTTON_AGAIN);
	game.load.image('So3', BUTTON_3);
	game.load.image('So4', BUTTON_4);
	game.load.image('So5', BUTTON_5);

	game.load.image('banana', BANANA);
	// process responsive

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
	// create Basket

	//load button
	button3 = game.add.button(So_3_POSX, So_3_POSY, 'So3', Faile1, this, 2, 1, 0);
	button3.scale.setTo(1.1, 1);

	button4 = game.add.button(So_4_POSX, So_4_POSY, 'So4', Faile2, this, 2, 1, 0);
	button4.scale.setTo(1.1, 1);

	button5 = game.add.button(So_5_POSX, So_5_POSY, 'So5', Pass, this, 2, 1, 0);
	button5.scale.setTo(1.1, 1);

	banana1 = game.add.button(BANANA_1_POSX, BANANA_1_POSY, 'banana');
	banana2 = game.add.button(BANANA_2_POSX, BANANA_2_POSY, 'banana');
	banana3 = game.add.button(BANANA_3_POSX, BANANA_3_POSY, 'banana');
	banana4 = game.add.button(BANANA_4_POSX, BANANA_4_POSY, 'banana');
	banana5 = game.add.button(BANANA_5_POSX, BANANA_5_POSY, 'banana');


}

function score_s1() {

	sound[0].play();

}
function score_s() {

	sound[1].play();

}

function Pass() {
	button5.scale.setTo(1.2, 1.1)
	score_s();
	button3.inputEnabled = false;
	button4.inputEnabled = false;
	sound[3].play;
	game.time.events.add(Phaser.Timer.SECOND * 1, next, this);

}
function next() {
	var winx = window.location = "unit5_game1_3";
}

function Faile1() {
	button3.scale.setTo(1.2, 1.1)
	button4.inputEnabled = false;
	button5.inputEnabled = false;
	sound[2].play();

	game.time.events.add(Phaser.Timer.SECOND * 1, Process1, this);

}
function Faile2() {
	button4.scale.setTo(1.2, 1.1)
	button5.inputEnabled = false;
	button4.inputEnabled = false;
	sound[2].play();
	game.time.events.add(Phaser.Timer.SECOND * 1, Process1, this);

}
function Process1() {
	sound[0].destroy();
	sound[1].destroy();
	sound[2].destroy();
	sound[3].destroy();
	sound[4].destroy();
	music_bg.destroy();
	game.state.start(game.state.current);
	//var winx = window.location="/index1.html";

}

var anchorB = true;
function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	if (anchorB) {
		setTimeout(function () {
			anchorB = false;
			banana1.angle = -10;
			banana2.angle = -10;
			banana3.angle = -10;
			banana4.angle = -10;
			banana5.angle = -10;

		}, 500);
	} else {
		setTimeout(function () {
			anchorB = true;
			banana1.angle = 10;
			banana2.angle = 10;
			banana3.angle = 10;
			banana4.angle = 10;
			banana5.angle = 10;
		}, 500);
	}
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Apple_5,32,32);
}