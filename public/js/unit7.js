

var game = new Phaser.Game(1366, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('bot', 'assets/images/unit7/character/duck.png', 1493.25, 1973, 8);
	game.load.spritesheet('buom', 'assets/images/unit7/character/frog.png', 982, 554, 4);

	game.load.image('bg','assets/images/unit7/bg.png');
	game.load.image('bg_lotus','assets/images/unit7/bg_lotus.png');

	game.load.image('ic_duck', 'assets/images/unit6/ic_duck.png');
	game.load.image('ic_frog', 'assets/images/unit6/ic_frog.png');
	game.load.image('ic_lotus','assets/images/unit6/ic_lotus.png')

	game.load.image('text_number7', 'assets/images/unit6/text_number7.png');
	game.load.image('text_duck', 'assets/images/unit6/text_duck.png');
	game.load.image('text_frog', 'assets/images/unit6/text_frog.png');
	game.load.image('text_lotus', 'assets/images/unit6/text_lotus.png');
	
	game.load.audio('1', 'assets/sound/unit7/7_ 7 bong hoa.mp3');
	game.load.audio('2', 'assets/sound/unit7/7_ 7 con vit.mp3');
	game.load.audio('3', 'assets/sound/unit7/7_7 con ech.mp3');
	game.load.audio('4', 'assets/sound/unit7/7_2.mp3');
	game.load.audio('5', 'assets/sound/unit7/7_3.mp3');
	game.load.audio('6', 'assets/sound/unit7/7_4.mp3');
	game.load.audio('7', 'assets/sound/unit7/7_5.mp3');
	game.load.audio('8', 'assets/sound/unit7/7_Gioi thieu.mp3');
	game.load.audio('9', 'assets/sound/unit7/7_So 7.mp3');
	game.load.audio('10', 'assets/sound/unit7/7_1.mp3');
	game.load.audio('11', 'assets/sound/unit7/7_6.mp3');
	
	// Load spritesheet
	game.load.spritesheet('m_player', 'assets/images/unit5/tho1.png', 1, 1);

	// Load button sprite
	game.load.image('nen','assets/images/unit5/bg_board.png');
	game.load.image('btnNext', 'assets/images/unit6/ic_button_next.png');
	game.load.image('btnBack', 'assets/images/unit6/ic_button_back.png');
}
var flag ;
var loop;
var temp =0;
var backgroundCount = 1;
var start =1;
var sound = new Array();
var bot;
var distance = 1;
var flag_sound = 0;
//Speed di chuyen
var direction = 2;

// Setting sound start
var speed = 2;
var m_player;

function create() {
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.stage.backgroundColor = '#6CF';
	bg = game.add.tileSprite(0,0,5096,720, 'bg');
	game.world.setBounds(0,0,5096,720);
	game.scale.forceOrientation(false, true);
	
	m_player = game.add.sprite(0, 0, 'm_player');
	m_player.scale.setTo(0.1, 0.1);

	// add animation
	m_player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	//game.add.tween(m_player ).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//animations stop
	m_player.animations.add('idle', [0], 8, true);

	// Add physic for player .. physic type > ARCADE
	game.physics.enable(m_player, Phaser.Physics.ARCADE);
	m_player.body.collideWorldBounds = true;
	m_player.body.bounce.setTo(0.8, 0.8);

	// Setting camera follow player.
	game.camera.follow(m_player);
	
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

}


