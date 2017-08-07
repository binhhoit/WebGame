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

var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

function preload() {
	game.scale.forceOrientation(false, true);

    game.load.spritesheet('bot', 'assets/images/unit2/bee3.png', 1514.25, 1833, 8);
	//game.load.spritesheet('khi', 'assets/images/unit2/tho1.png', 192.75, 284, 16);
	game.load.spritesheet('buom', 'assets/images/unit2/buom2.png', 564.230769, 250, 13);
	game.load.image('bg','assets/images/unit2/bg.png');
	game.load.image('hoa','assets/images/unit2/hoa1.png');

	game.load.image('text_number2', 'assets/images/unit2/text_number2.png');
	game.load.image('text_flower', 'assets/images/unit2/texy_flower.png');
	game.load.image('text_butterfly', 'assets/images/unit2/text_butterfly.png');
	game.load.image('text_bee', 'assets/images/unit2/text_bee.png');

	game.load.image('nen','assets/images/unit2/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit1/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit1/ic_button_back.png');
	
	game.load.audio('1', 'assets/sound/unit2/2_2 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/unit2/2_2 con buom.mp3');
	game.load.audio('3', 'assets/sound/unit2/2_2 con ong.mp3');
	game.load.audio('4', 'assets/sound/unit2/2_2.mp3');
	game.load.audio('5', 'assets/sound/unit2/2_3.mp3');
	game.load.audio('6', 'assets/sound/unit2/2_4.mp3');
	game.load.audio('7', 'assets/sound/unit2/2_5.mp3');
	game.load.audio('8', 'assets/sound/unit2/2_Gioithieu.mp3');
	game.load.audio('9', 'assets/sound/unit2/2_So 2.mp3');
	
}
var flag ;
var loop;
var temp =0;
var sound = new Array();
var distance = 1;
var flag_sound = 0;
var backgroundCount = 1;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0,0,1366,768,'bg');
	
	hoa = game.add.sprite(700, 400, 'hoa');
	hoa.scale.setTo(0.5, 0.5);
	
	
    //  This sprite is using a texture atlas for all of its animation data
    /*bot = game.add.sprite(750, 300, 'bot');
	bot1 = game.add.sprite(880, 320, 'bot');
	buom = game.add.sprite(760, 400, 'buom');

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
	buom.animations.play('run', 5, true);*/

	
	//khi = game.add.sprite(300, 200, 'khi');
	//khi.scale.setTo(1.3, 1.3);
	//khi.animations.add('run');
	//khi.animations.play('run', 10, true);
	
	

	game.camera.follow(hoa);
	
	sound[0] = game.sound.add('1');
	sound[1] = game.sound.add('2');
	sound[2] = game.sound.add('3');
	sound[3] = game.sound.add('4');
	sound[4] = game.sound.add('5');
	sound[5] = game.sound.add('6');
	sound[6] = game.sound.add('7');
	sound[7] = game.sound.add('8');
	sound[8] = game.sound.add('9');

	sound[0].play();

	flag = true;
	
}

function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function showFlower() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	hoa = game.add.tileSprite(-50, 700, 721, 664, 'hoa');
	hoa.inputEnabled = true;
	hoa.scale.setTo(0.5, 0.5);
	game.add.tween(hoa).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_flower = game.add.tileSprite(500, -50, 348, 66, 'text_flower');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_flower.inputEnabled = true;
		game.add.tween(text_flower).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);
}

function showBee() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');
	
	bot = game.add.tileSprite(-50, 700, 1500, 1800, 'bot');
	bot1 = game.add.tileSprite(-120, 750, 1500, 1800, 'bot');

	bot.scale.setTo(0.1, 0.1);
	bot1.scale.setTo(0.1, 0.1);

	bot.inputEnabled = true;
	bot1.inputEnabled = true;

	game.add.tween(bot).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
	game.add.tween(bot1).to({ x: 410, y: 280 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_bee = game.add.tileSprite(500, -50, 308, 66, 'text_bee');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_bee.inputEnabled = true;
		game.add.tween(text_bee).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function showButterfly() {
	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	buom = game.add.tileSprite(-50, 700, 450, 250, 'buom');
	buom.inputEnabled = true;
	buom.scale.setTo(1, 1);
	game.add.tween(buom).to({ x: 300, y: 250 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number2 = game.add.tileSprite(1400, 700, 235, 516, 'text_number2');
		text_butterfly = game.add.tileSprite(500, -50, 352, 66, 'text_butterfly');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 150 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_butterfly.inputEnabled = true;
		game.add.tween(text_butterfly).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	
}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	//hoa.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_flower.destroy();
		text_number2.destroy();
		hoa.destroy();

		bg = game.add.tileSprite(0,0,1366,768,'bg');
		hoa = game.add.sprite(700, 400, 'hoa');
		hoa.scale.setTo(0.5, 0.5);
		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		text_bee.destroy();
		text_number2.destroy();
		hoa.destroy();
		bot.destroy();
		bot1.destroy();

		bg = game.add.tileSprite(0,0,1366,768,'bg');
		hoa = game.add.sprite(700, 400, 'hoa');
		hoa.scale.setTo(0.5, 0.5);
		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		hoa.destroy();
		text_butterfly.destroy();
		text_number2.destroy();
		buom.destroy();
		backToNextGame();
	}
}

function backPlayerBackgroundTwo() {
	setTimeout(function () {
		bot = game.add.sprite(750, 300, 'bot');
		bot1 = game.add.sprite(880, 320, 'bot');
		bot.inputEnabled = true;
		bot1.inputEnabled = true;

		bot.scale.setTo(0.1, 0.1);
		bot1.scale.setTo(0.1, 0.1);

		bot.animations.add('run');
		bot1.animations.add('run');

	    bot.animations.play('run', 10, true);
		bot1.animations.play('run', 10, true);

	}, 500);

	//game.add.tween(m_player).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
}

function backPlayerBackgroundThree() {
	setTimeout(function () {
		buom = game.add.sprite(760, 400, 'buom');
		buom.scale.setTo(0.5, 0.5);
		buom.inputEnabled = true;

		buom.animations.add('run');
		buom.animations.play('run', 5, true);

	}, 500);

	//game.add.tween(m_player_carrot).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);

}

function backPlayer() {
	if (hoa.x < game.width / 3) {
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
	}
}

function backPlayer_carrot() {
	if (backgroundCount ==3) {
		loop = true;
		temp = 0;
	} else {
		if (temp == 0) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
	}
	backgroundCount ++;
}

function update() {
	if (backgroundCount ==3 || backgroundCount ==4){
		backPlayer_carrot();
	} 
	else 
		backPlayer();

	if(!loop && flag)
	{
		if(backgroundCount ==1){
			setTimeout(function () {
				showFlower();
			},3000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				showBee();
			}, 2000);
		}
		if (backgroundCount == 5) {
			setTimeout(function () {
				showButterfly();
			}, 2000);
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

/*var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game_div', { preload: preload, create: create, update: update});

var btnNext;
var btnBack;

var sound = new Array();

var flag = false;
var backgroundCount = 1;
var showBee_ = false;
var showButterfly_ = false;

var m_flower;
var m_butterfly;
var m_bee;
var bee;
var butterfly;

var zoom = true;
var loop;
var temp;

function preload() {

	game.scale.forceOrientation(false, true);
	// Function called first to load all the assets

	// Load background 
	game.load.image('bg', 'assets/images/unit2/bg.png');
	//game.load.image('bg_mushroom', 'assets/images/unit2/bg_mushroom.png');
	//game.load.image('bg_carrot', 'assets/images/unit2/bg_carrot.png');

	// Load image
	game.load.image('text_number2', 'assets/images/unit2/text_number2.png');
	game.load.image('text_flower', 'assets/images/unit2/texy_flower.png');
	game.load.image('text_butterfly', 'assets/images/unit2/text_butterfly.png');
	game.load.image('text_bee', 'assets/images/unit2/text_bee.png');
	game.load.image('bee_', 'assets/images/unit2/ic_bee.png');
	//game.load.image('butterfly_', 'assets/images/unit2/ic_butterfly.png');
	game.load.image('flower_', 'assets/images/unit2/ic_flower.png');


	// Load spritesheet
	game.load.spritesheet('m_bee', 'assets/images/unit2/character/bee.png', 198.375, 283, 8);
	game.load.spritesheet('m_butterfly', 'assets/images/unit2/character/butterfly.png', 198.375, 283, 8);

	// Load sound
	//game.load.audio('Thokia', 'assets/sounds/unit2/1_Chutho.mp3');


	// Load button sprite
	game.load.image('btnNext', 'assets/images/unit2/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit2/ic_button_back.png');

	game.load.image('nen', 'assets/images/unit2/bg_board.png');

}

function create() {
	// PHYSICS SYSTEM
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, 1366, 768);
	// BACKGROUND
	bg = game.add.tileSprite(0,0,1366,768,'bg');

	// FLOWER
	m_flower = game.add.tileSprite(700, 400, 161, 280, 'flower_');
	m_flower.scale.setTo(1, 1);

	m_flower = game.add.tileSprite(500, 400, 161, 280, 'flower_');
	m_flower.scale.setTo(1, 1);
	// add animation
	//m_flower.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 8, true);
	//game.add.tween(m_flower).to({ x: game.width / 3 }, 11000, Phaser.Easing.Linear.None, true);
	//frame stop
	//m_flower.animations.add('idle', [0], 16, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_flower, Phaser.Physics.ARCADE);
	m_flower.body.collideWorldBounds = true;
	m_flower.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_flower);

	
	setTimeout(function () {
		loop=false;
		flag = true;
	},3000);
}

function showFlower() {

	nen = game.add.tileSprite(0, 0, 1366, 768, 'nen');

	flower_ = game.add.tileSprite(300, 190, 322, 280, 'flower_');
	flower_.inputEnabled = true;
	//game.add.tween(flower_).to({ x: 300, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	setTimeout(function () {

		text_number2 = game.add.tileSprite(1400, 700, 207, 516, 'text_number2');
		text_flower = game.add.tileSprite(500, -50, 319, 66, 'text_flower');
		text_number2.inputEnabled = true;
		game.add.tween(text_number2).to({ x: 800, y: 190 }, 3000, Phaser.Easing.Quadratic.InOut, true);
		text_flower.inputEnabled = true;
		game.add.tween(text_flower).to({ x: 500, y: 110 }, 3000, Phaser.Easing.Quadratic.InOut, true);

	}, 4000);

	setTimeout(function () {
		btn();
	}, 8000);

	loop=true;
}


function btn() {
	btnNext = game.add.button(700, 600, 'btnNext', mission, this);
	btnBack = game.add.button(600, 600, 'btnBack', mission, this);
}

function mission() {

	btnNext.pendingDestroy = true;
	btnBack.pendingDestroy = true;

	m_player.x = 0;

	nen.destroy();

	backgroundCount++;

	if (backgroundCount == 2) {
		text_rabbit.destroy();
		text_number1.destroy();
		rabbit_.destroy();

		backPlayerBackgroundTwo();
	}

	if (backgroundCount == 3) {
		m_player.destroy();
		m_player_carrot = game.add.sprite(0, 200, 'm_player_carrot');
		m_player_carrot.scale.setTo(1.6, 1.6);
		m_player_carrot.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8], 8, true);
		m_player_carrot.animations.add('idle', [0], 16, true);
		text_carrot.destroy();
		text_number1.destroy();
		carrot_.destroy();
		backPlayerBackgroundThree();
	}

	if (backgroundCount == 4) {
		m_player.destroy();
		mushroom_.destroy();
		mushroom.destroy();
		text_mushroom.destroy();
		text_number1.destroy();
		backToNextGame();
	}
}

function backPlayer() {
	if (m_flower.x < game.width / 3) {
		m_flower.animations.play('walk');
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
		m_flower.animations.play('idle');
	}
}

function backPlayer_carrot() {
	if (m_player_carrot.x < game.width / 3) {
		//m_player_carrot.animations.play('walk');
		loop = true;
		temp = 0;
	} else {
		if (temp == 1) {
			loop = false;
		} else {
			loop = true;
		}
		temp++;
		m_player_carrot.animations.play('idle');
	}
}

function update() {
	// Function called 60 times per second

	if (!loop && flag) {
		if (backgroundCount == 1) {
			setTimeout(function () {
				showFlower();
			}, 1000);
		}
		if (backgroundCount == 2) {
			setTimeout(function () {
				showBee();
			}, 1000);
		}
		if (backgroundCount == 3) {
			setTimeout(function () {
				showButterfly();
			}, 1000);
		}
	}

	if (showBee_) {
		if (zoom) {
			setTimeout(function () {
				zoom = false;
				carrot.scale.setTo(0.5, 0.5);
			}, 500);
		} else {
			setTimeout(function () {
				zoom = true;
				carrot.scale.setTo(0.55, 0.55);
			}, 500);
		}
	}

	if (showButterfly_) {
		if (zoom) {
			setTimeout(function () {
				zoom = false;
				mushroom.scale.setTo(0.5, 0.5);
			}, 500);
		} else {
			setTimeout(function () {
				zoom = true;
				mushroom.scale.setTo(0.55, 0.55);
			}, 500);
		}
	}

}*/
