//khong thay doi
var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render});
//khong thay doi tu dong so 4 -> 22
function preload()  { 
	//khong doi
	game.scale.forceOrientation(false, true);
	

	//khong doi 
	game.load.image('bg_bee', 'assets/images/unit3/bg_bee.png');
	game.load.image('bg', 'assets/images/unit3/bg.png');


	// thay hinh, sua ten va duong dan
	game.load.image('gau', 'assets/images/unit3/ic_bear.png');
	//game.load.image('gau1', 'assets/images/unit3/superbear1.png');
	//game.load.image('gau2', 'assets/images/unit3/superbear2.png');
	game.load.image('toong', 'assets/images/unit3/ic_beehive.png');
	game.load.image('humatong', 'assets/images/unit3/ic_honey.png');
	game.load.image('matong', 'assets/images/unit3/honey.png');

	game.load.image('text_number3', 'assets/images/unit3/text_number3.png');
	game.load.image('text_beehive', 'assets/images/unit3/text_beehive.png');
	game.load.image('text_honey', 'assets/images/unit3/text_honey.png');
	game.load.image('text_bear', 'assets/images/unit3/text_bear.png');

	game.load.image('nen','assets/images/unit2/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit1/ic_button_back.png');

	// Load spritesheet
	game.load.spritesheet('bear', 'assets/images/unit3/character/bear.png', 110, 205);
	game.load.image('bear_honey', 'assets/images/unit3/character/bear_honey.png');

	//thay am thanh, doi ten vaf duong dan
	game.load.audio('1','assets/sounds/unit3/3_1.mp3');
	game.load.audio('2','assets/sounds/unit3/3_2.mp3');
	game.load.audio('3','assets/sounds/unit3/3_3 chu gau.mp3');
	game.load.audio('4','assets/sounds/unit3/3_3 hu mat ong.mp3');
	game.load.audio('5','assets/sounds/unit3/3_3 to ong.mp3');
	game.load.audio('6','assets/sounds/unit3/3_3.mp3');
	game.load.audio('7','assets/sounds/unit3/3_5.mp3');
	game.load.audio('8','assets/sounds/unit3/3_Gioithieu.mp3');
	
}

var flag ;
var loop;
var temp =0;
var sound = new Array();
var distance = 1;
var flag_sound = 0;
var backgroundCount = 1;
var m_player;

var showBehive_;
var showBear_;
var toong;

var zoom = true;

var bear;
var start =1;

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0,0,1366,768,'bg');

	gau = game.add.sprite(500, 320, 'gau');
	gau.scale.setTo(1, 1);

	game.camera.follow(gau);

	// Add sound, doi ten am thanh giong trong phan preload
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');

	sound[7].play();

	setTimeout(function(){
		sound[0].play();
	},7000);

	flag = true;
	showBear_ = true;
  
}
//k doi
function render(){
	//var text = game.debug.spriteInfo(bg, 32, 32);
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function showBear() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	gau = game.add.tileSprite(-50, 700, 498, 262, 'gau');
	gau.inputEnabled = true;
	gau.scale.setTo(1, 1);
	game.add.tween(gau).to({ x: 280, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[2].play();
		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_bear = game.add.tileSprite(550, -50, 298, 66, 'text_bear');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bear.inputEnabled = true;
		game.add.tween(text_bear).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 5000);
}

function showBehive() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	toong1 = game.add.tileSprite(-50,700,420,280,'toong');
	toong1.scale.setTo(1,1);
	toong1.inputEnabled = true;

	game.add.tween(toong1).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[4].play();
		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_beehive = game.add.tileSprite(530, -50, 258, 66, 'text_beehive');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_beehive.inputEnabled = true;
		game.add.tween(text_beehive).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);

	
}

function showHoney() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	humatong = game.add.tileSprite(-50, 700, 442, 168, 'humatong');
	humatong.inputEnabled = true;
	humatong.scale.setTo(1.1, 1.1);
	game.add.tween(humatong).to({ x: 300, y: 240 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[3].play();
		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_honey = game.add.tileSprite(450, -50, 390, 66, 'text_honey');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_honey.inputEnabled = true;
		game.add.tween(text_honey).to({ x: 450, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		showBear_ = false;
		text_bear.destroy();
		text_number3.destroy();
		gau.destroy();

		bg_bee = game.add.tileSprite(0,0,1366,768,'bg_bee');

		//bear = game.add.sprite(100,500,'bear');
		//bear.scale.setTo(0.8);

		//bear.animations.add('walk', [0, 1, 2, 3, 4, 5], 10, true);
		//bear.animations.play('walk');
		sound[1].play();
		setTimeout(function(){
			backPlayerBackgroundTwo();
		},3000);
	}

	if (backgroundCount == 3) {
		text_beehive.destroy();
		text_number3.destroy();
		toong.destroy();
		toong1.destroy();

		bg_bee = game.add.tileSprite(0,0,1366,768,'bg_bee');
		sound[6].play();

		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_honey.destroy();
		text_number3.destroy();
		humatong.destroy();
		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	start =0 ;
	bg.destroy();
	sound[5].play();
	setTimeout(function () {
		toong = game.add.sprite(720,12,'toong');
		toong.scale.setTo(1,1);
		toong.inputEnabled = true;

		showBehive_=true;
	}, 500);
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	start =0 ;
	showBehive_= false;
	bg_bee.destroy();
	setTimeout(function () {
		bear_honey = game.add.sprite(100,300,'bear_honey');
		bear_honey.scale.setTo(1,1);

	}, 1000);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit3_game1";
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
				showBear();
			},10500);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				showBehive();
			}, 6000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				showHoney();
			}, 4500);
		}
	}
	
	if(showBehive_){
		if(zoom){
			setTimeout(function () {
				zoom = false;
				toong.scale.setTo(1, 1);
			}, 500);
		}
		else {
			setTimeout(function () {
				zoom = true;
				toong.scale.setTo(1.2, 1.2);
			}, 500);
		}
	}

	if(showBear_){
		if(zoom){
			setTimeout(function () {
				zoom = false;
				gau.scale.setTo(1, 1);
			}, 500);
		}
		else {
			setTimeout(function () {
				zoom = true;
				gau.scale.setTo(1.2, 1.2);
			}, 500);
		}
	}
}
