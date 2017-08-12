var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var Apple;
var text;
var Fish_4, Fish_5;
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

	//load Basket
	game.load.image('Basket7', BASKET_IMAGE7);
	game.load.image('Basket8', BASKET_IMAGE8);
	game.load.image('Basket9', BASKET_IMAGE9);

	// load Apple
	game.load.spritesheet('Fish_7', FISH_7, 200, 114);
	game.load.spritesheet('Fish_8', FISH_8, 200, 114);
	game.load.spritesheet('Fish_9', FISH_9, 200, 114);

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
	// create sprite Apples


	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');


		// create Basket
	Basket_7 = game.add.sprite(BASKET_7_POSX, BASKET_7_POSY, 'Basket7');
	Basket_8 = game.add.sprite(BASKET_8_POSX, BASKET_8_POSY, 'Basket8');
	Basket_9 = game.add.sprite(BASKET_9_POSX, BASKET_9_POSY, 'Basket9');

	Basket_7.scale.setTo(0.8);
	Basket_8.scale.setTo(0.8);
	Basket_9.scale.setTo(0.8);


	Fish_1 = game.add.sprite(FISH_1_POSX, FISH_1_POSY, 'Fish_7');
	Fish_2 = game.add.sprite(FISH_2_POSX, FISH_2_POSY, 'Fish_7');
	Fish_3 = game.add.sprite(FISH_3_POSX, FISH_3_POSY, 'Fish_8');
	Fish_4 = game.add.sprite(FISH_4_POSX, FISH_4_POSY, 'Fish_8');
	Fish_5 = game.add.sprite(FISH_5_POSX, FISH_5_POSY, 'Fish_9');
	Fish_6 = game.add.sprite(FISH_6_POSX, FISH_6_POSY, 'Fish_9');
	Fish_7 = game.add.sprite(FISH_7_POSX, FISH_7_POSY, 'Fish_9');
	Fish_8 = game.add.sprite(FISH_8_POSX, FISH_8_POSY, 'Fish_9');
	Fish_9 = game.add.sprite(FISH_9_POSX, FISH_9_POSY, 'Fish_9');
	Fish_10 = game.add.sprite(FISH_10_POSX, FISH_10_POSY, 'Fish_9');

	Fish_1.scale.setTo(0.8);
	Fish_2.scale.setTo(0.8);
	Fish_3.scale.setTo(0.8);
	Fish_4.scale.setTo(0.8);
	Fish_5.scale.setTo(0.8);
	Fish_6.scale.setTo(0.8);
	Fish_7.scale.setTo(0.8);
	Fish_8.scale.setTo(0.8);
	Fish_9.scale.setTo(0.8);
	Fish_10.scale.setTo(0.8);

	Fish_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_8.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_9.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Fish_10.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);

	Fish_1.animations.play('walk');
	Fish_2.animations.play('walk');
	Fish_3.animations.play('walk');
	Fish_4.animations.play('walk');
	Fish_5.animations.play('walk');
	Fish_6.animations.play('walk');
	Fish_7.animations.play('walk');
	Fish_8.animations.play('walk');
	Fish_9.animations.play('walk');
	Fish_10.animations.play('walk');


	//create drag and drop Apple		
	Fish_1.inputEnabled = true;					//cho phep nhap						
	Fish_1.input.enableDrag();                     //kich hoat keo tha
	Fish_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Fish_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
	Fish_2.inputEnabled = true;
	Fish_2.input.enableDrag();
	Fish_2.events.onInputDown.add(score_s, this);
	Fish_2.events.onDragStop.add(stopDrag_2);
	Fish_3.inputEnabled = true;
	Fish_3.input.enableDrag();
	Fish_3.events.onInputDown.add(score_s, this);
	Fish_3.events.onDragStop.add(stopDrag_3);
	Fish_4.inputEnabled = true;
	Fish_4.input.enableDrag();
	Fish_4.events.onInputDown.add(score_s, this);
	Fish_4.events.onDragStop.add(stopDrag_4);
	Fish_5.inputEnabled = true;
	Fish_5.input.enableDrag();
	Fish_5.events.onInputDown.add(score_s, this);
	Fish_5.events.onDragStop.add(stopDrag_5);
	Fish_6.inputEnabled = true;
	Fish_6.input.enableDrag();
	Fish_6.events.onInputDown.add(score_s, this);
	Fish_6.events.onDragStop.add(stopDrag_6);
	Fish_7.inputEnabled = true;
	Fish_7.input.enableDrag();
	Fish_7.events.onInputDown.add(score_s, this);
	Fish_7.events.onDragStop.add(stopDrag_7);
	Fish_8.inputEnabled = true;
	Fish_8.input.enableDrag();
	Fish_8.events.onInputDown.add(score_s, this);
	Fish_8.events.onDragStop.add(stopDrag_8);
	Fish_9.inputEnabled = true;
	Fish_9.input.enableDrag();
	Fish_9.events.onInputDown.add(score_s, this);
	Fish_9.events.onDragStop.add(stopDrag_9);
	Fish_10.inputEnabled = true;
	Fish_10.input.enableDrag();
	Fish_10.events.onInputDown.add(score_s, this);
	Fish_10.events.onDragStop.add(stopDrag_10);



}

function score_s() {
	sound[4].play();
}

//drap and drop Apple 1 -4
function stopDrag_1() {
	if (Fish_1.y < 286 && Fish_1.y > 168 && Fish_1.x < 282 && Fish_1.x > 174) {
		Fish_1.inputEnabled = false;
		Fish_1.x = '208.9';
		Fish_1.y = '172.2';
		// Fish_1.anchor.x = 0.1;
        // Fish_1.anchor.y = 0.1;
		Score++;
		sound[1].play();
	} else {
		Fish_1.x = FISH_1_POSX;
		Fish_1.y = FISH_1_POSY;
		Fish_1.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Apple2 -5
function stopDrag_2() {
	if  (Fish_2.y < 286 && Fish_2.y > 168 && Fish_2.x < 282 && Fish_2.x > 174) {
		Fish_2.inputEnabled = false;
		Fish_2.x = '228.9';
		Fish_2.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_2.x = FISH_2_POSX;
		Fish_2.y = FISH_2_POSY;
		Fish_2.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Apple3 -5
function stopDrag_3() {
	if  (Fish_3.y < 286 && Fish_3.y > 168 && Fish_3.x < 658 && Fish_3.x > 528) {
		Fish_3.inputEnabled = false;
		Fish_3.x = '552';
		Fish_3.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_3.x = FISH_3_POSX;
		Fish_3.y = FISH_3_POSY;
		Fish_3.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drag and drop Apple4 -4
function stopDrag_4() {
	if  (Fish_4.y < 286 && Fish_4.y > 168 && Fish_4.x < 658 && Fish_4.x > 528) {
		Fish_4.inputEnabled = false;
		Fish_4.x = '562';
		Fish_4.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_4.x = FISH_4_POSX;
		Fish_4.y = FISH_4_POSY;
		Fish_4.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drop and drag apple 5 - 5
function stopDrag_5() {
	if  (Fish_5.y < 286 && Fish_5.y > 168 && Fish_5.x < 980 && Fish_5.x > 852) {
		Fish_5.inputEnabled = false;
		Fish_5.x = '876';
		Fish_5.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_5.x = FISH_5_POSX;
		Fish_5.y = FISH_5_POSY;
		Fish_5.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

//drop and drag apple 6 - 5
function stopDrag_6() {
	if (Fish_6.y < 286 && Fish_6.y > 168 && Fish_6.x < 980 && Fish_6.x > 852) {
		Fish_6.inputEnabled = false;
		Fish_6.x = '896';
		Fish_6.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_6.x = FISH_6_POSX;
		Fish_6.y = FISH_6_POSY;
		Fish_6.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}
//drop and drag apple 7 - 5
function stopDrag_7() {
	if (Fish_7.y < 286 && Fish_7.y > 168 && Fish_7.x < 980 && Fish_7.x > 852) {
		Fish_7.inputEnabled = false;
		Fish_7.x = '906';
		Fish_7.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_7.x = FISH_7_POSX;
		Fish_7.y = FISH_7_POSY;
		Fish_7.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

//drop and drag apple 8 -4
function stopDrag_8() {
	if (Fish_8.y < 286 && Fish_8.y > 168 && Fish_8.x < 980 && Fish_8.x > 852) {
		Fish_8.inputEnabled = false;
		Fish_8.x = '916';
		Fish_8.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_8.x = FISH_8_POSX;
		Fish_8.y = FISH_8_POSY;
		Fish_8.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

//drop and drag apple 9 -5
function stopDrag_9() {
	if (Fish_9.y < 286 && Fish_9.y > 168 && Fish_9.x < 980 && Fish_9.x > 852) {
		Fish_9.inputEnabled = false;
		Fish_9.x = '926';
		Fish_9.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_9.x = FISH_9_POSX;
		Fish_9.y = FISH_9_POSY;
		Fish_9.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

//drop and drag apple 9 -5
function stopDrag_10() {
	if (Fish_10.y < 286 && Fish_10.y > 168 && Fish_10.x < 980 && Fish_10.x > 852) {
		Fish_10.inputEnabled = false;
		Fish_10.x = '936';
		Fish_10.y = '172.2';
		Score++;
		sound[1].play();
	} else {
		Fish_10.x = FISH_10_POSX;
		Fish_10.y = FISH_10_POSY;
		Fish_10.scale.setTo(0.8);
		sound[2].play();
	}
	Process();
}

function Process() {
	if (Score == 10) {
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		button = game.add.button(1200, 650, 'next', Process2, this, 2, 1, 0);
		button.scale.setTo(1.2, 1.2);
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);
	}
}
function Delay1() {
	game.add.tween(sound[3].play()).to(2000, Phaser.Easing.Linear.None, true);
}
function Process2() {
	setTimeout(function () {
		window.location = "/api"
	}, 2000);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Fish_10, 32, 32);
}