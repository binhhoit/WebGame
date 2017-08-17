var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

var btnNext;
var btnBack;

var sound = new Array();

var flag = false;
var backgroundCount = 1;
var showCarrot_ = false;
var showMushroom_ = false;

var m_player;
var m_carrot;
var m_mushroom;
var carrot;
var mushroom;

var zoom = true;
var loop;

function preload() {

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/unit1/bg.png');
	game.load.image('bg_mushroom', 'assets/images/unit1/bg_mushroom.png');
	game.load.image('bg_carrot', 'assets/images/unit1/bg_carrot.png');

	// Load image
	game.load.image('carrot', 'assets/images/unit1/ic_carrot.png');
	game.load.image('mushroom', 'assets/images/unit1/ic_mushroom.png');
	game.load.image('text_number1', 'assets/images/unit1/text_number1.png');
	game.load.image('text_carrot', 'assets/images/unit1/text_carrot.png');
	game.load.image('text_mushroom', 'assets/images/unit1/text_mushroom.png');
	game.load.image('text_rabbit', 'assets/images/unit1/text_rabbit.png');
	game.load.image('rabbit_', 'assets/images/unit1/character/rabbit.png');
	game.load.image('carrot_', 'assets/images/unit1/character/carrot.png');
	game.load.image('mushroom_', 'assets/images/unit1/character/mushroom.png');


	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit1/character/animation_rabbit.png', 198.375, 283, 8);
	game.load.spritesheet('m_player_carrot', 'assets/images/unit1/character/animation_rabbit_carrot.png', 198.375, 283, 8);

	// Load sound
	game.load.audio('1_1', 'assets/sounds/unit1/1_1.mp3');
	game.load.audio('1_2', 'assets/sounds/unit1/1_2.mp3');
	game.load.audio('1_3', 'assets/sounds/unit1/1_3.mp3');
	game.load.audio('1_4', 'assets/sounds/unit1/1_4.mp3');
	game.load.audio('1_5', 'assets/sounds/unit1/1_5.mp3');
	game.load.audio('cay_nam', 'assets/sounds/unit1/1_caynam.mp3');
	game.load.audio('chu_tho', 'assets/sounds/unit1/1_chutho.mp3');
	game.load.audio('carot', 'assets/sounds/unit1/1_carot.mp3');

	// Load button sprite
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit1/ic_button_back.png');

	game.load.image('nen', 'assets/images/unit1/bg_board.png');

}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg_mushroom = game.add.tileSprite(0, 0, 1366, 768, 'bg_mushroom');
	bg_carrot = game.add.tileSprite(0, 0, 1366, 768, 'bg_carrot');
	bg = game.add.tileSprite(0, 0, 1366, 768, 'bg');

	// PLAYER
	m_player = game.add.sprite(0, 200, 'm_player');
	m_player.scale.setTo(1.6, 1.6);


	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 8, true);
	game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
	//frame stop
	m_player.animations.add('idle', [0], 16, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	// Add sound
	sound[0] = game.sound.add('1_1');
	sound[1] = game.sound.add('1_2');
	sound[2] = game.sound.add('1_3');
	sound[3] = game.sound.add('1_4');
	sound[4] = game.sound.add('1_5');
	sound[5] = game.sound.add('cay_nam');
	sound[6] = game.sound.add('chu_tho');
	sound[7] = game.sound.add('carot');

	setTimeout(function () {
		sound[0].play();
	}, 2000);


	flag = true;
}

function render() {
	// var text = game.debug.spriteInfo(text_rabbit, 32, 32);
	//game.debug.spriteInfo(text_rabbit, 32, 32);
}


function showRabbit() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	rabbit_ = game.add.tileSprite(-50, 700, 267, 416, 'rabbit_');
	rabbit_.inputEnabled = true;
	game.add.tween(rabbit_).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[6].play();
	}, 3000);

	setTimeout(function () {

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_rabbit = game.add.tileSprite(500, -50, 319, 66, 'text_rabbit');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 800, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_rabbit.inputEnabled = true;
		game.add.tween(text_rabbit).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}


function showCarrot() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	carrot_ = game.add.tileSprite(-50, 700, 113, 214, 'carrot_');
	carrot_.scale.setTo(1.5, 1.5);
	carrot_.inputEnabled = true;
	game.add.tween(carrot_).to({ x: 350, y: 250 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[7].play();
	}, 3000);

	setTimeout(function () {

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_carrot = game.add.tileSprite(500, -50, 352, 66, 'text_carrot');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 800, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_carrot.inputEnabled = true;
		game.add.tween(text_carrot).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}

function showMushroom() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	mushroom_ = game.add.tileSprite(-50, 700, 199, 173, 'mushroom_');
	mushroom_.inputEnabled = true;
	mushroom_.scale.setTo(1.5, 1.5);
	game.add.tween(mushroom_).to({ x: 300, y: 250 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[5].play();
	}, 3000);

	setTimeout(function () {

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_mushroom = game.add.tileSprite(500, -50, 346, 66, 'text_mushroom');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 800, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_mushroom.inputEnabled = true;
		game.add.tween(text_mushroom).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	m_player.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_rabbit.destroy();
		text_number1.destroy();
		rabbit_.destroy();

		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		m_player.destroy();
		m_player_carrot = game.add.sprite(0, 200, 'm_player_carrot');
		m_player_carrot.scale.setTo(1.6, 1.6);
		m_player_carrot.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		m_player_carrot.animations.add('idle', [0], 16, true);
		text_carrot.destroy();
		text_number1.destroy();
		carrot_.destroy();
		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		m_player.destroy();
		mushroom_.destroy();
		mushroom.destroy();
		text_mushroom.destroy();
		text_number1.destroy();
		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	setTimeout(function () {
		carrot = game.add.tileSprite(800, 400, 211, 400, 'carrot');
		carrot.scale.setTo(0.5, 0.5)
		showCarrot_ = true;
	}, 1000);

	setTimeout(function () {
		sound[1].play();
	}, 500);

	setTimeout(function () {
		sound[2].play();
	}, 8000);

	game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	showCarrot_ = false;
	carrot.destroy();
	bg_carrot.destroy();

	setTimeout(function () {
		sound[3].play();
	}, 500);

	setTimeout(function () {
		sound[4].play();
	}, 8000);


	setTimeout(function () {
		mushroom = game.add.tileSprite(800, 500, 279, 244, 'mushroom');
		mushroom.scale.setTo(0.7, 0.7)
		showMushroom_ = true;
	}, 6000);

	game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 15000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit1_game1";
}

function backPlayer() {
	if (m_player.x < game.width / 3) {
		m_player.animations.play('walk');
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
		m_player.animations.play('idle');
	}
}

function backPlayer_carrot() {
	if (m_player_carrot.x < game.width / 3) {
		m_player_carrot.animations.play('walk');
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
		m_player_carrot.animations.play('idle');
	}
}

function update() {
	// Function called 60 times per second
	if (backgroundCount == 3) {
		backPlayer_carrot();
	} else {
		backPlayer();
	}

	if (!loop && flag) {
		if (backgroundCount == 1) {
			setTimeout(function () {
				showRabbit();
			}, 1000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				showCarrot();
			}, 1000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				showMushroom();
			}, 1000);
		}
	}

	if (showCarrot_) {
		if (zoom) {
			setTimeout(function () {
				zoom = false;
				carrot.scale.setTo(0.5, 0.5);
			}, 500);
		} else {
			setTimeout(function () {
				zoom = true;
				carrot.scale.setTo(0.55, 0.55);
			}, 500);
		}
	}

	if (showMushroom_) {
		if (zoom) {
			setTimeout(function () {
				zoom = false;
				mushroom.scale.setTo(0.5, 0.5);
			}, 500);
		} else {
			setTimeout(function () {
				zoom = true;
				mushroom.scale.setTo(0.55, 0.55);
			}, 500);
		}
	}

}
