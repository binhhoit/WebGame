

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/con chim.png', 1464.875, 987, 8);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);

	game.load.image('bg','assets/images/bg6.jpg');


	game.load.image('trung','assets/images/trứng.png');
	game.load.image('totrung','assets/images/tổ trứng.png');
	
	game.load.image('nen','assets/images/nenchu.png');
	game.load.image('btn','assets/images/button1.png');
	
	game.load.audio('1', 'assets/sound/6_6 con chim.mp3');
	game.load.audio('2', 'assets/sound/6_6 qua trung.mp3');
	game.load.audio('3', 'assets/sound/6_ 6 to chim.mp3');
	game.load.audio('4', 'assets/sound/6_2.mp3');
	game.load.audio('5', 'assets/sound/6_3.mp3');
	game.load.audio('6', 'assets/sound/6_4.mp3');
	game.load.audio('7', 'assets/sound/6_5.mp3');
	game.load.audio('8', 'assets/sound/6_gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/6_So 6.mp3');
	game.load.audio('10', 'assets/sound/6_1.mp3');

	
	
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
	

	trung = game.add.sprite(2800, 450, 'trung');
	trung1 = game.add.sprite(2900, 450, 'trung');
	trung2 = game.add.sprite(3000, 450, 'trung');
	trung3 = game.add.sprite(3100, 450, 'trung');
	trung4 = game.add.sprite(3200, 450, 'trung');
	trung5 = game.add.sprite(3300, 450, 'trung');
	
	trung.scale.setTo(0.15, 0.15);
	trung1.scale.setTo(0.15, 0.15);
	trung2.scale.setTo(0.15, 0.15);
	trung3.scale.setTo(0.15, 0.15);
	trung4.scale.setTo(0.15, 0.15);
	trung5.scale.setTo(0.15, 0.15);
	
	totrung = game.add.sprite(2800, 480, 'totrung');
	totrung1 = game.add.sprite(2900, 480, 'totrung');
	totrung2 = game.add.sprite(3000, 480, 'totrung');
	totrung3 = game.add.sprite(3100, 480, 'totrung');
	totrung4 = game.add.sprite(3200, 480, 'totrung');
	totrung5 = game.add.sprite(3300, 480, 'totrung');
	
	totrung.scale.setTo(0.15, 0.15);
	totrung1.scale.setTo(0.15, 0.15);
	totrung2.scale.setTo(0.15, 0.15);
	totrung3.scale.setTo(0.15, 0.15);
	totrung4.scale.setTo(0.15, 0.15);
	totrung5.scale.setTo(0.15, 0.15);
	

	
	
    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(2900, 50, 'bot');
	bot1 = game.add.sprite(3000, 50, 'bot');
	bot2 = game.add.sprite(3100, 50, 'bot');
	bot3 = game.add.sprite(2900, 150, 'bot');
	bot4 = game.add.sprite(3000, 150, 'bot');
	bot5= game.add.sprite(3100, 100, 'bot');



	bot.scale.setTo(0.1, 0.1);
	bot1.scale.setTo(0.1, 0.1);
	bot2.scale.setTo(0.1, 0.1);
	bot3.scale.setTo(0.1, 0.1);
	bot4.scale.setTo(0.1, 0.1);
	bot5.scale.setTo(0.1, 0.1);


    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
	bot1.animations.add('run');
	bot2.animations.add('run');
	bot3.animations.add('run');
	bot4.animations.add('run');
	bot5.animations.add('run');


    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 5, true);
	bot1.animations.play('run', 5, true);
	bot2.animations.play('run', 5, true);
	bot3.animations.play('run', 5, true);
	bot4.animations.play('run', 5, true);
	bot5.animations.play('run', 5, true);

	
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

		if(khi.x == 2600){
			//game.camera.follow(lake);
		
			khi.visible = false;
			
			trung.visible = false;
			trung1.visible = false;
			trung2.visible = false;
			trung3.visible = false;
			trung4.visible = false;
			trung5.visible = false;
			
			totrung.visible = false;
			totrung1.visible = false;
			totrung2.visible = false;
			totrung3.visible = false;
			totrung4.visible = false;
			totrung5.visible = false;
			
			bot.scale.setTo(0.2, 0.2);
			bot.x = 2400;
			bot.y = 100;
			bot1.scale.setTo(0.2, 0.2);
			bot1.x = 2500;
			bot1.y = 100;
			bot2.scale.setTo(0.2, 0.2);
			bot2.x = 2600;
			bot2.y = 100;
			bot3.scale.setTo(0.2, 0.2);
			bot3.x = 2500;
			bot3.y = 300;
			bot4.scale.setTo(0.2, 0.2);
			bot4.x = 2600;
			bot4.y = 300;
			bot5.scale.setTo(0.2, 0.2);
			bot5.x = 2700;
			bot5.y = 300;
			
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2100, 150, '6',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2200, 600, 'sáu',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2500, 600, 'con chim',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 8000);
			function actionbtn()
			{

				flag_sound = 2;
				bot.visible = false;
				bot1.visible = false;
				bot2.visible = false;
				bot3.visible = false;
				bot4.visible = false;
				bot5.visible = false;
				
				totrung.visible = true;
				totrung1.visible = true;
				totrung2.visible = true;
				totrung3.visible = true;
				totrung4.visible = true;
				totrung5.visible = true;
		
			
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				btn.destroy();
				game.time.events.add(Phaser.Timer.SECOND * 3, delay1, this);
			}
			
			function delay1(){
				
				
				
				totrung.scale.setTo(0.3, 0.3);
				totrung.x = 2500;
				totrung.y = 300;
				totrung1.scale.setTo(0.3, 0.3);
				totrung1.x = 2700;
				totrung1.y = 300;
				totrung2.scale.setTo(0.3, 0.3);
				totrung2.x = 2900;
				totrung2.y = 300;
				totrung3.scale.setTo(0.3, 0.3);
				totrung3.x = 2500;
				totrung3.y = 400;
				totrung4.scale.setTo(0.3, 0.3);
				totrung4.x = 2700;
				totrung4.y = 400;
				totrung5.scale.setTo(0.3, 0.3);
				totrung5.x = 2900;
				totrung5.y = 400;
			
				
				
	
				khi.visible = false;
	
				
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2200, 150, '6',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2300, 600, 'sáu',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(2600, 600, 'tổ chim',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 11000);
				function actionbtn1()
				{
					flag_sound = 4;

					bot.visible = false;
					bot1.visible = false;
					bot2.visible = false;
					bot3.visible = false;
					bot4.visible = false;
					bot5.visible = false;
				
					totrung.visible = false;
					totrung1.visible = false;
					totrung2.visible = false;
					totrung3.visible = false;
					totrung4.visible = false;
					totrung5.visible = false;
					
					trung.visible = true;
					trung1.visible = true;
					trung2.visible = true;
					trung3.visible = true;
					trung4.visible = true;
					trung5.visible = true;

	
					nen.destroy();
					text.destroy();
					text1.destroy();
					text2.destroy();
					btn.destroy();
					game.time.events.add(Phaser.Timer.SECOND * 3, delay2, this);
				}
				function delay2(){
				
					flag_sound = 5;
					
					trung.scale.setTo(1, 1);
					trung.x = 2400;
					trung.y = 150;
					trung1.scale.setTo(1, 1);
					trung1.x = 2600;
					trung1.y = 150;
					trung2.scale.setTo(1, 1);
					trung2.x = 2800;
					trung2.y = 150;
					trung3.scale.setTo(1, 1);
					trung3.x = 2400;
					trung3.y = 350;
					trung4.scale.setTo(1, 1);
					trung4.x = 2600;
					trung4.y = 350;
					trung5.scale.setTo(1, 1);
					trung5.x = 2800;
					trung5.y = 350;
					
					
					khi.visible = false;
				
	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2200, 150, '6',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2300, 600, 'sáu',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(2600, 600, 'quả trứng',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 11000);
					function actionbtn()
					{
				
						var winx = window.location="http:/bcm/level6/game1/";
					}
				}
			}
		}
	}
	
	
	if( flag_sound == 0)
	{
		setTimeout(function(){sound[7].play();}, 0);
		setTimeout(function(){sound[9].play();}, 4000);
		
		flag_sound = -1;
	}
	

	
	if(flag_sound == 1)
	{

		
		setTimeout(function(){sound[8].play();}, 4000);
		setTimeout(function(){sound[0].play();}, 5000);
		
		
	
		
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		
		setTimeout(function(){sound[3].play();}, 0);
		setTimeout(function(){sound[4].play();}, 2000);
		flag_sound = -1;

	}
	
	if( flag_sound == 3)
	{
		
		setTimeout(function(){sound[8].play();}, 7000);
		
		setTimeout(function(){sound[2].play();}, 8000);
	
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
		
		setTimeout(function(){sound[8].play();}, 8000);
		
		setTimeout(function(){sound[1].play();}, 9000);
	
		flag_sound = -1;

	}
	
	
}


