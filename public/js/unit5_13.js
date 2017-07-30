	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.CANVAS, 'gameContainer',{ preload: preload, create: create, update:update,render:render  });
   
	// Creates a new 'main' state that wil contain the game
	var background;
	//var basket;
	var text;
	var Apple_1,Apple_2,Apple_3,Apple_4;
	var sound = new Array(4);
	var ScoreText;
	var Score = 0;
	var style;
	var tween = new Array(4);
	var count=0;
	var button;
	var button1;
	var strText;
	
	//var sound =new Array();
	// Function called first to load all the assetsme
	function preload(){
	// load background
		game.load.image('bg',BACKGROUND_IMAGE3);
		//game.scale.forceOrientation(false, true);
		
	
	// load sound
		game.load.audio('start',SOUND_START);
		game.load.audio('Score_a',SOUND_SCORE);
		game.load.audio('fail',SOUND_FAIL);
		game.load.audio('end',SOUND_END);
		game.load.audio('drop',SOUND_DROP);
	// load button
		game.load.image('again',BUTTON_AGAIN);
		game.load.image('btn',BUTTON_IMAGE);
		game.load.image('So3',BUTTON_3);
		game.load.image('So4',BUTTON_4);
		game.load.image('So5',BUTTON_5);
		
		game.load.image('So41',BUTTON_41);
		game.load.image('So31',BUTTON_31);
		
		game.load.image('soundbt',BUTTON_sound);
	// process responsive

	}

	// Fuction called after 'preload' to setup the game  
	function create(){ 
	// create background
		background = game.add.sprite(BACKGROUND_POSX,BACKGROUND_POSY,'bg');		
    // Set Score Text
    	style = { font: "64px r0c0iLinotte",fill: "#f00"};
	// create sprite Apple
		
	// add sound
		sound[0] = game.add.audio('start');
	//sound[0].play();
		sound[1] =game.add.audio('Score_a');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
		sound[4] =game.add.audio('drop');

		// create Basket
      
		//load button
		button3 = game.add.button(So_3_POSX, So_3_POSY, 'So3',Faile1,this, 2, 1, 0);
		button3.scale.setTo(0.3);
		
		button4 = game.add.button(So_4_POSX, So_4_POSY, 'So4',Faile2,this, 2, 1, 0);
		button4.scale.setTo(0.3);
		
		button5 = game.add.button(So_5_POSX, So_5_POSY, 'So5',Pass,this, 2, 1, 0);
		button5.scale.setTo(0.3);
		
		button51 = game.add.button(Sound_POSX, Sound_POSY, 'soundbt',score_s1,this, 2, 1, 0);
		button51.scale.setTo(0.3);
    
		
    }
	
	function score_s1(){
		
		sound[0].play();
		
		}
		
	function score_s(){
		
		sound[4].play();
		
		}
	
	function Pass(){
		button5.scale.setTo(0.4)
		score_s();
		button3.inputEnabled = false;
		button4.inputEnabled = false;
		var String_1 ='Hoan hô, bạn giỏi lắm';
		var info = game.add.text(300, 40,String_1,style);
		game.time.events.add(Phaser.Timer.SECOND * 1, next, this);  
		
	}
	function next(){
		var winx = window.location="index1.html";
	}
	function Faile1(){
		button31 = game.add.button(So_31_POSX, So_31_POSY, 'So31',Rong,this, 2, 1, 0);
		button31.scale.setTo(0.3);
		button4.inputEnabled = false;
		button5.inputEnabled = false;
		sound[2].play();
		
		var String_3 ='Bạn ơi, sai rồi \nmình làm lại nhé' ;
		var info = game.add.text(300, 30,String_3,style);
		game.time.events.add(Phaser.Timer.SECOND * 1, Process1, this);  
		
	}
	function Faile2(){
		button41 = game.add.button(So_41_POSX, So_41_POSY, 'So41',Rong,this, 2, 1, 0);
		button41.scale.setTo(0.3);
		button3.inputEnabled = false;
		button5.inputEnabled = false;
		sound[2].play();
		var String_3 ='Bạn ơi, sai rồi \nmình làm lại nhé' ;
		var info = game.add.text(300, 40,String_3,style);
		game.time.events.add(Phaser.Timer.SECOND * 1, Process1, this);  
		
	}		
	function Rong()
	{}
				
	
	
	function Process1()
	{
		game.state.start(game.state.current);
		//var winx = window.location="index.html";
		
	}
   
	function update(){
		
		var String_4 = Score;
		var info = game.add.text(200, 40,String_4,style);	
		game.scale.forceOrientation(false, true);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
		this.scale.setScreenSize( true );
	}
	function render() {
     //game.debug.spriteInfo(Score,32,32);
	//game.debug.spriteInfo(Apple_5,32,32);
}