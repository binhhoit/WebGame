

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

	game.load.image('bg','assets/images/unit6/bg.png');


	game.load.image('trung','assets/images/unit6/character/egg.png');
	game.load.image('totrungm','assets/images/unit6/character/nest.png');
	game.load.image('totrung','assets/images/unit6/character/nest_1.png');
	
	game.load.image('bird', 'assets/images/unit6/ic_bird.png');
	game.load.image('egg', 'assets/images/unit6/ic_egg.png');
	game.load.image('nest','assets/images/unit6/ic_totrung.png')

	game.load.image('text_number6', 'assets/images/unit6/text_number6.png');
	game.load.image('text_bird', 'assets/images/unit6/text_bird.png');
	game.load.image('text_egg', 'assets/images/unit6/text_egg.png');
	game.load.image('text_nest', 'assets/images/unit6/text_nest.png');
	
	game.load.audio('1', 'assets/sounds/unit6/6_6 con chim.mp3');
	game.load.audio('2', 'assets/sounds/unit6/6_6 qua trung.mp3');
	game.load.audio('3', 'assets/sounds/unit6/6_ 6 to chim.mp3');
	game.load.audio('4', 'assets/sounds/unit6/6_2.mp3');
	game.load.audio('5', 'assets/sounds/unit6/6_3.mp3');
	game.load.audio('6', 'assets/sounds/unit6/6_4.mp3');
	game.load.audio('7', 'assets/sounds/unit6/6_5.mp3');
	game.load.audio('8', 'assets/sounds/unit6/6_gioi thieu.mp3');
	game.load.audio('9', 'assets/sounds/unit6/6_So 6.mp3');
	game.load.audio('10', 'assets/sounds/unit6/6_1.mp3');


	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);
	game.load.spritesheet('m_bird', 'assets/images/unit6/character/bird.png', 300, 239, 8);

	// Load button sprite
	game.load.image('nen','assets/images/unit6/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit6/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit6/ic_button_back.png');
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
var Bird_1,Bird_2,Bird_3,Bird_4, Bird_5,Bird_6;
var start_sound = 1;
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

	//bird = game.add.sprite(815, 35, 'm_bird');
	//bird.scale.setTo(0.85,0.85);

	Bird_1 = game.add.sprite(815,35,'m_bird');
	Bird_2 = game.add.sprite(965,35,'m_bird');
	Bird_3 = game.add.sprite(1115,35,'m_bird');
	Bird_4 = game.add.sprite(855,135,'m_bird');
	Bird_5 = game.add.sprite(1005,135,'m_bird');
	Bird_6 = game.add.sprite(1155,135,'m_bird');

	Bird_1.scale.setTo(0.5);
	Bird_2.scale.setTo(0.5);
	Bird_3.scale.setTo(0.5);
	Bird_4.scale.setTo(0.5);
	Bird_5.scale.setTo(0.5);
	Bird_6.scale.setTo(0.5);

	Bird_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Bird_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

	Bird_1.animations.play('walk');
	Bird_2.animations.play('walk');
	Bird_3.animations.play('walk');
	Bird_4.animations.play('walk');
	Bird_5.animations.play('walk');
	Bird_6.animations.play('walk');
	
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

	sound[7].play();
	setTimeout(function(){
		sound[9].play();
	},4500);

	flag= true;
	
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	bird_ = game.add.tileSprite(-50, 700, 440, 227, 'bird');
	bird_.inputEnabled = true;
	bird_.scale.setTo(1, 1);
	game.add.tween(bird_).to({ x: 320, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[0].play();
		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_bird = game.add.tileSprite(550, -50, 348, 66, 'text_bird');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bird.inputEnabled = true;
		game.add.tween(text_bird).to({ x: 500, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');
	
	nest = game.add.tileSprite(-50,700,447,207,'nest');
	nest.scale.setTo(1,1);
	nest.inputEnabled = true;

	game.add.tween(nest).to({ x: 320, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[2].play();
		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_nest = game.add.tileSprite(530, -50, 330, 66, 'text_nest');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_nest.inputEnabled = true;
		game.add.tween(text_nest).to({ x: 500, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	egg = game.add.tileSprite(-50, 700, 357, 246, 'egg');
	egg.inputEnabled = true;
	egg.scale.setTo(1.1, 1.1);
	game.add.tween(egg).to({ x: 320, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[1].play();
		text_number6 = game.add.tileSprite(1400, 700, 235, 500, 'text_number6');
		text_egg = game.add.tileSprite(450, -50, 378, 66, 'text_egg');
		text_number6.inputEnabled = true;
		game.add.tween(text_number6).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_egg.inputEnabled = true;
		game.add.tween(text_egg).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_bird.destroy();
		text_number6.destroy();
		bird_.destroy();

	}

	if (backgroundCount == 3) {
		text_nest.destroy();
		text_number6.destroy();
		nest.destroy();

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number6.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	//start =0 ;
	setTimeout(function () {
		totrung = game.add.sprite(850,15,'totrung');
		totrung.scale.setTo(1,1);

		totrung1 = game.add.sprite(1030,5,'totrung');
		totrung1.scale.setTo(1,1);

		totrung2 = game.add.sprite(1200,15,'totrung');
		totrung2.scale.setTo(1,1);

		totrung3 = game.add.sprite(850,150,'totrung');
		totrung3.scale.setTo(1,1);

		totrung4 = game.add.sprite(1030,100,'totrung');
		totrung4.scale.setTo(1,1);

		totrung5 = game.add.sprite(1200,150,'totrung');
		totrung5.scale.setTo(1,1);

	}, 500);
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	start =0;
	setTimeout(function () {
		egg = game.add.sprite(900,20,'trung');
		egg.scale.setTo(1,1);

		egg1 = game.add.sprite(1080,10,'trung');
		egg1.scale.setTo(1,1);

		egg2 = game.add.sprite(1250,20,'trung');
		egg2.scale.setTo(1,1);

		egg3 = game.add.sprite(900,155,'trung');
		egg3.scale.setTo(1,1);

		egg4 = game.add.sprite(1080,105,'trung');
		egg4.scale.setTo(1,1);

		egg5 = game.add.sprite(1250,155,'trung');
		egg5.scale.setTo(1,1);

	}, 100);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit6_game1";
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
	if(backgroundCount ==2){
		if(bg.x > -650){
			bg.x -=direction;
			Bird_1.x -= direction;
			Bird_2.x -= direction;
			Bird_3.x -= direction;
			Bird_4.x -= direction;
			Bird_5.x -= direction;
			Bird_6.x -= direction;

			m_player.animations.play('walk');
			
		}

		if(bg.x > -200 && start_sound == 1){
			sound[3].play();
			start_sound = 2;
		}

		if(bg.x <= -650){
			backPlayerBackgroundTwo();
			start = 0;
			direction =0;
			bg.x = -648;
			m_player.animations.play('idle');
		}

	}

	backPlayer();


	if(!loop && flag){
		if(backgroundCount ==1){
			setTimeout(function () {
				show1();
			},10000);
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



