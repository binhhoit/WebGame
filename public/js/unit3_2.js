	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.AUTO, 'gameContainer',{ preload: preload, create: create, update:update, render:render });

	// Creates a new 'main' state that wil contain the game
	var background;
	var basket;
	var text;
	var humatong = new Array(5);
	var sound = new Array(4);
	var scoreText;
	var score = 0;
	var style;
	var tween = new Array(5);
	var count=0;
	var button;
	var button1;
	var strText;
	var firstRunLandscape;
	//var sound =new Array();
	// Function called first to load all the assetsme
	function preload(){
	// load background
		game.load.image('bg',BACKGROUND_IMAGE);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
		this.scale.setScreenSize( true );
	//load basket
		game.load.image('bk',BASKET_IMAGE);
	// load humatong 
		game.load.image('humatong1',HUMATONG_1);
	// load sound

		game.load.audio('start',SOUND_START);
		game.load.audio('score',SOUND_SCORE);
		game.load.audio('fail',SOUND_FAIL);
		game.load.audio('end',SOUND_END);
	// load button
		game.load.image('again',BUTTON_AGAIN);
		game.load.image('btn',BUTTON_IMAGE);
		game.load.image('next',BUTTON_NEXT);
	//game.load.image('btn','assets/images/button.png');
	// process responsive

	}

	// Fuction called after 'preload' to setup the game  
	function create(){

	// create background

		background = game.add.sprite(BACKGROUND_POSX,BACKGROUND_POSY,'bg');
	
		//var styleTitle = {font: "32px r0c0iLinotte", fill: "#f00"};
    	//text = game.add.text(300, 60, 'BÉ HÃY CHỌN NHỮNG BÔNG HOA CÓ 1 NHÉ!',style);
		//background=game.add.tileSprite(BACKGROUND_POSX,BACKGROUND_POSY,BACKGROUND_WIDTH,BACKGROUND_HEIGHT, 'background');
      	//game.world.setBounds(BACKGROUND_POSX,BACKGROUND_POSY,BACKGROUND_WIDTH,BACKGROUND_HEIGHT);
    

    // Set score Text
    	style = { font: "64px r0c0iLinotte",fill: "#f00"};

	// create sprite humatongs
		humatong[0] = game.add.sprite(HUMATONG_1_POSX,HUMATONG_1_POSY,'humatong1');
		humatong[0].scale.setTo(0.8);
		//humatong[0].anchor.set(0.5);

		humatong[1] = game.add.sprite(HUMATONG_2_POSX,HUMATONG_2_POSY,'humatong1');
		humatong[1].scale.setTo(0.8);

		humatong[2] = game.add.sprite(HUMATONG_3_POSX,HUMATONG_3_POSY,'humatong1');
		humatong[2].scale.setTo(0.8);

		humatong[3] = game.add.sprite(HUMATONG_4_POSX,HUMATONG_4_POSY,'humatong1');
		humatong[3].scale.setTo(0.8);

		humatong[4] = game.add.sprite(HUMATONG_5_POSX,HUMATONG_5_POSY,'humatong1');
		humatong[4].scale.setTo(0.8);

	// add sound
		sound[0] = game.add.audio('start');
		sound[0].play();
		sound[1] =game.add.audio('score');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
	// add tween
		tween[0] = game.add.tween(humatong[0]);
		tween[1] =game.add.tween(humatong[1]);
		tween[2] = game.add.tween(humatong[2]);
		tween[3] =game.add.tween(humatong[3]);
		tween[4] =game.add.tween(humatong[4]);
	
	// process click

		humatong[0].inputEnabled = true;
		humatong[0].events.onInputDown.add(PassBasket1, this);


		humatong[1].inputEnabled = true;
		humatong[1].events.onInputDown.add(PassBasket2, this);
	;

		humatong[2].inputEnabled = true;
		humatong[2].events.onInputDown.add(PassBasket3, this);
		

		humatong[3].inputEnabled = true;
		humatong[3].events.onInputDown.add(PassBasket4, this);
		
		
		humatong[4].inputEnabled = true;
		humatong[4].events.onInputDown.add(PassBasket5, this);
		
		//load button
		button = game.add.button(500, 570, 'btn',Process,this, 2, 1, 0);
		button.scale.setTo(0.4);
		
		// create basket

      	basket = game.add.sprite(30,50,'bk');
      	basket.scale.setTo(0.3);
      //	game.input.setInteractiveCandidateHandler(handler, this);
	// finish game 
		
		 
		
    }
    function handler (pointer, candidates, favorite) {

    if (candidates.length > 1)
    {
     
        for (var i = 0; i < candidates.length; i++)
        {
            if (candidates[i].sprite.key === 'bk')
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
//qua game mới
    function openlink_level2_game2(){
    	var winx = window.location="/bcm/level2/game2/";
    }
//vị trí các lọ mật	
    function PassBasket1(){
    	sound[2].play();
    	humatong[0].scale.setTo(0.4);
		humatong[0].angle=330;  //góc quay
		tween[0].to({y: 60, x: 170},1500,Phaser.Easing.Quadratic.InOut,true);
    	tween[0].to({y: 135, x: 40},1500,Phaser.Easing.Quadratic.InOut,true);
    	score ++;
    		
		
  }
  
 	function PassBasket2(){
    	sound[2].play();
    	humatong[1].scale.setTo(0.4);
		humatong[1].angle=330;
    	tween[1].to({y: 60, x: 250},1500,Phaser.Easing.Quadratic.InOut,true);
    	tween[1].to({y: 155, x: 145},1500,Phaser.Easing.Quadratic.InOut,true);
    	humatong[1].anchor.setTo(1);// vị trí trung tâm
    	score ++;
    	
    }
	
	 function PassBasket3(){
    	sound[2].play();
    	humatong[2].scale.setTo(0.4);
		humatong[2].angle=335;
    	tween[2].to({y: 60, x: 300},1500,Phaser.Easing.Quadratic.InOut,true);
    	tween[2].to({y: 160, x: 165},1500,Phaser.Easing.Quadratic.InOut,true);
    	humatong[2].anchor.setTo(1);
    	score ++;
	 }
	
    function PassBasket4(){
    	
    	sound[2].play();
    	humatong[3].scale.setTo(0.4);
		humatong[3].angle=337;
    	tween[3].to({y: 60, x: 350},1500,Phaser.Easing.Quadratic.InOut,true);
    	tween[3].to({y: 165, x: 180},1500,Phaser.Easing.Quadratic.InOut,true);
    	humatong[3].anchor.setTo(1);
    	score ++;
    }
	
	function PassBasket5(){
    	sound[2].play();
    	humatong[4].scale.setTo(0.4);
		humatong[4].angle=340;
    	tween[4].to({y: 60, x: 350},1500,Phaser.Easing.Quadratic.InOut,true);
    	tween[4].to({y: 165, x: 200},1500,Phaser.Easing.Quadratic.InOut,true);
    	humatong[4].anchor.setTo(1);
    	score ++;
    }
	 function Process1(){}
	function Process(){
		button.visible = false;
	 if ( score == 3)
	 
    {   button = game.add.button(500, 570, 'next',Next,this, 2, 1, 0);
		button.scale.setTo(0.4);
		sound[1].play();
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);			
		var String_1 ='Hoan hô, bạn giỏi lắm'
		var info = game.add.text(300, 40,String_1,style);
		humatong[0].inputEnabled = false;
		humatong[1].inputEnabled = false;
		humatong[2].inputEnabled = false;
		humatong[3].inputEnabled = false;
		humatong[4].inputEnabled = false;
		
     
    }else
       if ( score < 3)
    	{   score = 0;
			var String_2 ='Bạn ơi, thiếu rồi \nmình làm lại nhé'
			var info = game.add.text(300, 40,String_2,style);
			humatong[0].inputEnabled = false;
		 	humatong[1].inputEnabled = false;
		 	humatong[2].inputEnabled = false;
		 	humatong[3].inputEnabled = false;
		 	humatong[4].inputEnabled = false;
		 	C
			Button();
		}else{

				score =0;
				var String_3 ='Bạn ơi, thừa rồi \nmình làm lại nhé'
				var info = game.add.text(300, 40,String_3,style);
				humatong[0].inputEnabled = false;
		 		humatong[1].inputEnabled = false;
				humatong[2].inputEnabled = false;
		 		humatong[3].inputEnabled = false;
		 		humatong[4].inputEnabled = false;
				game.time.events.add(Phaser.Timer.SECOND * 3, Process1, this);
				Button();
			 }

	}
	var winx ;
	
	function Delay1()
	{
		game.add.tween(sound[3].play()).to( 2000, Phaser.Easing.Linear.None, true);	
		game.time.events.add(Phaser.Timer.SECOND * 3, Next, this);    
	}
	function Next()
	{
		
		winx = window.location="/bcm/index.html";
		
	}
	
	
	function Button()
	{	button1 = game.add.button(500, 570, 'again',Process1,this);
		 button1.scale.setTo(0.4);
	}
	function Process1()
	{
		 
		game.state.start(game.state.current);
		//var winx = window.location="index.html";
	}
 
	// Function called 60 times per second
	function update(){
		game.scale.forceOrientation(false, true);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
		this.scale.setScreenSize( true );
	}
	function render() {
   // game.debug.spriteInfo(humatong[1],32,32);
}