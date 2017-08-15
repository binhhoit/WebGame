

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('duck', 'assets/images/unit7/character/duck.png', 140, 236);
	game.load.spritesheet('frog', 'assets/images/unit7/character/frog.png', 140, 236, 8);

	game.load.image('bg','assets/images/unit7/bg.png');
	game.load.image('bg_lotus','assets/images/unit7/bg_lotus.png');

	//game.load.image('duck', 'assets/images/unit7/ic_duck2.png');
	//game.load.image('frog', 'assets/images/unit7/ic_frog2.png');

	game.load.image('ic_duck', 'assets/images/unit7/ic_duck.png');
	game.load.image('ic_frog', 'assets/images/unit7/ic_frog.png');
	game.load.image('ic_lotus','assets/images/unit7/ic_lotus.png')

	game.load.image('text_number7', 'assets/images/unit7/text_number7.png');
	game.load.image('text_duck', 'assets/images/unit7/text_duck.png');
	game.load.image('text_frog', 'assets/images/unit7/text_frog.png');
	game.load.image('text_lotus', 'assets/images/unit7/text_lotus.png');
	
	game.load.audio('1', 'assets/sounds/unit7/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sounds/unit7/7_ 7 con vit.mp3');
	game.load.audio('3', 'assets/sounds/unit7/7_7 con ech.mp3');
	game.load.audio('4', 'assets/sounds/unit7/7_1.mp3');
	game.load.audio('5', 'assets/sounds/unit7/7_3.mp3');
	game.load.audio('6', 'assets/sounds/unit7/7_4.mp3');
	game.load.audio('7', 'assets/sounds/unit7/7_5.mp3');
	game.load.audio('8', 'assets/sounds/unit7/7_6.mp3');
	game.load.audio('9', 'assets/sounds/unit7/7_7 con ech.mp3');
	game.load.audio('10', 'assets/sounds/unit7/7_7.mp3');
	game.load.audio('11', 'assets/sounds/unit7/7_Gioi thieu.mp3');
	
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
	
	Duck = game.add.sprite(50,350,'duck');
	Duck.scale.setTo(1,1);

	Duck1 = game.add.sprite(200,350,'duck');
	Duck1.scale.setTo(1,1);

	Duck2 = game.add.sprite(350,350,'duck');
	Duck2.scale.setTo(1,1);

	Duck3 = game.add.sprite(500,350,'duck');
	Duck3.scale.setTo(1,1);

	Duck4 = game.add.sprite(650,350,'duck');
	Duck4.scale.setTo(1,1);

	Duck5 = game.add.sprite(800,350,'duck');
	Duck5.scale.setTo(1,1);

	Duck6 = game.add.sprite(950,350,'duck');
	Duck6.scale.setTo(1,1);

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

	sound[10].play();
	setTimeout(function () {
		sound[3].play();
	},3500);
	setTimeout(function () {
		sound[4].play();
		Duck.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Duck6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);


		Duck.animations.play('walk');
		Duck1.animations.play('walk');
		Duck2.animations.play('walk');
		Duck3.animations.play('walk');
		Duck4.animations.play('walk');
		Duck5.animations.play('walk');
		Duck6.animations.play('walk');
	},9000);

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
		sound[1].play();
		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_duck = game.add.tileSprite(550, -50, 310, 66, 'text_duck');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_duck.inputEnabled = true;
		game.add.tween(text_duck).to({ x: 550, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');
	
	ic_lotus = game.add.tileSprite(-50,700,475,350,'ic_lotus');
	ic_lotus.scale.setTo(1,1);
	ic_lotus.inputEnabled = true;

	game.add.tween(ic_lotus).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[0].play();
		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_lotus = game.add.tileSprite(530, -50, 338, 66, 'text_lotus');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_lotus.inputEnabled = true;
		game.add.tween(text_lotus).to({ x: 500, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1500, 766, 'nen');

	ic_frog = game.add.tileSprite(-50, 700, 496, 239, 'ic_frog');
	ic_frog.inputEnabled = true;
	ic_frog.scale.setTo(1, 1);
	game.add.tween(ic_frog).to({ x: 350, y: 205 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[2].play();
		text_number7 = game.add.tileSprite(1400, 700, 216, 442, 'text_number7');
		text_frog = game.add.tileSprite(450, -50, 332, 66, 'text_frog');
		text_number7.inputEnabled = true;
		game.add.tween(text_number7).to({ x: 880, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_frog.inputEnabled = true;
		game.add.tween(text_frog).to({ x: 500, y: 70 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);

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
		sound[5].play();
		setTimeout(function(){
			sound[6].play();
		},3500);

		backPlayerBackgroundTwo();

	}

	if (backgroundCount == 3) {
		text_lotus.destroy();
		text_number7.destroy();
		ic_lotus.destroy();
		sound[7].play();
		setTimeout(function(){
			sound[9].play();
			Frog_1 = game.add.sprite(50,130,'frog');
			Frog_1.scale.setTo(1,1);

			Frog_2 = game.add.sprite(400,100,'frog');
			Frog_2.scale.setTo(1,1);

			Frog_3 = game.add.sprite(880,140,'frog');
			Frog_3.scale.setTo(1,1);

			Frog_4 = game.add.sprite(80,270,'frog');
			Frog_4.scale.setTo(1,1);

			Frog_5 = game.add.sprite(630,250,'frog');
			Frog_5.scale.setTo(1,1);

			Frog_6 = game.add.sprite(950,350,'frog');
			Frog_6.scale.setTo(1,1);

			Frog_7 = game.add.sprite(500,480,'frog');
			Frog_7.scale.setTo(1,1);

			Frog_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
			Frog_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

			Frog_1.animations.play('walk');
			Frog_2.animations.play('walk');
			Frog_3.animations.play('walk');
			Frog_4.animations.play('walk');
			Frog_5.animations.play('walk');
			Frog_6.animations.play('walk');
			Frog_7.animations.play('walk');
		},4500);
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

	setTimeout(function () {
		start =0;
	},10000);
	
}

function backToNextGame() {
	window_next = window.location = "unit7_game1";
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
			},15500);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				show2();
			}, 11000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				show3();
			}, 3000);
		}
	}
}

