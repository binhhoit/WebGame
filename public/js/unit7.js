

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/unit7/character/duck.png', 1493.25, 1973, 8);
	game.load.spritesheet('buom', 'assets/images/unit7/character/frog.png', 982, 554, 4);

	game.load.image('bg','assets/images/unit7/bg.png');
	game.load.image('bg_lotus','assets/images/unit7/bg_lotus.png');

	game.load.image('duck', 'assets/images/unit7/ic_duck2.png');
	game.load.image('frog', 'assets/images/unit7/ic_frog2.png');

	game.load.image('ic_duck', 'assets/images/unit7/ic_duck.png');
	game.load.image('ic_frog', 'assets/images/unit7/ic_frog.png');
	game.load.image('ic_lotus','assets/images/unit7/ic_lotus.png')

	game.load.image('text_number7', 'assets/images/unit7/text_number7.png');
	game.load.image('text_duck', 'assets/images/unit7/text_duck.png');
	game.load.image('text_frog', 'assets/images/unit7/text_frog.png');
	game.load.image('text_lotus', 'assets/images/unit7/text_lotus.png');
	
	game.load.audio('1', 'assets/sound/unit7/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/unit7/7_ 7 con vit.mp3');
	game.load.audio('3', 'assets/sound/unit7/7_7 con ech.mp3');
	game.load.audio('4', 'assets/sound/unit7/7_2.mp3');
	game.load.audio('5', 'assets/sound/unit7/7_3.mp3');
	game.load.audio('6', 'assets/sound/unit7/7_4.mp3');
	game.load.audio('7', 'assets/sound/unit7/7_5.mp3');
	game.load.audio('8', 'assets/sound/unit7/7_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/unit7/7_So 7.mp3');
	game.load.audio('10', 'assets/sound/unit7/7_1.mp3');
	game.load.audio('11', 'assets/sound/unit7/7_6.mp3');
	
	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);

	// Load button sprite
	game.load.image('nen','assets/images/unit7/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit7/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit7/ic_button_back.png');
}
var flag ;
var loop;
var temp =0;
var backgroundCount = 1;
var start =1;
var sound = new Array();
var bot;
var distance = 1;
var flag_sound = 0;
//Speed di chuyen
var direction = 2;

// Setting sound start
var speed = 2;
var m_player;
var duck;
var frog;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,6096,768, 'bg');
	game.world.setBounds(0,0,6096,768);
	game.scale.forceOrientation(false, true);
	
	m_player = game.add.sprite(0, 0, 'm_player');
	m_player.scale.setTo(0.1, 0.1);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop
	m_player.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	duck = game.add.sprite(50,350,'duck');
	duck.scale.setTo(1,1);

	duck1 = game.add.sprite(200,350,'duck');
	duck1.scale.setTo(1,1);

	duck2 = game.add.sprite(350,350,'duck');
	duck2.scale.setTo(1,1);

	duck3 = game.add.sprite(500,350,'duck');
	duck3.scale.setTo(1,1);

	duck4 = game.add.sprite(650,350,'duck');
	duck4.scale.setTo(1,1);

	duck5 = game.add.sprite(800,350,'duck');
	duck5.scale.setTo(1,1);

	duck6 = game.add.sprite(950,350,'duck');
	duck6.scale.setTo(1,1);

	
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');
	sound[8] = game.sound.add('9');
	sound[9] = game.sound.add('10');
	sound[10] = game.sound.add('11');

	flag = true;
	
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	ic_duck = game.add.tileSprite(-50, 700, 456, 318, 'ic_duck');
	ic_duck.inputEnabled = true;
	ic_duck.scale.setTo(1, 1);
	game.add.tween(ic_duck).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_duck = game.add.tileSprite(550, -50, 310, 66, 'text_duck');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_duck.inputEnabled = true;
		game.add.tween(text_duck).to({ x: 550, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');
	
	ic_lotus = game.add.tileSprite(-50,700,475,350,'ic_lotus');
	ic_lotus.scale.setTo(1,1);
	ic_lotus.inputEnabled = true;

	game.add.tween(ic_lotus).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_lotus = game.add.tileSprite(530, -50, 338, 66, 'text_lotus');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_lotus.inputEnabled = true;
		game.add.tween(text_lotus).to({ x: 500, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	ic_frog = game.add.tileSprite(-50, 700, 496, 239, 'ic_frog');
	ic_frog.inputEnabled = true;
	ic_frog.scale.setTo(1, 1);
	game.add.tween(ic_frog).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_frog = game.add.tileSprite(450, -50, 332, 66, 'text_frog');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_frog.inputEnabled = true;
		game.add.tween(text_frog).to({ x: 500, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	//m_player.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_duck.destroy();
		text_number7.destroy();
		ic_duck.destroy();

		bg_lotus = game.add.tileSprite(0,0,6096,768, 'bg_lotus');

		backPlayerBackgroundTwo();

	}

	if (backgroundCount == 3) {
		text_lotus.destroy();
		text_number7.destroy();
		ic_lotus.destroy();

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number7.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	start =0 ;
}

function backPlayerBackgroundThree() {
	start =0;
	setTimeout(function () {
		frog = game.add.sprite(50,230,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(400,200,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(880,240,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(80,370,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(630,350,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(950,450,'frog');
		frog.scale.setTo(1,1);

		frog = game.add.sprite(500,580,'frog');
		frog.scale.setTo(1,1);

	}, 100);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backPlayer() {
	if (start==0) {
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
	}
	start ++;
}

function update() {
	
	backPlayer();


	if(!loop && flag){
		if(backgroundCount ==1){
			setTimeout(function () {
				show1();
			},3000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				show2();
			}, 4000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				show3();
			}, 3000);
		}
	}
}

