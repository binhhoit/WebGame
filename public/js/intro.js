var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render });

var btnNext;
var btnBack;

var sound = new Array();
var m_player;
var fly = true;
function preload() {

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/intro/bg.png');

	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/intro/chip_speak.png', 200, 189, 23);
	game.load.spritesheet('m_player_fly', 'assets/images/intro/chip_flying.png', 200, 189, 23);

	// Load sound
	game.load.audio('Thokia', 'assets/sounds/intro/1_Chutho.mp3');
	game.load.audio('Thodaochoi', 'assets/sounds/intro/1_Thodaochoi.mp3');
	game.load.audio('so1', 'assets/sounds/intro/1_So1.mp3');
	game.load.audio('Motchutho', 'assets/sounds/intro/1_Motchutho.mp3');
	game.load.audio('Thothaycarrot', 'assets/sounds/intro/1_3.mp3');
	game.load.audio('Motcarrot', 'assets/sounds/intro/1_Carot.mp3');
	game.load.audio('thothaymushroom', 'assets/sounds/intro/1_5.mp3');
	game.load.audio('mushroom', 'assets/sounds/intro/1_Cay nam.mp3');
	game.load.audio('carrot', 'assets/sounds/intro/1_4.mp3');
	game.load.audio('haimushroom', 'assets/sounds/intro/1_ThoHainam.mp3');
	game.load.audio('yeah', 'assets/sounds/intro/yeah.mp3');
	game.load.audio('1_2', 'assets/sounds/intro/1_2.mp3');
}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0, 0, 1366, 768, 'bg');

	// PLAYER

	m_player_fly = game.add.sprite(0, 2, 'm_player_fly');
	m_player_fly.scale.setTo(1.6, 1.6);

	// add animation
	m_player_fly.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
	game.add.tween(m_player_fly).to({ x: game.width }, 20000, Phaser.Easing.Linear.None, true);
	m_player_fly.animations.play('walk');

	setTimeout(function () {
		fly = false;
		m_player_fly.destroy();

		showChipSpeak();
	}, 6000);

	// Setting camera follow player.
	game.camera.follow(m_player_fly);

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

function showChipSpeak() {
	m_player = game.add.sprite(500, 400, 'm_player');
	m_player.scale.setTo(1.6, 1.6);
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 3, true);
	m_player.animations.play('walk');
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);
	game.camera.follow(m_player);
	setTimeout(function () {
		fly = true;
		m_player.destroy();

		showChipFly();
	}, 22000);
}

function showChipFly() {
	m_player_fly = game.add.sprite(500, 400, 'm_player_fly');
	m_player_fly.scale.setTo(1.6, 1.6);
	m_player_fly.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4, true);
	m_player_fly.animations.play('walk');
	game.add.tween(m_player_fly).to({ x: game.width }, 15000, Phaser.Easing.Linear.None, true);

	setTimeout(function () {
		var winx = window.location = "/unit1";
	}, 9000);
}

function render() {
	// var text = game.debug.spriteInfo(text_rabbit, 32, 32);
	//game.debug.spriteInfo(text_rabbit, 32, 32);
}

function backPlayer() {
	if (m_player_fly.x < game.width / 3) {
		m_player_fly.y += 1

	} else {
		m_player_fly.y -= 1
	}
}

function update() {
	// Function called 60 times per second
	if (fly) {
		backPlayer();
	}
}
