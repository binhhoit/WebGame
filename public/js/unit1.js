
var game = new Phaser.Game(1500, 720, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

var btn = new Array();
var txt = new Array();
var sound = new Array();
var timer;
var flag = new Array();

var m_player;
var m_carot;
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
	game.load.image('bg', 'assets/images/unit1/bg6.jpg');

	// Load image
	game.load.image('carot', 'assets/images/unit1/cucarot.png');
	game.load.image('nam', 'assets/images/unit1/mushroom1.png');

	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit1/tho1.png', 192.75, 284);


	// Load sound
	game.load.audio('Thokia', 'assets/sounds/unit1/1_Chutho.mp3');
	game.load.audio('Thodaochoi', 'assets/sounds/unit1/1_Thodaochoi.mp3');
	game.load.audio('so1', 'assets/sounds/unit1/1_So1.mp3');
	game.load.audio('Motchutho', 'assets/sounds/unit1/1_Motchutho.mp3');
	game.load.audio('Thothaycarot', 'assets/sounds/unit1/1_3.mp3');
	game.load.audio('Motcarot', 'assets/sounds/unit1/1_Carot.mp3');
	game.load.audio('thothaynam', 'assets/sounds/unit1/1_5.mp3');
	game.load.audio('nam', 'assets/sounds/unit1/1_Cay nam.mp3');
	game.load.audio('carot', 'assets/sounds/unit1/1_4.mp3');
	game.load.audio('hainam', 'assets/sounds/unit1/1_ThoHainam.mp3');
	game.load.audio('yeah', 'assets/sounds/unit1/yeah.mp3');
	game.load.audio('1_2', 'assets/sounds/unit1/1_2.mp3');
	// Load button sprite
	game.load.image('btnNext', 'assets/images/unit1/button1.png');

	game.load.image('nen', 'assets/images/unit1/nenchu.png');

	// Gán Flag
	flag[0] = -600;
	flag[1] = -1800;
	flag[2] = -3000;
	flag[3] = -4500;
}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND
	bg = game.add.tileSprite(0, 0, 5096, 720, 'bg');
	game.world.setBounds(0, 0, 5096, 720);



	// TIMER
	// PLAYER

	m_player = game.add.sprite(350, 150, 'm_player');
	m_player.scale.setTo(1.5, 1.5);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);


	m_player.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	// Carot
	m_carot = game.add.sprite(2300, 150, 'carot');
	m_carot.scale.setTo(1.1, 1.1);

	m_mushroom = game.add.sprite(3300, 250, 'nam');
	m_mushroom.scale.setTo(1.1, 1.1);



	//btnx1 = game.add.button(1400,550, 'btnNext', actionOnClick, this); 


	// Add sound
	sound[0] = game.sound.add('Thokia');
	sound[1] = game.sound.add('Thodaochoi');
	sound[2] = game.sound.add('so1');
	sound[3] = game.sound.add('Motchutho');
	sound[4] = game.sound.add('Thothaycarot');
	sound[5] = game.sound.add('Motcarot');
	sound[6] = game.sound.add('Thohaicarot');
	sound[7] = game.sound.add('thothaynam');
	sound[10] = game.sound.add('nam');
	sound[11] = game.sound.add('carot');
	sound[12] = game.sound.add('hainam');
	sound[13] = game.sound.add('1_2');

	//m_sound[0] = game.add.audio('m_sound1');
	sound[0].play();



}

function render() {
	//var text = game.debug.spriteInfo(bg, 32, 32);
}




function add_so1() {
	nen = game.add.tileSprite(0, 0, 5096, 720, 'nen');
	game.world.setBounds(0, 0, 5096, 720);
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

	m_carot.visible = true;
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
	m_carot.visible = false;
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



function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1
	if (bg.x <= 0 && bg.x > -3500) {
		bg.x -= direction;
		m_carot.x -= direction;
		m_mushroom.x -= direction;
		m_player.animations.play('walk');
	}
	if (bg.x > 0) {
		bg.x = 0;
		m_player.animations.play('idle');

	}
	if (bg.x <= -3500) {
		bg.x = -3500;
		direction = 0;
		m_player.animations.play('idle');

	}
	// Xét flag 
	//Flag 1
	if (bg.x <= flag[0] && bg.x >= flag[0] - distance) {
		bg.x = -600;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if (check_flag == 0) {
			add_so1();
			check_flag = 1;
		}

	}
	if (bg.x <= flag[1] && bg.x >= flag[1] - distance) {
		bg.x = -1800;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if (check_flag == 1) {
			add_so2();
			check_flag = 2;
		}

	}
	if (bg.x <= flag[2] && bg.x >= flag[2] - distance) {
		bg.x = -3000;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if (check_flag == 2) {
			add_so3();
			check_flag = 3;
		}

	}


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
