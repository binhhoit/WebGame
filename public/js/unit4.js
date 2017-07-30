
var game = new Phaser.Game(1500, 720, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render});

var btn = new Array();
var txt = new Array();
var sound = new Array();
var timer;
var flag = new Array();

var m_player;

//Setting const here!

var distance = 1;

//Speed di chuyen
var direction = 2;

// Setting sound start
var flag_sound = 0;
var check_flag = 0;
var speed = 2;
function preload()  { 

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/bg6.jpg');

	// Load image
	game.load.image('cay', 'assets/images/caicay.png');
	game.load.image('soc', 'assets/images/socso4.png');
	game.load.image('hatde', 'assets/images/hatde.png');
	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/tho1.png', 192.75, 284);
	game.load.spritesheet('soca', 'assets/images/con sóc.png', 378, 400);

	// Load sound
	game.load.audio('1', 'assets/sounds/4_Gioithieu.mp3');
	game.load.audio('2', 'assets/sounds/4_1.mp3');
	game.load.audio('3', 'assets/sounds/4_So 4.mp3');
	game.load.audio('4', 'assets/sounds/4_4 cai cay.mp3');
	game.load.audio('5', 'assets/sounds/4_2.mp3');
	game.load.audio('6', 'assets/sounds/4_3.mp3');
	game.load.audio('7', 'assets/sounds/4_4 con soc.mp3');
	game.load.audio('8', 'assets/sounds/4_4.mp3');
	game.load.audio('9', 'assets/sounds/4_5.mp3');
	game.load.audio('10', 'assets/sounds/4_4 hat de.mp3');
	
	// Load button sprite
	game.load.image('btnNext', 'assets/images/button1.png');
	
	game.load.image('nen','assets/images/nenchu.png');

	// Gán Flag
	flag[0] = -1200;
	flag[1] = -2400;
}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND
	bg = game.add.tileSprite(0,0,5096,720, 'bg');
	game.world.setBounds(0,0,5096,720);

	
	
	// TIMER
	// PLAYER

	m_player = game.add.sprite(50, 150, 'm_player');
	m_player.scale.setTo(1.5, 1.5);
	
	soca = game.add.sprite(-600, 100, 'soca');
	soca.scale.setTo(1.5, 1.5);
	
	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	
	soca.animations.add('walk', [0, 1, 2, 3, 4], 5, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop
	m_player.animations.add('idle', [0], 8, true);
	
	soca.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	cay = game.add.sprite(1900, 60, 'cay');
	cay.scale.setTo(1, 1);

	soc = game.add.sprite(2000, 500, 'soc');
	soc.scale.setTo(0.5, 0.5);
	soc1 = game.add.sprite(2100, 480, 'soc');
	soc1.scale.setTo(0.5, 0.5);
	soc2 = game.add.sprite(2200, 510, 'soc');
	soc2.scale.setTo(0.5, 0.5);
	soc3 = game.add.sprite(2300, 500, 'soc');
	soc3.scale.setTo(0.5, 0.5);
	
	hatde = game.add.sprite(2100, 530, 'hatde');
	hatde.scale.setTo(0.3, 0.3);
	

	//btnx1 = game.add.button(1400,550, 'btnNext', actionOnClick, this); 


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


  
}

function render(){
	//var text = game.debug.spriteInfo(bg, 32, 32);
}




function add_so1()
{
	soc.visible = false;
	soc1.visible = false;
	soc2.visible = false;
	soc3.visible = false;
	hatde.visible = false;
	
	m_player.visible = false;

	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[0] = game.add.text(400, 150, '4',style);
	txt[0].inputEnabled = true;
	txt[0].events.onInputDown.add(fail, this);
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to( { x: 1.5, y: 1.5 }, 6000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[1] = game.add.text(500, 600, 'bốn',style1);
	
	var style4 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[6] = game.add.text(800, 600, 'cái cây',style4);

	
	flag_sound = 1;
	setTimeout(function(){btn[0] = game.add.button(1400,620, 'btnNext', movenext1,this); btn[0].scale.setTo(0.5, 0.5);}, 5000);
}
function fail(){
	txt[0].scale.setTo(0.5, 0.5);
	game.add.tween(txt[0].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}

function movenext1()
{
	
	soc.visible = true;
	soc1.visible = true;
	soc2.visible = true;
	soc3.visible = true;
	hatde.visible = false;
	cay.visible = true;
	
	flag_sound = 2;
	nen.destroy();
	txt[0].destroy();
	txt[1].destroy();
	txt[6].destroy();
	btn[0].destroy();
	game.time.events.add(Phaser.Timer.SECOND * 10, Delay4, this);

}


function Delay4()
{
	
	m_player.visible = false;
	cay.visible = false;
	hatde.visible = false;
	
	soc.scale.setTo(1.5, 1.5);
	soc.x = 600;
	soc.y = 300;
	soc1.scale.setTo(1.5, 1.5);
	soc1.x = 800;
	soc1.y = 300;
	soc2.scale.setTo(1.5, 1.5);
	soc2.x = 1000;
	soc2.y = 300;
	soc3.scale.setTo(1.5, 1.5);;
	soc3.x = 1200;
	soc3.y = 300;
	
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[2] = game.add.text(300, 150, '4',style);
	txt[2].inputEnabled = true;
	txt[2].events.onInputDown.add(fail1, this);
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[3] = game.add.text(400, 600, 'bốn',style1);
	
	var style4 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[4] = game.add.text(800, 600, 'chú sóc',style4);

	setTimeout(function(){btn[1] = game.add.button(1400,620, 'btnNext', movenext2,this); btn[1].scale.setTo(0.5, 0.5);}, 4000);
}

function fail1(){
	txt[2].scale.setTo(0.5, 0.5);
	game.add.tween(txt[2].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}
function movenext2()
{
	flag_sound = 3;
	
	soc.visible = true;
	soc1.visible = true;
	soc2.visible = true;
	soc3.visible = true;
	cay.visible = true;
	hatde.visible = true;
	
	soc.scale.setTo(0.5, 0.5);
	soc.x = 800;
	soc.y = 500;
	soc1.scale.setTo(0.5, 0.5);
	soc1.x = 900;
	soc1.y = 480;
	soc2.scale.setTo(0.5, 0.5);
	soc2.x = 1000;
	soc2.y = 510;
	soc3.scale.setTo(0.5, 0.5);;
	soc3.x = 1100;
	soc3.y = 500;
	
	nen.destroy();
	txt[2].destroy();
	txt[3].destroy();
	txt[4].destroy();
	btn[1].destroy();
	
	game.time.events.add(Phaser.Timer.SECOND * 11, Delay5, this);

}



function Delay5()
{
	m_player.visible = false;
	cay.visible = false;
	soc.visible = false;
	soc1.visible = false;
	soc2.visible = false;
	soc3.visible = false;

	hatde.scale.setTo(1.5, 1.5);
	hatde.x = 700;
	hatde.y = 250;
	
	
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[5] = game.add.text(300, 150, '4',style);
	txt[5].inputEnabled = true;
	txt[5].events.onInputDown.add(fail2, this);
	txt[5].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[5].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[7] = game.add.text(400, 600, 'bốn',style1);
	
	var style4 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[8] = game.add.text(800, 600, 'hạt dẻ',style4);

	
	setTimeout(function(){btn[2] = game.add.button(1400,620, 'btnNext', movenext3,this); btn[2].scale.setTo(0.5, 0.5);}, 4000);
}
function fail2(){
	txt[5].scale.setTo(0.5, 0.5);
	game.add.tween(txt[5].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}
function movenext3()
{
	var winx = window.location="/bcm/level4/game1/index.html";
}



function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1
	if( bg.x <= 0 && bg.x > -3500)
	{
		bg.x -=direction ;
		cay.x -=direction ;
		soc.x -=direction ;
		soc1.x -=direction ;
		soc2.x -=direction ;
		soc3.x -=direction ;
		hatde.x -=direction ;
		
		m_player.animations.play('walk');
	}
	if(bg.x > 0)
	{
		bg.x = 0;
		m_player.animations.play('idle');

	}
	if(bg.x <= -3500)
	{
		bg.x = -3500;
		direction = 0;
		m_player.animations.play('idle');

	}
	// Xét flag
	
	 
	//Flag 1
	if(bg.x <= flag[0] && bg.x >= flag[0]-distance)
	{

		bg.x = -1200;
		direction = 0;
		speed = 0;

		m_player.animations.play('idle');
		if(check_flag == 0)
		{
			add_so1();
			
			check_flag =1;
			
			
		}

	}

	

	// Flag Sound

	if( flag_sound == 0)
	{
		setTimeout(function(){sound[0].play();}, 0);
		setTimeout(function(){sound[1].play();}, 7000);
		flag_sound = -1;

	}
	if(flag_sound == 1)
	{
		setTimeout(function(){sound[2].play();}, 4000);
		setTimeout(function(){sound[3].play();}, 5000);
		flag_sound = -1;
	}
	if(flag_sound == 2)
	{
		setTimeout(function(){sound[4].play();}, 0);
		setTimeout(function(){sound[5].play();}, 4000);
		setTimeout(function(){sound[2].play();}, 10000);
		setTimeout(function(){sound[6].play();}, 11500);
		flag_sound = -1;
	}
	
	if(flag_sound == 3)
	{
		setTimeout(function(){sound[7].play();}, 0);
		setTimeout(function(){sound[8].play();}, 4000);
		setTimeout(function(){sound[2].play();}, 11000);
		setTimeout(function(){sound[9].play();}, 12000);
		flag_sound = -1;
	}
	
}
