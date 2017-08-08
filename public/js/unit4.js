
var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render});

function preload()  { 

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/unit4/bg.png');

	// Load image
	game.load.image('cay', 'assets/images/unit4/ic_tree.png');
	game.load.image('soc', 'assets/images/unit4/ic_squirrel.png');
	game.load.image('hatde', 'assets/images/unit4/ic_chestnut.png');
	// Load spritesheet

	game.load.image('text_number4', 'assets/images/unit3/text_number4.png');
	game.load.image('text_tree', 'assets/images/unit3/text_tree.png');
	game.load.image('text_squirrel', 'assets/images/unit3/text_squirrel.png');
	game.load.image('text_chestnut', 'assets/images/unit3/text_chestnut.png');

	// Load sound
	game.load.audio('1', 'assets/sounds/unit4/4_Gioithieu.mp3');
	game.load.audio('2', 'assets/sounds/unit4/4_1.mp3');
	game.load.audio('3', 'assets/sounds/unit4/4_So 4.mp3');
	game.load.audio('4', 'assets/sounds/unit4/4_4 cai cay.mp3');
	game.load.audio('5', 'assets/sounds/unit4/4_2.mp3');
	game.load.audio('6', 'assets/sounds/unit4/4_3.mp3');
	game.load.audio('7', 'assets/sounds/unit4/4_4 con soc.mp3');
	game.load.audio('8', 'assets/sounds/unit4/4_4.mp3');
	game.load.audio('9', 'assets/sounds/unit4/4_5.mp3');
	game.load.audio('10', 'assets/sounds/unit4/4_4 hat de.mp3');
	
	game.load.image('nen','assets/images/unit2/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit1/ic_button_back.png');

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
var toong;

var zoom = true;

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0,0,1366,768,'bg');

	
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
	sound[9] = game.sound.add('10');
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

function showBear() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	gau = game.add.tileSprite(-50, 700, 447, 264, 'gau');
	gau.inputEnabled = true;
	gau.scale.setTo(1, 1);
	game.add.tween(gau).to({ x: 300, y: 220 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_bear = game.add.tileSprite(550, -50, 298, 66, 'text_bear');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bear.inputEnabled = true;
		game.add.tween(text_bear).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function showBehive() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	toong1 = game.add.tileSprite(300,190,420,280,'toong');
	toong1.scale.setTo(1,1);
	toong1.inputEnabled = true;

	game.add.tween(toong1).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_beehive = game.add.tileSprite(530, -50, 258, 66, 'text_beehive');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_beehive.inputEnabled = true;
		game.add.tween(text_beehive).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function showHoney() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	humatong = game.add.tileSprite(-50, 700, 442, 168, 'humatong');
	humatong.inputEnabled = true;
	humatong.scale.setTo(1.1, 1.1);
	game.add.tween(humatong).to({ x: 300, y: 240 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number3 = game.add.tileSprite(1400, 700, 235, 516, 'text_number3');
		text_honey = game.add.tileSprite(450, -50, 390, 66, 'text_honey');
		text_number3.inputEnabled = true;
		game.add.tween(text_number3).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_honey.inputEnabled = true;
		game.add.tween(text_honey).to({ x: 450, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_bear.destroy();
		text_number3.destroy();
		gau.destroy();

		bg_bee = game.add.tileSprite(0,0,1366,768,'bg_bee');
		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		text_beehive.destroy();
		text_number3.destroy();
		toong.destroy();

		bg = game.add.tileSprite(0,0,1366,768,'bg');
		gau = game.add.sprite(500, 320, 'gau');
		gau.scale.setTo(1, 1);
		gau.inputEnabled = true;
		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		hoa.destroy();
		text_butterfly.destroy();
		text_number2.destroy();
		buom.destroy();
		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	bg.destroy();
	setTimeout(function () {
		toong = game.add.sprite(720,12,'toong');
		toong.scale.setTo(1,1);
		toong.inputEnabled = true;

		showBehive_=true;
	}, 1000);
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	showBehive_= false;
	bg_bee.destroy();
	setTimeout(function () {
		matong = game.add.sprite(500,450,'matong');
		matong.scale.setTo(0.65,0.65);
		matong.inputEnabled= true;

		matong1 = game.add.sprite(790,435,'matong');
		matong1.scale.setTo(0.5,0.5);
		matong1.inputEnabled= true;

		matong2 = game.add.sprite(910,440,'matong');
		matong2.scale.setTo(0.65,0.65);
		matong2.inputEnabled= true;

	}, 1000);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backPlayer() {
	if (backgroundCount==0) {
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
	backgroundCount ++;
}

function backPlayer_2() {
	if (gau.x < game.width /5) {
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
}

function backPlayer_3() {
	if (backgroundCount ==4) {
		loop = true;
		temp = 0;
	} else {
		if (temp == 0) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
	}
	backgroundCount ++;
}

function update() {
	if (backgroundCount ==4 || backgroundCount ==5){
		backPlayer_3();
	}
	else 
		backPlayer();

	if(!loop && flag){
		if(backgroundCount ==2){
			setTimeout(function () {
				showBear();
			},3000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				showBehive();
			}, 4000);
		}
		if (backgroundCount == 6) {
			setTimeout(function () {
				showHoney();
			}, 3000);
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
}