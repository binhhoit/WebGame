var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create, render: render });

var scoretext;
var diem = 0;
var music;
var mushroom_one, mushroom_two, mushroom_three, mushroom_four, mushroom_six, mushroom_seven;

function preload() {

	game.load.image('background', 'assets/images/unit1_game2/nengame1.png');

	game.load.image('btnNext', 'assets/images/unit1_game2/ic_button_next.png');
	game.load.image('basketMushroom1', 'assets/images/unit1_game2/basketMushroomone.png');
	game.load.image('basketMushroom2', 'assets/images/unit1_game2/basketMushroomTwo.png');


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

	mushroom_one = game.add.sprite(98.6, 529, 'basketMushroom1');
	mushroom_one.scale.setTo(0.8, 0.8);
	mushroom_one.inputEnabled = true;

	mushroom_one.events.onInputDown.add(score, this);
	mushroom_one.events.onInputDown.add(animationTrue, this);
	mushroom_one.events.onInputDown.add(process, this);

	mushroom_two = game.add.sprite(388.7, 270, 'basketMushroom1');
	mushroom_two.scale.setTo(0.8, 0.8);
	mushroom_two.inputEnabled = true;
	mushroom_two.events.onInputDown.add(score, this);
	mushroom_two.events.onInputDown.add(animationTrue, this);
	mushroom_two.events.onInputDown.add(process, this);

	mushroom_three = game.add.sprite(726.3, 64, 'basketMushroom1');
	mushroom_three.scale.setTo(0.8, 0.8);
	mushroom_three.inputEnabled = true;
	mushroom_three.events.onInputDown.add(score, this);
	mushroom_three.events.onInputDown.add(animationTrue, this);
	mushroom_three.events.onInputDown.add(process, this);

	mushroom_four = game.add.sprite(893, 64, 'basketMushroom1');
	mushroom_four.scale.setTo(0.8, 0.8);
	mushroom_four.inputEnabled = true;
	mushroom_four.events.onInputDown.add(score, this);
	mushroom_four.events.onInputDown.add(animationTrue, this);
	mushroom_four.events.onInputDown.add(process, this);


	mushroom_six = game.add.sprite(1079.1, 64, 'basketMushroom2');
	mushroom_six.scale.setTo(0.8, 0.8);
	mushroom_six.inputEnabled = true;
	mushroom_six.events.onInputDown.add(fail, this);
	mushroom_six.events.onInputDown.add(animationFalse, this);

	mushroom_seven = game.add.sprite(802, 532, 'basketMushroom2');
	mushroom_seven.scale.setTo(0.8, 0.8);
	mushroom_seven.inputEnabled = true;
	mushroom_seven.events.onInputDown.add(fail, this);
	mushroom_seven.events.onInputDown.add(animationFalse_, this);


	//var btnNext = game.add.button(900, 500, 'btnNext', process, this);
	//btnNext.scale.setTo(0.3);

}

//function start() {

//    music.fadeIn(4000);

//}

function render() {
	//game.debug.spriteInfo(mushroom_one, 32, 32);
}

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



function animationTrue(image) {
	image.destroy();
}

function animationFalse(image) {

	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [1079.1, 1079.1], y: [-64, 64] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animationFalse_(image) {

	image.animations.add('teeter');
	image.animations.play('teeter', 5, true);
	game.add.tween(image).to({ x: [802, 802], y: [432, 532] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}


function process() {
	if (diem >= 4) {
		music = game.add.audio('music5');
		music.play();
		setTimeout(function () {
			delay();
		}, 2000);
	}
	else {
		false;
	}
}

function delay() {
	var winx = window.location = "/api/unit2";
}