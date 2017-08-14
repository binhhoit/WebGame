
var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update});

function preload()  { 

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets
	game.load.spritesheet('Squirrel', 'assets/images/charactor_animation/squirrel.png', 192, 252);
	// Load background 
	game.load.image('bg', 'assets/images/unit4/bg.png');
	game.load.image('bg_1', 'assets/images/unit4/bg_1.png');

	// Load image
	game.load.image('cay', 'assets/images/unit4/ic_tree.png');
	game.load.image('msoc', 'assets/images/unit4/ic_squirrel.png');
	game.load.image('hatde', 'assets/images/unit4/ic_chestnut.png');
	game.load.image('asoc', 'assets/images/unit4/ic_soc.png');
	game.load.image('sochatde', 'assets/images/unit4/ic_sochatde.png');
	// Load spritesheet

	game.load.image('text_number4', 'assets/images/unit4/text_number4.png');
	game.load.image('text_tree', 'assets/images/unit4/text_tree.png');
	game.load.image('text_squirrel', 'assets/images/unit4/text_squirrel.png');
	game.load.image('text_chestnut', 'assets/images/unit4/text_chestnut.png');

	// Load sound
	game.load.audio('1', 'assets/sounds/unit4/4_1.mp3');
	game.load.audio('2', 'assets/sounds/unit4/4_2.mp3');
	game.load.audio('3', 'assets/sounds/unit4/4_3.mp3');
	game.load.audio('4', 'assets/sounds/unit4/4_4 cai cay.mp3');
	game.load.audio('5', 'assets/sounds/unit4/4_4 con soc.mp3');
	game.load.audio('6', 'assets/sounds/unit4/4_4 hat de.mp3');
	game.load.audio('7', 'assets/sounds/unit4/4_4.mp3');
	game.load.audio('8', 'assets/sounds/unit4/4_Gioithieu.mp3');
	
	
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

var toong;

var zoom = true;
var start =1;

var zoomSoc_;
var zoomSocDe_;
var Squirrel1,Squirrel2,Squirrel3,Squirrel4;
var sochatde,sochatde1,sochatde2,sochatde3;


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
	
	sound[7].play();
	setTimeout(function(){
		sound[0].play();
	},5000);

	setTimeout(function () {
		sound[1].play();
	},7000);

	flag= true;
}


function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function show1() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	cay = game.add.tileSprite(-50, 700, 350, 365, 'cay');
	cay.inputEnabled = true;
	cay.scale.setTo(1, 1);
	game.add.tween(cay).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[3].play();
		text_number4 = game.add.tileSprite(1400, 700, 235, 500, 'text_number4');
		text_tree = game.add.tileSprite(550, -50, 318, 66, 'text_tree');
		text_number4.inputEnabled = true;
		game.add.tween(text_number4).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_tree.inputEnabled = true;
		game.add.tween(text_tree).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);
}

function show2() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	msoc = game.add.tileSprite(-50,700,337,359,'msoc');
	msoc.scale.setTo(1,1);
	msoc.inputEnabled = true;

	game.add.tween(msoc).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[4].play();
		text_number4 = game.add.tileSprite(1400, 700, 235, 500, 'text_number4');
		text_squirrel = game.add.tileSprite(530, -50, 315, 66, 'text_squirrel');
		text_number4.inputEnabled = true;
		game.add.tween(text_number4).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_squirrel.inputEnabled = true;
		game.add.tween(text_squirrel).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 3000);

	setTimeout(function () {
		btn();
	}, 6000);

	
}

function show3() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	hatde = game.add.tileSprite(-50, 700, 263, 294, 'hatde');
	hatde.inputEnabled = true;
	hatde.scale.setTo(1.1, 1.1);
	game.add.tween(hatde).to({ x: 340, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {
		sound[5].play();
		text_number4 = game.add.tileSprite(1400, 700, 235, 500, 'text_number4');
		text_chestnut = game.add.tileSprite(450, -50, 289, 66, 'text_chestnut');
		text_number4.inputEnabled = true;
		game.add.tween(text_number4).to({ x: 780, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_chestnut.inputEnabled = true;
		game.add.tween(text_chestnut).to({ x: 550, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

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
		text_tree.destroy();
		text_number4.destroy();
		cay.destroy();
		sound[2].play();
		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		text_squirrel.destroy();
		text_number4.destroy();
		msoc.destroy();
		bg.destroy();

		bg_1 = game.add.tileSprite(0,0,1366,768,'bg_1');
		sound[6].play();
		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		text_chestnut.destroy();
		text_number4.destroy();
		hatde.destroy();

		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	zoomSoc_ = true;
	
	Squirrel1 = game.add.sprite(50, 450, 'Squirrel');
	Squirrel1.scale.setTo(1);
	Squirrel2 = game.add.sprite(265, 450, 'Squirrel');
	Squirrel2.scale.setTo(1);
	Squirrel3 = game.add.sprite(550, 450, 'Squirrel');
	Squirrel3.scale.setTo(1);
	Squirrel4 = game.add.sprite(820, 450, 'Squirrel');
	Squirrel4.scale.setTo(1);

	setTimeout(function () {
		//Squirrel1.animations.add('walk', [0, 1,2,3,4,5,6], 5, true);
		//Squirrel2.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
		//Squirrel3.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);
		//Squirrel4.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 5, true);

		//Squirrel1.animations.play('walk');
		//Squirrel2.animations.play('walk');
		//Squirrel3.animations.play('walk');
		//Squirrel4.animations.play('walk');
		start =0 ;
	},2000)
	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	zoomSoc_ = false;
	zoomSocDe_ = true;

	sochatde = game.add.sprite(50,450,'sochatde');
	sochatde.scale.setTo(1,1);

	sochatde1 = game.add.sprite(300,500,'sochatde');
	sochatde1.scale.setTo(1,1);

	sochatde2 = game.add.sprite(550,500,'sochatde');
	sochatde2.scale.setTo(1,1);

	sochatde3 = game.add.sprite(750,470,'sochatde');
	sochatde3.scale.setTo(1,1);
	setTimeout(function () {
		start =0 ;

	}, 2000);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backToNextGame() {
	window_next = window.location = "unit4_game1";
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
			},12500);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				show2();
			}, 9500);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				show3();
			}, 3000);
		}
	}

	if(zoomSoc_){
		if(zoom){
			setTimeout(function () {
				zoom = false;
				Squirrel1.scale.setTo(1);
				Squirrel1.scale.setTo(1);
				Squirrel1.scale.setTo(1);
				Squirrel1.scale.setTo(1);
			}, 500);
		}
		else {
			setTimeout(function () {
				zoom = true;
				Squirrel1.scale.setTo(1.2);
				Squirrel1.scale.setTo(1.2);
				Squirrel1.scale.setTo(1.2);
				Squirrel1.scale.setTo(1.2);
			}, 500);
		}
	}

	if(zoomSocDe_){
		if(zoom){
			setTimeout(function () {
				zoom = false;
				sochatde.scale.setTo(1);
				sochatde1.scale.setTo(1);
				sochatde2.scale.setTo(1);
				sochatde3.scale.setTo(1);
			}, 500);
		}
		else {
			setTimeout(function () {
				zoom = true;
				sochatde.scale.setTo(1.2);
				sochatde1.scale.setTo(1.2);
				sochatde2.scale.setTo(1.2);
				sochatde3.scale.setTo(1.2);
			}, 500);
		}
	}
}