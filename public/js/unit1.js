var game = new Phaser.Game(1024, 720, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

var btn = new Array();
var txt = new Array();
var sound = new Array();
var timer;
var flag = new Array();

var m_player;
var m_carrot;
var m_mushroom;

//Setting const here!

var distance = 1;

//Speed di chuyen
var direction = 2;

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
	game.load.image('mushroom', 'assets/images/unit1/mushroom.png');


	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit1/character/animation_rabbit.png', 236, 355, 16);

	// Load sound
	game.load.audio('Thokia', 'assets/sounds/unit1/1_Chutho.mp3');
	game.load.audio('Thodaochoi', 'assets/sounds/unit1/1_Thodaochoi.mp3');
	game.load.audio('so1', 'assets/sounds/unit1/1_So1.mp3');
	game.load.audio('Motchutho', 'assets/sounds/unit1/1_Motchutho.mp3');
	game.load.audio('Thothaycarrot', 'assets/sounds/unit1/1_3.mp3');
	game.load.audio('Motcarrot', 'assets/sounds/unit1/1_carrot.mp3');
	game.load.audio('thothaymushroom', 'assets/sounds/unit1/1_5.mp3');
	game.load.audio('mushroom', 'assets/sounds/unit1/1_Cay mushroom.mp3');
	game.load.audio('carrot', 'assets/sounds/unit1/1_4.mp3');
	game.load.audio('haimushroom', 'assets/sounds/unit1/1_ThoHaimushroom.mp3');
	game.load.audio('yeah', 'assets/sounds/unit1/yeah.mp3');
	game.load.audio('1_2', 'assets/sounds/unit1/1_2.mp3');
	// Load button sprite
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');

	game.load.image('nen', 'assets/images/unit1/bg_board.png');

}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND
	bg = game.add.tileSprite(0, 0, 1024, 720, 'bg');
	game.world.setBounds(0, 0, 1024, 720);
	bg_mushroom = game.add.tileSprite(0, 0, 1024, 720, 'bg_mushroom');
	bg_carrot = game.add.tileSprite(0, 0, 1024, 720, 'bg_carrot');

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

	// carrot
	m_carrot = game.add.sprite(2300, 150, 'carrot');
	m_carrot.scale.setTo(1.1, 1.1);

	m_mushroom = game.add.sprite(3300, 250, 'mushroom');
	m_mushroom.scale.setTo(1.1, 1.1);

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

}

function render() {
	//var text = game.debug.spriteInfo(bg, 32, 32);
}


function showRabbit() {

	nen = game.add.tileSprite(0, 0, 1035, 769, 'nen');
	nen.scale.setTo(0.5,0.5);
	game.world.setBounds(0, 0, 400, 769);

	var style = { font: 'bolder 300px Arial', fill: 'red' };
	txt[0] = game.add.text(950, 150, '1', style);
	txt[0].inputEnabled = true;
	txt[0].events.onInputDown.add(fail, this);
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);

	var style1 = { font: 'bolder 100px Arial', fill: 'red' };
	txt[1] = game.add.text(500, 600, 'một', style1);

	var style4 = { font: 'bolder 100px Arial', fill: 'black' };
	txt[6] = game.add.text(700, 600, 'chú thỏ', style4);


	flag_sound = 1;
	setTimeout(function () { btn[0] = game.add.button(1400, 620, 'btnNext', movenext1, this); btn[0].scale.setTo(0.5, 0.5); }, 5000);
}

function fail() {
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}

function movenext1() {
	flag_sound = 2;
	nen.destroy();
	txt[0].destroy();
	txt[1].destroy();
	txt[6].destroy();
	bg.x -= speed;
	direction = 3;
	btn[0].alpha = 0;
	m_player.animations.play('walk');
}

function add_so2() {
	nen = game.add.tileSprite(0, 0, 5096, 720, 'nen');
	game.world.setBounds(0, 0, 5096, 720);

	m_carrot.visible = true;
	m_player.visible = false;

	var style = { font: 'bolder 300px Arial', fill: 'red' };
	txt[2] = game.add.text(950, 150, '1', style);
	txt[2].inputEnabled = true;
	txt[2].events.onInputDown.add(fail1, this);
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[2]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);

	var style1 = { font: 'bolder 100px Arial', fill: 'red' };
	txt[3] = game.add.text(500, 600, 'một', style1);

	var style5 = { font: 'bolder 100px Arial', fill: 'black' };
	txt[7] = game.add.text(700, 600, 'củ cà rốt', style5);

	flag_sound = 3;
	setTimeout(function () { btn[1] = game.add.button(1400, 620, 'btnNext', movenext2, this); btn[1].scale.setTo(0.5, 0.5); }, 5000);
}

function fail1() {
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[2]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}

function movenext2() {
	m_player.visible = true;
	m_carrot.visible = false;
	nen.destroy();
	flag_sound = 4;
	txt[2].destroy();
	txt[3].destroy();
	txt[7].destroy();
	bg.x -= speed;
	direction = 3;
	btn[1].alpha = 0;
	m_player.animations.play('walk');
}

function add_so3() {
	nen = game.add.tileSprite(0, 0, 5096, 720, 'nen');
	game.world.setBounds(0, 0, 5096, 720);

	m_mushroom.visible = true;
	m_player.visible = false;

	var style = { font: 'bolder 300px Arial', fill: 'red' };
	txt[4] = game.add.text(950, 150, '1', style);
	txt[4].inputEnabled = true;
	txt[4].events.onInputDown.add(fail2, this);
	txt[4].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[4]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[4].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);

	var style1 = { font: 'bolder 100px Arial', fill: 'red' };
	txt[5] = game.add.text(550, 600, 'một', style1);

	var style6 = { font: 'bolder 100px Arial', fill: 'black' };
	txt[8] = game.add.text(750, 600, 'cây nấm', style6);

	flag_sound = 5;
	setTimeout(function () { btn[2] = game.add.button(1400, 620, 'btnNext', movenext3, this); btn[2].scale.setTo(0.5, 0.5); }, 5000);
}

function fail2() {
	txt[4].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[4]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[4].scale).to({ x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}

function movenext3() {
	var winx = window.location = "unit1_game1";
}

var setPlay = false;
function backPlayer() {
	if (m_player.x < game.width / 2) {
		m_player.animations.play('walk');
	} else {
		setPlay = true;
		m_player.animations.play('idle');
	}
}

function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1

	//backPlayer();
showRabbit();
	if (setPlay) {
		showRabbit();
	}


	// }
	// if (bg.x <= flag[1] && bg.x >= flag[1] - distance) {
	// 	bg.x = -1800;
	// 	direction = 0;
	// 	speed = 0;
	// 	m_player.animations.play('idle');
	// 	if (check_flag == 1) {
	// 		add_so2();
	// 		check_flag = 2;
	// 	}

	// }
	// if (bg.x <= flag[2] && bg.x >= flag[2] - distance) {
	// 	bg.x = -3000;
	// 	direction = 0;
	// 	speed = 0;
	// 	m_player.animations.play('idle');
	// 	if (check_flag == 2) {
	// 		add_so3();
	// 		check_flag = 3;
	// 	}

	// }
	// Flag Sound

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
