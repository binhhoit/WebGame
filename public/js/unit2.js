var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

function preload() {
	game.scale.forceOrientation(false, true);

    game.load.spritesheet('bot', 'assets/images/unit2/bee3.png', 1514.25, 1833, 8);
	//game.load.spritesheet('khi', 'assets/images/unit2/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/unit2/character/butterfly.png', 219, 202);
	game.load.image('bg','assets/images/unit2/bg.png');
	//game.load.image('hoa','assets/images/unit2/hoa1.png');
	game.load.image('hoa','assets/images/unit2/character/flower.png');
	game.load.image('ic_butterfly','assets/images/unit2/ic_butterfly.png');

	game.load.image('text_number2', 'assets/images/unit2/text_number2.png');
	game.load.image('text_flower', 'assets/images/unit2/texy_flower.png');
	game.load.image('text_butterfly', 'assets/images/unit2/text_butterfly.png');
	game.load.image('text_bee', 'assets/images/unit2/text_bee.png');

	game.load.image('nen','assets/images/unit2/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit1/ic_button_back.png');
	
	game.load.audio('1', 'assets/sounds/unit2/2_2 bong hoa.mp3');
	game.load.audio('2', 'assets/sounds/unit2/2_2 con buom.mp3');
	game.load.audio('3', 'assets/sounds/unit2/2_2 con ong.mp3');
	game.load.audio('4', 'assets/sounds/unit2/2_2.mp3');
	game.load.audio('5', 'assets/sounds/unit2/2_3.mp3');
	game.load.audio('6', 'assets/sounds/unit2/2_4.mp3');
	game.load.audio('7', 'assets/sounds/unit2/2_5.mp3');
	game.load.audio('8', 'assets/sounds/unit2/2_6.mp3');
	game.load.audio('9', 'assets/sounds/unit2/2_Gioithieu.mp3');
	game.load.audio('10', 'assets/sounds/unit2/2_So 2.mp3');
	
}
var flag ;
var loop;
var temp =0;
var sound = new Array();
var distance = 1;
var flag_sound = 0;
var backgroundCount = 1;
var start =1;

var showFLower_ = false;
var hoa, hoa1;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0,0,1366,768,'bg');
	
	hoa = game.add.sprite(500, 300, 'hoa');
	hoa.scale.setTo(1, 1);

	hoa1 = game.add.sprite(700, 300, 'hoa');
	hoa1.scale.setTo(1, 1);
	
	game.camera.follow(hoa);
	
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

	flag_sound = 0;

	flag = true;
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function showFlower() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	hoa_ = game.add.tileSprite(-50, 700, 203, 359, 'hoa');
	hoa_.scale.setTo(1, 1);

	hoa_1 = game.add.tileSprite(-50, 700, 203, 359, 'hoa');
	hoa_1.scale.setTo(1, 1);

	game.add.tween(hoa_).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(hoa_1).to({ x: 500, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
	flag_sound = 1;
		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_flower = game.add.tileSprite(500, -50, 348, 66, 'text_flower');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_flower.inputEnabled = true;
		game.add.tween(text_flower).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 5000);
}

function showBee() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	bot = game.add.tileSprite(-50, 700, 1500, 1800, 'bot');
	bot1 = game.add.tileSprite(-120, 750, 1500, 1800, 'bot');

	bot.scale.setTo(0.1, 0.1);
	bot1.scale.setTo(0.1, 0.1);

	bot.inputEnabled = true;
	bot1.inputEnabled = true;

	game.add.tween(bot).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(bot1).to({ x: 410, y: 280 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {	
		sound[2].play();
		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_bee = game.add.tileSprite(500, -50, 308, 66, 'text_bee');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bee.inputEnabled = true;
		game.add.tween(text_bee).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function showButterfly() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	ic_butterfly = game.add.tileSprite(-50, 700, 469, 213, 'ic_butterfly');
	ic_butterfly.inputEnabled = true;
	ic_butterfly.scale.setTo(1, 1);

	game.add.tween(ic_butterfly).to({ x: 250, y: 250 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[1].play();
		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_butterfly = game.add.tileSprite(500, -50, 355, 66, 'text_butterfly');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_butterfly.inputEnabled = true;
		game.add.tween(text_butterfly).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	//hoa.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		showFLower_= false;
		text_flower.destroy();
		text_number2.destroy();
		hoa_.destroy();
		hoa_1.destroy();

		bg = game.add.tileSprite(0,0,1366,768,'bg');
	
		hoa2 = game.add.sprite(500, 300, 'hoa');
		hoa2.scale.setTo(1, 1);

		hoa3 = game.add.sprite(700, 300, 'hoa');
		hoa3.scale.setTo(1, 1);
		sound[4].play();
		setTimeout(function(){
			bot = game.add.sprite(550, 95, 'bot');
			bot1 = game.add.sprite(750, 115, 'bot');
			bot.inputEnabled = true;
			bot1.inputEnabled = true;

			bot.scale.setTo(0.15);
			bot1.scale.setTo(0.15);

			bot.animations.add('run');
			bot1.animations.add('run');

		    bot.animations.play('run', 10, true);
			bot1.animations.play('run', 10, true);
		},800);
		setTimeout(function () {
			backPlayerBackgroundTwo();
		},2500);
	}

	if (backgroundCount == 3) {
		text_bee.destroy();
		text_number2.destroy();
		hoa.destroy();
		bot.destroy();
		bot1.destroy();

		bg = game.add.tileSprite(0,0,1366,768,'bg');
	
		hoa4 = game.add.sprite(500, 300, 'hoa');
		hoa4.scale.setTo(1, 1);

		hoa5 = game.add.sprite(700, 300, 'hoa');
		hoa5.scale.setTo(1, 1);

		sound[6].play();

		setTimeout(function(){
			backPlayerBackgroundThree();
		},2800);
	}

	if (backgroundCount == 4) {
		hoa.destroy();
		text_butterfly.destroy();
		text_number2.destroy();
		buom.destroy();
		buom1.destroy();
		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	start =0;
	setTimeout(function () {
		sound[5].play();
	}, 500);

	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	start =0;
	setTimeout(function () {
		sound[7].play();
		Butterfly_1 = game.add.sprite(560, 200, 'buom');
		Butterfly_1.scale.setTo(0.7);
		Butterfly_1.inputEnabled = true;

		Butterfly_2 = game.add.sprite(760, 200, 'buom');
		Butterfly_2.scale.setTo(0.7);
		Butterfly_2.inputEnabled = true;

		Butterfly_1.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		Butterfly_2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);

		Butterfly_1.animations.play('walk');
		Butterfly_2.animations.play('walk');

	}, 500);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit2_game1";
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

	if(!loop && flag)
	{
		if(backgroundCount ==1){
			setTimeout(function () {
				showFlower();
			},7000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				showBee();
			}, 4000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				showButterfly();
			}, 5000);
		}
	}

	if(showFLower_){
		setTimeout(function () {
			showFLower_ = false;
			hoa.scale.setTo(1.2);
			hoa1.scale.setTo(1.2);
		},1000);
	}
	else {
		setTimeout(function () {
			showFLower_ = true;
			hoa.scale.setTo(1);
			hoa1.scale.setTo(1);
		},1000);
	}
	
	
	if( flag_sound == 0)
	{
		setTimeout(function(){sound[8].play();}, 0);
		setTimeout(function () {		sound[3].play();		showFLower_ = true;	},4500);
		flag_sound = -1;

	}
	
	if(flag_sound == 1)
	{
		setTimeout(function(){sound[0].play();}, 0);
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		setTimeout(function(){sound[1].play();}, 0);
		flag_sound = -1;
	}
	
	if( flag_sound == 3)
	{
		setTimeout(function(){sound[2].play();}, 2000);
		flag_sound = -1;
	}
}
