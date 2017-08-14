
var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render});


var sound = new Array();
var timer;
var flag ;
var loop;
var temp =0;
var backgroundCount = 1;

var m_player;

//Setting const here!

var distance = 1;

//Speed di chuyen
var direction = 2;

// Setting sound start
var check_flag = 0;
var speed = 2;
var start =1;
var stop = false;

var tao;
var khi2;
var chuoi;

var showkhi_;
var zoom = true;
var run_banana =false;
function preload()  { 

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/unit5/bg.png');

	// Load image
	game.load.image('khi', 'assets/images/unit5/character/monkey.png');
	game.load.image('khi1', 'assets/images/unit5/character/monkey/monkey1.png');
	game.load.image('khi2', 'assets/images/unit5/character/monkey/monkey2.png');
	game.load.image('khi3', 'assets/images/unit5/character/monkey/monkey3.png');
	game.load.image('khi4', 'assets/images/unit5/character/monkey/monkey4.png');
	game.load.image('khi5', 'assets/images/unit5/character/monkey/monkey5.png');


	game.load.image('tao', 'assets/images/unit5/character/apple.png');
	game.load.image('chuoi', 'assets/images/unit5/character/banana.png');

	game.load.image('tao_', 'assets/images/unit5/ic_apple.png');
	game.load.image('chuoi_', 'assets/images/unit5/ic_banana.png');
	game.load.image('khi_','assets/images/unit5/ic_monkey.png')

	game.load.image('text_number5', 'assets/images/unit5/text_number5.png');
	game.load.image('text_apple', 'assets/images/unit5/text_apple.png');
	game.load.image('text_banana', 'assets/images/unit5/text_banana.png');
	game.load.image('text_monkey', 'assets/images/unit5/text_monkey.png');
	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);


	// Load sound
	game.load.audio('1','assets/sounds/unit5/5_1.mp3');
	game.load.audio('2','assets/sounds/unit5/5_3.mp3');
	game.load.audio('3','assets/sounds/unit5/5_4.mp3');
	game.load.audio('4','assets/sounds/unit5/5_5 con khi.mp3');
	game.load.audio('5','assets/sounds/unit5/5_5 qua chuoi.mp3');
	game.load.audio('6','assets/sounds/unit5/5_5 qua tao.mp3');
	game.load.audio('7','assets/sounds/unit5/5_5.mp3');
	game.load.audio('8','assets/sounds/unit5/5_6.mp3');
	game.load.audio('9','assets/sounds/unit5/5_Gioi thieu.mp3');


	// Load button sprite
	game.load.image('nen','assets/images/unit6/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit5/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit5/ic_button_back.png');

}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND
	bg = game.add.tileSprite(0,0,6096,768, 'bg');
	game.world.setBounds(0,0,6096,768);

	
	
	// TIMER
	// PLAYER

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

	//khi = game.add.sprite(400, 550, 'khi');
	khi1 = game.add.sprite(470,540,'khi1');
	khi2 = game.add.sprite(800,520,'khi2');
	khi3 = game.add.sprite(1000,480,'khi3');
	khi4 = game.add.sprite(320,450,'khi4');
	khi5 = game.add.sprite(680,450,'khi5');

	khi1.scale.setTo(0.7);
	khi2.scale.setTo(0.7);
	khi3.scale.setTo(0.7);
	khi4.scale.setTo(0.7);
	khi5.scale.setTo(0.7);

	// Add sound
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');
	sound[8] = game.sound.add('9');

	//m_sound[0] = game.add.audio('m_sound1');

	flag= true;
  
}

function render(){
	//var text = game.debug.spriteInfo(bg, 32, 32);
}
function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	khi_ = game.add.tileSprite(-50, 700, 383, 354, 'khi_');
	khi_.inputEnabled = true;
	khi_.scale.setTo(1, 1);
	game.add.tween(khi_).to({ x: 300, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number5 = game.add.tileSprite(1400, 700, 235, 500, 'text_number5');
		text_monkey = game.add.tileSprite(550, -50, 322, 66, 'text_monkey');
		text_number5.inputEnabled = true;
		game.add.tween(text_number5).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_monkey.inputEnabled = true;
		game.add.tween(text_monkey).to({ x: 500, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	tao_ = game.add.tileSprite(-50,700,352,232,'tao_');
	tao_.scale.setTo(1,1);
	tao_.inputEnabled = true;

	game.add.tween(tao_).to({ x: 300, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number5 = game.add.tileSprite(1400, 700, 235, 500, 'text_number5');
		text_apple = game.add.tileSprite(530, -50, 342, 66, 'text_apple');
		text_number5.inputEnabled = true;
		game.add.tween(text_number5).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_apple.inputEnabled = true;
		game.add.tween(text_apple).to({ x: 500, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	chuoi_ = game.add.tileSprite(-50, 700, 303, 202, 'chuoi_');
	chuoi_.inputEnabled = true;
	chuoi_.scale.setTo(1.1, 1.1);
	game.add.tween(chuoi_).to({ x: 300, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number5 = game.add.tileSprite(1400, 700, 235, 500, 'text_number5');
		text_banana = game.add.tileSprite(450, -50, 395, 66, 'text_banana');
		text_number5.inputEnabled = true;
		game.add.tween(text_number5).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_banana.inputEnabled = true;
		game.add.tween(text_banana).to({ x: 500, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_monkey.destroy();
		text_number5.destroy();
		khi_.destroy();

		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		text_apple.destroy();
		text_number5.destroy();
		tao_.destroy();

		showkhi_ = true;
		setTimeout(function () {
			run_banana =true;
		},1000);
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number5.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	start =0 ;
	setTimeout(function () {
		tao = game.add.sprite(200,25,'tao');
		tao.scale.setTo(1,1);

	}, 1000);
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	showkhi_ = false;
	setTimeout(function () {
		chuoi= game.add.sprite(740,615,'chuoi');
		chuoi.scale.setTo(1,1);

	}, 100);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit5_game1";
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
	if(backgroundCount ==3 && run_banana){
		if(bg.x > -1230){
			bg.x -= direction;
			tao.x -= direction;
			khi1.x -= direction;
			khi2.x -= direction;
			khi3.x -= direction;
			khi4.x -= direction;
			khi5.x -= direction;

			m_player.animations.play('walk');
		}
		if(bg.x <= -1230)
		{
			backPlayerBackgroundThree();
			start =0 ;
			bg.x = -1215;
			direction = 0;
			m_player.animations.play('idle');
			stop = true;
		}
	}

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
		if (backgroundCount == 3 && stop) {
			setTimeout(function () {
				show3();
			}, 3000);
		}
	}

	if(showkhi_){
		if(zoom){
			setTimeout(function () {
				zoom = false;
				khi2.scale.setTo(0.7, 0.7);
			}, 500);
		}
		else {
			setTimeout(function () {
				zoom = true;
				khi2.scale.setTo(0.8, 0.8);
			}, 500);
		}
	}
}
