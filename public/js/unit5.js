
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
	game.load.image('bg', 'assets/images/unit5/bg.png');

	// Load image
	game.load.image('khi', 'assets/images/unit5/chukhi.png');
	game.load.image('cay', 'assets/images/unit5/tree.png');
	game.load.image('tao', 'assets/images/unit5/tao.png');
	game.load.image('cay1', 'assets/images/unit5/banana tree.png');
	game.load.image('chuoi', 'assets/images/unit5/banana.png');
	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 192.75, 284);


	// Load sound
	game.load.audio('1','assets/sounds/unit5/5_Gioi thieu.mp3');
	game.load.audio('2','assets/sounds/unit5/5_1.mp3');
	game.load.audio('3','assets/sounds/unit5/5_So 5.mp3');
	game.load.audio('4','assets/sounds/unit5/5_5 con khi.mp3');
	game.load.audio('5','assets/sounds/unit5/5_2.mp3');
	game.load.audio('6','assets/sounds/unit5/5_3.mp3');
	game.load.audio('7','assets/sounds/unit5/5_5 qua tao.mp3');
	game.load.audio('8','assets/sounds/unit5/3_4.mp3');
	// Load button sprite
	game.load.image('btnNext', 'assets/images/unit5/button1.png');
	
	game.load.image('nen','assets/images/unit5/nenchu.png');

	// Gán Flag
	flag[0] = -1100;
	flag[1] = -2500;
	flag[2] = -3700;
	flag[3] = -5000;
}

function create() {

	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND
	bg = game.add.tileSprite(0,0,6096,720, 'bg');
	game.world.setBounds(0,0,6096,720);

	
	
	// TIMER
	// PLAYER

	m_player = game.add.sprite(0, 150, 'm_player');
	m_player.scale.setTo(1.5, 1.5);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop
	m_player.animations.add('idle', [8], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);

	khi = game.add.sprite(1900, 0, 'khi');
	

	
	
	cay = game.add.sprite(2800, 80, 'cay');
	cay.scale.setTo(0.7, 0.7);
	
	tao = game.add.sprite(2900, 210, 'tao');
	tao.scale.setTo(0.7, 0.7);
	tao1 = game.add.sprite(2970, 300, 'tao');
	tao1.scale.setTo(0.7, 0.7);
	tao2 = game.add.sprite(3040, 210, 'tao');
	tao2.scale.setTo(0.7, 0.7);
	tao3 = game.add.sprite(3110, 300, 'tao');
	tao3.scale.setTo(0.7, 0.7);
	tao4 = game.add.sprite(3180, 210, 'tao');
	tao4.scale.setTo(0.7, 0.7);
	
	cay1 = game.add.sprite(4000, 0, 'cay1');
	cay1.scale.setTo(0.8, 0.8);
	
	
	chuoi = game.add.sprite(4100, 350, 'chuoi');
	chuoi.scale.setTo(0.2, 0.2);
	
	
	
	

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

	//m_sound[0] = game.add.audio('m_sound1');


  
}

function render(){
	//var text = game.debug.spriteInfo(bg, 32, 32);
}




function add_so1()
{
	
	
	m_player.visible = false;

	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[0] = game.add.text(400, 150, '5',style);
	txt[0].inputEnabled = true;
	txt[0].events.onInputDown.add(fail, this);
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to( { x: 1.5, y: 1.5 }, 6000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[1] = game.add.text(500, 600, 'năm',style1);
	
	var style4 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[6] = game.add.text(800, 600, 'con khỉ',style4);

	
	flag_sound = 1;
	setTimeout(function(){btn[0] = game.add.button(1400,620, 'btnNext', movenext1,this); btn[0].scale.setTo(0.5, 0.5);}, 5000);
}
function fail(){
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}

function movenext1()
{
	m_player.visible = true;
	khi.visible = false;
	flag_sound = 2;
	nen.destroy();
	txt[0].destroy();
	txt[1].destroy();
	txt[6].destroy();
	bg.x  -= speed;
	direction = 3;
	btn[0].destroy();
	m_player.animations.play('walk');
}




function add_so2()
{
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	
	m_player.visible = false;
	
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[2] = game.add.text(950, 90, '5',style);
	txt[2].inputEnabled = true;
	txt[2].events.onInputDown.add(fail1, this);
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[2]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[3] = game.add.text(500, 600, 'năm',style1);
	
	var style5 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[7] = game.add.text(800, 600, 'quả táo',style5);

	flag_sound = 3;
	setTimeout(function(){btn[1] = game.add.button(1400,620, 'btnNext', movenext2,this); btn[1].scale.setTo(0.5, 0.5);}, 4000);
}

function fail1(){
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[2]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}
function movenext2()
{
	m_player.visible = true;
	tao.visible = false;
	tao1.visible = false;
	tao2.visible = false;
	tao3.visible = false;
	tao4.visible = false;
	nen.destroy();
	flag_sound = 4;
	txt[2].destroy();
	txt[3].destroy();
	txt[7].destroy();
	bg.x  -= speed;
	direction = 3;
	btn[1].alpha = 0;
	m_player.animations.play('walk');
}



function add_so3()
{
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	
	m_player.visible = false;
	cay1.visible = false;
	
	chuoi.scale.setTo(0.5, 0.5);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[4] = game.add.text(950, 150, '5',style);
	txt[4].inputEnabled = true;
	txt[4].events.onInputDown.add(fail2, this);
	txt[4].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[4]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[4].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[5] = game.add.text(450, 600, 'năm',style1);
	
	var style6 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[8] = game.add.text(700, 600, 'quả chuối',style6);
	
	flag_sound = 5;
	setTimeout(function(){btn[2] = game.add.button(1400,620, 'btnNext', movenext3,this); btn[2].scale.setTo(0.5, 0.5);}, 5000);
}
function fail2(){
	txt[4].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[4]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[4].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
}
function movenext3()
{
	var winx = window.location="/bcm/level5/game1/index.html";

}



function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1
	if( bg.x <= 0 && bg.x > -3700)
	{
		bg.x -=direction ;
		khi.x -=direction ;
		cay.x -=direction ;
		tao.x -=direction ;
		tao1.x -=direction ;
		tao2.x -=direction ;
		tao3.x -=direction ;
		tao4.x -=direction ;
		cay1.x -=direction ;
		chuoi.x -=direction ;

		m_player.animations.play('walk');
	}
	if(bg.x > 0)
	{
		bg.x = 0;
		m_player.animations.play('idle');

	}
	if(bg.x <= -3700)
	{
		bg.x = -3700;
		direction = 0;
		m_player.animations.play('idle');

	}
	// Xét flag 
	//Flag 1
	if(bg.x <= flag[0] && bg.x >= flag[0]-distance)
	{
		bg.x = -1100;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if(check_flag == 0)
		{
			add_so1();
			check_flag =1;
		}
		
	}
	if(bg.x <= flag[1] && bg.x >= flag[1]-distance)
	{
		bg.x = -2500;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if(check_flag == 1)
		{
			add_so2();
			check_flag =2;
		}
		
	}
	if(bg.x <= flag[2] && bg.x >= flag[2]-distance)
	{
		bg.x = -3700;
		direction = 0;
		speed = 0;
		m_player.animations.play('idle');
		if(check_flag == 2)
		{
			add_so3();
			check_flag =3;
		}
		
	}
	

	// Flag Sound

	if( flag_sound == 0)
	{
		setTimeout(function(){sound[0].play();}, 500);
		setTimeout(function(){sound[1].play();}, 5500);
		flag_sound = -1;

	}
	if(flag_sound == 1)
	{
		setTimeout(function(){sound[2].play();}, 3000);
		setTimeout(function(){sound[3].play();}, 4000);
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		setTimeout(function(){sound[4].play();}, 0);
		setTimeout(function(){sound[5].play();}, 3000);
		setTimeout(function(){sound[2].play();}, 10000);
		setTimeout(function(){sound[6].play();}, 11500);
		game.time.events.add(Phaser.Timer.SECOND * 3, Delay1, this);
		
	
		flag_sound = -1;

	}
	function Delay1(){
		m_player.visible = false;
	}
	if(flag_sound == 3)
	{
		
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay3, this);
		flag_sound = -1;
	}
	
	function Delay3(){
		cay.visible = false;
		tao.scale.setTo(1.5, 1.5);
		tao1.scale.setTo(1.5, 1.5);
		tao2.scale.setTo(1.5, 1.5);
		tao3.scale.setTo(1.5, 1.5);
		tao4.scale.setTo(1.5, 1.5);
	}
	
	if( flag_sound == 4)
	{
		setTimeout(function(){ sound[7].play(); }, 1000);
		setTimeout(function(){sound[2].play();}, 7000);
		game.time.events.add(Phaser.Timer.SECOND * 4, Delay2, this);
		flag_sound = -1;

	}
	function Delay2(){
		m_player.visible = false;
	}
	
}
