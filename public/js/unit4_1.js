var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

var Chestnut_1, Chestnut_2, Chestnut_3, Chestnut_4, Chestnut_5, Chestnut_6, Chestnut_7, Chestnut_8, Chestnut_9, Chestnut_10;
var sound = new Array(4);

var countBasket_2 = 0;
var countBasket_3 = 0;
var countBasket_4 = 0;
var positionBasket_2 = 0;
var positionBasket_3 = 0;
var positionBasket_4 = 0;

function preload() {
	// load background
	game.load.image('bg', BACKGROUND_IMAGE);
	//game.scale.forceOrientation(false, true);

	// load Basket
	game.load.image('Chestnut', CHESTNUT);

	game.load.spritesheet('Squirrel', SQUIRREL, 189, 256);

	game.load.image('Basket_2', BASKET_2);
	game.load.image('Basket_3', BASKET_3);
	game.load.image('Basket_4', BASKET_4);


	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
	game.load.audio('drop', SOUND_DROP);
	game.load.audio('music_bg', SOUND_BG);
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
	// create sprite Baskets


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

	Chestnut_1 = game.add.sprite(CHESTNUT_1_POSX, CHESTNUT_1_POSY, 'Chestnut');
	Chestnut_1.scale.setTo(0.8);
	Chestnut_2 = game.add.sprite(CHESTNUT_2_POSX, CHESTNUT_2_POSY, 'Chestnut');
	Chestnut_2.scale.setTo(0.8);
	Chestnut_3 = game.add.sprite(CHESTNUT_3_POSX, CHESTNUT_3_POSY, 'Chestnut');
	Chestnut_3.scale.setTo(0.8);
	Chestnut_4 = game.add.sprite(CHESTNUT_4_POSX, CHESTNUT_4_POSY, 'Chestnut');
	Chestnut_4.scale.setTo(0.8);
	Chestnut_5 = game.add.sprite(CHESTNUT_5_POSX, CHESTNUT_5_POSY, 'Chestnut');
	Chestnut_5.scale.setTo(0.8);
	Chestnut_6 = game.add.sprite(CHESTNUT_6_POSX, CHESTNUT_6_POSY, 'Chestnut');
	Chestnut_6.scale.setTo(0.8);
	Chestnut_7 = game.add.sprite(CHESTNUT_7_POSX, CHESTNUT_7_POSY, 'Chestnut');
	Chestnut_7.scale.setTo(0.8);
	Chestnut_8 = game.add.sprite(CHESTNUT_8_POSX, CHESTNUT_8_POSY, 'Chestnut');
	Chestnut_8.scale.setTo(0.8);
	Chestnut_9 = game.add.sprite(CHESTNUT_9_POSX, CHESTNUT_9_POSY, 'Chestnut');
	Chestnut_9.scale.setTo(0.8);

	Squirrel = game.add.sprite(1000, 300, 'Squirrel');
	Squirrel.scale.setTo(1.7);
	Squirrel.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
	Squirrel.animations.play('walk');

	//create drag and drop Basket		
	Chestnut_1.inputEnabled = true;					//cho phep nhap						
	Chestnut_1.input.enableDrag();                     //kich hoat keo tha
	Chestnut_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Chestnut_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng

	Chestnut_2.inputEnabled = true;
	Chestnut_2.input.enableDrag();
	Chestnut_2.events.onInputDown.add(score_s, this);
	Chestnut_2.events.onDragStop.add(stopDrag_2);

	Chestnut_3.inputEnabled = true;
	Chestnut_3.input.enableDrag();
	Chestnut_3.events.onInputDown.add(score_s, this);
	Chestnut_3.events.onDragStop.add(stopDrag_3);

	Chestnut_4.inputEnabled = true;
	Chestnut_4.input.enableDrag();
	Chestnut_4.events.onInputDown.add(score_s, this);
	Chestnut_4.events.onDragStop.add(stopDrag_4);

	Chestnut_5.inputEnabled = true;
	Chestnut_5.input.enableDrag();
	Chestnut_5.events.onInputDown.add(score_s, this);
	Chestnut_5.events.onDragStop.add(stopDrag_5);

	Chestnut_6.inputEnabled = true;
	Chestnut_6.input.enableDrag();
	Chestnut_6.events.onInputDown.add(score_s, this);
	Chestnut_6.events.onDragStop.add(stopDrag_6);

	Chestnut_7.inputEnabled = true;
	Chestnut_7.input.enableDrag();
	Chestnut_7.events.onInputDown.add(score_s, this);
	Chestnut_7.events.onDragStop.add(stopDrag_7);

	Chestnut_8.inputEnabled = true;
	Chestnut_8.input.enableDrag();
	Chestnut_8.events.onInputDown.add(score_s, this);
	Chestnut_8.events.onDragStop.add(stopDrag_8);

	Chestnut_9.inputEnabled = true;
	Chestnut_9.input.enableDrag();
	Chestnut_9.events.onInputDown.add(score_s, this);
	Chestnut_9.events.onDragStop.add(stopDrag_9);

	game.add.sprite(229.4, 517.1, 'Basket_2');
	game.add.sprite(523.7, 517.1, 'Basket_3');
	game.add.sprite(810.9, 516.1, 'Basket_4');
}

function score_s() {
	sound[4].play();
}

function stopDrag_1() {
	if (Chestnut_1.y > 500 && Chestnut_1.x > 200 && Chestnut_1.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		sound[1].play();
		Chestnut_1.enableDrag = false;
		if (positionBasket_2 % 2 == 0) {
			Chestnut_1.x = BASKET_1_POSX;
			Chestnut_1.y = BASKET_1_POSY;
		} else {
			Chestnut_1.x = BASKET_2_POSX;
			Chestnut_1.y = BASKET_2_POSY;
		}
		positionBasket_2++;

	} else {
		if (Chestnut_1.y > 500 && Chestnut_1.x > 500 && Chestnut_1.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_1.x = BASKET_3_POSX;
				Chestnut_1.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_1.x = BASKET_4_POSX;
				Chestnut_1.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_1.x = BASKET_5_POSX;
				Chestnut_1.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_1.y > 500 && Chestnut_1.x > 772 && Chestnut_1.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_1.x = BASKET_6_POSX;
					Chestnut_1.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_1.x = BASKET_7_POSX;
					Chestnut_1.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_1.x = BASKET_8_POSX;
					Chestnut_1.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_1.x = BASKET_9_POSX;
					Chestnut_1.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_1.x = CHESTNUT_1_POSX;
				Chestnut_1.y = CHESTNUT_1_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_2() {
	if (Chestnut_2.y > 500 && Chestnut_2.x > 200 && Chestnut_2.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_2.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_2.x = BASKET_1_POSX;
			Chestnut_2.y = BASKET_1_POSY;
		} else {
			Chestnut_2.x = BASKET_2_POSX;
			Chestnut_2.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_2.y > 500 && Chestnut_2.x > 500 && Chestnut_2.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_2.x = BASKET_3_POSX;
				Chestnut_2.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_2.x = BASKET_4_POSX;
				Chestnut_2.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_2.x = BASKET_5_POSX;
				Chestnut_2.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_2.y > 500 && Chestnut_2.x > 772 && Chestnut_2.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_2.x = BASKET_6_POSX;
					Chestnut_2.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_2.x = BASKET_7_POSX;
					Chestnut_2.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_2.x = BASKET_8_POSX;
					Chestnut_2.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_2.x = BASKET_9_POSX;
					Chestnut_2.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_2.x = CHESTNUT_2_POSX;
				Chestnut_2.y = CHESTNUT_2_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_3() {
	if (Chestnut_3.y > 500 && Chestnut_3.x > 200 && Chestnut_3.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_3.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_3.x = BASKET_1_POSX;
			Chestnut_3.y = BASKET_1_POSY;
		} else {
			Chestnut_3.x = BASKET_2_POSX;
			Chestnut_3.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_3.y > 500 && Chestnut_3.x > 500 && Chestnut_3.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_3.x = BASKET_3_POSX;
				Chestnut_3.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_3.x = BASKET_4_POSX;
				Chestnut_3.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_3.x = BASKET_5_POSX;
				Chestnut_3.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_3.y > 500 && Chestnut_3.x > 772 && Chestnut_3.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_3.x = BASKET_6_POSX;
					Chestnut_3.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_3.x = BASKET_7_POSX;
					Chestnut_3.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_3.x = BASKET_8_POSX;
					Chestnut_3.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_3.x = BASKET_9_POSX;
					Chestnut_3.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_3.x = CHESTNUT_3_POSX;
				Chestnut_3.y = CHESTNUT_3_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_4() {
	if (Chestnut_4.y > 500 && Chestnut_4.x > 200 && Chestnut_4.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_4.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_4.x = BASKET_1_POSX;
			Chestnut_4.y = BASKET_1_POSY;
		} else {
			Chestnut_4.x = BASKET_2_POSX;
			Chestnut_4.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_4.y > 500 && Chestnut_4.x > 500 && Chestnut_4.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_4.x = BASKET_3_POSX;
				Chestnut_4.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_4.x = BASKET_4_POSX;
				Chestnut_4.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_4.x = BASKET_5_POSX;
				Chestnut_4.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_4.y > 500 && Chestnut_4.x > 772 && Chestnut_4.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_4.x = BASKET_6_POSX;
					Chestnut_4.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_4.x = BASKET_7_POSX;
					Chestnut_4.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_4.x = BASKET_8_POSX;
					Chestnut_4.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_4.x = BASKET_9_POSX;
					Chestnut_4.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_4.x = CHESTNUT_4_POSX;
				Chestnut_4.y = CHESTNUT_4_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_5() {
	if (Chestnut_5.y > 500 && Chestnut_5.x > 200 && Chestnut_5.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_5.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_5.x = BASKET_1_POSX;
			Chestnut_5.y = BASKET_1_POSY;
		} else {
			Chestnut_5.x = BASKET_2_POSX;
			Chestnut_5.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_5.y > 500 && Chestnut_5.x > 500 && Chestnut_5.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_5.x = BASKET_3_POSX;
				Chestnut_5.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_5.x = BASKET_4_POSX;
				Chestnut_5.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_5.x = BASKET_5_POSX;
				Chestnut_5.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_5.y > 500 && Chestnut_5.x > 772 && Chestnut_5.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_5.x = BASKET_6_POSX;
					Chestnut_5.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_5.x = BASKET_7_POSX;
					Chestnut_5.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_5.x = BASKET_8_POSX;
					Chestnut_5.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_5.x = BASKET_9_POSX;
					Chestnut_5.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_5.x = CHESTNUT_5_POSX;
				Chestnut_5.y = CHESTNUT_5_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_6() {
	if (Chestnut_6.y > 500 && Chestnut_6.x > 200 && Chestnut_6.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_6.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_6.x = BASKET_1_POSX;
			Chestnut_6.y = BASKET_1_POSY;
		} else {
			Chestnut_6.x = BASKET_2_POSX;
			Chestnut_6.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_6.y > 500 && Chestnut_6.x > 500 && Chestnut_6.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_6.x = BASKET_3_POSX;
				Chestnut_6.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_6.x = BASKET_4_POSX;
				Chestnut_6.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_6.x = BASKET_5_POSX;
				Chestnut_6.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_6.y > 500 && Chestnut_6.x > 772 && Chestnut_6.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_6.x = BASKET_6_POSX;
					Chestnut_6.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_6.x = BASKET_7_POSX;
					Chestnut_6.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_6.x = BASKET_8_POSX;
					Chestnut_6.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_6.x = BASKET_9_POSX;
					Chestnut_6.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_6.x = CHESTNUT_6_POSX;
				Chestnut_6.y = CHESTNUT_6_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_7() {

	if (Chestnut_7.y > 500 && Chestnut_7.x > 200 && Chestnut_7.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_7.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_7.x = BASKET_1_POSX;
			Chestnut_7.y = BASKET_1_POSY;
		} else {
			Chestnut_7.x = BASKET_2_POSX;
			Chestnut_7.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_7.y > 500 && Chestnut_7.x > 500 && Chestnut_7.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_7.x = BASKET_3_POSX;
				Chestnut_7.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_7.x = BASKET_4_POSX;
				Chestnut_7.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_7.x = BASKET_5_POSX;
				Chestnut_7.y = BASKET_5_POSY;
			}
			positionBasket_3++; e
		} else {
			if (Chestnut_7.y > 500 && Chestnut_7.x > 772 && Chestnut_7.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_7.x = BASKET_6_POSX;
					Chestnut_7.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_7.x = BASKET_7_POSX;
					Chestnut_7.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_7.x = BASKET_8_POSX;
					Chestnut_7.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_7.x = BASKET_9_POSX;
					Chestnut_7.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_7.x = CHESTNUT_7_POSX;
				Chestnut_7.y = CHESTNUT_7_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_8() {
	if (Chestnut_8.y > 500 && Chestnut_8.x > 200 && Chestnut_8.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_8.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_8.x = BASKET_1_POSX;
			Chestnut_8.y = BASKET_1_POSY;
		} else {
			Chestnut_8.x = BASKET_2_POSX;
			Chestnut_8.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_8.y > 500 && Chestnut_8.x > 500 && Chestnut_8.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_8.x = BASKET_3_POSX;
				Chestnut_8.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_8.x = BASKET_4_POSX;
				Chestnut_8.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_8.x = BASKET_5_POSX;
				Chestnut_8.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_8.y > 500 && Chestnut_8.x > 772 && Chestnut_8.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_8.x = BASKET_6_POSX;
					Chestnut_8.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_8.x = BASKET_7_POSX;
					Chestnut_8.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_8.x = BASKET_8_POSX;
					Chestnut_8.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_8.x = BASKET_9_POSX;
					Chestnut_8.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_8.x = CHESTNUT_8_POSX;
				Chestnut_8.y = CHESTNUT_8_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function stopDrag_9() {
	if (Chestnut_9.y > 500 && Chestnut_9.x > 200 && Chestnut_9.x < 378 && countBasket_2 < 2) {
		countBasket_2++;
		Chestnut_9.enableDrag = false;
		sound[1].play();
		if (positionBasket_2 % 2 == 0) {
			Chestnut_9.x = BASKET_1_POSX;
			Chestnut_9.y = BASKET_1_POSY;
		} else {
			Chestnut_9.x = BASKET_2_POSX;
			Chestnut_9.y = BASKET_2_POSY;
		}
		positionBasket_2++;
	} else {
		if (Chestnut_9.y > 500 && Chestnut_9.x > 500 && Chestnut_9.x < 677 && countBasket_3 < 3) {
			countBasket_3++;
			sound[1].play();
			if (positionBasket_3 == 0) {
				Chestnut_9.x = BASKET_3_POSX;
				Chestnut_9.y = BASKET_3_POSY;
			}
			if (positionBasket_3 == 1) {
				Chestnut_9.x = BASKET_4_POSX;
				Chestnut_9.y = BASKET_4_POSY;
			}
			if (positionBasket_3 == 2) {
				Chestnut_9.x = BASKET_5_POSX;
				Chestnut_9.y = BASKET_5_POSY;
			}
			positionBasket_3++;
		} else {
			if (Chestnut_9.y > 500 && Chestnut_9.x > 772 && Chestnut_9.x < 947 && countBasket_4 < 4) {
				countBasket_4++;
				sound[1].play();
				if (positionBasket_4 == 0) {
					Chestnut_9.x = BASKET_6_POSX;
					Chestnut_9.y = BASKET_6_POSY;
				}
				if (positionBasket_4 == 1) {
					Chestnut_9.x = BASKET_7_POSX;
					Chestnut_9.y = BASKET_7_POSY;
				}
				if (positionBasket_4 == 2) {
					Chestnut_9.x = BASKET_8_POSX;
					Chestnut_9.y = BASKET_8_POSY;
				}
				if (positionBasket_4 == 3) {
					Chestnut_9.x = BASKET_9_POSX;
					Chestnut_9.y = BASKET_9_POSY;
				}
				positionBasket_4++;
			} else {
				Chestnut_9.x = CHESTNUT_9_POSX;
				Chestnut_9.y = CHESTNUT_9_POSY;
				sound[2].play();
			}
		}
	}
	Process();
}


function Process() {
	console.log(countBasket_2, countBasket_3, countBasket_4)
	if (countBasket_4 == 4 && countBasket_2 == 2 && countBasket_3 == 3) {
		music_bg.volume = 0.2;
		sound[3].play();
		setTimeout(function () {
			Process2();
		}, 4000);
	}
}

function Process2() {
	setTimeout(function () {
		window.location = "unit4_game2";
	}, 2000);
}

function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Basket_2, 32, 32);
}