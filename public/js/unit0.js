

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('buom', 'assets/images/unit0/butterfly_pink.png', 540.857142857, 374, 7);
	game.load.spritesheet('chuonchuon', 'assets/images/unit0/dragonfly.png', 358.571428571, 211, 7);
	game.load.spritesheet('duck', 'assets/images/unit0/duck.png', 140, 236, 8);

	game.load.image('bg','assets/images/unit0/bg_duck.png');
	game.load.image('bg_dragonfly','assets/images/unit0/bg_dragonfly.png');
	game.load.image('bg_butterfly','assets/images/unit0/bg_butterfly.png');

	game.load.image('text_number0', 'assets/images/unit0/text_number0.png');
	game.load.image('text_dragonfly', 'assets/images/unit2/text_dragonfly.png');
	game.load.image('text_butterfly', 'assets/images/unit2/text_butterfly.png');
	game.load.image('text_duck', 'assets/images/unit2/text_duck.png');
	
	game.load.audio('1', 'assets/sound/unit9/9_9 con ca.mp3');
	game.load.audio('2', 'assets/sound/unit9/9_9 oc sen.mp3');
	game.load.audio('3', 'assets/sound/unit9/9_9 con rua.mp3');
	game.load.audio('4', 'assets/sound/unit9/9_2.mp3');
	game.load.audio('5', 'assets/sound/unit9/9_3.mp3');
	game.load.audio('6', 'assets/sound/unit9/9_4.mp3');
	game.load.audio('7', 'assets/sound/unit9/9_5.mp3');
	game.load.audio('8', 'assets/sound/unit9/9_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/unit9/9_So 9.mp3');
	game.load.audio('10', 'assets/sound/unit9/9_1.mp3');


	game.load.image('nen','assets/images/unit9/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit9/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit9/ic_button_back.png');
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
var Duck,Duck1,Duck2;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,6096,768, 'bg');
	game.world.setBounds(0,0,6096,768);
	game.scale.forceOrientation(false, true);

	Duck = game.add.sprite(50, 350, 'duck');
	Duck.scale.setTo(0.8);
	Duck1 = game.add.sprite(250, 350, 'duck');
	Duck1.scale.setTo(0.8);
	Duck2 = game.add.sprite(450, 350, 'duck');
	Duck2.scale.setTo(0.8);


	Duck.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
	Duck2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);


	Duck.animations.play('walk');
	Duck1.animations.play('walk');
	Duck2.animations.play('walk');
	
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

	flag = true;
}


function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	ic_fish = game.add.tileSprite(-50, 700, 487, 284, 'ic_fish');
	ic_fish.inputEnabled = true;
	ic_fish.scale.setTo(1, 1);
	game.add.tween(ic_fish).to({ x: 300, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number9 = game.add.tileSprite(1400, 700, 240, 442, 'text_number9');
		text_fish = game.add.tileSprite(550, -50, 296, 66, 'text_fish');
		text_number9.inputEnabled = true;
		game.add.tween(text_number9).to({ x: 830, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_fish.inputEnabled = true;
		game.add.tween(text_fish).to({ x: 530, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	ic_turtle1 = game.add.tileSprite(-50,700,336,345,'ic_turtle1');
	ic_turtle1.scale.setTo(1,1);
	ic_turtle1.inputEnabled = true;

	game.add.tween(ic_turtle1).to({ x: 350, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number9 = game.add.tileSprite(1400, 700, 240, 442, 'text_number9');
		text_turtle = game.add.tileSprite(530, -50, 326, 66, 'text_turtle');
		text_number9.inputEnabled = true;
		game.add.tween(text_number9).to({ x: 800, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_turtle.inputEnabled = true;
		game.add.tween(text_turtle).to({ x: 530, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	ic_snail = game.add.tileSprite(-50, 700, 390, 360, 'ic_snail');
	ic_snail.inputEnabled = true;
	ic_snail.scale.setTo(1, 1);
	game.add.tween(ic_snail).to({ x: 350, y: 200 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number9 = game.add.tileSprite(1400, 700, 240, 442, 'text_number9');
		text_snail = game.add.tileSprite(450, -50, 416, 66, 'text_snail');
		text_number9.inputEnabled = true;
		game.add.tween(text_number9).to({ x: 820, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_snail.inputEnabled = true;
		game.add.tween(text_snail).to({ x: 530, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_fish.destroy();
		text_number9.destroy();
		ic_fish.destroy();

		bg_turtle = game.add.tileSprite(0,0,6096,768, 'bg_turtle');

		backPlayerBackgroundTwo();

	}

	if (backgroundCount == 3) {
		text_turtle.destroy();
		text_number9.destroy();
		ic_turtle1.destroy();

		bg_snail = game.add.tileSprite(0,0,6096,768, 'bg_snail');

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number9.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	start =0 ;
	setTimeout(function () {
		turtle = game.add.sprite(100,200,'turtle');
		turtle.scale.setTo(1,1);
	}, 100);
}

function backPlayerBackgroundThree() {
	bg_turtle.destroy();
	start =0;
	setTimeout(function () {
		snail = game.add.sprite(50,420,'snail');
		snail.scale.setTo(1,1);
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
	if(backgroundCount ==1 ){
		if(Duck.x < 1368){
			Duck.x += direction;
			Duck1.x += direction;
			Duck2.x += direction;

		}

		if(Duck.x == 1368){
			start =0;
			Duck.x = 1370;
		}
	}

	backPlayer();


	if(!loop && flag){
		if(backgroundCount ==1){
			setTimeout(function () {
				//show1();
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

