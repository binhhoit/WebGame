var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var basket;
var bee = new Array(10);
var sound = new Array(5);
var tween = new Array(5);
var Score = 0;
var button, button1;
var grass;
var window_next;
//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background

	game.load.image('bg', BACKGROUND_IMAGE);

	// load bee 
	game.load.spritesheet('Bee1', BEE_1, 255, 343, 8);
	game.load.spritesheet('Bee2', BEE_2, 255, 343, 8);
	game.load.spritesheet('Bee3', BEE_3, 255, 343, 8);

	// load sound

	game.load.audio('start', SOUND_START);
	game.load.audio('score', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	// load button
	/*game.load.image('btn','assets/images/nextbutton.png');*/
	game.load.image('again', BUTTON_AGAIN);
	game.load.image('btn', BUTTON_IMAGE);
	game.load.image('next', BUTTON_NEXT);

}

// Fuction called after 'preload' to setup the game  
function create() {

	// create background
	background = game.add.sprite(0, 0, 'bg');

	// create sprite bees

	bee[0] = game.add.sprite(BEE_0_POSX, BEE_0_POSY, 'Bee1');
	bee[0].scale.setTo(0.5, 0.8);
	bee[1] = game.add.sprite(BEE_1_POSX, BEE_1_POSY, 'Bee1');
	bee[1].scale.setTo(0.5, 0.8);

	bee[2] = game.add.sprite(BEE_2_POSX, BEE_2_POSY, 'Bee2');
	bee[2].scale.setTo(0.5, 0.8);
	bee[3] = game.add.sprite(BEE_3_POSX, BEE_3_POSY, 'Bee2');
	bee[3].scale.setTo(0.5, 0.8);
	bee[4] = game.add.sprite(BEE_4_POSX, BEE_4_POSY, 'Bee2');
	bee[4].scale.setTo(0.5, 0.8);
	bee[5] = game.add.sprite(BEE_5_POSX, BEE_5_POSY, 'Bee2');
	bee[5].scale.setTo(0.5, 0.8);
	bee[6] = game.add.sprite(BEE_6_POSX, BEE_6_POSY, 'Bee2');
	bee[6].scale.setTo(0.5, 0.8);
	bee[7] = game.add.sprite(BEE_7_POSX, BEE_7_POSY, 'Bee2');
	bee[7].scale.setTo(0.5, 0.8);

	bee[8] = game.add.sprite(BEE_8_POSX, BEE_8_POSY, 'Bee3');
	bee[8].scale.setTo(0.5, 0.8);
	// add animation
	bee[0].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[1].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[2].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[3].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[4].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[5].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[6].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[7].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[8].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	bee[0].animations.play('walk');
	bee[1].animations.play('walk');
	bee[2].animations.play('walk');
	bee[3].animations.play('walk');
	bee[4].animations.play('walk');
	bee[5].animations.play('walk');
	bee[6].animations.play('walk');
	bee[7].animations.play('walk');
	bee[8].animations.play('walk');

	bee[0].inputEnabled = true;
	bee[0].input.enableDrag();
	bee[0].events.onInputDown.add(score_s, this);
	bee[0].events.onDragStop.add(stopDrag_0);

	bee[1].inputEnabled = true;
	bee[1].input.enableDrag();
	bee[1].events.onInputDown.add(score_s, this);
	bee[1].events.onDragStop.add(stopDrag_1);

	bee[2].inputEnabled = true;
	bee[2].input.enableDrag();
	bee[2].events.onInputDown.add(score_s, this);
	bee[2].events.onDragStop.add(stopDrag_2);

	bee[3].inputEnabled = true;
	bee[3].input.enableDrag();
	bee[3].events.onInputDown.add(score_s, this);
	bee[3].events.onDragStop.add(stopDrag_3);

	bee[4].inputEnabled = true;
	bee[4].input.enableDrag();
	bee[4].events.onInputDown.add(score_s, this);
	bee[4].events.onDragStop.add(stopDrag_4);

	bee[5].inputEnabled = true;
	bee[5].input.enableDrag();
	bee[5].events.onInputDown.add(score_s, this);
	bee[5].events.onDragStop.add(stopDrag_5);

	bee[6].inputEnabled = true;
	bee[6].input.enableDrag();
	bee[6].events.onInputDown.add(score_s, this);
	bee[6].events.onDragStop.add(stopDrag_6);

	bee[7].inputEnabled = true;
	bee[7].input.enableDrag();
	bee[7].events.onInputDown.add(score_s, this);
	bee[7].events.onDragStop.add(stopDrag_7);

	bee[8].inputEnabled = true;
	bee[8].input.enableDrag();
	bee[8].events.onInputDown.add(score_s, this);
	bee[8].events.onDragStop.add(stopDrag_8);

	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('score');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	button();
}

function score_s() {
	sound[4].play();
}

//true
function stopDrag_2() {
	if (bee[2].y > -51 && bee[2].y < 249 && bee[2].x > 41 && bee[2].x < 296) {
		Score++;
		sound[1].play();
		bee[2].destroy();

	} else {
		bee[2].x = BEE_2_POSX;
		bee[2].y = BEE_2_POSY;
		sound[2].play();
	}
	Process();
}

function stopDrag_3() {
	if (bee[3].y > -51 && bee[3].y < 249 && bee[3].x > 41 && bee[3].x < 296) {
		Score++;
		sound[1].play();
		bee[3].destroy();
	} else {
		bee[3].x = BEE_3_POSX;
		bee[3].y = BEE_3_POSY;
		sound[2].play();
	}
	Process();
}

function stopDrag_4() {
	if (bee[4].y > -51 && bee[4].y < 249 && bee[4].x > 41 && bee[4].x < 296) {
		Score++;
		sound[1].play();
		bee[4].destroy();
	} else {
		bee[4].x = BEE_4_POSX;
		bee[4].y = BEE_4_POSY;
		sound[2].play();
	}
	Process();
}

function stopDrag_5() {
	if (bee[5].y > -51 && bee[5].y < 249 && bee[5].x > 41 && bee[5].x < 296) {
		Score++;
		sound[1].play();
		bee[5].destroy();
	} else {
		bee[5].x = BEE_5_POSX;
		bee[5].y = BEE_5_POSY;
		sound[2].play();
	}
	Process();
}

function stopDrag_6() {
	if (bee[6].y > -51 && bee[6].y < 249 && bee[6].x > 41 && bee[6].x < 296) {
		Score++;
		sound[1].play();
		bee[6].destroy();
	} else {
		bee[6].x = BEE_6_POSX;
		bee[6].y = BEE_6_POSY;
		sound[2].play();
	}
	Process();
}

function stopDrag_7() {
	if (bee[7].y > -51 && bee[7].y < 249 && bee[7].x > 41 && bee[7].x < 296) {
		Score++;
		sound[1].play();
		bee[7].destroy();
	} else {
		bee[7].x = BEE_7_POSX;
		bee[7].y = BEE_7_POSY;
		sound[2].play();
	}
	Process();
}

//false
function stopDrag_8() {

	bee[8].x = BEE_8_POSX;
	bee[8].y = BEE_8_POSY;
	sound[2].play();
}

function stopDrag_0() {

	bee[0].x = BEE_0_POSX;
	bee[0].y = BEE_0_POSY;
	sound[2].play();
}

function stopDrag_1() {

	bee[1].x = BEE_1_POSX;
	bee[1].y = BEE_1_POSY;
	sound[2].play();
}


function Process() {

	button.visible = false;
	if (Score == 6) {
		button = game.add.button(1200, 600, 'next', next, this, 2, 1, 0);
		button.scale.setTo(1.5);
		sound[1].play();
		
		setTimeout(function() {
			delay();
			setTimeout(function() {
				next();
			}, 3000);
		}, 1000);

	} else {
		/*var String_2 ='Bạn ơi, thiếu rùi \n mình làm lại nhé'
		var info = game.add.text(300, 40,String_2,style);*/
		//Button();
	}
}
function next() {

	window_next = window.location = "/api/unit2_game2";

}
function delay() {
	setTimeout(function() {
		sound[3].play();
	}, 2000);
}

function button() {
	button1 = game.add.button(1200, 600,'again', ProcessAgain, this);
	button1.scale.setTo(1.5);
}

function ProcessAgain() {
	game.state.start(game.state.current);
}

// Function called 60 times per second
function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

}
function render() {
	//game.debug.spriteInfo(bee[0], 32, 32);
}