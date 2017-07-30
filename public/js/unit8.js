

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/buom2.png', 564.230769, 250, 13);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/Frog.png', 982, 554, 4);
	game.load.spritesheet('bo', 'assets/images/ladybugs.png', 292, 224, 2);
	game.load.image('bg','assets/images/bg6.jpg');


	game.load.image('lake','assets/images/lake.png');
	game.load.image('nen','assets/images/nenchu.png');
	game.load.image('btn','assets/images/button1.png');
	
	game.load.audio('1', 'assets/sound/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/8_8 bo dua.mp3');
	game.load.audio('3', 'assets/sound/8_8 con buom.mp3');
	game.load.audio('4', 'assets/sound/8_2.mp3');
	game.load.audio('5', 'assets/sound/8_3.mp3');
	game.load.audio('6', 'assets/sound/8_4.mp3');
	game.load.audio('7', 'assets/sound/8_5.mp3');
	game.load.audio('8', 'assets/sound/8_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/8_So 8.mp3');
	game.load.audio('10', 'assets/sound/8_1.mp3');
	game.load.audio('11', 'assets/sound/8_6.mp3');
	
	
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
    bot = game.add.sprite(3000, 370, 'bot');
	bot1 = game.add.sprite(3100, 370, 'bot');
	bot2 = game.add.sprite(3200, 370, 'bot');
	bot3 = game.add.sprite(3300, 370, 'bot');
	buom = game.add.sprite(3400, 530, 'buom');
	
	bo = game.add.sprite(3000, 480, 'bo');

	bot.scale.setTo(0.15, 0.15);
	bot1.scale.setTo(0.15, 0.15);
	bot2.scale.setTo(0.15, 0.15);
	bot3.scale.setTo(0.15, 0.15);
	buom.scale.setTo(0.2, 0.2);
	bo.scale.setTo(0.3, 0.3);

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
	bot1.animations.add('run');
	bot2.animations.add('run');
	bot3.animations.add('run');
	buom.animations.add('run');
	bo.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 5, true);
	bot1.animations.play('run', 5, true);
	bot2.animations.play('run', 5, true);
	bot3.animations.play('run', 5, true);
	buom.animations.play('run', 5, true);
	bo.animations.play('run', 5, true);
	
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
	sound[10] = game.sound.add('11');

	
	
}



function update() {

	khi.x += 2;

	
	

	
	if(flag[0])
	{

		if(khi.x == 2750){
			//game.camera.follow(lake);
		
			khi.visible = false;
			
			buom.scale.setTo(0.5, 0.5);
			buom.x = 2700;
			buom.y = 300;
			
			
			bo.visible = false;
			lake.visible = false;
		
			bot.visible = false;
			bot1.visible = false;
			bot2.visible = false;
			bot3.visible = false;
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2300, 150, '8',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2400, 600, 'tám',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2700, 600, 'con ếch',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3400,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 8000);
			function actionbtn()
			{
				game.camera.follow(lake);
				flag_sound = 2;
				bot.visible = true;
				bot1.visible = true;
				bot2.visible = true;
				bot3.visible = true;
				lake.visible = true;
				buom.visible = false;
			
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				btn.destroy();
				game.time.events.add(Phaser.Timer.SECOND * 3, delay1, this);
			}
			
			function delay1(){
				
				
				
				bot.scale.setTo(0.6, 0.6);
				bot.x = 2800;
				bot.y = 300;
				bot1.scale.setTo(0.6, 0.6);
				bot1.x = 3000;
				bot1.y = 400;
				bot2.scale.setTo(0.6, 0.6);
				bot2.x = 3200;
				bot2.y = 300;
				bot3.scale.setTo(0.6, 0.6);
				bot3.x = 3400;
				bot3.y = 400;
				
				
				
				lake.visible = false;
				khi.visible = false;
	
				
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2500, 150, '8',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2600, 600, 'tám',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(3000, 600, 'con bướm',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 11000);
				function actionbtn1()
				{
					flag_sound = 4;
					
					game.camera.follow(lake);
					bot.visible = false;
					bot1.visible = false;
					bot2.visible = false;
					bot3.visible = false;
					lake.visible = true;
					bo.visible = true;
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
					
					bo.scale.setTo(1, 1);
					bo.x = 3000;
					bo.y = 350;
					
					lake.visible = false;
					khi.visible = false;
				
	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2600, 150, '8',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2600, 600, 'tám',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(2900, 600, 'con bọ dừa',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 11000);
					function actionbtn()
					{
				
						var winx = window.location="http:/bcm/level8/game1";
					}
				}
			}
		}
	}
	
	
	if( flag_sound == 0)
	{
		setTimeout(function(){sound[7].play();}, 0);
		setTimeout(function(){sound[9].play();}, 5000);
		
		flag_sound = -1;
	}
	

	
	if(flag_sound == 1)
	{

		
		setTimeout(function(){sound[8].play();}, 6000);
		
		
	
		
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
		
		setTimeout(function(){sound[8].play();}, 12000);
		
		setTimeout(function(){sound[2].play();}, 13000);
	
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


