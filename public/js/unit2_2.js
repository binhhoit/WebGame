var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var bee = new Array(10);
var sound = new Array(5);
var button, button1;
var window_next;

//flag bee 1 stop
var flag1 = 1;

var flag2_1 = flag2_2 = flag2_3 = flag2_4 = flag2_5 = flag2_6 = flag2_7 = 0;

var check = false;
//var sound =new Array();
// Function called first to load all the assetsme
function preload() {
	// load background

	game.load.image('bg', BACKGROUND_IMAGE);

	// load bee 
	game.load.spritesheet('Bee1', BEE_1, 255, 343, 8);
	game.load.spritesheet('Bee2', BEE_2, 255, 343, 8);

	// load sound

	game.load.audio('start', SOUND_START);
	game.load.audio('score', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.audio('music_bg', SOUND_BG);
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

	// add animation
	bee[0].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	bee[0].animations.play('walk');
	bee[0].inputEnabled = true;
	bee[0].input.enableDrag();
	bee[0].events.onInputDown.add(score_s, this);
	bee[0].events.onDragStop.add(stopDrag_0);

	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('score');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	music_bg = game.add.audio('music_bg');
	music_bg.play();
	music_bg.volume = 0.1;
	setTimeout(function () {
		music_bg.volume = 1;
	}, 5000);

	button();
}

function score_s() {
	sound[4].play();
}

//bee 1
function stopDrag_0() {
	if ((bee[0].y > 217.9 && bee[0].y < 392.3 && bee[0].x > 417 && bee[0].x < 595) ||
		(bee[0].y > 383 && bee[0].y < 554 && bee[0].x > 685 && bee[0].x < 869)) {
		sound[1].play();
		bee[0].animations.add('idle', [5], 8, true);
		bee[0].animations.play('idle');
		bee[0].inputEnabled = false;

		if ((bee[0].y > 217.9 && bee[0].y < 392.3 && bee[0].x > 417 && bee[0].x < 595)) {
			bee[0].x = X_4;
			bee[0].Y = Y_4;
			flag1 = 1;
		} else {
			bee[0].x = X_5;
			bee[0].Y = Y_5;
			flag1 = 2;
		}

		setTimeout(function () {
			bee[1] = game.add.sprite(BEE_1_POSX, BEE_1_POSY, 'Bee2');
			bee[1].scale.setTo(0.5, 0.8);
			bee[1].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			bee[1].animations.play('walk');
			bee[1].inputEnabled = true;
			bee[1].input.enableDrag();
			bee[1].events.onInputDown.add(score_s, this);
			bee[1].events.onDragStop.add(stopDrag_1);
		}, 500);

	} else {
		bee[0].x = BEE_0_POSX;
		bee[0].y = BEE_0_POSY;
		sound[2].play();
	}
}

function stopDrag_5() {
	if ((bee[5].y > 217.9 && bee[5].y < 392.3 && bee[5].x > 417 && bee[5].x < 595) ||
		(bee[5].y > 383 && bee[5].y < 554 && bee[5].x > 685 && bee[5].x < 869)) {

		if ((bee[5].y > 217.9 && bee[5].y < 392.3 && bee[5].x > 417 && bee[5].x < 595) && flag1 != 1) {
			bee[5].x = X_4;
			bee[5].Y = Y_4;
			stopDragFinish_5();
		} else {
			if ((bee[5].y > 383 && bee[5].y < 554 && bee[5].x > 685 && bee[5].x < 869)) {
				bee[5].x = X_5;
				bee[5].Y = Y_5;
				stopDragFinish_5();
			} else {
				playAgain_5();
			}
		}

	} else {
		playAgain_5();
	}
}

function stopDragFinish_5() {
	sound[1].play();
	bee[5].animations.add('idle', [2], 8, true);
	bee[5].animations.play('idle');
	bee[5].inputEnabled = false;

	setTimeout(function () {
		bee[6] = game.add.sprite(BEE_6_POSX, BEE_6_POSY, 'Bee2');
		bee[6].scale.setTo(0.5, 0.8);
		bee[6].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		bee[6].animations.play('walk');
		bee[6].inputEnabled = true;
		bee[6].input.enableDrag();
		bee[6].events.onInputDown.add(score_s, this);
		bee[6].events.onDragStop.add(stopDrag_6);
	}, 500);
}

function playAgain_5() {
	bee[5].x = BEE_5_POSX;
	bee[5].y = BEE_5_POSY;
	sound[2].play();
}
//bee 2

function stopDrag_1() {
	if ((bee[1].y > 391.3 && bee[1].y < 546.3 && bee[1].x > -32 && bee[1].x < 127.8) ||
		(bee[1].y > 203.6 && bee[1].y < 387.2 && bee[1].x > 49.7 && bee[1].x < 232.3) ||
		(bee[1].y > 370.9 && bee[1].y < 566.7 && bee[1].x > 332 && bee[1].x < 507.4) ||
		(bee[1].y > 31.2 && bee[1].y < 227.1 && bee[1].x > 704.4 && bee[1].x < 871) ||
		(bee[1].y > 208.7 && bee[1].y < 393.7 && bee[1].x > 788.5 && bee[1].x < 950.7) ||
		(bee[1].y > 28.2 && bee[1].y < 249.5 && bee[1].x > 1064 && bee[1].x < 1248) ||
		(bee[1].y > 347.4 && bee[1].y < 564.7 && bee[1].x > 1067.3 && bee[1].x < 1248)) {

		check = false;
		if ((bee[1].y > 391.3 && bee[1].y < 546.3 && bee[1].x > -32 && bee[1].x < 127.8)) {
			bee[1].x = X_1;
			bee[1].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_1()
		}
		if ((bee[1].y > 203.6 && bee[1].y < 387.2 && bee[1].x > 49.7 && bee[1].x < 232.3)) {
			bee[1].x = X_2;
			bee[1].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_1();
		}
		if ((bee[1].y > 370.9 && bee[1].y < 566.7 && bee[1].x > 332 && bee[1].x < 507.4)) {
			bee[1].x = X_3;
			bee[1].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_1();
		}
		if ((bee[1].y > 31.2 && bee[1].y < 227.1 && bee[1].x > 704.4 && bee[1].x < 871)) {
			bee[1].x = X_6;
			bee[1].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_1();
		}
		if ((bee[1].y > 208.7 && bee[1].y < 393.7 && bee[1].x > 788.5 && bee[1].x < 950.7)) {
			bee[1].x = X_7;
			bee[1].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_1();
		}
		if ((bee[1].y > 28.2 && bee[1].y < 249.5 && bee[1].x > 1064 && bee[1].x < 1248)) {
			bee[1].x = X_8;
			bee[1].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_1();
		}
		if ((bee[1].y > 347.4 && bee[1].y < 564.7 && bee[1].x > 1067.3 && bee[1].x < 1248)) {
			bee[1].x = X_9;
			bee[1].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_1();
		}
		if (!check) {
			playAgain_1();
		}

	} else {
		playAgain_1();
	}
}

function stopDragFinish_1() {
	check = true;
	sound[1].play();
	bee[1].animations.add('idle', [2], 8, true);
	bee[1].animations.play('idle');
	bee[1].inputEnabled = false;

	setTimeout(function () {
		bee[2] = game.add.sprite(BEE_2_POSX, BEE_2_POSY, 'Bee2');
		bee[2].scale.setTo(0.5, 0.8);
		bee[2].animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		bee[2].animations.play('walk');
		bee[2].inputEnabled = true;
		bee[2].input.enableDrag();
		bee[2].events.onInputDown.add(score_s, this);
		bee[2].events.onDragStop.add(stopDrag_2);
	}, 500);
}

function playAgain_1() {
	bee[1].x = BEE_1_POSX;
	bee[1].y = BEE_1_POSY;
	sound[2].play();
}

function stopDrag_2() {
	if ((bee[2].y > 391.3 && bee[2].y < 546.3 && bee[2].x > -32 && bee[2].x < 127.8) ||
		(bee[2].y > 203.6 && bee[2].y < 387.2 && bee[2].x > 49.7 && bee[2].x < 232.3) ||
		(bee[2].y > 370.9 && bee[2].y < 566.7 && bee[2].x > 332 && bee[2].x < 507.4) ||
		(bee[2].y > 31.2 && bee[2].y < 227.1 && bee[2].x > 704.4 && bee[2].x < 871) ||
		(bee[2].y > 208.7 && bee[2].y < 393.7 && bee[2].x > 788.5 && bee[2].x < 950.7) ||
		(bee[2].y > 28.2 && bee[2].y < 249.5 && bee[2].x > 1064 && bee[2].x < 1248) ||
		(bee[2].y > 347.4 && bee[2].y < 564.7 && bee[2].x > 1067.3 && bee[2].x < 1248)) {

		check = false;
		if ((bee[2].y > 391.3 && bee[2].y < 546.3 && bee[2].x > -32 && bee[2].x < 127.8) && flag2_1 == 0) {
			bee[2].x = X_1;
			bee[2].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_2();
		}
		if ((bee[2].y > 203.6 && bee[2].y < 387.2 && bee[2].x > 49.7 && bee[2].x < 232.3) && flag2_2 == 0) {
			bee[2].x = X_2;
			bee[2].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_2();
		}
		if ((bee[2].y > 370.9 && bee[2].y < 566.7 && bee[2].x > 332 && bee[2].x < 507.4) && flag2_3 == 0) {
			bee[2].x = X_3;
			bee[2].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_2();
		}
		if ((bee[2].y > 31.2 && bee[2].y < 227.1 && bee[2].x > 704.4 && bee[2].x < 871) && flag2_4 == 0) {
			bee[2].x = X_6;
			bee[2].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_2();
		}
		if ((bee[2].y > 208.7 && bee[2].y < 393.7 && bee[2].x > 788.5 && bee[2].x < 950.7) && flag2_5 == 0) {
			bee[2].x = X_7;
			bee[2].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_2();
		}
		if ((bee[2].y > 28.2 && bee[2].y < 249.5 && bee[2].x > 1064 && bee[2].x < 1248) && flag2_6 == 0) {
			bee[2].x = X_8;
			bee[2].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_2();
		}
		if ((bee[2].y > 347.4 && bee[2].y < 564.7 && bee[2].x > 1067.3 && bee[2].x < 1248) && flag2_7 == 0) {
			bee[2].x = X_9;
			bee[2].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_2();
		}
		console.log(flag2_1 + "\t" + flag2_2 + "\t" + flag2_3 + "\t" + flag2_4 + "\t" + flag2_5 + "\t" + flag2_6 + "\t" + flag2_7);
		if (!check) {
			playAgain_2();
		}

	} else {
		playAgain_2();
	}
}

function stopDragFinish_2() {
	check = true;
	sound[1].play();
	bee[2].animations.add('idle', [5], 8, true);
	bee[2].animations.play('idle');
	bee[2].inputEnabled = false;

	setTimeout(function () {
		bee[3] = game.add.sprite(BEE_3_POSX, BEE_3_POSY, 'Bee2');
		bee[3].scale.setTo(0.5, 0.8);
		bee[3].animations.add('walk', [2, 2, 2, 3, 4, 5, 6, 7, 8], 8, true);
		bee[3].animations.play('walk');
		bee[3].inputEnabled = true;
		bee[3].input.enableDrag();
		bee[3].events.onInputDown.add(score_s, this);
		bee[3].events.onDragStop.add(stopDrag_3);
	}, 500);
}

function playAgain_2() {
	bee[2].x = BEE_2_POSX;
	bee[2].y = BEE_2_POSY;
	sound[2].play();
}

function stopDrag_3() {
	if ((bee[3].y > 391.3 && bee[3].y < 546.3 && bee[3].x > -32 && bee[3].x < 127.8) ||
		(bee[3].y > 203.6 && bee[3].y < 387.2 && bee[3].x > 49.7 && bee[3].x < 232.3) ||
		(bee[3].y > 370.9 && bee[3].y < 566.7 && bee[3].x > 332 && bee[3].x < 507.4) ||
		(bee[3].y > 31.2 && bee[3].y < 227.1 && bee[3].x > 704.4 && bee[3].x < 871) ||
		(bee[3].y > 208.7 && bee[3].y < 393.7 && bee[3].x > 788.5 && bee[3].x < 950.7) ||
		(bee[3].y > 28.2 && bee[3].y < 249.5 && bee[3].x > 1064 && bee[3].x < 1248) ||
		(bee[3].y > 347.4 && bee[3].y < 564.7 && bee[3].x > 1067.3 && bee[3].x < 1248)) {

		check = false;
		if ((bee[3].y > 391.3 && bee[3].y < 546.3 && bee[3].x > -32 && bee[3].x < 127.8) && flag2_1 == 0) {
			bee[3].x = X_1;
			bee[3].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_3();
		}
		if ((bee[3].y > 203.6 && bee[3].y < 387.2 && bee[3].x > 49.7 && bee[3].x < 232.3) && flag2_2 == 0) {
			bee[3].x = X_2;
			bee[3].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_3();
		}
		if ((bee[3].y > 370.9 && bee[3].y < 566.7 && bee[3].x > 332 && bee[3].x < 507.4) && flag2_3 == 0) {
			bee[3].x = X_3;
			bee[3].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_3();
		}
		if ((bee[3].y > 31.2 && bee[3].y < 227.1 && bee[3].x > 704.4 && bee[3].x < 871) && flag2_4 == 0) {
			bee[3].x = X_6;
			bee[3].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_3();
		}
		if ((bee[3].y > 208.7 && bee[3].y < 393.7 && bee[3].x > 788.5 && bee[3].x < 950.7) && flag2_5 == 0) {
			bee[3].x = X_7;
			bee[3].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_3();
		}
		if ((bee[3].y > 28.2 && bee[3].y < 249.5 && bee[3].x > 1064 && bee[3].x < 1248) && flag2_6 == 0) {
			bee[3].x = X_8;
			bee[3].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_3();
		}
		if ((bee[3].y > 347.4 && bee[3].y < 564.7 && bee[3].x > 1067.3 && bee[3].x < 1248) && flag2_7 == 0) {
			bee[3].x = X_9;
			bee[3].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_3();
		}
		if (!check) {
			playAgain_3();
		}


	} else {
		playAgain_3();
	}
}

function stopDragFinish_3() {
	check = true;
	sound[1].play();
	bee[3].animations.add('idle', [2], 8, true);
	bee[3].animations.play('idle');
	bee[3].inputEnabled = false;

	setTimeout(function () {
		bee[4] = game.add.sprite(BEE_4_POSX, BEE_4_POSY, 'Bee2');
		bee[4].scale.setTo(0.5, 0.8);
		bee[4].animations.add('walk', [1, 2, 3, 3, 4, 5, 6, 7, 8], 8, true);
		bee[4].animations.play('walk');
		bee[4].inputEnabled = true;
		bee[4].input.enableDrag();
		bee[4].events.onInputDown.add(score_s, this);
		bee[4].events.onDragStop.add(stopDrag_4);
	}, 500);
}

function playAgain_3() {
	bee[3].x = BEE_3_POSX;
	bee[3].y = BEE_3_POSY;
	sound[2].play();
}

function stopDrag_4() {
	if ((bee[4].y > 391.3 && bee[4].y < 546.3 && bee[4].x > -32 && bee[4].x < 127.8) ||
		(bee[4].y > 203.6 && bee[4].y < 387.2 && bee[4].x > 49.7 && bee[4].x < 232.3) ||
		(bee[4].y > 370.9 && bee[4].y < 566.7 && bee[4].x > 332 && bee[4].x < 507.4) ||
		(bee[4].y > 31.2 && bee[4].y < 227.1 && bee[4].x > 704.4 && bee[4].x < 871) ||
		(bee[4].y > 208.7 && bee[4].y < 393.7 && bee[4].x > 788.5 && bee[4].x < 950.7) ||
		(bee[4].y > 28.2 && bee[4].y < 249.5 && bee[4].x > 1064 && bee[4].x < 1248) ||
		(bee[4].y > 347.4 && bee[4].y < 564.7 && bee[4].x > 1067.3 && bee[4].x < 1248)) {

		check = false;
		if ((bee[4].y > 391.3 && bee[4].y < 546.3 && bee[4].x > -32 && bee[4].x < 127.8) && flag2_1 == 0) {
			bee[4].x = X_1;
			bee[4].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_4();
		}
		if ((bee[4].y > 203.6 && bee[4].y < 387.2 && bee[4].x > 49.7 && bee[4].x < 232.3) && flag2_2 == 0) {
			bee[4].x = X_2;
			bee[4].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_4();
		}
		if ((bee[4].y > 370.9 && bee[4].y < 566.7 && bee[4].x > 332 && bee[4].x < 507.4) && flag2_3 == 0) {
			bee[4].x = X_3;
			bee[4].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_4();
		}
		if ((bee[4].y > 31.2 && bee[4].y < 227.1 && bee[4].x > 704.4 && bee[4].x < 871) && flag2_4 == 0) {
			bee[4].x = X_6;
			bee[4].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_4();
		}
		if ((bee[4].y > 208.7 && bee[4].y < 393.7 && bee[4].x > 788.5 && bee[4].x < 950.7) && flag2_5 == 0) {
			bee[4].x = X_7;
			bee[4].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_4();
		}
		if ((bee[4].y > 28.2 && bee[4].y < 249.5 && bee[4].x > 1064 && bee[4].x < 1248) && flag2_6 == 0) {
			bee[4].x = X_8;
			bee[4].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_4();
		}
		if ((bee[4].y > 347.4 && bee[4].y < 564.7 && bee[4].x > 1067.3 && bee[4].x < 1248) && flag2_7 == 0) {
			bee[4].x = X_9;
			bee[4].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_4();
		}
		if (!check) {
			playAgain_4();
		}

	} else {
		playAgain_4();
	}
}

function stopDragFinish_4() {
	check = true;
	sound[1].play();
	bee[4].animations.add('idle', [2], 8, true);
	bee[4].animations.play('idle');
	bee[4].inputEnabled = false;


	setTimeout(function () {
		bee[5] = game.add.sprite(BEE_5_POSX, BEE_5_POSY, 'Bee1');
		bee[5].scale.setTo(0.5, 0.8);
		bee[5].animations.add('walk', [1, 2, 3, 3, 4, 5, 6, 7, 8], 8, true);
		bee[5].animations.play('walk');
		bee[5].inputEnabled = true;
		bee[5].input.enableDrag();
		bee[5].events.onInputDown.add(score_s, this);
		bee[5].events.onDragStop.add(stopDrag_5);
	}, 500);
}

function playAgain_4() {
	bee[4].x = BEE_4_POSX;
	bee[4].y = BEE_4_POSY;
	sound[2].play();
}

function stopDrag_6() {
	if ((bee[6].y > 391.3 && bee[6].y < 546.3 && bee[6].x > -32 && bee[6].x < 127.8) ||
		(bee[6].y > 203.6 && bee[6].y < 387.2 && bee[6].x > 49.7 && bee[6].x < 232.3) ||
		(bee[6].y > 370.9 && bee[6].y < 566.7 && bee[6].x > 332 && bee[6].x < 507.4) ||
		(bee[6].y > 31.2 && bee[6].y < 227.1 && bee[6].x > 704.4 && bee[6].x < 871) ||
		(bee[6].y > 208.7 && bee[6].y < 393.7 && bee[6].x > 788.5 && bee[6].x < 950.7) ||
		(bee[6].y > 28.2 && bee[6].y < 249.5 && bee[6].x > 1064 && bee[6].x < 1248) ||
		(bee[6].y > 347.4 && bee[6].y < 564.7 && bee[6].x > 1067.3 && bee[6].x < 1248)) {

		check = false;
		if ((bee[6].y > 391.3 && bee[6].y < 546.3 && bee[6].x > -32 && bee[6].x < 127.8) && flag2_1 == 0) {
			bee[6].x = X_1;
			bee[6].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_6();
		}
		if ((bee[6].y > 203.6 && bee[6].y < 387.2 && bee[6].x > 49.7 && bee[6].x < 232.3) && flag2_2 == 0) {
			bee[6].x = X_2;
			bee[6].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_6();
		}
		if ((bee[6].y > 370.9 && bee[6].y < 566.7 && bee[6].x > 332 && bee[6].x < 507.4) && flag2_3 == 0) {
			bee[6].x = X_3;
			bee[6].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_6();
		}
		if ((bee[6].y > 31.2 && bee[6].y < 227.1 && bee[6].x > 704.4 && bee[6].x < 871) && flag2_4 == 0) {
			bee[6].x = X_6;
			bee[6].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_6();
		}
		if ((bee[6].y > 208.7 && bee[6].y < 393.7 && bee[6].x > 788.5 && bee[6].x < 950.7) && flag2_5 == 0) {
			bee[6].x = X_7;
			bee[6].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_6();
		}
		if ((bee[6].y > 28.2 && bee[6].y < 249.5 && bee[6].x > 1064 && bee[6].x < 1248) && flag2_6 == 0) {
			bee[6].x = X_8;
			bee[6].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_6();
		}
		if ((bee[6].y > 347.4 && bee[6].y < 564.7 && bee[6].x > 1067.3 && bee[6].x < 1248) && flag2_7 == 0) {
			bee[6].x = X_9;
			bee[6].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_6();
		}
		if (!check) {
			playAgain_6();
		}


	} else {

	}
}

function stopDragFinish_6() {
	check = true;
	sound[1].play();
	bee[6].animations.add('idle', [1], 8, true);
	bee[6].animations.play('idle');
	bee[6].inputEnabled = false;

	setTimeout(function () {
		bee[7] = game.add.sprite(BEE_7_POSX, BEE_7_POSY, 'Bee2');
		bee[7].scale.setTo(0.5, 0.8);
		bee[7].animations.add('walk', [1, 2, 3, 3, 4, 5, 6, 7, 8], 8, true);
		bee[7].animations.play('walk');
		bee[7].inputEnabled = true;
		bee[7].input.enableDrag();
		bee[7].events.onInputDown.add(score_s, this);
		bee[7].events.onDragStop.add(stopDrag_7);
	}, 500);
}

function playAgain_6() {
	bee[6].x = BEE_6_POSX;
	bee[6].y = BEE_6_POSY;
	sound[2].play();
}

function stopDrag_7() {
	if ((bee[7].y > 391.3 && bee[7].y < 546.3 && bee[7].x > -32 && bee[7].x < 127.8) ||
		(bee[7].y > 203.6 && bee[7].y < 387.2 && bee[7].x > 49.7 && bee[7].x < 232.3) ||
		(bee[7].y > 370.9 && bee[7].y < 566.7 && bee[7].x > 332 && bee[7].x < 507.4) ||
		(bee[7].y > 31.2 && bee[7].y < 227.1 && bee[7].x > 704.4 && bee[7].x < 871) ||
		(bee[7].y > 208.7 && bee[7].y < 393.7 && bee[7].x > 788.5 && bee[7].x < 950.7) ||
		(bee[7].y > 28.2 && bee[7].y < 249.5 && bee[7].x > 1064 && bee[7].x < 1248) ||
		(bee[7].y > 347.4 && bee[7].y < 564.7 && bee[7].x > 1067.3 && bee[7].x < 1248)) {

		check = false;
		if ((bee[7].y > 391.3 && bee[7].y < 546.3 && bee[7].x > -32 && bee[7].x < 127.8) && flag2_1 == 0) {
			bee[7].x = X_1;
			bee[7].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_7();
		}
		if ((bee[7].y > 203.6 && bee[7].y < 387.2 && bee[7].x > 49.7 && bee[7].x < 232.3) && flag2_2 == 0) {
			bee[7].x = X_2;
			bee[7].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_7();
		}
		if ((bee[7].y > 370.9 && bee[7].y < 566.7 && bee[7].x > 332 && bee[7].x < 507.4) && flag2_3 == 0) {
			bee[7].x = X_3;
			bee[7].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_7();
		}
		if ((bee[7].y > 31.2 && bee[7].y < 227.1 && bee[7].x > 704.4 && bee[7].x < 871) && flag2_4 == 0) {
			bee[7].x = X_6;
			bee[7].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_7();
		}
		if ((bee[7].y > 208.7 && bee[7].y < 393.7 && bee[7].x > 788.5 && bee[7].x < 950.7) && flag2_5 == 0) {
			bee[7].x = X_7;
			bee[7].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_7();
		}
		if ((bee[7].y > 28.2 && bee[7].y < 249.5 && bee[7].x > 1064 && bee[7].x < 1248) && flag2_6 == 0) {
			bee[7].x = X_8;
			bee[7].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_7();
		}
		if ((bee[7].y > 347.4 && bee[7].y < 564.7 && bee[7].x > 1067.3 && bee[7].x < 1248) && flag2_7 == 0) {
			bee[7].x = X_9;
			bee[7].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_7();
		}
		if (!check) {
			playAgain_7();
		}


	} else {
		playAgain_7();
	}
}

function stopDragFinish_7() {
	check = true;
	sound[1].play();
	bee[7].animations.add('idle', [2], 8, true);
	bee[7].animations.play('idle');
	bee[7].inputEnabled = false;

	setTimeout(function () {
		bee[8] = game.add.sprite(BEE_8_POSX, BEE_8_POSY, 'Bee2');
		bee[8].scale.setTo(0.5, 0.8);
		bee[8].animations.add('walk', [1, 2, 3, 3, 4, 5, 6, 7, 8], 8, true);
		bee[8].animations.play('walk');
		bee[8].inputEnabled = true;
		bee[8].input.enableDrag();
		bee[8].events.onInputDown.add(score_s, this);
		bee[8].events.onDragStop.add(stopDrag_8);
	}, 500);
}

function playAgain_7() {
	bee[7].x = BEE_7_POSX;
	bee[7].y = BEE_7_POSY;
	sound[2].play();
}


function stopDrag_8() {
	if ((bee[8].y > 391.3 && bee[8].y < 546.3 && bee[8].x > -32 && bee[8].x < 127.8) ||
		(bee[8].y > 203.6 && bee[8].y < 387.2 && bee[8].x > 49.7 && bee[8].x < 232.3) ||
		(bee[8].y > 370.9 && bee[8].y < 566.7 && bee[8].x > 332 && bee[8].x < 507.4) ||
		(bee[8].y > 31.2 && bee[8].y < 227.1 && bee[8].x > 704.4 && bee[8].x < 871) ||
		(bee[8].y > 208.7 && bee[8].y < 393.7 && bee[8].x > 788.5 && bee[8].x < 950.7) ||
		(bee[8].y > 28.2 && bee[8].y < 249.5 && bee[8].x > 1064 && bee[8].x < 1248) ||
		(bee[8].y > 347.4 && bee[8].y < 564.7 && bee[8].x > 1067.3 && bee[8].x < 1248)) {

		check = false;
		if ((bee[8].y > 391.3 && bee[8].y < 546.3 && bee[8].x > -32 && bee[8].x < 127.8) && flag2_1 == 0) {
			bee[8].x = X_1;
			bee[8].y = Y_1;
			flag2_1 = 1;
			stopDragFinish_8();
		}
		if ((bee[8].y > 203.6 && bee[8].y < 387.2 && bee[8].x > 49.7 && bee[8].x < 232.3) && flag2_2 == 0) {
			bee[8].x = X_2;
			bee[8].y = Y_2;
			flag2_2 = 2;
			stopDragFinish_8();
		}
		if ((bee[8].y > 370.9 && bee[8].y < 566.7 && bee[8].x > 332 && bee[8].x < 507.4) && flag2_3 == 0) {
			bee[8].x = X_3;
			bee[8].y = Y_3;
			flag2_3 = 3;
			stopDragFinish_8();
		}
		if ((bee[8].y > 31.2 && bee[8].y < 227.1 && bee[8].x > 704.4 && bee[8].x < 871) && flag2_4 == 0) {
			bee[8].x = X_6;
			bee[8].y = Y_6;
			flag2_4 = 4;
			stopDragFinish_8();
		}
		if ((bee[8].y > 208.7 && bee[8].y < 393.7 && bee[8].x > 788.5 && bee[8].x < 950.7) && flag2_5 == 0) {
			bee[8].x = X_7;
			bee[8].y = Y_7;
			flag2_5 = 5;
			stopDragFinish_8();
		}
		if ((bee[8].y > 28.2 && bee[8].y < 249.5 && bee[8].x > 1064 && bee[8].x < 1248) && flag2_6 == 0) {
			bee[8].x = X_8;
			bee[8].y = Y_8;
			flag2_6 = 6;
			stopDragFinish_8();
		}
		if ((bee[8].y > 347.4 && bee[8].y < 564.7 && bee[8].x > 1067.3 && bee[8].x < 1248) && flag2_7 == 0) {
			bee[8].x = X_9;
			bee[8].y = Y_9;
			flag2_7 = 7;
			stopDragFinish_8();
		}
		if (!check) {
			playAgain_8();
		}

	} else {
		playAgain_8();
	}
}

function stopDragFinish_8() {
	check = true;
	sound[1].play();
	bee[8].animations.add('idle', [1], 8, true);
	bee[8].animations.play('idle');
	bee[8].inputEnabled = false;

	setTimeout(function () {
		process();
	}, 500);
}

function playAgain_8() {
	bee[8].x = BEE_8_POSX;
	bee[8].y = BEE_8_POSY;
	sound[2].play();
}

function process() {

	button.visible = false;
	button = game.add.button(1200, 650, 'next', next, this, 2, 1, 0);
	button.scale.setTo(1.5);

	setTimeout(function () {
		delay();
		setTimeout(function () {
			next();
		}, 9000);
	}, 1000);


}
function next() {
	window.location = "/api";
}

function delay() {
	setTimeout(function () {
		music_bg.volume = 0.1;
		sound[3].play();
	}, 1000);
}

function button() {
	button1 = game.add.button(1200, 650, 'again', ProcessAgain, this);
	button1.scale.setTo(1.5);
}

function ProcessAgain() {
	game.state.start(game.state.current);
	flag1 = 1;
	flag2_1 = flag2_2 = flag2_3 = flag2_4 = flag2_5 = flag2_6 = flag2_7 = 0;
}

// Function called 60 times per second
function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

}
function render() {
	// if (test) {
	// 	game.debug.spriteInfo(bee[1], 32, 32);
	// }
	//game.debug.spriteInfo(bee[0], 32, 32);
}