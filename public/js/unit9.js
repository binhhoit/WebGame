

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/con oc.png', 540.857142857, 374, 7);
	game.load.spritesheet('bot4', 'assets/images/con oc1.png', 358.571428571, 211, 7);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/con rua.png', 1164.2, 703, 5);
	game.load.spritesheet('bo', 'assets/images/fish1.png', 518.2, 390, 5);
	game.load.image('bg','assets/images/bg6.jpg');


	game.load.image('lake','assets/images/lake.png');
	game.load.image('nen','assets/images/nenchu.png');
	game.load.image('btn','assets/images/button1.png');
	
	game.load.audio('1', 'assets/sound/9_9 con ca.mp3');
	game.load.audio('2', 'assets/sound/9_9 oc sen.mp3');
	game.load.audio('3', 'assets/sound/9_9 con rua.mp3');
	game.load.audio('4', 'assets/sound/9_2.mp3');
	game.load.audio('5', 'assets/sound/9_3.mp3');
	game.load.audio('6', 'assets/sound/9_4.mp3');
	game.load.audio('7', 'assets/sound/9_5.mp3');
	game.load.audio('8', 'assets/sound/9_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/9_So 9.mp3');
	game.load.audio('10', 'assets/sound/9_1.mp3');

	
	
	flag[0] = -3500;
}
var flag = new Array();
var sound = new Array();
var bot;
var distance = 1;
var flag_sound = 0;
//Speed di chuyen
var direction = 2;

// Setting sound start
var speed = 2;
function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,5096,720, 'bg');
	game.world.setBounds(0,0,5096,720);
	game.scale.forceOrientation(false, true);
	
	lake = game.add.sprite(3000, 450, 'lake');
	lake.scale.setTo(0.25, 0.35);
	

	

	
	
    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(3000, 460, 'bot');
	bot1 = game.add.sprite(3100, 460, 'bot');
	bot2 = game.add.sprite(3200, 460, 'bot');
	bot3 = game.add.sprite(3300, 460, 'bot');
	bot4 = game.add.sprite(3400, 470, 'bot4');
	buom = game.add.sprite(3300, 530, 'buom');
	
	bo = game.add.sprite(3100, 540, 'bo');
	bo1 = game.add.sprite(3150, 560, 'bo');
	bo2 = game.add.sprite(3200, 530, 'bo');
	bo3 = game.add.sprite(3250, 540, 'bo');
	bo4 = game.add.sprite(3120, 580, 'bo');
	bo5 = game.add.sprite(3180, 600, 'bo');
	bo6 = game.add.sprite(3230, 590, 'bo');
	bo7 = game.add.sprite(3110, 600, 'bo');
	bo8 = game.add.sprite(3260, 570, 'bo');


	bot.scale.setTo(0.15, 0.15);
	bot1.scale.setTo(0.15, 0.15);
	bot2.scale.setTo(0.15, 0.15);
	bot3.scale.setTo(0.15, 0.15);
	bot4.scale.setTo(0.15, 0.15);
	buom.scale.setTo(0.2, 0.2);
	bo.scale.setTo(0.1, 0.1);
	bo1.scale.setTo(0.1, 0.1);
	bo2.scale.setTo(0.1, 0.1);
	bo3.scale.setTo(0.1, 0.1);
	bo4.scale.setTo(0.1, 0.1);
	bo5.scale.setTo(0.1, 0.1);
	bo6.scale.setTo(0.1, 0.1);
	bo7.scale.setTo(0.1, 0.1);
	bo8.scale.setTo(0.1, 0.1);

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
	bot1.animations.add('run');
	bot2.animations.add('run');
	bot3.animations.add('run');
	bot4.animations.add('run');
	buom.animations.add('run');
	bo.animations.add('run');
	bo1.animations.add('run');
	bo2.animations.add('run');
	bo3.animations.add('run');
	bo4.animations.add('run');
	bo5.animations.add('run');
	bo6.animations.add('run');
	bo7.animations.add('run');
	bo8.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 4, true);
	bot1.animations.play('run', 4, true);
	bot2.animations.play('run', 4, true);
	bot3.animations.play('run', 4, true);
	bot4.animations.play('run', 4, true);
	buom.animations.play('run', 5, true);
	bo.animations.play('run', 5, true);
	bo1.animations.play('run', 5, true);
	bo2.animations.play('run', 5, true);
	bo3.animations.play('run', 5, true);
	bo4.animations.play('run', 5, true);
	bo5.animations.play('run', 5, true);
	bo6.animations.play('run', 5, true);
	bo7.animations.play('run', 5, true);
	bo8.animations.play('run', 5, true);
	
	khi = game.add.sprite(1700, 200, 'khi');
	khi.scale.setTo(1.3, 1.3);
	khi.animations.add('run');
	khi.animations.play('run', 10, true);
	
	

	game.camera.follow(khi);
	
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


	
	
}



function update() {

	khi.x += 2;



	
	if(flag[0])
	{

		if(khi.x == 2750){
			//game.camera.follow(lake);
		
			khi.visible = false;
			
			bo.scale.setTo(0.3, 0.3);
			bo.x = 2600;
			bo.y = 350;
			bo1.scale.setTo(0.3, 0.3);
			bo1.x = 2750;
			bo1.y = 350;
			bo2.scale.setTo(0.3, 0.3);
			bo2.x = 2900;
			bo2.y = 350;
			bo3.scale.setTo(0.3, 0.3);
			bo3.x = 3050;
			bo3.y = 350;
			bo4.scale.setTo(0.3, 0.3);
			bo4.x = 2600;
			bo4.y = 450;
			bo5.scale.setTo(0.3, 0.3);
			bo5.x = 2750;
			bo5.y = 450;
			bo6.scale.setTo(0.3, 0.3);
			bo6.x = 2900;
			bo6.y = 450;
			bo7.scale.setTo(0.3, 0.3);
			bo7.x = 3050;
			bo7.y = 450;
			bo8.scale.setTo(0.3, 0.3);
			bo8.x = 3200;
			bo8.y = 400;
			
			
			bot.visible = false;
			bot1.visible = false;
			bot2.visible = false;
			bot3.visible = false;
			bot4.visible = false;
		
			lake.visible = false;
		
			buom.visible = false;
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2200, 150, '9',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2300, 600, 'chín',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2700, 600, 'con cá',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3400,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 8000);
			function actionbtn()
			{
				game.camera.follow(lake);
				flag_sound = 2;
				bo.visible = false;
				bo1.visible = false;
				bo2.visible = false;
				bo3.visible = false;
				bo4.visible = false;
				bo5.visible = false;
				bo6.visible = false;
				bo7.visible = false;
				bo8.visible = false;
				lake.visible = true;
				buom.visible = true;
			
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				btn.destroy();
				game.time.events.add(Phaser.Timer.SECOND * 3, delay1, this);
			}
			
			function delay1(){
				
				
				
				buom.scale.setTo(0.5, 0.5);
				buom.x = 3000;
				buom.y = 250;
				
				lake.visible = false;
				khi.visible = false;
	
				
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2600, 150, '9',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 9000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2700, 600, 'chín',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(3000, 600, 'con rùa',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 10000);
				function actionbtn1()
				{
					flag_sound = 4;
					
					game.camera.follow(lake);
					bot.visible = true;
					bot1.visible = true;
					bot2.visible = true;
					bot3.visible = true;
					bot4.visible = true;
					lake.visible = true;
					bo.visible = false;
					bo1.visible = false;
					bo2.visible = false;
					bo3.visible = false;
					bo4.visible = false;
					bo5.visible = false;
					bo6.visible = false;
					bo7.visible = false;
					bo8.visible = false;
					buom.visible = false;
					nen.destroy();
					text.destroy();
					text1.destroy();
					text2.destroy();
					btn.destroy();
					game.time.events.add(Phaser.Timer.SECOND * 3, delay2, this);
				}
				function delay2(){
				
					flag_sound = 5;
					
					
					
					bot.scale.setTo(0.6, 0.6);
					bot.x = 2650;
					bot.y = 320;
					bot1.scale.setTo(0.6, 0.6);
					bot1.x = 2850;
					bot1.y = 300;
					bot2.scale.setTo(0.6, 0.6);
					bot2.x = 3050;
					bot2.y = 280;
					bot3.scale.setTo(0.6, 0.6);
					bot3.x = 3250;
					bot3.y = 280;
					bot4.scale.setTo(0.6, 0.6);
					bot4.x = 3450;
					bot4.y = 280;
					
					lake.visible = false;
					khi.visible = false;
				
	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2400, 150, '9',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2600, 600, 'chín',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(3000, 600, 'con ốc sên',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 11000);
					function actionbtn()
					{
				
						var winx = window.location="/bcm/level9/game1/";
					}
				}
			}
		}
	}
	
	
	if( flag_sound == 0)
	{
		setTimeout(function(){sound[7].play();}, 2000);
		setTimeout(function(){sound[9].play();}, 5000);
		
		flag_sound = -1;
	}
	

	
	if(flag_sound == 1)
	{

		
		setTimeout(function(){sound[8].play();}, 6000);
		
		setTimeout(function(){sound[0].play();}, 7000);
		
	
		
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		
		setTimeout(function(){sound[3].play();}, 0);
		setTimeout(function(){sound[4].play();}, 3000);

		flag_sound = -1;

	}
	
	if( flag_sound == 3)
	{
		
		setTimeout(function(){sound[8].play();}, 9000);
		
		setTimeout(function(){sound[2].play();}, 10000);
	
		flag_sound = -1;

	}
	
	if( flag_sound == 4)
	{
		
		setTimeout(function(){sound[5].play();}, 0);
		setTimeout(function(){sound[6].play();}, 3000);
		flag_sound = -1;

	}
	
	if( flag_sound == 5)
	{
		
		setTimeout(function(){sound[8].play();}, 9000);
		
		setTimeout(function(){sound[1].play();}, 10000);
	
		flag_sound = -1;

	}
	
	
}


