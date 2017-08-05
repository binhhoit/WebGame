var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create });

var scoretext;
var diem = 0;
var music;

function preload() {

	game.load.image('background', 'assets/mushrooms/unit1_game2/nengame1.png');

	game.load.image('btnNext', 'assets/mushrooms/unit1_game2/ic_button_next.png');
	game.load.image('basketMushroom1', 'assets/mushrooms/unit1_game2/basketMushroomone.png');
	game.load.image('basketMushroom2', 'assets/mushrooms/unit1_game2/basketMushroomTwo.png');

	
	game.load.audio('music', 'assets/sounds/unit1_2/score.mp3');
	//game.load.audio('music2', 'assets/sounds/unit1_2/music.mp3');
	game.load.audio('music1', 'assets/sounds/unit1_2/fail1.mp3');
	game.load.audio('music3', 'assets/sounds/unit1_2/yeah.mp3');
	game.load.audio('music4', 'assets/sounds/unit1_2/1_Game2.mp3');
	game.load.audio('music5', 'assets/sounds/unit1_2/gioi_qua.mp3');
	game.load.audio('music6', 'assets/sounds/unit1_2/fail1.mp3');

	game.scale.forceOrientation(false, true);

}


function create() {
	var background = game.add.sprite(0, 0, 'background');

	music4 = game.add.audio('music4');
	music4.onDecoded.add(start, this);


	var mushroom_one = game.add.sprite(400, 420, 'basketMushroom1');
	mushroom_one.scale.setTo(0.8, 0.8);
	mushroom_one.inputEnabled = true;
	mushroom_one.events.onInputDown.add(score, this);
	mushroom_one.events.onInputDown.add(animation, this);
	mushroom_one.events.onInputDown.add(process1, this);

	var mushroom_two = game.add.sprite(400, 420, 'basketMushroom1');
	mushroom_two.scale.setTo(0.8, 0.8);
	mushroom_two.inputEnabled = true;
	mushroom_two.events.onInputDown.add(score, this);
	mushroom_two.events.onInputDown.add(animation, this);
	mushroom_two.events.onInputDown.add(process1, this);

	var mushroom_three = game.add.sprite(400, 420, 'basketMushroom1');
	mushroom_three.scale.setTo(0.8, 0.8);
	mushroom_three.inputEnabled = true;
	mushroom_three.events.onInputDown.add(score, this);
	mushroom_three.events.onInputDown.add(animation, this);
	mushroom_three.events.onInputDown.add(process1, this);

	var mushroom_four = game.add.sprite(400, 420, 'basketMushroom1');
	mushroom_four.scale.setTo(0.8, 0.8);
	mushroom_four.inputEnabled = true;
	mushroom_four.events.onInputDown.add(score, this);
	mushroom_four.events.onInputDown.add(animation, this);
	mushroom_four.events.onInputDown.add(process1, this);


	var mushroom_six = game.add.sprite(600, 420, 'basketMushroom2');
	mushroom_six.scale.setTo(0.8, 0.8);
	mushroom_six.inputEnabled = true;
	mushroom_six.events.onInputDown.add(fail, this);
	mushroom_six.events.onInputDown.add(animation1, this);

	var mushroom_seven = game.add.sprite(600, 420, 'basketMushroom2');
	mushroom_seven.scale.setTo(0.8, 0.8);
	mushroom_seven.inputEnabled = true;
	mushroom_seven.events.onInputDown.add(fail, this);
	mushroom_seven.events.onInputDown.add(animation1, this);


	//var btnNext = game.add.button(900, 500, 'btnNext', process, this);
	//btnNext.scale.setTo(0.3);

}

//function start() {

//    music.fadeIn(4000);

//}

//function render() {
//    game.debug.soundInfo(music, 20, 32);
//}

function start() {

	music4.fadeIn(4000);

}

function score() {
	music = game.add.audio('music');
	music.play();
	music.fadeIn(100);

	music = game.add.audio('music3');
	music.play();
	music.fadeIn(300);
}
function fail() {
	music = game.add.audio('music1');
	music.play();
	music.fadeIn(100);
}


function animation(mushroom) {
	music = game.add.audio('music3');
	music.play();
	mushroom.inputEnabled = false;
	diem++;
	//scoretext.text = diem;
	mushroom.animations.add('teeter');
	mushroom.animations.play('teeter', 5, true);
	game.add.tween(mushroom).to({ y: [100, 400], x: [100, 120] }, 2000, Phaser.Easing.Quadratic.InOut, true);

}

function animation1(mushroom1) {

	mushroom1.animations.add('teeter');
	mushroom1.animations.play('teeter', 5, true);
	game.add.tween(mushroom1).to({ y: [150, 430], x: [600, 600] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animation2(mushroom2) {

	mushroom2.animations.add('teeter');
	mushroom2.animations.play('teeter', 5, true);
	game.add.tween(mushroom2).to({ y: [150, 430], x: [800, 800] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function process1() {
	if (diem >= 4) {
		music = game.add.audio('music5');
		music.play();
		game.time.events.add(Phaser.Timer.SECOND * 3, Delay1, this);
	}
	else {
		false;
	}
}

function Delay1() {
	var winx = window.location = "/api/unit2";
}