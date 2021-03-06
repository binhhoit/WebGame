

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('buom', 'assets/images/unit0/butterfly_pink.png', 200, 177);
	game.load.spritesheet('chuonchuon', 'assets/images/unit0/dragonfly.png', 329, 292);
	game.load.spritesheet('duck', 'assets/images/unit0/duck.png', 140, 236);

	game.load.image('bg','assets/images/unit0/bg_duck.png');
	game.load.image('bg_dragonfly','assets/images/unit0/bg_dragonfly.png');
	game.load.image('bg_butterfly','assets/images/unit0/bg_butterfly.png');

	game.load.image('text_number0', 'assets/images/unit0/text_number0.png');
	game.load.image('text_dragonfly', 'assets/images/unit0/text_dragonfly.png');
	game.load.image('text_butterfly', 'assets/images/unit0/text_butterfly.png');
	game.load.image('text_duck', 'assets/images/unit0/text_duck.png');
	
	game.load.audio('1', 'assets/sounds/unit0/1_0 buom.mp3');
	game.load.audio('2', 'assets/sounds/unit0/1_0 chuon chuon.mp3');
	game.load.audio('3', 'assets/sounds/unit0/1_0 vịt.mp3');
	game.load.audio('4', 'assets/sounds/unit0/1_1.mp3');
	game.load.audio('5', 'assets/sounds/unit0/1_2.mp3');
	game.load.audio('6', 'assets/sounds/unit0/1_3.mp3');


	game.load.image('nen','assets/images/unit9/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit9/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit9/ic_button_back.png');
}
var flag ;
var loop;
var temp =2;
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
var flag_sound = 0;
var playone=1;
var Duck,Duck1,Duck2;
var Dragonfly_1,Dragonfly_2,Dragonfly_3,Dragonfly_4,Dragonfly_5,Dragonfly_6;
var Butterfly_1,Butterfly_2,Butterfly_3,Butterfly_4,Butterfly_5,Butterfly_6,Butterfly_7,Butterfly_8;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,6096,768, 'bg');
	game.world.setBounds(0,0,6096,768);
	game.scale.forceOrientation(false, true);

	Duck = game.add.sprite(550, 350, 'duck');
	Duck.scale.setTo(0.8);
	Duck1 = game.add.sprite(750, 350, 'duck');
	Duck1.scale.setTo(0.8);
	Duck2 = game.add.sprite(950, 350, 'duck');
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


	flag = true;
}


function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	text_number0 = game.add.tileSprite(1400, 700, 240, 442, 'text_number0');
	text_duck = game.add.tileSprite(550, -50, 374, 66, 'text_duck');
	text_number0.inputEnabled = true;
	game.add.tween(text_number0).to({ x: 580, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	text_duck.inputEnabled = true;
	game.add.tween(text_duck).to({ x: 530, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);


	setTimeout(function () {
		btn();
	}, 4000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	

	text_number0 = game.add.tileSprite(1400, 700, 240, 442, 'text_number0');
	text_dragonfly = game.add.tileSprite(550, -50, 627, 66, 'text_dragonfly');
	text_number0.inputEnabled = true;
	game.add.tween(text_number0).to({ x: 580, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	text_dragonfly.inputEnabled = true;
	game.add.tween(text_dragonfly).to({ x: 430, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);


	setTimeout(function () {
		btn();
	}, 4000);
	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	text_number0 = game.add.tileSprite(1400, 700, 240, 442, 'text_number0');
	text_butterfly = game.add.tileSprite(550, -50, 470, 66, 'text_butterfly');
	text_number0.inputEnabled = true;
	game.add.tween(text_number0).to({ x: 580, y: 180 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	text_butterfly.inputEnabled = true;
	game.add.tween(text_butterfly).to({ x: 480, y: 100 }, 3000, Phaser.Easing.Quadratic.InOut, true);


	setTimeout(function () {
		btn();
	}, 4000);
}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	//m_player.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_duck.destroy();
		text_number0.destroy();

		Duck.destroy();
		Duck1.destroy();
		Duck2.destroy();

		bg_dragonfly = game.add.tileSprite(0,0,6096,768, 'bg_dragonfly');

		backPlayerBackgroundTwo();
		flag_sound= 4;

	}

	if (backgroundCount == 3) {
		text_dragonfly.destroy();
		text_number0.destroy();

		Dragonfly_1.destroy();
		Dragonfly_2.destroy();
		Dragonfly_3.destroy();
		Dragonfly_4.destroy();
		Dragonfly_5.destroy();
		Dragonfly_6.destroy();

		bg_butterfly = game.add.tileSprite(0,0,6096,768, 'bg_butterfly');

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_butterfly.destroy();
		text_number0.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	setTimeout(function () {
		Dragonfly_2 = game.add.sprite(500,120,'chuonchuon');
		Dragonfly_2.scale.setTo(0.6);

		Dragonfly_3 = game.add.sprite(750,150,'chuonchuon');
		Dragonfly_3.scale.setTo(0.6);

		Dragonfly_4 = game.add.sprite(950,250,'chuonchuon');
		Dragonfly_4.scale.setTo(0.6);

		Dragonfly_5 = game.add.sprite(384,300,'chuonchuon');
		Dragonfly_5.scale.setTo(0.6);

		Dragonfly_6 = game.add.sprite(650,350,'chuonchuon');
		Dragonfly_6.scale.setTo(0.6);

		Dragonfly_1 = game.add.sprite(900,400,'chuonchuon');
		Dragonfly_1.scale.setTo(0.6);

	}, 100);

	setTimeout(function () {
		Dragonfly_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
		Dragonfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
		Dragonfly_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
		Dragonfly_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
		Dragonfly_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
		Dragonfly_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);

		Dragonfly_1.animations.play('walk');
		Dragonfly_2.animations.play('walk');
		Dragonfly_3.animations.play('walk');
		Dragonfly_4.animations.play('walk');
		Dragonfly_5.animations.play('walk');
		Dragonfly_6.animations.play('walk');
	},1000);
}

function backPlayerBackgroundThree() {
	bg_dragonfly.destroy();
	setTimeout(function () {
		Butterfly_1 = game.add.sprite(300,150,'buom');
		Butterfly_1.scale.setTo(1.2,1.2);

		Butterfly_2 = game.add.sprite(500,150,'buom');
		Butterfly_2.scale.setTo(1.2,1.2);

		Butterfly_3 = game.add.sprite(700,150,'buom');
		Butterfly_3.scale.setTo(1.2,1.2);

		Butterfly_4 = game.add.sprite(900,150,'buom');
		Butterfly_4.scale.setTo(1.2,1.2);

		Butterfly_5 = game.add.sprite(200,400,'buom');
		Butterfly_5.scale.setTo(1.2,1.2);

		Butterfly_6 = game.add.sprite(400,400,'buom');
		Butterfly_6.scale.setTo(1.2,1.2);

		Butterfly_7 = game.add.sprite(600,400,'buom');
		Butterfly_7.scale.setTo(1.2,1.2);

		Butterfly_8 = game.add.sprite(800,400,'buom');
		Butterfly_8.scale.setTo(1.2,1.2);

	}, 100);

	setTimeout(function () {
		Butterfly_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_5.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_6.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_7.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_8.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

		Butterfly_1.animations.play('walk');
		Butterfly_2.animations.play('walk');
		Butterfly_3.animations.play('walk');
		Butterfly_4.animations.play('walk');
		Butterfly_5.animations.play('walk');
		Butterfly_6.animations.play('walk');
		Butterfly_7.animations.play('walk');
		Butterfly_8.animations.play('walk');
	},1000);
	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit0_game1";
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

	if(backgroundCount ==2 && Dragonfly_1 != undefined){
		if(Dragonfly_1.y > -300){
			Dragonfly_1.y -= direction;
			Dragonfly_2.y -= direction;
			Dragonfly_3.y -= direction;
			Dragonfly_4.y -= direction;
			Dragonfly_5.y -= direction;
			Dragonfly_6.y -= direction;
		}

		if(Dragonfly_1.y == -300){
			start =0 ;
			Dragonfly_1.y = -301;
		}
	}

	if(backgroundCount ==3 & Butterfly_5 != undefined){
		if(Butterfly_5.x < 1368){
			Butterfly_1.x +=direction;
			Butterfly_2.x +=direction;
			Butterfly_3.x +=direction;
			Butterfly_4.x +=direction;
			Butterfly_5.x +=direction;
			Butterfly_6.x +=direction;
			Butterfly_7.x +=direction;
			Butterfly_8.x +=direction;
		}

		if(Butterfly_5.x > 750 && playone ==1){
			flag_sound= 5;
			playone =2;
		}

		if(Butterfly_5.x == 1368){
			start =0;
			Butterfly_5.x = 1370;
		}
	}

	backPlayer();


	if(!loop && flag){
		if(backgroundCount ==1){
			setTimeout(function () {
				show1();
				flag_sound =1;
			},1000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				show2();
				flag_sound= 2;
			}, 1000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				show3();
				flag_sound= 3;
			}, 1000);
		}
	}

	if( flag_sound == 0)
	{
		setTimeout(function(){sound[3].play();}, 0);
		flag_sound = -1;

	}
	
	if(flag_sound == 1)
	{
		setTimeout(function(){sound[2].play();}, 1000);
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		setTimeout(function(){sound[1].play();}, 1000);
		flag_sound = -1;

	}
	
	if( flag_sound == 3)
	{
		setTimeout(function(){sound[0].play();}, 1000);
		flag_sound = -1;

	}
	
	if( flag_sound == 4)
	{
		
		setTimeout(function(){sound[4].play();}, 0);
		flag_sound = -1;

	}
	
	if( flag_sound == 5)
	{
		
		setTimeout(function(){sound[5].play();}, 0);
		flag_sound = -1;
	}
}

