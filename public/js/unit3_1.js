var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var Bear_1, Bear_2, Bear_3;
var sound = new Array(4);
var Score = 0;
var button;
var button1;

//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background
	game.load.image('bg', BACKGROUND_IMAGE);
	//game.scale.forceOrientation(false, true);

	//load StumpTree
	game.load.image('StumpTree1', STUMP_TREE_1);
	game.load.image('StumpTree2', STUMP_TREE_2);
	game.load.image('StumpTree3', STUMP_TREE_3);

	// load Basket
	game.load.image('Bear_1', BEAR_1);
	game.load.image('Bear_2', BEAR_2);
	game.load.image('Bear_3', BEAR_3);


	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.audio('music_bg', SOUND_BG);
	// load button
	game.load.image('again', BUTTON_AGAIN);
	game.load.image('btn', BUTTON_IMAGE);
	game.load.image('next', BUTTON_NEXT);
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


	// create StumpTree
	StumpTree_1 = game.add.sprite(560, 423.6, 'StumpTree1');
	StumpTree_1.scale.setTo(1.2);
	StumpTree_2 = game.add.sprite(826, 423.6, 'StumpTree2');
	StumpTree_2.scale.setTo(1.2);
	StumpTree_3 = game.add.sprite(1081, 423.6, 'StumpTree3');
	StumpTree_3.scale.setTo(1.2);

	Bear_1 = game.add.sprite(BEAR_1_POSX, BEAR_1_POSY, 'Bear_1');
	Bear_1.scale.setTo(0.8, 1);
	Bear_2 = game.add.sprite(BEAR_2_POSX, BEAR_2_POSY, 'Bear_2');
	Bear_2.scale.setTo(0.8, 1);
	Bear_3 = game.add.sprite(BEAR_3_POSX, BEAR_3_POSY, 'Bear_3');
	Bear_3.scale.setTo(0.8, 1);

	//create drag and drop Basket		
	Bear_1.inputEnabled = true;					//cho phep nhap						
	Bear_1.input.enableDrag();                     //kich hoat keo tha
	Bear_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Bear_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng

	Bear_2.inputEnabled = true;
	Bear_2.input.enableDrag();
	Bear_2.events.onInputDown.add(score_s, this);
	Bear_2.events.onDragStop.add(stopDrag_2);

	Bear_3.inputEnabled = true;
	Bear_3.input.enableDrag();
	Bear_3.events.onInputDown.add(score_s, this);
	Bear_3.events.onDragStop.add(stopDrag_3);

}

function score_s() {
	sound[4].play();
}

//drap and drop Basket 1
function stopDrag_1() {
	Bear_1.scale.setTo(0.8, 1);
	if (Bear_1.y > 132 && Bear_1.y < 268 && Bear_1.x > 571 && Bear_1.x < 669) {
		Bear_1.inputEnabled = false;
		Bear_1.x = '618.5';
		Bear_1.y = '142.5';
		Score++;
	} else {
		Bear_1.x = BEAR_1_POSX;
		Bear_1.y = BEAR_1_POSY;
		Bear_1.scale.setTo(0.8, 1);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket2
function stopDrag_2() {
	Bear_2.scale.setTo(0.8, 1);
	if (Bear_2.y > 132 && Bear_2.y < 268 && Bear_2.x > 830 && Bear_2.x < 943) {
		Bear_2.inputEnabled = false;
		Bear_2.x = '881.6';
		Bear_2.y = '142.5';
		Score++;
		sound[1].play();
	} else {

		Bear_2.x = BEAR_2_POSX;
		Bear_2.y = BEAR_2_POSY;
		Bear_2.scale.setTo(0.8, 1);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket3
function stopDrag_3() {
	Bear_3.scale.setTo(0.8, 1);
	if (Bear_3.y > 132 && Bear_3.y < 268 && Bear_3.x > 1086 && Bear_3.x < 1207) {
		Bear_3.inputEnabled = false;
		Bear_3.x = '1141';
		Bear_3.y = '142.5';
		Score++;
		sound[1].play();
	} else {
		Bear_3.x = BEAR_3_POSX;
		Bear_3.y = BEAR_3_POSY;
		Bear_3.scale.setTo(0.8, 1);
		sound[2].play();
	}
	Process();
}
//drag and drop Basket4


function Process() {
	if (Score == 3) {
		sound[3].play();
		game.time.events.add(Phaser.Timer.SECOND * 3, Process2, this);
	}
}

function Process2() {
	game.add.tween(winx = window.location = "unit3_game2").to(
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize(true);
}

function render() {
	// game.debug.spriteInfo(Bear_1, 32, 32);
	// game.debug.spriteInfo(StumpTree_1, 32, 500);
}