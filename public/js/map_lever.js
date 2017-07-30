

// Initialize Phaser, and creates a 1350x600px game

var game = new Phaser.Game(1350, 650, Phaser.CANVAS, 'game_div', {preload: preload, create: create});


//CONFIGUARATION AND CONSTANCE

var bg;
var level = new Array();
var sound = new Array();

function preload() { 
		// Function called first to load all the assets

    // Load background .
    game.load.image('bg', 'assets/images/map_lever/map_bg.png');
	
    // Load image
    game.load.image('level_1', 'assets/images/map_lever/1.png');
    game.load.image('level_2', 'assets/images/map_lever/2.png');
    game.load.image('level_3', 'assets/images/map_lever/3.png');
    game.load.image('level_4', 'assets/images/map_lever/4.png');
    game.load.image('level_5', 'assets/images/map_lever/5.png');
    game.load.image('level_6', 'assets/images/map_lever/6.png');
    game.load.image('level_7', 'assets/images/map_lever/7.png');
    game.load.image('level_8', 'assets/images/map_lever/8.png');
    game.load.image('level_9', 'assets/images/map_lever/9.png');
    game.load.image('level_10', 'assets/images/map_lever/10.png');

    game.load.image('practical1', 'assets/images/map_lever/practical1.png');
    game.load.image('practical2', 'assets/images/map_lever/practical2.png');
    game.load.image('practical3', 'assets/images/map_lever/practical3.png');
	
	game.load.image('vn','assets/images/map_lever/vietnamflag.png');
	game.load.image('eng','assets/images/map_lever/350px-Flag_of_the_United_Kingdom_(3-5).svg.png');


    // Load sound
    //game.load.audio('bg_sound', 'map_level/assets/sounds/music.mp3');
	game.scale.forceOrientation(false, true);
	

}

    
function create() { 

    	// Fuction called after 'preload' to setup the game  

      // BACGROUND
      bg = game.add.image(0,0, 'bg');
	  
      // Add sprite
      // level[0] = game.add.sprite(75, 35, 'level_1');
      // level[1] = game.add.sprite(250, 150, 'level_2');
      // level[2] = game.add.sprite(500, 250, 'level_3');
      // level[3] = game.add.sprite(550, 450, 'level_4');
      // level[4] = game.add.sprite(650, 200, 'level_5');
      // level[5] = game.add.sprite(x, y, 'level_6');
      // level[6] = game.add.sprite(x, y, 'level_7');
      // level[7] = game.add.sprite(x, y, 'level_8');
      // level[8] = game.add.sprite(x, y, 'level_9');
      // level[9] = game.add.sprite(x, y, 'level_10');
      
      // Enable input
      // level[0].inputEnabled = true;
      // level[1].inputEnabled = true;
      // level[2].inputEnabled = true;
      // level[3].inputEnabled = true;
      // level[4].inputEnabled = true;
      // level[5].inputEnabled = true;
      // level[6].inputEnabled = true;
      // level[7].inputEnabled = true;
      // level[8].inputEnabled = true;
      // level[9].inputEnabled = true;

      //Button level lession
      level[0] = game.add.button(75, 35, 'level_1',openlink_lv1, this);

      level[1] = game.add.button(200, 75, 'level_2',openlink_lv2, this);

      level[2] = game.add.button(340, 170, 'level_3',openlink_lv3, this);

      level[3] = game.add.button(375, 340, 'level_4',openlink_lv4, this);

      level[4] = game.add.button(475, 425, 'level_5',openlink_lv5, this);

      level[5] = game.add.button(635, 500, 'level_6',openlink_lv6, this);

      level[6] = game.add.button(900, 340, 'level_7',openlink_lv7, this);

      level[7] = game.add.button(1050, 250, 'level_8',openlink_lv8, this);

      level[8] = game.add.button(930, 160, 'level_9',openlink_lv9, this);

      level[9] = game.add.button(1175, 30, 'level_10',openlink_lv10, this);

      // // Button practical.
      level[10] = game.add.button(220, 255, 'practical1',openlink_pr1, this);

      level[11] = game.add.button(800, 425, 'practical2', openlink_pr2, this);

      level[12] = game.add.button(1070, 100, 'practical3', openlink_pr3, this);
      //level[0] = onInputUp.add(, this);

      // Add input
      //level[0].events.onInputDown.add(openlink("http://google.com"), this);

      // Add sound
      //m_sound[0] = game.sound.add('m_sound1');
      //m_sound[0] = game.add.audio('m_sound1');
      //m_sound[0].play();
      //m_sound[0].onDecoded.add(startsound, this);
      // SOUND MANAGER

      // Add keyboard
      //var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
	  
	  vn = game.add.sprite(600, 70, 'vn');
	  vn.scale.setTo(0.32, 0.29);
	  vn.inputEnabled = true;
	  vn.events.onInputDown.add(lang, this);
	  
	  eng = game.add.sprite(680,70, 'eng');
	  eng.scale.setTo(0.2, 0.2);
	  eng.inputEnabled = true;
	  eng.events.onInputDown.add(lang1, this);

}

function lang(){
	var winx = window.location="/bcm/index.html";
}

function lang1(){
	var winx = window.location="/bcm_eng/index.html";
}
 

 // Open link to lesson and practical.
function openlink_lv1()
{
	//var winx = window.location="http://192.168.11.16/Tung/game1/";
	var winx = window.location="level1/baihoc1/index.html";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv2()
{
	var winx = window.location="level2/vd/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv3()
{
	var winx = window.location="level3/baihoc3/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv4()
{
	var winx = window.location="level4/baihoc4/";
  level_4.alpha = 0.3;
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv5()
{
	var winx = window.location="level5/baihoc5/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

function openlink_lv6()
{
	var winx = window.location="level6/baihoc6/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv7()
{
	var winx = window.location="level7/baihoc7/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv8()
{
	var winx = window.location="/bcm/level8/baihoc8/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_lv9()
{
	var winx = window.location="level9/baihoc/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

function openlink_lv10()
{
	var winx = window.location="level10/baihoc/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

function openlink_pr1()
{
	var winx = window.location="level6/game2";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

function openlink_pr2()
{
	var winx = window.location="/bcm/level6/game1";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}
function openlink_pr3()
{
	var winx = window.location="/bcm/level5/game1";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

     
