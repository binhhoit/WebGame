//khong thay doi
var game = new Phaser.Game(1500, 720, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update, render: render});
//khong thay doi tu dong so 4 -> 22
var btn = new Array();
var txt = new Array();
var sound = new Array();
var timer;
var flag = new Array();

var m_player;



var distance = 1;


var direction = 2;


var flag_sound = 0;
var check_flag = 0;
var speed = 2;
function preload()  { 
	//khong doi
	game.scale.forceOrientation(false, true);
	

	//khong doi 
	game.load.image('bg', 'assets/images/bg6.png');

	// thay hinh, sua ten va duong dan
	game.load.image('gau', 'assets/images/gau.png');
	//game.load.image('gau1', 'assets/images/superbear1.png');
	//game.load.image('gau2', 'assets/images/superbear2.png');
	game.load.image('toong', 'assets/images/toong3.png');
	game.load.image('humatong', 'assets/images/humatong.png');
	game.load.image('cay', 'assets/images/tree.png');

	// thay animation, doi ten, duong dan va kich thuoc
	game.load.spritesheet('m_player', 'assets/images/tho1.png', 192.75, 284);


	//thay am thanh, doi ten vaf duong dan
	game.load.audio('1','assets/sounds/3_Gioithieu.mp3');
	game.load.audio('2','assets/sounds/3_1.mp3');
	game.load.audio('3','assets/sounds/3_So 3.mp3');
	game.load.audio('4','assets/sounds/3_3 chu gau.mp3');
	game.load.audio('5','assets/sounds/3_2.mp3');
	game.load.audio('6','assets/sounds/3_3.mp3');
	game.load.audio('7','assets/sounds/3_3 to ong.mp3');
	game.load.audio('8','assets/sounds/3_4.mp3');
	game.load.audio('9','assets/sounds/3_3 hu mat ong.mp3');
	// k doi
	game.load.image('btnNext', 'assets/images/button1.png');
	// k doi
	game.load.image('nen','assets/images/nenchu.png');

	// Gán Flag, k doi
	flag[0] = -1100;
	flag[1] = -2300;
	flag[2] = -3500;
	flag[3] = -5000;
}

function create() {

	// PHYSICS SYSTEM, k doi
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// BACKGROUND, k doi
	bg = game.add.tileSprite(0,0,5096,720, 'bg');
	game.world.setBounds(0,0,5096,720);

	
	
	// TIMER
	// PLAYER
	//thay doi ten m_player voi ten moi dat trong phan preload
	m_player = game.add.sprite(0, 150, 'm_player');
	m_player.scale.setTo(1.5, 1.5);

	// add animation, doi ten va so hinh trong animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop, doi ten animation
	m_player.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE, k thay doi
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.doi ten m_player neu dat ten khac
	game.camera.follow(m_player);
	//doi ten vaf vi tri sao cho hop li tu dong 96 -> 118
	gau = game.add.sprite(1800, 150, 'gau');
	gau.scale.setTo(0.5, 0.5);
	//gau1 = game.add.sprite(1950, 260, 'gau2');
	//gau1.scale.setTo(0.4, 0.4);
	//gau2 = game.add.sprite(2050, 150, 'gau');
	//gau2.scale.setTo(0.5, 0.5);
	
	cay = game.add.sprite(2600, 50, 'cay');
	cay.scale.setTo(0.7, 0.7);
	
	toong = game.add.sprite(2700, 180, 'toong');
	toong.scale.setTo(0.6, 0.6);
	toong1 = game.add.sprite(2850, 200, 'toong');
	toong1.scale.setTo(0.6, 0.6);
	toong2 = game.add.sprite(3000, 190, 'toong');
	toong2.scale.setTo(0.6, 0.6);
	
	humatong = game.add.sprite(3800, 320, 'humatong');
	humatong.scale.setTo(1.2, 1.2);
	humatong1 = game.add.sprite(4000, 320, 'humatong');
	humatong1.scale.setTo(1.2, 1.2);
	humatong2 = game.add.sprite(4200, 320, 'humatong');
	humatong2.scale.setTo(1.2, 1.2);
	
	

	//btnx1 = game.add.button(1400,550, 'btnNext', actionOnClick, this); 


	// Add sound, doi ten am thanh giong trong phan preload
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');
	sound[8] = game.sound.add('9');

	//m_sound[0] = game.add.audio('m_sound1');


  
}
//k doi
function render(){
	//var text = game.debug.spriteInfo(bg, 32, 32);
}




function add_so1()
{
	m_player.visible = false;
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[0] = game.add.text(400, 150, '3',style);
	txt[0].inputEnabled = true;
	txt[0].events.onInputDown.add(fail, this);
	txt[0].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[0]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[0].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[1] = game.add.text(500, 600, 'ba',style1);
	
	var style4 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[6] = game.add.text(700, 600, 'con gấu',style4);

	
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
	gau.visible = false;
	//gau1.visible = false;
	//gau2.visible = false;
	flag_sound = 2;
	nen.destroy();
	txt[0].destroy();
	txt[1].destroy();
	txt[6].destroy();
	bg.x  -= speed;
	direction = 3;
	btn[0].alpha = 0;
	m_player.animations.play('walk');
}




function add_so2()
{
	nen = game.add.tileSprite(0,0,5096,720, 'nen');
	game.world.setBounds(0,0,5096,720);
	
	m_player.visible = false;
	
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[2] = game.add.text(950, 100, '3',style);
	txt[2].inputEnabled = true;
	txt[2].events.onInputDown.add(fail1, this);
	txt[2].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[2]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[2].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[3] = game.add.text(500, 600, 'ba',style1);
	
	var style5 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[7] = game.add.text(700, 600, 'tổ ong',style5);

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
	toong.visible = false;
	toong1.visible = false;
	toong2.visible = false;
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
	
	humatong.visible = true;
	humatong1.visible = true;
	humatong2.visible = true;
	m_player.visible = false;
	
	var style = { font: 'bolder 300px Arial', fill: 'red'};
  	txt[4] = game.add.text(950, 150, '3',style);
	txt[4].inputEnabled = true;
	txt[4].events.onInputDown.add(fail2, this);
	txt[4].scale.setTo(0.5, 0.5);
	//game.add.tween(txt[4]).to({ y: [0, 150], x: [850, 950] }, 4000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(txt[4].scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
	
	var style1 = { font: 'bolder 100px Arial', fill: 'red'};
	txt[5] = game.add.text(350, 600, 'ba',style1);
	
	var style6 = { font: 'bolder 100px Arial', fill: 'black'};
	txt[8] = game.add.text(550, 600, 'hủ mật ong',style6);
	
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
	var winx = window.location="/bcm/level3/game1/index.html";

}



function update() {
	// Function called 60 times per second
	//Check flag
	//Flag 1
	if( bg.x <= 0 && bg.x > -3500)
	{
		bg.x -=direction ;
		gau.x -=direction ;
		//gau1.x -=direction ;
		//gau2.x -=direction ;
		cay.x -=direction ;
		toong.x -=direction ;
		toong1.x -=direction ;
		toong2.x -=direction ;
		humatong.x -=direction ;
		humatong1.x -=direction ;
		humatong2.x -=direction ;
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
		bg.x = -2300;
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
		bg.x = -3500;
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
		setTimeout(function(){sound[1].play();}, 4000);
		flag_sound = -1;

	}
	if(flag_sound == 1)
	{
		setTimeout(function(){sound[2].play();}, 1000);
		setTimeout(function(){sound[3].play();}, 2000);
		setTimeout(function(){sound[4].play();}, 4000);
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		
		setTimeout(function(){sound[5].play();}, 1000);
		setTimeout(function(){sound[2].play();}, 7000);
		setTimeout(function(){sound[6].play();}, 8500);
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
		toong.scale.setTo(1.3, 1.3);
		toong1.scale.setTo(1.3, 1.3);
		toong2.scale.setTo(1.3, 1.3);
	}
	
	if( flag_sound == 4)
	{
		setTimeout(function(){ sound[7].play(); }, 1000);
		setTimeout(function(){sound[2].play();}, 7000);
		setTimeout(function(){sound[8].play();}, 8000);
		game.time.events.add(Phaser.Timer.SECOND * 4, Delay2, this);
		flag_sound = -1;

	}
	function Delay2(){
		m_player.visible = false;
	}
	
}
