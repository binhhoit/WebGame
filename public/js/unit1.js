var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

var btnNext;
var btnBack;
var txt = new Array();
var sound = new Array();
var timer;

var flag = false;
var backgroundCount = 1;
var m_player;
var m_carrot;
var m_mushroom;


// Setting sound start
var flag_sound = 0;
var check_flag = 0;
var speed = 2;
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
	game.load.spritesheet('m_player', 'assets/images/unit1/character/animation_rabbit.png', 236, 355, 16);

	// Load sound
	game.load.audio('Thokia', 'assets/sounds/unit1/1_Chutho.mp3');
	game.load.audio('Thodaochoi', 'assets/sounds/unit1/1_Thodaochoi.mp3');
	game.load.audio('so1', 'assets/sounds/unit1/1_So1.mp3');
	game.load.audio('Motchutho', 'assets/sounds/unit1/1_Motchutho.mp3');
	game.load.audio('Thothaycarrot', 'assets/sounds/unit1/1_3.mp3');
	game.load.audio('Motcarrot', 'assets/sounds/unit1/1_Carot.mp3');
	game.load.audio('thothaymushroom', 'assets/sounds/unit1/1_5.mp3');
	game.load.audio('mushroom', 'assets/sounds/unit1/1_Cay nam.mp3');
	game.load.audio('carrot', 'assets/sounds/unit1/1_4.mp3');
	game.load.audio('haimushroom', 'assets/sounds/unit1/1_ThoHainam.mp3');
	game.load.audio('yeah', 'assets/sounds/unit1/yeah.mp3');
	game.load.audio('1_2', 'assets/sounds/unit1/1_2.mp3');
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

	// TIMER
	// PLAYER
	m_player = game.add.sprite(350, 450, 'm_player');
	m_player.scale.setTo(0.5, 0.5);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 16, true);
	game.add.tween(m_player).to({ x: game.width / 2 }, 11000, Phaser.Easing.Linear.None, true);
	//frame begin
	m_player.animations.add('idle', [0], 8, true);
	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	//btnx1 = game.add.button(1400,550, 'btnNext', actionOnClick, this); 

	// Add sound
	sound[0] = game.sound.add('Thokia');
	sound[1] = game.sound.add('Thodaochoi');
	sound[2] = game.sound.add('so1');
	sound[3] = game.sound.add('Motchutho');
	sound[4] = game.sound.add('Thothaycarrot');
	sound[5] = game.sound.add('Motcarrot');
	sound[6] = game.sound.add('Thohaicarrot');
	sound[7] = game.sound.add('thothaymushroom');
	sound[10] = game.sound.add('mushroom');
	sound[11] = game.sound.add('carrot');
	sound[12] = game.sound.add('haimushroom');
	sound[13] = game.sound.add('1_2');

	//m_sound[0] = game.add.audio('m_sound1');
	sound[0].play();

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

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_rabbit = game.add.tileSprite(500, -50, 319, 66, 'text_rabbit');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 750, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_rabbit.inputEnabled = true;
		game.add.tween(text_rabbit).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}


function showCarrot() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	carrot_ = game.add.tileSprite(-50, 700, 267, 416, 'carrot_');
	carrot_.inputEnabled = true;
	game.add.tween(carrot_).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_rabbit = game.add.tileSprite(500, -50, 319, 66, 'text_carrot');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 750, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_carrot.inputEnabled = true;
		game.add.tween(text_carrot).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}

function showMushroom() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	mushroom_ = game.add.tileSprite(-50, 700, 267, 416, 'mushroom_');
	mushroom_.inputEnabled = true;
	game.add.tween(mushroom_).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number1 = game.add.tileSprite(1400, 700, 207, 516, 'text_number1');
		text_mushroom = game.add.tileSprite(500, -50, 319, 66, 'text_mushroom');
		text_number1.inputEnabled = true;
		game.add.tween(text_number1).to({ x: 750, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
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
	text_rabbit.destroy();
	text_number1.destroy();
	rabbit_.destroy();
	//m_player.destroy();
	backgroundCount++;
	if (backgroundCount == 2) {
		backPlayerBackgroundTwo();
	}
	if (backgroundCount == 3) {
		backPlayerBackgroundThree();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	game.add.tween(m_player).to({ x: game.width / 2 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	bg_carrot.destroy();
	game.add.tween(m_player).to({ x: game.width / 2 }, 11000, Phaser.Easing.Linear.None, true);

}
var loop;
var temp = 0
function backPlayer() {
	if (m_player.x < game.width / 2) {
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



function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1
	backPlayer();

	if (!loop && flag) {
		if (backgroundCount == 1) {
			showRabbit();
			console.log("cach 1");
		}
		if (backgroundCount == 2) {
			showCarrot();
			console.log("cach 2");
		}
		if (backgroundCount == 3) {
			showMushroom();
			console.log("cach 3");
		}
	}


	if (flag_sound == 0) {

		flag_sound = -1;

	}
	if (flag_sound == 1) {
		//So 1
		setTimeout(function () { sound[2].play(); }, 1000);
		// Mot Chu tho
		setTimeout(function () { sound[3].play(); }, 2000);

		setTimeout(function () { sound[13].play(); }, 4000);
		flag_sound = -1;
	}
	if (flag_sound == 2) {

		setTimeout(function () { sound[4].play(); }, 1000);
		game.time.events.add(Phaser.Timer.SECOND * 3, Delay1, this);


		flag_sound = -1;

	}

	function Delay1() {
		m_player.visible = false;
	}
	if (flag_sound == 3) {
		//So 1

		setTimeout(function () { sound[2].play(); }, 1000);

		setTimeout(function () { sound[5].play(); }, 2000);
		setTimeout(function () { sound[11].play(); }, 4000);
		flag_sound = -1;
	}

	if (flag_sound == 4) {
		setTimeout(function () { sound[7].play(); }, 1000);
		game.time.events.add(Phaser.Timer.SECOND * 4, Delay2, this);
		setTimeout(function () { sound[2].play(); }, 8000);
		setTimeout(function () { sound[10].play(); }, 9000);
		setTimeout(function () { sound[12].play(); }, 11000);
		flag_sound = -1;

	}
	function Delay2() {
		m_player.visible = false;
	}

}
