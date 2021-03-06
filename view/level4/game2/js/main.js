	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.CANVAS, 'gameContainer',{ preload: preload, create: create, update:update,render:render  });
   
	// Creates a new 'main' state that wil contain the game
	var background;
	var basket;
	var text;
	var Basket_1,Basket_2,Basket_3,Basket_4;
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
		game.load.image('bg',BACKGROUND_IMAGE);
		//game.scale.forceOrientation(false, true);
		
	//load soc
		game.load.image('Soc1',SOC_IMAGE1);
		game.load.image('Soc2',SOC_IMAGE2);
		game.load.image('Soc3',SOC_IMAGE3);
		game.load.image('Soc4',SOC_IMAGE4);
	// load Basket
		game.load.image('Basket_1',BASKET_1);
		game.load.image('Basket_2',BASKET_2);
		game.load.image('Basket_3',BASKET_3);
		game.load.image('Basket_4',BASKET_4);

	// load sound
		game.load.audio('start',SOUND_START);
		game.load.audio('Score_a',SOUND_SCORE);
		game.load.audio('fail',SOUND_FAIL);
		//game.load.audio('end',SOUND_END);
		game.load.audio('drop',SOUND_DROP);
	// load button
		//game.load.image('again',BUTTON_AGAIN);
		//game.load.image('btn',BUTTON_IMAGE);
		game.load.image('next',BUTTON_NEXT);
	// process responsive

	}

	// Fuction called after 'preload' to setup the game  
	function create(){ 
	// create background
		background = game.add.sprite(BACKGROUND_POSX,BACKGROUND_POSY,'bg');	
			
    // Set Score Text
    	style = { font: "64px r0c0iLinotte",fill: "#f00"};
	// create sprite Baskets
				

		// add sound
		sound[0] = game.add.audio('start');
		sound[0].play();
		sound[1] =game.add.audio('Score_a');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
		sound[4] =game.add.audio('drop');

		// create soc
      	Soc_1 = game.add.sprite(40,450,'Soc1');
      	Soc_1.scale.setTo(0.4);
		Soc_2 = game.add.sprite(280,440,'Soc2');
      	Soc_2.scale.setTo(0.4);
		Soc_3 = game.add.sprite(510,450,'Soc3');
      	Soc_3.scale.setTo(0.4);
		Soc_4 = game.add.sprite(740,440,'Soc4');
      	Soc_4.scale.setTo(0.4);
		
		
		Basket_1 = game.add.sprite(BASKET_1_POSX,BASKET_1_POSY,'Basket_1');
		Basket_1.scale.setTo(0.5);
		Basket_2 = game.add.sprite(BASKET_2_POSX,BASKET_2_POSY,'Basket_2');
		Basket_2.scale.setTo(0.5);
		Basket_3 = game.add.sprite(BASKET_3_POSX,BASKET_3_POSY,'Basket_3');
		Basket_3.scale.setTo(0.5);
		Basket_4 = game.add.sprite(BASKET_4_POSX,BASKET_4_POSY,'Basket_4');
		Basket_4.scale.setTo(0.5);
		//create drag and drop Basket		
		Basket_1.inputEnabled = true;					//cho phep nhap						
		Basket_1.input.enableDrag();                     //kich hoat keo tha
		Basket_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
		Basket_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
		Basket_2.inputEnabled = true;					
		Basket_2.input.enableDrag();
		Basket_2.events.onInputDown.add(score_s, this);
		Basket_2.events.onDragStop.add(stopDrag_2);
		Basket_3.inputEnabled = true;					
		Basket_3.input.enableDrag();
		Basket_3.events.onInputDown.add(score_s, this);
		Basket_3.events.onDragStop.add(stopDrag_3);
		Basket_4.inputEnabled = true;					
		Basket_4.input.enableDrag();
		Basket_4.events.onInputDown.add(score_s, this);
		Basket_4.events.onDragStop.add(stopDrag_4);
		
    }
	
	function score_s(){
		sound[4].play();		
		}
	
	//drap and drop Basket 1
		function stopDrag_1(){
		Basket_1.scale.setTo(0.3);
		if(Basket_1.y >401 && Basket_1.x <560 && Basket_1.x >460){
			Basket_1.inputEnabled = false;	
			Basket_1.x= '493.9';
			Basket_1.y= '542.9';
			Score++;
			sound[1].play();
			}else{
					Basket_1.x= BASKET_1_POSX;
					Basket_1.y= BASKET_1_POSY;
					Basket_1.scale.setTo(0.5);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Basket2
	function stopDrag_2(){
		Basket_2.scale.setTo(0.3);
		if(Basket_2.y >410 && Basket_2.x <380 && Basket_2.x > 262){
						Basket_2.inputEnabled = false;	
						Basket_2.x= '265.2';
						Basket_2.y= '529.7';
						Score++;
						sound[1].play();
						}else{
							
									Basket_2.x= BASKET_2_POSX;
									Basket_2.y= BASKET_2_POSY;
									Basket_2.scale.setTo(0.5);
									sound[2].play();
									}
		Process();		
		}
	//drag and drop Basket3
		function stopDrag_3(){
		Basket_3.scale.setTo(0.3);
		if(Basket_3.y >410 && Basket_3.x <840 && Basket_3.x > 730){
			Basket_3.inputEnabled = false;	
			Basket_3.x= '721.8';
			Basket_3.y= '526.3';
			Score++;
			sound[1].play();
			}else{
				Basket_3.x= BASKET_3_POSX;
				Basket_3.y= BASKET_3_POSY;
				Basket_3.scale.setTo(0.5);
				sound[2].play();
				}
		Process();							
		}
	//drag and drop Basket4
	function stopDrag_4(){
		Basket_4.scale.setTo(0.3);
		if(Basket_4.y >420 && Basket_4.x <120 && Basket_4.x >8 )
		{
			Basket_4.inputEnabled = false;	
			Basket_4.x= '28.3';
			Basket_4.y= '536.3';
			Score++;
			sound[1].play();
			}else {					
					Basket_4.x= BASKET_4_POSX;
					Basket_4.y= BASKET_4_POSY;
					Basket_4.scale.setTo(0.5);
					sound[2].play();
					}
		Process();		
		}
	

	function Process(){			
	 if ( Score == 4)
    {   
		game.time.events.add(Phaser.Timer.SECOND * 1, Delay1, this);
		var String_1 ='tuyệt vời , bạn giỏi lắm'
		var info = game.add.text(100, 30,String_1,style);
		button = game.add.button(920, 570, 'next',Process2,this, 2, 1, 0);
		button.scale.setTo(0.4);
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);     
    }
	}				
	function Delay1()
	{
		game.add.tween(sound[3].play()).to( 2000, Phaser.Easing.Linear.None, true);		
	}
	function Process2()
	{
		game.add.tween(winx = window.location="/bcm/index.html").to( 
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		
	}
	
	
   
	function update(){		
		game.scale.forceOrientation(false, true);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setScreenSize( true );		
	}
	function render() {
     //game.debug.spriteInfo(Score,32,32);
	 //game.debug.spriteInfo(Basket_4,32,32);
}