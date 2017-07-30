/*var game = new Phaser.Game(4096, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {
	game.load.image('bg','assets/images/background.png');
    game.load.spritesheet('rab', 'assets/images/khibay2.png', 261.666667, 419, 3);

}

function create() {
	bg = game.add.sprite(0, 0, 'bg');
	
    sprite = game.add.sprite(200, 100, 'rab');
	sprite.scale.setTo(0.5, 0.5);
    sprite.animations.add('walk');

    sprite.animations.play('walk', 5, true);

    game.add.tween(sprite).to({ x: 3000 }, 50000, Phaser.Easing.Linear.None, true);
	
	game.camera.follow(rab);
}

function update() {
    
}*/
/*var game = new Phaser.Game(4096, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {
	game.load.image('bg','assets/images/background.png');
    game.load.spritesheet('rab', 'assets/images/con buom_final.png', 474, 519, 5);

}

function create() {
	bg = game.add.sprite(0, 0, 'bg');
    sprite = game.add.sprite(200, 300, 'rab');
	sprite.scale.setTo(0.5, 0.5);
    sprite.animations.add('walk');

    sprite.animations.play('walk', 8, true);

    game.add.tween(sprite).to({ x: game.width }, 18000, Phaser.Easing.Linear.None, true);
	game.camera.follow(sprite);

}

function update() {
    
}*/

/*var game = new Phaser.Game(4096, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {
	game.load.image('bg','assets/images/background.png');
    game.load.spritesheet('rab', 'assets/images/tho1.png', 192.75, 284, 16);

}

function create() {
	bg = game.add.sprite(0, 0, 'bg');
	
    sprite = game.add.sprite(200, 400, 'rab');
	
	sprite.scale.setTo(0.5, 0.5);
    sprite.animations.add('walk');
    sprite.animations.play('walk', 18, true);
	

    game.add.tween(sprite).to({ x: game.width  }, 19000, Phaser.Easing.Linear.None, true); 
	game.add.camera(rab);

}

function update() {
}*/

/*var game = new Phaser.Game(1024, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    //game.load.image('octopus', 'assets/images/carot1.png');
	game.load.spritesheet('rab', 'assets/images/carot1 (2).png', 1275.5, 1417, 4);

}

function create() {

    game.stage.backgroundColor = '#1873CE';

    var octopus = game.add.sprite(300, 200, 'rab');
	octopus.scale.setTo(0.2);
	
	octopus.animations.add('walk');

    octopus.animations.play('walk', 8, true);
    game.add.tween(octopus).to({ y: [10, 10, 200, 0, 200], x: [300, 350, 450, 600, 800] }, 1800, Phaser.Easing.Quadratic.InOut, true);

	
    //octopus.animations.add('teeter');

    //  Play the animation at 30fps on a loop
    //octopus.animations.play('teeter', 20, true);

    //  Bob the octopus up and down with a tween
    //game.add.tween(octopus).to({ y: [10, 10, 200, 0, 200], x: [300, 350, 450, 600, 800] }, 1800, Phaser.Easing.Quadratic.InOut, true);

}*/

/*var game = new Phaser.Game(1024, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {
	game.load.image('bg','assets/images/nengame1.png');
    game.load.image('carot', 'assets/images/carot1.png');
    game.load.image('gio', 'assets/images/gio.png');

}

function create() {

    var bg = game.add.sprite(0, 0, 'bg');
	var gio = game.add.sprite(70, 100, 'gio');
	gio.scale.setTo(0.5);
    gio.inputEnabled = true;
	
	var carot = game.add.sprite(200, 80, 'carot');
	carot.scale.setTo(0.7);
    carot.inputEnabled = true;
	carot.events.onInputDown.add(chuyen, this);

    //  Set our own custom input candidate handler
    game.input.setInteractiveCandidateHandler(handler, this);

}
function chuyen(carot){
	carot.inputEnabled = true;
    carot.input.enableDrag(false, false, true);
    carot.input.priorityID = 2;
}
function handler (pointer, candidates, favorite) {

    if (candidates.length > 1)
    {
        //  We're going to always return the 'disk' object if it's part of the candidates
        //  Even though it's at the back of the display list, and doesn't use priorityIDs
        for (var i = 0; i < candidates.length; i++)
        {
            if (candidates[i].sprite.key === 'gio')
            {
                return candidates[i];
            }
        }

        return favorite;
    }
    else
    {
        return favorite;
    }

}

function render() {


}*/

/*var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.image('carot1', 'assets/images/carot1.png');
    game.load.audio('music', 'assets/sound/music.mp3');

}

var music;

function create() {

    game.stage.backgroundColor = '#182d3b';
    game.input.touch.preventDefault = false;

    music = game.add.audio('music');
    music.onDecoded.add(start, this);

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'carot1');
    s.anchor.setTo(0.5, 0.5);

}

function start() {

    music.fadeIn(4000);

}

function render() {
  
}*/

/*var game = new Phaser.Game(1024, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {
	
	game.scale.forceOrientation(false, true);
    game.load.image('carot1', 'assets/images/hat dẻ.png');
	game.load.image('cay', 'assets/images/cây.png');
}

var music;

function create() {

    game.stage.backgroundColor = '#0FF';
    game.input.touch.preventDefault = false;
	
	var image = game.add.sprite(600, 0, 'cay');
	image.scale.setTo(0.1, 0.1);
    
	var s = game.add.sprite(800, 100, 'carot1');
	s.scale.setTo(0.1, 0.1);
}

function render() {
}*/
/*var game = new Phaser.Game(3392, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.image('map', 'assets/images/SuperMarioBros-World1-1.png');

}

var player;

function create() {
	
	bg = game.add.sprite(0, 200, 'map');
	game.stage.backgroundColor = '#ffffff';

}

function render() {
}
*/

/*var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });


function preload() {
	game.load.spritesheet('conbuom','assets/images/tho1.png', 192.75, 284, 16);
	game.load.image('bg','assets/images/background.png');
	//game.load.image('de','assets/images/hat dẻ.png');
	game.load.image('de','assets/images/chuoi.png');
	game.load.image('cay','assets/images/cây.png');
	game.load.image('btn','assets/images/button.png');

}

function create() {
	game.scale.forceOrientation(false, true);
	
	var bg = game.add.tileSprite(0, 0, 4096, 720, 'bg');

    game.world.setBounds(0, 0, 4096, 720);
	
	var conbuom = game.add.sprite(200, 300, 'conbuom');
	game.camera.follow(conbuom);
	conbuom.scale.setTo(1, 1);
	conbuom.animations.add('run');
	conbuom.animations.play('run', 6, true);
	game.add.tween(conbuom).to({ x: game.width }, 9000, Phaser.Easing.Linear.None, true);
	
	var de = game.add.sprite(2200, 400, 'de');
	de.scale.setTo(0.25, 0.25);
	
	//var cay = game.add.sprite(2200, 190, 'cay');
	//cay.scale.setTo(0.05);
	
	var btn = game.add.button(2300, 100, 'btn', openlink_lv1, this);
	btn.scale.setTo(0.3);
	
}
function openlink_lv1(){
	var winx = window.location="http://192.168.11.16/butchimau/level1/game1";
	//var winx = window.open(link, "_seft");
	//winx.focus();
}

function render() {

}
function update() {
	
    
}*/
/*var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('khi','assets/images/khi.png');
}

function create() {
	var khi = game.add.sprite(game.world.centerX, game.world.centerY, 'khi');
	khi.scale.setTo(0.5, 0.5);
}

function update() {
    
}*/

/*var game = new Phaser.Game(1024, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });


function preload() {
	game.load.image('cr1','assets/images/carot1.png');
	game.load.image('cr2','assets/images/carot2.png');
	game.load.image('cr3','assets/images/carot3.png');
	game.load.image('gio','assets/images/gio.png');
	game.load.image('buom','assets/images/blue_butterfly_fluttering_hg_clr (1).gif');
}

function create() {
	game.stage.backgroundColor = '#39C';
	
	var image = game.add.sprite(0, 0, 'buom')
	
	var image1 = game.add.sprite(200, 100, 'cr1');
	image1.scale.setTo(0.5, 0.5);
	image1.inputEnabled = true;
	image1.events.onInputDown.add(chuyen1, this);

	
	var image2 = game.add.sprite(400, 100, 'cr2');
	image2.scale.setTo(0.5, 0.5);
	image2.inputEnabled = true;
	image2.events.onInputDown.add(chuyen2, this);

	
	
	var image3 = game.add.sprite(650, 100, 'cr3');
	image3.scale.setTo(0.5, 0.5);
	image3.inputEnabled = true;
	image3.events.onInputDown.add(chuyen3, this);

	
	
	var gio1 = game.add.sprite(150, 400, 'gio');
	gio1.scale.setTo(0.25, 0.3);
	var gio2 = game.add.sprite(350, 400, 'gio');
	gio2.scale.setTo(0.25, 0.3);
	var gio3 = game.add.sprite(600, 400, 'gio');
	gio3.scale.setTo(0.25, 0.3);
}

function chuyen1(image1){
	image1.inputEnabled = true;
    image1.input.enableDrag(false, false, true);
    image1.input.priorityID = 2;
}

function chuyen2(image2){
	image2.inputEnabled = true;
    image2.input.enableDrag(false, false, true);
    image2.input.priorityID = 2;
}

function chuyen3(image3){
	image3.inputEnabled = true;
    image3.input.enableDrag(false, false, true);
    image3.input.priorityID = 2;
}

function update() {
	
    
}*/

var game = new Phaser.Game(1500, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/bee3.png', 1514.25, 1833, 8);
	game.load.spritesheet('khi', 'assets/images/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/buom2.png', 564.230769, 250, 13);
	game.load.image('bg','assets/images/bg6.jpg');
	game.load.image('hoa','assets/images/hoa1.png');
	game.load.image('nen','assets/images/nenchu.png');
	game.load.image('btn','assets/images/button1.png');
	
	game.load.audio('1', 'assets/sound/2_2 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/2_2 con buom.mp3');
	game.load.audio('3', 'assets/sound/2_2 con ong.mp3');
	game.load.audio('4', 'assets/sound/2_2.mp3');
	game.load.audio('5', 'assets/sound/2_3.mp3');
	game.load.audio('6', 'assets/sound/2_4.mp3');
	game.load.audio('7', 'assets/sound/2_5.mp3');
	game.load.audio('8', 'assets/sound/2_Gioithieu.mp3');
	game.load.audio('9', 'assets/sound/2_So 2.mp3');
	
	
	flag[0] = -2500;
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
	
	hoa = game.add.sprite(2500, 180, 'hoa');
	hoa.scale.setTo(0.7, 0.7);
	
	
    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(2700, 130, 'bot');
	bot1 = game.add.sprite(2800, 150, 'bot');
	buom = game.add.sprite(2500, 200, 'buom');

	bot.scale.setTo(0.1, 0.1);
	bot1.scale.setTo(0.1, 0.1);
	buom.scale.setTo(0.5, 0.5);

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
	bot1.animations.add('run');
	buom.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 10, true);
	bot1.animations.play('run', 10, true);
	buom.animations.play('run', 5, true);

	
	khi = game.add.sprite(300, 200, 'khi');
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

	
	
}



function update() {

	khi.x += 2;

	
	if(bot.x == 2700 && bot1.x == 2900){
		
		
		
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
		
		if(khi.x == 2000){
			game.camera.follow(hoa);
			khi.visible = false;
			bot.visible = false;
			bot1.visible = false;
			buom.visible = false;
			
			flag_sound = 1;
			
			var nen = game.add.tileSprite(0,0,5096,720, 'nen');
			game.world.setBounds(0,0,5096,720);
			
			var style = { font: 'bolder 300px Arial', fill: 'red'};
  			var text = game.add.text(2100, 150, '2',style);
			text.scale.setTo(0.5, 0.5);
			game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
			
			var style1 = { font: 'bolder 100px Arial', fill: 'red'};
			var text1 = game.add.text(2200, 600, 'hai',style1);
	
			var style2 = { font: 'bolder 100px Arial', fill: 'black'};
			var text2 = game.add.text(2400, 600, 'bông hoa',style2);
			
		
			
			setTimeout(function(){btn = game.add.button(3100,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 4000);
			function actionbtn()
			{
				
				flag_sound = 2;
				bot.visible = true;
				bot1.visible = true;
				nen.destroy();
				text.destroy();
				text1.destroy();
				text2.destroy();
				btn.destroy();
				game.time.events.add(Phaser.Timer.SECOND * 3, delay1, this);
			}
			
			function delay1(){
				
				bot.scale.setTo(0.2, 0.2);	
				bot1.scale.setTo(0.2, 0.2);

				khi.visible = false;
				hoa.visible = false;
				buom.visible = false;
				
				flag_sound = 3;
				
				var nen = game.add.tileSprite(0,0,5096,720, 'nen');
				game.world.setBounds(0,0,5096,720);
			
				var style = { font: 'bolder 300px Arial', fill: 'red'};
  				var text = game.add.text(2100, 150, '2',style);
				text.scale.setTo(0.5, 0.5);
				game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 5000, Phaser.Easing.Quadratic.InOut, true);
				
				var style1 = { font: 'bolder 100px Arial', fill: 'red'};
				var text1 = game.add.text(2200, 600, 'hai',style1);
		
				var style2 = { font: 'bolder 100px Arial', fill: 'black'};
				var text2 = game.add.text(2400, 600, 'con ong',style2);
					
		
			
				setTimeout(function(){btn = game.add.button(3100,620, 'btn', actionbtn1,this); btn.scale.setTo(0.5, 0.5);}, 4000);
				function actionbtn1()
				{
					flag_sound = 4;
					bot.visible = false;
					bot1.visible = false;
					hoa.visible = true;
					buom.visible = true;
					nen.destroy();
					text.destroy();
					text1.destroy();
					text2.destroy();
					btn.destroy();
					game.time.events.add(Phaser.Timer.SECOND * 3, delay2, this);
				}
				function delay2(){
				
					flag_sound = 5;
					khi.visible = false;
					hoa.visible = false;
					buom.scale.setTo(0.8, 0.8);	

					var nen = game.add.tileSprite(0,0,5096,720, 'nen');
					game.world.setBounds(0,0,5096,720);
			
					var style = { font: 'bolder 300px Arial', fill: 'red'};
  					var text = game.add.text(2100, 150, '2',style);
					text.scale.setTo(0.5, 0.5);
					game.add.tween(text.scale).to( { x: 1.5, y: 1.5 }, 4000, Phaser.Easing.Quadratic.InOut, true);
				
					var style1 = { font: 'bolder 100px Arial', fill: 'red'};
					var text1 = game.add.text(2200, 600, 'hai',style1);
		
					var style2 = { font: 'bolder 100px Arial', fill: 'black'};
					var text2 = game.add.text(2400, 600, 'con buom',style2);
					
		
			
					setTimeout(function(){btn = game.add.button(3100,620, 'btn', actionbtn,this); btn.scale.setTo(0.5, 0.5);}, 4000);
					function actionbtn()
					{
				
						var winx = window.location="http://localhost/bcm/level2/game1/index.html";
					}
				}
			}
		}
	}
	
	
	if( flag_sound == 0)
	{
		setTimeout(function(){sound[7].play();}, 9000);
		flag_sound = -1;

	}
	
	if(flag_sound == 1)
	{
		
		setTimeout(function(){sound[8].play();}, 1000);
		
		setTimeout(function(){sound[0].play();}, 2000);
		
	
		
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
		
		setTimeout(function(){sound[8].play();}, 2000);
		
		setTimeout(function(){sound[2].play();}, 3000);
	
		flag_sound = -1;

	}
	
	if( flag_sound == 4)
	{
		
		setTimeout(function(){sound[5].play();}, 0);
		setTimeout(function(){sound[6].play();}, 2000);
		flag_sound = -1;

	}
	
	if( flag_sound == 5)
	{
		
		setTimeout(function(){sound[8].play();}, 4000);
		
		setTimeout(function(){sound[1].play();}, 5000);
	
		flag_sound = -1;

	}
	
	
}


