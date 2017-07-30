

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/duck1.png', 1493.25, 1973, 8);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/Frog.png', 982, 554, 4);
	game.load.image('bg','assets/images/bg6.jpg');

	game.load.image('hoa','assets/images/hoa.png');
	game.load.image('lake','assets/images/lake.png');
	game.load.image('nen','assets/images/nenchu.png');
	game.load.image('btn','assets/images/button1.png');
	
	game.load.audio('1', 'assets/sound/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/7_ 7 con vit.mp3');
	game.load.audio('3', 'assets/sound/7_7 con ech.mp3');
	game.load.audio('4', 'assets/sound/7_2.mp3');
	game.load.audio('5', 'assets/sound/7_3.mp3');
	game.load.audio('6', 'assets/sound/7_4.mp3');
	game.load.audio('7', 'assets/sound/7_5.mp3');
	game.load.audio('8', 'assets/sound/7_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/7_So 7.mp3');
	game.load.audio('10', 'assets/sound/7_1.mp3');
	game.load.audio('11', 'assets/sound/7_6.mp3');
	
	
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
	
	hoa = game.add.sprite(3000, 440, 'hoa');
	hoa.scale.setTo(0.2, 0.2);
	hoa1 = game.add.sprite(3100, 420, 'hoa');
	hoa1.scale.setTo(0.2, 0.2);
	hoa2 = game.add.sprite(3200, 410, 'hoa');
	hoa2.scale.setTo(0.2, 0.2);
	hoa3 = game.add.sprite(3300, 415, 'hoa');
	hoa3.scale.setTo(0.2, 0.2);
	hoa4 = game.add.sprite(3400, 410, 'hoa');
	hoa4.scale.setTo(0.2, 0.2);
	hoa5 = game.add.sprite(3500, 420, 'hoa');
	hoa5.scale.setTo(0.2, 0.2);
	hoa6 = game.add.sprite(3600, 430, 'hoa');
	hoa6.scale.setTo(0.2, 0.2);
	

	
	
    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(3150, 370, 'bot');
	buom = game.add.sprite(3400, 530, 'buom');

	bot.scale.setTo(0.15, 0.15);
	buom.scale.setTo(0.2, 0.2);

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
	buom.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 5, true);
	buom.animations.play('run', 5, true);

	
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
			
			bot.scale.setTo(0.3, 0.3);
			bot.x = 2800;
			bot.y = 0;
			
			
			
			lake.visible = false;
			
			hoa.visible = false;
			hoa1.visible = false;
			hoa2.visible = false;
			hoa3.visible = false;
			hoa4.visible = false;
			hoa5.visible = false;
			hoa6.visible = false;

			buom.visible = false;
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2400, 150, '7',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2500, 600, 'bảy',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2700, 600, 'con vịt',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3400,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 8000);
			function actionbtn()
			{
				game.camera.follow(lake);
				flag_sound = 2;
				bot.visible = false;
				lake.visible = true;
				buom.visible = true;
				hoa.visible = false;
				hoa1.visible = false;
				hoa2.visible = false;
				hoa3.visible = false;
				hoa4.visible = false;
				hoa5.visible = false;
				hoa6.visible = false;
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
				buom.y = 300;
				
				lake.visible = false;
				khi.visible = false;
				hoa.visible = false;
				
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2600, 150, '7',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2700, 600, 'bảy',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(2900, 600, 'con ếch',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 8000);
				function actionbtn1()
				{
					flag_sound = 4;
					
					game.camera.follow(lake);
					bot.visible = false;
					lake.visible = true;
					hoa.visible = true;
					hoa1.visible = true;
					hoa2.visible = true;
					hoa3.visible = true;
					hoa4.visible = true;
					hoa5.visible = true;
					hoa6.visible = true;
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
					
					hoa.scale.setTo(0.5, 0.5);
					hoa.x = 2800;
					hoa.y = 300;
					hoa1.scale.setTo(0.5, 0.5);
					hoa1.x = 2900;
					hoa1.y = 300;
					hoa2.scale.setTo(0.5, 0.5);
					hoa2.x = 3000;
					hoa2.y = 300;
					hoa3.scale.setTo(0.5, 0.5);
					hoa3.x = 3100;
					hoa3.y = 300;
					hoa4.scale.setTo(0.5, 0.5);
					hoa4.x = 3200;
					hoa4.y = 300;
					hoa5.scale.setTo(0.5, 0.5);
					hoa5.x = 3300;
					hoa5.y = 300;
					hoa6.scale.setTo(0.5, 0.5);
					hoa6.x = 3400;
					hoa6.y = 300;
					
					lake.visible = false;
					khi.visible = false;
				
	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2400, 150, '7',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2600, 600, 'bảy',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(2800, 600, 'bông hoa',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3600,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 11000);
					function actionbtn()
					{
				
						var winx = window.location="http:/bcm/level7/game1/";
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

		setTimeout(function(){sound[3].play();}, 0);
		
		setTimeout(function(){sound[8].play();}, 8000);
		
		setTimeout(function(){sound[1].play();}, 9000);
		
	
		
		flag_sound = -1;
	}
	if( flag_sound == 2)
	{
		
		setTimeout(function(){sound[4].play();}, 0);
		setTimeout(function(){sound[5].play();}, 3000);
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
		
		setTimeout(function(){sound[6].play();}, 0);
		setTimeout(function(){sound[10].play();}, 2000);
		flag_sound = -1;

	}
	
	if( flag_sound == 5)
	{
		
		setTimeout(function(){sound[8].play();}, 10000);
		
		setTimeout(function(){sound[0].play();}, 11000);
	
		flag_sound = -1;

	}
	
	
}


