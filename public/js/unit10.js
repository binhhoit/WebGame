

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/khi.png', 792.333333333, 795, 6);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);

	game.load.image('bg','assets/images/bg6.jpg');


	game.load.image('le','assets/images/traile.png');
	game.load.image('tao','assets/images/tao.png');
	game.load.image('chuoi','assets/images/chuoi.png');
	
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
	

	le = game.add.sprite(3100, 450, 'le');

	
	le.scale.setTo(0.15, 0.15);

	
	tao = game.add.sprite(3000, 550, 'tao');
	tao1 = game.add.sprite(3100, 550, 'tao');
	tao2 = game.add.sprite(3200, 575, 'tao');
	tao3 = game.add.sprite(3000, 600, 'tao');
	tao4 = game.add.sprite(3100, 600, 'tao');

	
	tao.scale.setTo(0.02, 0.02);
	tao1.scale.setTo(0.02, 0.02);
	tao2.scale.setTo(0.02, 0.02);
	tao3.scale.setTo(0.02, 0.02);
	tao4.scale.setTo(0.02, 0.02);
	
	
	chuoi = game.add.sprite(2900, 650, 'chuoi');
	chuoi1 = game.add.sprite(3000, 650, 'chuoi');
	chuoi2 = game.add.sprite(3100, 650, 'chuoi');
	chuoi3 = game.add.sprite(3200, 650, 'chuoi');
	chuoi4 = game.add.sprite(3300, 625, 'chuoi');
	chuoi5 = game.add.sprite(3000, 600, 'chuoi');
	chuoi6 = game.add.sprite(3100, 600, 'chuoi');
	chuoi7 = game.add.sprite(3200, 600, 'chuoi');
	chuoi8 = game.add.sprite(2900, 600, 'chuoi');
	
	chuoi.scale.setTo(0.15, 0.15);
	chuoi1.scale.setTo(0.15, 0.15);
	chuoi2.scale.setTo(0.15, 0.15);
	chuoi3.scale.setTo(0.15, 0.15);
	chuoi4.scale.setTo(0.15, 0.15);
	chuoi5.scale.setTo(0.15, 0.15);
	chuoi6.scale.setTo(0.15, 0.15);
	chuoi7.scale.setTo(0.15, 0.15);
	chuoi8.scale.setTo(0.15, 0.15);

	

	
	
    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(2900, 350, 'bot');




	bot.scale.setTo(0.2, 0.2);



    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');



    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 5, true);


	
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

	
	if(bot.x == 2000 && bot1.x == 3400){
		
		
		
		//bot = bot.animations.play('run', 10, true);
		//bot1 = bot1.animations.play('run', 10, true);
		bot.scale.setTo(0.2, 0.2);	
		bot1.scale.setTo(0.2, 0.2);	
		
		hoa.visible = false;
		buom.visible = false;
		game.time.events.add(Phaser.Timer.SECOND * 5, Delay1, this);
		
		function Delay1(){
			
			
			
			bot = bot.animations.play('run', 10, true);
			bot1 = bot1.animations.play('run', 10, true);
			
			
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(1950, 100, '2',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
		
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2100, 600, 'hai',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2300, 600, 'con ong',style2);
			setTimeout(function(){btn = game.add.button(2900,620, 'btn', actionbtn, this); btn.scale.setTo(0.5, 0.5);}, 3000);
			
			
			function actionbtn()
			{
			
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				//bg.x  -= speed;
				//direction = 3;
				btn.destroy();
			
			}
			
		}		
	}
	

	
	if(flag[0])
	{

		if(khi.x == 2600){
			//game.camera.follow(lake);
		
			khi.visible = false;
			
	
			bot.visible = false;
			
			tao.visible = false;
			tao1.visible = false;
			tao2.visible = false;
			tao3.visible = false;
			tao4.visible = false;
			
			chuoi.visible = false;
			chuoi1.visible = false;
			chuoi2.visible = false;
			chuoi3.visible = false;
			chuoi4.visible = false;
			chuoi5.visible = false;
			chuoi6.visible = false;
			chuoi7.visible = false;
			chuoi8.visible = false;

			
			le.scale.setTo(0.5, 0.5);
			le.x = 2600;
			le.y = 300;
			
			
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2200, 150, '0',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 7000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2200, 600, 'không',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2600, 600, 'quả lê',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 8000);
			function actionbtn()
			{

				flag_sound = 2;
				
				le.visible = false;
				
				
				tao.visible = true;
				tao1.visible = true;
				tao2.visible = true;
				tao3.visible = true;
				tao4.visible = true;
		
			
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				btn.destroy();
				game.time.events.add(Phaser.Timer.SECOND * 3, delay1, this);
			}
			
			function delay1(){
				
				
				
				tao.scale.setTo(0.07, 0.07);
				tao.x = 2500;
				tao.y = 150;
				tao1.scale.setTo(0.07, 0.07);
				tao1.x = 2700;
				tao1.y = 150;
				tao2.scale.setTo(0.07, 0.07);
				tao2.x = 2900;
				tao2.y = 225;
				tao3.scale.setTo(0.07, 0.07);
				tao3.x = 2500;
				tao3.y = 300;
				tao4.scale.setTo(0.07, 0.07);
				tao4.x = 2700;
				tao4.y = 300;
	
			
				
				
	
				khi.visible = false;
	
				
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2200, 150, '5',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2300, 600, 'năm',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(2600, 600, 'quả táo',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 11000);
				function actionbtn1()
				{
					flag_sound = 4;

					tao.visible = false;
					tao1.visible = false;
					tao2.visible = false;
					tao3.visible = false;
					tao4.visible = false;
			
					chuoi.visible = true;
					chuoi1.visible = true;
					chuoi2.visible = true;
					chuoi3.visible = true;
					chuoi4.visible = true;
					chuoi5.visible = true;
					chuoi6.visible = true;
					chuoi7.visible = true;
					chuoi8.visible = true;
					

	
					nen.destroy();
					text.destroy();
					text1.destroy();
					text2.destroy();
					btn.destroy();
					game.time.events.add(Phaser.Timer.SECOND * 3, delay2, this);
				}
				function delay2(){
				
					flag_sound = 5;
					
					chuoi.scale.setTo(0.6, 0.6);
					chuoi.x = 2400;
					chuoi.y = 100;
					chuoi1.scale.setTo(0.6, 0.6);
					chuoi1.x = 2500;
					chuoi1.y = 100;
					chuoi2.scale.setTo(0.6, 0.6);
					chuoi2.x = 2600;
					chuoi2.y = 100;
					chuoi3.scale.setTo(0.6, 0.6);
					chuoi3.x = 2700;
					chuoi3.y = 100;
					chuoi4.scale.setTo(0.6, 0.6);
					chuoi4.x = 2400;
					chuoi4.y = 200;
					chuoi5.scale.setTo(0.6, 0.6);
					chuoi5.x = 2500;
					chuoi5.y = 200;
					chuoi6.scale.setTo(0.6, 0.6);
					chuoi6.x = 2600;
					chuoi6.y = 200;
					chuoi7.scale.setTo(0.6, 0.6);
					chuoi7.x = 2700;
					chuoi7.y = 200;
					chuoi8.scale.setTo(0.6, 0.6);
					chuoi8.x = 2800;
					chuoi8.y = 150;
				
					
					
					khi.visible = false;
				
	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2200, 150, '9',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 10000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2300, 600, 'chín',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(2600, 600, 'quả chuối',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3200,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 11000);
					function actionbtn()
					{
				
						var winx = window.location="http:/bcm/level10/game1/";
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


