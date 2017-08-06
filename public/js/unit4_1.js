var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'gameContainer', { preload: preload, create: create, update: update, render: render });

// Creates a new 'main' state that wil contain the game
var background;
var basket;
var text;
var Basket_1, Basket_2, Basket_3, Basket_4, Basket_5, Basket_6, Basket_7, Basket_8, Basket_9, Basket_10;
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

	//load soc
	game.load.image('Soc1', SOC_IMAGE1);
	game.load.image('Soc2', SOC_IMAGE2);
	game.load.image('Soc3', SOC_IMAGE3);
	game.load.image('Soc4', SOC_IMAGE4);

	// load Basket
	game.load.image('Basket_1', BASKET_1);
	game.load.image('Basket_2', BASKET_2);
	game.load.image('Basket_3', BASKET_3);
	game.load.image('Basket_4', BASKET_4);
	game.load.image('Basket_5', BASKET_5);
	game.load.image('Basket_6', BASKET_6);
	game.load.image('Basket_7', BASKET_7);
	game.load.image('Basket_8', BASKET_8);
	game.load.image('Basket_9', BASKET_9);
	game.load.image('Basket_10', BASKET_10);


	// load sound
	game.load.audio('start', SOUND_START);
	game.load.audio('Score_a', SOUND_SCORE);
	game.load.audio('fail', SOUND_FAIL);
	game.load.audio('end', SOUND_END);
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
	// create sprite Baskets


	// add sound
	sound[0] = game.add.audio('start');
	sound[0].play();
	sound[1] = game.add.audio('Score_a');
	sound[2] = game.add.audio('fail');
	sound[3] = game.add.audio('end');
	sound[4] = game.add.audio('drop');

	// create soc
	Soc_1 = game.add.sprite(100, 550, 'Soc1');
	Soc_1.scale.setTo(0.8);
	Soc_2 = game.add.sprite(350, 550, 'Soc2');
	Soc_2.scale.setTo(0.8);
	Soc_3 = game.add.sprite(550, 550, 'Soc3');
	Soc_3.scale.setTo(0.8);
	Soc_4 = game.add.sprite(750, 550, 'Soc4');
	Soc_4.scale.setTo(0.8);



	Basket_1 = game.add.sprite(BASKET_1_POSX, BASKET_1_POSY, 'Basket_1');
	Basket_1.scale.setTo(0.8);
	Basket_2 = game.add.sprite(BASKET_2_POSX, BASKET_2_POSY, 'Basket_2');
	Basket_2.scale.setTo(0.8);
	Basket_3 = game.add.sprite(BASKET_3_POSX, BASKET_3_POSY, 'Basket_3');
	Basket_3.scale.setTo(0.8);
	Basket_4 = game.add.sprite(BASKET_4_POSX, BASKET_4_POSY, 'Basket_4');
	Basket_4.scale.setTo(0.8);
	Basket_5 = game.add.sprite(BASKET_5_POSX, BASKET_5_POSY, 'Basket_5');
	Basket_5.scale.setTo(0.8);
	Basket_6 = game.add.sprite(BASKET_6_POSX, BASKET_6_POSY, 'Basket_6');
	Basket_6.scale.setTo(0.8);
	Basket_7 = game.add.sprite(BASKET_7_POSX, BASKET_7_POSY, 'Basket_7');
	Basket_7.scale.setTo(0.8);
	Basket_8 = game.add.sprite(BASKET_8_POSX, BASKET_8_POSY, 'Basket_8');
	Basket_8.scale.setTo(0.8);
	Basket_9 = game.add.sprite(BASKET_9_POSX, BASKET_9_POSY, 'Basket_9');
	Basket_9.scale.setTo(0.8);
	Basket_10 = game.add.sprite(BASKET_10_POSX, BASKET_10_POSY, 'Basket_10');
	Basket_10.scale.setTo(0.8);

	//create drag and drop Basket		
	Basket_1.inputEnabled = true;					//cho phep nhap						
	Basket_1.input.enableDrag();                     //kich hoat keo tha
	Basket_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
	Basket_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng

	Basket_2.inputEnabled = true;
	Basket_2.input.enableDrag();
	Basket_2.events.onInputDown.add(score_s, this);
	Basket_2.events.onDragStop.add(stopDrag_2);

	Basket_3.inputEnabled = true;
	Basket_3.input.enableDrag();
	Basket_3.events.onInputDown.add(score_s, this);
	Basket_3.events.onDragStop.add(stopDrag_3);

	Basket_4.inputEnabled = true;
	Basket_4.input.enableDrag();
	Basket_4.events.onInputDown.add(score_s, this);
	Basket_4.events.onDragStop.add(stopDrag_4);

	Basket_5.inputEnabled = true;
	Basket_5.input.enableDrag();
	Basket_5.events.onInputDown.add(score_s, this);
	Basket_5.events.onDragStop.add(stopDrag_5);

	Basket_6.inputEnabled = true;
	Basket_6.input.enableDrag();
	Basket_6.events.onInputDown.add(score_s, this);
	Basket_6.events.onDragStop.add(stopDrag_6);

	Basket_7.inputEnabled = true;
	Basket_7.input.enableDrag();
	Basket_7.events.onInputDown.add(score_s, this);
	Basket_7.events.onDragStop.add(stopDrag_7);

	Basket_8.inputEnabled = true;
	Basket_8.input.enableDrag();
	Basket_8.events.onInputDown.add(score_s, this);
	Basket_8.events.onDragStop.add(stopDrag_8);

	Basket_9.inputEnabled = true;
	Basket_9.input.enableDrag();
	Basket_9.events.onInputDown.add(score_s, this);
	Basket_9.events.onDragStop.add(stopDrag_9);

	Basket_10.inputEnabled = true;
	Basket_10.input.enableDrag();
	Basket_10.events.onInputDown.add(score_s, this);
	Basket_10.events.onDragStop.add(stopDrag_10);


}

function score_s() {
	sound[4].play();
}


function stopDrag_1() {


	if (Basket_1.y > 300 && Basket_1.x > 100 && Basket_1.x < 200) {
		if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_1.x = BASKET_1_POSX;
			Basket_1.y = BASKET_1_POSY;
			Basket_1.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_1.inputEnabled = false;
			Basket_1.x = '110';
			Basket_1.y = '420';
			Basket_1.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}



	}
	else
		if (Basket_1.y > 300 && Basket_1.x > 300 && Basket_1.x < 400) {
			if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_1.x = BASKET_1_POSX;
				Basket_1.y = BASKET_1_POSY;
				Basket_1.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_1.inputEnabled = false;
				Basket_1.x = '310';
				Basket_1.y = '620';
				Basket_1.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_1.y > 300 && Basket_1.x > 500 && Basket_1.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_1.inputEnabled = false;
					Basket_1.x = '510';
					Basket_1.y = '620';
					Basket_1.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_1.y > 300 && Basket_1.x > 700 && Basket_1.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_1.inputEnabled = false;
						Basket_1.x = '710';
						Basket_1.y = '620';
						Basket_1.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_1.x = BASKET_1_POSX;
					Basket_1.y = BASKET_1_POSY;
					Basket_1.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_2() {


	if (Basket_2.y > 300 && Basket_2.x > 100 && Basket_2.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_2.x = BASKET_2_POSX;
			Basket_2.y = BASKET_2_POSY;
			Basket_2.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_2.inputEnabled = false;
			Basket_2.x = '120';
			Basket_2.y = '620';
			Basket_2.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_2.y > 300 && Basket_2.x > 300 && Basket_2.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_2.x = BASKET_2_POSX;
				Basket_2.y = BASKET_2_POSY;
				Basket_2.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_2.inputEnabled = false;
				Basket_2.x = '320';
				Basket_2.y = '620';
				Basket_2.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_2.y > 300 && Basket_2.x > 500 && Basket_2.x < 600) {
				if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_2.inputEnabled = false;
					Basket_2.x = '520';
					Basket_2.y = '620';
					Basket_2.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_2.y > 300 && Basket_2.x > 700 && Basket_2.x < 800) {
					if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_2.x = BASKET_2_POSX;
						Basket_2.y = BASKET_2_POSY;
						Basket_2.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_2.inputEnabled = false;
						Basket_2.x = '720';
						Basket_2.y = '620';
						Basket_2.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_3() {


	if (Basket_3.y > 300 && Basket_3.x > 100 && Basket_3.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_3.x = BASKET_3_POSX;
			Basket_3.y = BASKET_3_POSY;
			Basket_3.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_3.inputEnabled = false;
			Basket_3.x = '130';
			Basket_3.y = '620';
			Basket_3.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_3.y > 300 && Basket_3.x > 300 && Basket_3.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_3.x = BASKET_3_POSX;
				Basket_3.y = BASKET_3_POSY;
				Basket_3.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_3.inputEnabled = false;
				Basket_3.x = '330';
				Basket_3.y = '620';
				Basket_3.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}
		}
		else
			if (Basket_3.y > 300 && Basket_3.x > 500 && Basket_3.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_2.x = BASKET_2_POSX;
					Basket_2.y = BASKET_2_POSY;
					Basket_2.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_3.inputEnabled = false;
					Basket_3.x = '530';
					Basket_3.y = '620';
					Basket_3.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_3.y > 300 && Basket_3.x > 700 && Basket_3.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_3.x = BASKET_3_POSX;
						Basket_3.y = BASKET_3_POSY;
						Basket_3.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_3.inputEnabled = false;
						Basket_3.x = '730';
						Basket_3.y = '620';
						Basket_3.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_3.x = BASKET_3_POSX;
					Basket_3.y = BASKET_3_POSY;
					Basket_3.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_4() {


	if (Basket_4.y > 300 && Basket_4.x > 100 && Basket_4.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_4.x = BASKET_4_POSX;
			Basket_4.y = BASKET_4_POSY;
			Basket_4.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_4.inputEnabled = false;
			Basket_4.x = '140';
			Basket_4.y = '620';
			Basket_4.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_4.y > 300 && Basket_4.x > 300 && Basket_4.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_4.x = BASKET_4_POSX;
				Basket_4.y = BASKET_4_POSY;
				Basket_4.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_4.inputEnabled = false;
				Basket_4.x = '340';
				Basket_4.y = '620';
				Basket_4.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_4.y > 300 && Basket_4.x > 500 && Basket_4.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_4.inputEnabled = false;
					Basket_4.x = '540';
					Basket_4.y = '620';
					Basket_4.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_4.y > 300 && Basket_4.x > 700 && Basket_4.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_4.x = BASKET_4_POSX;
						Basket_4.y = BASKET_4_POSY;
						Basket_4.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_4.inputEnabled = false;
						Basket_4.x = '740';
						Basket_4.y = '620';
						Basket_4.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_4.x = BASKET_4_POSX;
					Basket_4.y = BASKET_4_POSY;
					Basket_4.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_5() {


	if (Basket_5.y > 300 && Basket_5.x > 100 && Basket_5.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_5.x = BASKET_5_POSX;
			Basket_5.y = BASKET_5_POSY;
			Basket_5.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_5.inputEnabled = false;
			Basket_5.x = '150';
			Basket_5.y = '620';
			Basket_5.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_5.y > 300 && Basket_5.x > 300 && Basket_5.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_5.x = BASKET_5_POSX;
				Basket_5.y = BASKET_5_POSY;
				Basket_5.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_5.inputEnabled = false;
				Basket_5.x = '350';
				Basket_5.y = '620';
				Basket_5.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_5.y > 300 && Basket_5.x > 500 && Basket_5.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_5.inputEnabled = false;
					Basket_5.x = '600';
					Basket_5.y = '620';
					Basket_5.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_5.y > 300 && Basket_5.x > 700 && Basket_5.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_5.x = BASKET_5_POSX;
						Basket_5.y = BASKET_5_POSY;
						Basket_5.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_5.x = BASKET_5_POSX;
						Basket_5.y = BASKET_5_POSY;
						Basket_5.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_5.x = BASKET_5_POSX;
						Basket_5.y = BASKET_5_POSY;
						Basket_5.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_5.x = BASKET_5_POSX;
						Basket_5.y = BASKET_5_POSY;
						Basket_5.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_5.x = BASKET_5_POSX;
						Basket_5.y = BASKET_5_POSY;
						Basket_5.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_5.inputEnabled = false;
						Basket_5.x = '750';
						Basket_5.y = '620';
						Basket_5.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_5.x = BASKET_5_POSX;
					Basket_5.y = BASKET_5_POSY;
					Basket_5.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_6() {


	if (Basket_6.y > 300 && Basket_6.x > 100 && Basket_6.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_6.x = BASKET_6_POSX;
			Basket_6.y = BASKET_6_POSY;
			Basket_6.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_6.inputEnabled = false;
			Basket_6.x = '160';
			Basket_6.y = '620';
			Basket_6.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_6.y > 300 && Basket_6.x > 300 && Basket_6.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_6.x = BASKET_6_POSX;
				Basket_6.y = BASKET_6_POSY;
				Basket_6scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_6.inputEnabled = false;
				Basket_6.x = '360';
				Basket_6.y = '620';
				Basket_6.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_6.y > 300 && Basket_6.x > 500 && Basket_6.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_6.inputEnabled = false;
					Basket_6.x = '560';
					Basket_6.y = '620';
					Basket_6.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_6.y > 300 && Basket_6.x > 700 && Basket_6.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_6.x = BASKET_6_POSX;
						Basket_6.y = BASKET_6_POSY;
						Basket_6scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_6.inputEnabled = false;
						Basket_6.x = '760';
						Basket_6.y = '620';
						Basket_6.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_6.x = BASKET_6_POSX;
					Basket_6.y = BASKET_6_POSY;
					Basket_6scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_7() {


	if (Basket_7.y > 300 && Basket_7.x > 100 && Basket_7.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_7.x = BASKET_7_POSX;
			Basket_7.y = BASKET_7_POSY;
			Basket_7.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_7.inputEnabled = false;
			Basket_7.x = '170';
			Basket_7.y = '620';
			Basket_7.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_7.y > 300 && Basket_7.x > 300 && Basket_7.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_7.x = BASKET_7_POSX;
				Basket_7.y = BASKET_7_POSY;
				Basket_7.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_7.inputEnabled = false;
				Basket_7.x = '370';
				Basket_7.y = '620';
				Basket_7.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_7.y > 300 && Basket_7.x > 500 && Basket_7.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_1.x == 170 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_1.x == 170 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_1.x == 170 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_7.inputEnabled = false;
					Basket_7.x = '570';
					Basket_7.y = '620';
					Basket_7.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_7.y > 300 && Basket_7.x > 700 && Basket_7.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_1.x = BASKET_1_POSX;
						Basket_1.y = BASKET_1_POSY;
						Basket_1.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_7.x = BASKET_7_POSX;
						Basket_7.y = BASKET_7_POSY;
						Basket_7.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_7.x = BASKET_7_POSX;
						Basket_7.y = BASKET_7_POSY;
						Basket_7.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_7.x = BASKET_7_POSX;
						Basket_7.y = BASKET_7_POSY;
						Basket_7.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_7.x = BASKET_7_POSX;
						Basket_7.y = BASKET_7_POSY;
						Basket_7.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_7.x = BASKET_7_POSX;
						Basket_7.y = BASKET_7_POSY;
						Basket_7.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_7.inputEnabled = false;
						Basket_7.x = '770';
						Basket_7.y = '620';
						Basket_7.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_7.x = BASKET_7_POSX;
					Basket_7.y = BASKET_7_POSY;
					Basket_7.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_8() {


	if (Basket_8.y > 300 && Basket_8.x > 100 && Basket_8.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_8.x = BASKET_8_POSX;
			Basket_8.y = BASKET_8_POSY;
			Basket_8.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_8.inputEnabled = false;
			Basket_8.x = '180';
			Basket_8.y = '620';
			Basket_8.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_8.y > 300 && Basket_8.x > 300 && Basket_8.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_9.x == 390 && Basket_9.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_8.x = BASKET_8_POSX;
				Basket_8.y = BASKET_8_POSY;
				Basket_8.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_8.inputEnabled = false;
				Basket_8.x = '380';
				Basket_8.y = '620';
				Basket_8.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_8.y > 300 && Basket_8.x > 500 && Basket_8.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_8.inputEnabled = false;
					Basket_8.x = '580';
					Basket_8.y = '620';
					Basket_8.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_8.y > 300 && Basket_8.x > 700 && Basket_8.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_8.x = BASKET_8_POSX;
						Basket_8.y = BASKET_8_POSY;
						Basket_8.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_8.inputEnabled = false;
						Basket_8.x = '780';
						Basket_8.y = '620';
						Basket_8.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_8.x = BASKET_8_POSX;
					Basket_8.y = BASKET_8_POSY;
					Basket_8.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_9() {


	if (Basket_9.y > 300 && Basket_9.x > 100 && Basket_9.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_10.x == 200 && Basket_10.y == 620) {
			Basket_9.x = BASKET_9_POSX;
			Basket_9.y = BASKET_9_POSY;
			Basket_9.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_9.inputEnabled = false;
			Basket_9.x = '190';
			Basket_9.y = '620';
			Basket_9.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_9.y > 300 && Basket_9.x > 300 && Basket_9.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_10.x == 400 && Basket_10.y == 620)) {
				Basket_9.x = BASKET_9_POSX;
				Basket_9.y = BASKET_9_POSY;
				Basket_9.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_9.inputEnabled = false;
				Basket_9.x = '390';
				Basket_9.y = '620';
				Basket_9.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_9.y > 300 && Basket_9.x > 500 && Basket_9.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_10.x == 600 && Basket_10.y == 620)) {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_9.inputEnabled = false;
					Basket_9.x = '590';
					Basket_9.y = '620';
					Basket_9.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_9.y > 300 && Basket_9.x > 700 && Basket_9.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620)) {
						Basket_9.x = BASKET_9_POSX;
						Basket_9.y = BASKET_9_POSY;
						Basket_9.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_9.inputEnabled = false;
						Basket_9.x = '790';
						Basket_9.y = '620';
						Basket_9.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_9.x = BASKET_9_POSX;
					Basket_9.y = BASKET_9_POSY;
					Basket_9.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}


function stopDrag_10() {


	if (Basket_10.y > 300 && Basket_10.x > 100 && Basket_10.x < 200) {
		if (Basket_1.x == 110 && Basket_1.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_2.x == 120 && Basket_2.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_3.x == 130 && Basket_3.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_4.x == 140 && Basket_4.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_5.x == 150 && Basket_5.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_6.x == 160 && Basket_6.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_7.x == 170 && Basket_7.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_0_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_8.x == 180 && Basket_8.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else if (Basket_9.x == 190 && Basket_9.y == 620) {
			Basket_10.x = BASKET_10_POSX;
			Basket_10.y = BASKET_10_POSY;
			Basket_10.scale.setTo(0.8);
			sound[2].play();
		}
		else {
			Basket_10.inputEnabled = false;
			Basket_10.x = '200';
			Basket_10.y = '620';
			Basket_10.scale.setTo(0.5);
			Score++;
			sound[1].play();
		}


	}
	else
		if (Basket_10.y > 300 && Basket_10.x > 300 && Basket_10.x < 400) {
			if ((Basket_1.x == 310 && Basket_1.y == 620) && (Basket_2.x == 320 && Basket_2.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_1.x == 310 && Basket_1.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_2.x == 320 && Basket_2.y == 620) && (Basket_3.x == 330 && Basket_3.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_2.x == 320 && Basket_2.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_3.x == 330 && Basket_3.y == 620) && (Basket_4.x == 340 && Basket_4.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_3.x == 330 && Basket_3.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_4.x == 340 && Basket_4.y == 620) && (Basket_5.x == 350 && Basket_5.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_4.x == 340 && Basket_4.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_5.x == 350 && Basket_5.y == 620) && (Basket_6.x == 360 && Basket_6.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_5.x == 350 && Basket_5.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_6.x == 360 && Basket_6.y == 620) && (Basket_7.x == 370 && Basket_7.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_6.x == 360 && Basket_6.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_7.x == 370 && Basket_7.y == 620) && (Basket_8.x == 380 && Basket_8.y == 620) || (Basket_7.x == 370 && Basket_7.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else if ((Basket_8.x == 380 && Basket_8.y == 620) && (Basket_9.x == 390 && Basket_9.y == 620)) {
				Basket_10.x = BASKET_10_POSX;
				Basket_10.y = BASKET_10_POSY;
				Basket_10.scale.setTo(0.8);
				sound[2].play();
			}
			else {
				Basket_10.inputEnabled = false;
				Basket_10.x = '400';
				Basket_10.y = '620';
				Basket_10.scale.setTo(0.5);
				Score++;
				sound[1].play();
			}


		}
		else
			if (Basket_10.y > 300 && Basket_10.x > 500 && Basket_10.x < 600) {
				if ((Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_2.x == 520 && Basket_2.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}

				else if ((Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 10 && Basket_1.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_3.x == 530 && Basket_3.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_4.x == 540 && Basket_4.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_5.x == 600 && Basket_5.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) || (Basket_6.x == 560 && Basket_6.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_8.x == 580 && Basket_8.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620) || (Basket_7.x == 570 && Basket_7.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else if ((Basket_8.x == 580 && Basket_8.y == 620) && (Basket_9.x == 590 && Basket_9.y == 620) && (Basket_1.x == 510 && Basket_1.y == 620)) {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
				else {
					Basket_10.inputEnabled = false;
					Basket_10.x = '600';
					Basket_10.y = '620';
					Basket_10.scale.setTo(0.5);
					Score++;
					sound[1].play();
				}
			}
			else
				if (Basket_10.y > 300 && Basket_10.x > 700 && Basket_10.x < 800) {
					if ((Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) || (Basket_2.x == 720 && Basket_2.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_10.x == 800 && Basket_10.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_3.x == 730 && Basket_3.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_4.x == 740 && Basket_4.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_5.x == 750 && Basket_5.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620) || (Basket_6.x == 760 && Basket_6.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else if ((Basket_7.x == 770 && Basket_7.y == 620) && (Basket_8.x == 780 && Basket_8.y == 620) && (Basket_9.x == 790 && Basket_9.y == 620) && (Basket_1.x == 710 && Basket_1.y == 620)) {
						Basket_10.x = BASKET_10_POSX;
						Basket_10.y = BASKET_10_POSY;
						Basket_10.scale.setTo(0.8);
						sound[2].play();
					}
					else {
						Basket_10.inputEnabled = false;
						Basket_10.x = '800';
						Basket_10.y = '620';
						Basket_10.scale.setTo(0.5);
						Score++;
						sound[1].play();
					}
				}
				else {
					Basket_10.x = BASKET_10_POSX;
					Basket_10.y = BASKET_10_POSY;
					Basket_10.scale.setTo(0.8);
					sound[2].play();
				}
	Process();


}



function Process() {
	if (Score == 10) {
		sound[3].play();
		game.time.events.add(Phaser.Timer.SECOND * 3, Process2, this);
	}
}

function Process2() {
	game.add.tween(winx = window.location = "/bcm/level4/game2/index.html").to(
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

}



function update() {
	game.scale.forceOrientation(false, true);
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.setScreenSize( true );		
}
function render() {
	//game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Basket_4,32,32);
}