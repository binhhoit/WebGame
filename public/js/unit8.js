

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/unit8/character/buom2.png', 564.230769, 250, 13);
	game.load.spritesheet('buom', 'assets/images/unit8/character/Frog.png', 982, 554, 4);
	game.load.spritesheet('bo', 'assets/images/unit8/character/ladybugs.png', 292, 224, 2);

	game.load.image('bg','assets/images/unit8/bg.png');
	game.load.image('bg_flower','assets/images/unit8/bg_flower.png');
	game.load.image('bg_ladybug','assets/images/unit8/bg_ladybug.png');

	game.load.image('buom', 'assets/images/unit8/ic_buom.png');
	game.load.image('bo', 'assets/images/unit8/ic_bo.png');
	game.load.image('chuonchuon', 'assets/images/unit8/ic_chuonchuon.png');

	game.load.image('ic_butterfly', 'assets/images/unit8/ic_butterfly.png');
	game.load.image('ic_dragonfly', 'assets/images/unit8/ic_dragonfly.png');
	game.load.image('ic_ladybug','assets/images/unit8/ic_ladybug.png')

	game.load.image('text_number8', 'assets/images/unit8/text_number8.png');
	game.load.image('text_butterfly', 'assets/images/unit8/text_butterfly.png');
	game.load.image('text_dagronfly', 'assets/images/unit8/text_dagronfly.png');
	game.load.image('text_ladybug', 'assets/images/unit8/text_ladybug.png');
	
	game.load.audio('1', 'assets/sound/unit8/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/unit8/8_8 bo dua.mp3');
	game.load.audio('3', 'assets/sound/unit8/8_8 con buom.mp3');
	game.load.audio('4', 'assets/sound/unit8/8_2.mp3');
	game.load.audio('5', 'assets/sound/unit8/8_3.mp3');
	game.load.audio('6', 'assets/sound/unit8/8_4.mp3');
	game.load.audio('7', 'assets/sound/unit8/8_5.mp3');
	game.load.audio('8', 'assets/sound/unit8/8_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/unit8/8_So 8.mp3');
	game.load.audio('10', 'assets/sound/unit8/8_1.mp3');
	game.load.audio('11', 'assets/sound/unit8/8_6.mp3');

	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);

	// Load button sprite
	game.load.image('nen','assets/images/unit8/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit8/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit8/ic_button_back.png');
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


function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,6096,768, 'bg');
	game.world.setBounds(0,0,6096,768);
	game.scale.forceOrientation(false, true);
	
	// Setting camera follow player.
	game.camera.follow(m_player);
	
	chuonchuon = game.add.sprite(200,150,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(500,120,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(750,150,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(950,250,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(150,300,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(380,350,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(650,380,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

	chuonchuon = game.add.sprite(920,400,'chuonchuon');
	chuonchuon.scale.setTo(1.6,1.6);

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

	flag= true;
	
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	ic_dragonfly = game.add.tileSprite(-50, 700, 569, 316, 'ic_dragonfly');
	ic_dragonfly.inputEnabled = true;
	ic_dragonfly.scale.setTo(1, 1);
	game.add.tween(ic_dragonfly).to({ x: 280, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number8 = game.add.tileSprite(1400, 700, 240, 442, 'text_number8');
		text_dagronfly = game.add.tileSprite(550, -50, 584, 66, 'text_dagronfly');
		text_number8.inputEnabled = true;
		game.add.tween(text_number8).to({ x: 850, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_dagronfly.inputEnabled = true;
		game.add.tween(text_dagronfly).to({ x: 350, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1366, 766, 'nen');
	
	ic_butterfly = game.add.tileSprite(-50,700,458,366,'ic_butterfly');
	ic_butterfly.scale.setTo(1,1);
	ic_butterfly.inputEnabled = true;

	game.add.tween(ic_butterfly).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number8 = game.add.tileSprite(1400, 700, 240, 442, 'text_number8');
		text_butterfly = game.add.tileSprite(530, -50, 383, 66, 'text_butterfly');
		text_number8.inputEnabled = true;
		game.add.tween(text_number8).to({ x: 850, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_butterfly.inputEnabled = true;
		game.add.tween(text_butterfly).to({ x: 500, y: 80 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	ic_ladybug = game.add.tileSprite(-50, 700, 516, 397, 'ic_ladybug');
	ic_ladybug.inputEnabled = true;
	ic_ladybug.scale.setTo(1, 1);
	game.add.tween(ic_ladybug).to({ x: 280, y: 160 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number8 = game.add.tileSprite(1400, 700, 240, 442, 'text_number8');
		text_ladybug = game.add.tileSprite(450, -50, 432, 66, 'text_ladybug');
		text_number8.inputEnabled = true;
		game.add.tween(text_number8).to({ x: 850, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_ladybug.inputEnabled = true;
		game.add.tween(text_ladybug).to({ x: 450, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_dagronfly.destroy();
		text_number8.destroy();
		ic_dragonfly.destroy();

		bg_flower = game.add.tileSprite(0,0,6096,768, 'bg_flower');

		backPlayerBackgroundTwo();

	}

	if (backgroundCount == 3) {
		text_butterfly.destroy();
		text_number8.destroy();
		ic_butterfly.destroy();

		bg_ladybug = game.add.tileSprite(0,0,6096,768, 'bg_ladybug');

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number8.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	start =0 ;
	setTimeout(function () {
		buom = game.add.sprite(300,150,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(500,150,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(700,150,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(900,150,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(200,400,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(400,400,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(600,400,'buom');
		buom.scale.setTo(1.2,1.2);

		buom = game.add.sprite(800,400,'buom');
		buom.scale.setTo(1.2,1.2);


	}, 100);
}

function backPlayerBackgroundThree() {
	bg_flower
	start =0;
	setTimeout(function () {
		bo = game.add.sprite(260,230,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(100,430,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(300,480,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(450,480,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(600,480,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(750,480,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(900,480,'bo');
		bo.scale.add(0.3,0.3);

		bo = game.add.sprite(1050,480,'bo');
		bo.scale.add(0.3,0.3);

	}, 100);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "/api/unit8_game1";
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


