

// Initialize Phaser, and creates a 1350x600px game

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, render: render });


//CONFIGUARATION AND CONSTANCE

var bg;
var level = new Array();
var sound = new Array();

function preload() {
  // Load background .
  game.load.image('bg', 'api/assets/images/map_lever/bg.png');

  // Load image
  game.load.image('unit_1', 'api/assets/images/map_lever/ic_unit1.png');
  game.load.image('unit_2', 'api/assets/images/map_lever/ic_unit2.png');
  game.load.image('unit_3', 'api/assets/images/map_lever/ic_unit3.png');
  game.load.image('unit_4', 'api/assets/images/map_lever/ic_unit4.png');
  game.load.image('unit_5', 'api/assets/images/map_lever/ic_unit5.png');
  game.load.image('unit_6', 'api/assets/images/map_lever/ic_unit6.png');
  game.load.image('unit_7', 'api/assets/images/map_lever/ic_unit7.png');
  game.load.image('unit_8', 'api/assets/images/map_lever/ic_unit8.png');
  game.load.image('unit_9', 'api/assets/images/map_lever/ic_unit9.png');
  game.load.image('unit_0', 'api/assets/images/map_lever/ic_unit0.png');

  // Load sound
  game.scale.forceOrientation(false, true);
	game.load.audio('start', 'api/assets/sounds/maplever/map_lever.mp3');


}

function render() {
  //game.debug.spriteInfo(level[9], 32, 32);
}

function create() {

  // Fuction called after 'preload' to setup the game  

  // BACGROUND
  bg = game.add.image(0, 0, 'bg');

  sound[0] = game.add.audio('start');
  sound[0].play();
  sound[0].loopFull();

  //Button level lession
  level[0] = game.add.button(220.1, 209.1, 'unit_1', openlink_lv1, this);

  level[1] = game.add.button(406.4, 209.1, 'unit_2', openlink_lv2, this);

  level[2] = game.add.button(595, 209.1, 'unit_3', openlink_lv3, this);

  level[3] = game.add.button(781, 209.1, 'unit_4', openlink_lv4, this);

  level[4] = game.add.button(960.2, 209.1, 'unit_5', openlink_lv5, this);

  level[5] = game.add.button(962.6, 482.5, 'unit_6', openlink_lv6, this);

  level[6] = game.add.button(782.4, 481.5, 'unit_7', openlink_lv7, this);

  level[7] = game.add.button(596.2, 471.3, 'unit_8', openlink_lv8, this);

  level[8] = game.add.button(402.8, 485.5, 'unit_9', openlink_lv9, this);

  level[9] = game.add.button(221.3, 477.4, 'unit_0', openlink_0, this);

}

// Open link to lesson and practical.
function openlink_lv1() {
  var winx = window.location = "api/unit1";
}

function openlink_lv2() {
  var winx = window.location = "api/unit2";
}

function openlink_lv3() {
  var winx = window.location = "api/unit3";
}

function openlink_lv4() {
  var winx = window.location = "api/unit4";
}

function openlink_lv5() {
  var winx = window.location = "api/unit5";
}

function openlink_lv6() {
  var winx = window.location = "api/unit6";
}

function openlink_lv7() {
  var winx = window.location = "api/unit7";
}

function openlink_lv8() {
  var winx = window.location = "api/unit8";
}

function openlink_lv9() {
  var winx = window.location = "api/unit9";
}

function openlink_0() {
  var winx = window.location = "api/unit0";
}

