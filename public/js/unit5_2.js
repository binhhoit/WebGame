	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.CANVAS, 'gameContainer',{ preload: preload, create: create, update:update,render:render  });
   
	// Creates a new 'main' state that wil contain the game
	var background;
	var Apple;
	var text;
	var Apple_4,Apple_5;
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
		
	//load Basket
		game.load.image('Basket4',BASKET_IMAGE4);
		game.load.image('Basket5',BASKET_IMAGE5);

	// load Apple
		game.load.image('Apple_4',APPLE_4);
		game.load.image('Apple_5',APPLE_5);

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
	// create sprite Apples
				

		// add sound
		sound[0] = game.add.audio('start');
		sound[0].play();
		sound[1] =game.add.audio('Score_a');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
		sound[4] =game.add.audio('drop');

		
		
		
		Apple_1 = game.add.sprite(APPLE_1_POSX,APPLE_1_POSY,'Apple_4');
		Apple_1.scale.setTo(0.4);
		Apple_2 = game.add.sprite(APPLE_2_POSX,APPLE_2_POSY,'Apple_5');
		Apple_2.scale.setTo(0.4);
		Apple_3 = game.add.sprite(APPLE_3_POSX,APPLE_3_POSY,'Apple_5');
		Apple_3.scale.setTo(0.4);
		Apple_4 = game.add.sprite(APPLE_4_POSX,APPLE_4_POSY,'Apple_4');
		Apple_4.scale.setTo(0.4);
		Apple_5 = game.add.sprite(APPLE_5_POSX,APPLE_5_POSY,'Apple_5');
		Apple_5.scale.setTo(0.4);
		Apple_6 = game.add.sprite(APPLE_6_POSX,APPLE_6_POSY,'Apple_5');
		Apple_6.scale.setTo(0.4);
		Apple_7 = game.add.sprite(APPLE_7_POSX,APPLE_7_POSY,'Apple_5');
		Apple_7.scale.setTo(0.4);
		Apple_8 = game.add.sprite(APPLE_8_POSX,APPLE_8_POSY,'Apple_4');
		Apple_8.scale.setTo(0.4);
		Apple_9 = game.add.sprite(APPLE_9_POSX,APPLE_9_POSY,'Apple_5');
		Apple_9.scale.setTo(0.4);
		Apple_10 = game.add.sprite(APPLE_10_POSX,APPLE_10_POSY,'Apple_5');
		Apple_10.scale.setTo(0.4);
		
		//create drag and drop Apple		
		Apple_1.inputEnabled = true;					//cho phep nhap						
		Apple_1.input.enableDrag();                     //kich hoat keo tha
		Apple_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
		Apple_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
		Apple_2.inputEnabled = true;					
		Apple_2.input.enableDrag();
		Apple_2.events.onInputDown.add(score_s, this);
		Apple_2.events.onDragStop.add(stopDrag_2);
		Apple_3.inputEnabled = true;					
		Apple_3.input.enableDrag();
		Apple_3.events.onInputDown.add(score_s, this);
		Apple_3.events.onDragStop.add(stopDrag_3);
		Apple_4.inputEnabled = true;					
		Apple_4.input.enableDrag();
		Apple_4.events.onInputDown.add(score_s, this);
		Apple_4.events.onDragStop.add(stopDrag_4);
		Apple_5.inputEnabled = true;					
		Apple_5.input.enableDrag();
		Apple_5.events.onInputDown.add(score_s, this);
		Apple_5.events.onDragStop.add(stopDrag_5);
		Apple_6.inputEnabled = true;					
		Apple_6.input.enableDrag();
		Apple_6.events.onInputDown.add(score_s, this);
		Apple_6.events.onDragStop.add(stopDrag_6);
		Apple_7.inputEnabled = true;					
		Apple_7.input.enableDrag();
		Apple_7.events.onInputDown.add(score_s, this);
		Apple_7.events.onDragStop.add(stopDrag_7);
		Apple_8.inputEnabled = true;					
		Apple_8.input.enableDrag();
		Apple_8.events.onInputDown.add(score_s, this);
		Apple_8.events.onDragStop.add(stopDrag_8);
		Apple_9.inputEnabled = true;					
		Apple_9.input.enableDrag();
		Apple_9.events.onInputDown.add(score_s, this);
		Apple_9.events.onDragStop.add(stopDrag_9);
		Apple_10.inputEnabled = true;					
		Apple_10.input.enableDrag();
		Apple_10.events.onInputDown.add(score_s, this);
		Apple_10.events.onDragStop.add(stopDrag_10);
		
		
		// create Basket
      	Basket_4 = game.add.sprite(BASKET_4_POSX,BASKET_4_POSY,'Basket4');
      	Basket_4.scale.setTo(0.3);
		Basket_5 = game.add.sprite(BASKET_5_POSX,BASKET_5_POSY,'Basket5');
      	Basket_5.scale.setTo(0.3);
		
    }
	
	function score_s(){
		sound[4].play();		
		}
	
	//drap and drop Apple 1 -4
		function stopDrag_1(){
		Apple_1.scale.setTo(0.3);
		if(Apple_1.y >521 && Apple_1.x <327 && Apple_1.x >237){
			Apple_1.inputEnabled = false;	
			Apple_1.x= '246';
			Apple_1.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_1.x= APPLE_1_POSX;
					Apple_1.y= APPLE_1_POSY;
					Apple_1.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Apple2 -5
	function stopDrag_2(){
		Apple_2.scale.setTo(0.3);
		if(Apple_2.y >510 && Apple_2.x <763 && Apple_2.x >674){
			Apple_2.inputEnabled = false;	
			Apple_2.x= '700';
			Apple_2.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_2.x= APPLE_2_POSX;
					Apple_2.y= APPLE_2_POSY;
					Apple_2.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Apple3 -5
		function stopDrag_3(){
		Apple_3.scale.setTo(0.3);
		if(Apple_3.y >510 && Apple_3.x <763 && Apple_3.x >674){
			Apple_3.inputEnabled = false;	
			Apple_3.x= '715';
			Apple_3.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_3.x= APPLE_3_POSX;
					Apple_3.y= APPLE_3_POSY;
					Apple_3.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Apple4 -4
	function stopDrag_4(){
		Apple_4.scale.setTo(0.3);
		if(Apple_4.y >521 && Apple_4.x <327 && Apple_4.x >237){
			Apple_4.inputEnabled = false;	
			Apple_4.x= '280';
			Apple_4.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_4.x= APPLE_4_POSX;
					Apple_4.y= APPLE_4_POSY;
					Apple_4.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	//drop and drag apple 5 - 5
	function stopDrag_5(){
		Apple_5.scale.setTo(0.3);
		if(Apple_5.y >510 && Apple_5.x <763 && Apple_5.x >674){
			Apple_5.inputEnabled = false;	
			Apple_5.x= '725';
			Apple_5.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_5.x= APPLE_5_POSX;
					Apple_5.y= APPLE_5_POSY;
					Apple_5.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	
	//drop and drag apple 6 - 5
	function stopDrag_6(){
		Apple_6.scale.setTo(0.3);
		if(Apple_6.y >510 && Apple_6.x <763 && Apple_6.x >674){
			Apple_6.inputEnabled = false;	
			Apple_6.x= '735';
			Apple_6.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_6.x= APPLE_6_POSX;
					Apple_6.y= APPLE_6_POSY;
					Apple_6.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	//drop and drag apple 7 - 5
	function stopDrag_7(){
		Apple_7.scale.setTo(0.3);
		if(Apple_7.y >510 && Apple_7.x <763 && Apple_7.x >674){
			Apple_7.inputEnabled = false;	
			Apple_7.x= '745';
			Apple_7.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_7.x= APPLE_7_POSX;
					Apple_7.y= APPLE_7_POSY;
					Apple_7.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	
	//drop and drag apple 8 -4
	function stopDrag_8(){
		Apple_8.scale.setTo(0.3);
		if(Apple_8.y >521 && Apple_8.x <327 && Apple_8.x >237){
			Apple_8.inputEnabled = false;	
			Apple_8.x= '325';
			Apple_8.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_8.x= APPLE_8_POSX;
					Apple_8.y= APPLE_8_POSY;
					Apple_8.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	
	//drop and drag apple 9 -5
	function stopDrag_9(){
		Apple_9.scale.setTo(0.3);
		if(Apple_9.y >510 && Apple_9.x <763 && Apple_9.x >674){
			Apple_9.inputEnabled = false;	
			Apple_9.x= '755';
			Apple_9.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_9.x= APPLE_9_POSX;
					Apple_9.y= APPLE_9_POSY;
					Apple_9.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	
	//drop and drag apple 9 -5
	function stopDrag_10(){
		Apple_10.scale.setTo(0.3);
		if(Apple_10.y >510 && Apple_10.x <763 && Apple_10.x >674){
			Apple_10.inputEnabled = false;	
			Apple_10.x= '765';
			Apple_10.y= '595';
			Score++;
			sound[1].play();
			}else{
					Apple_10.x= APPLE_10_POSX;
					Apple_10.y= APPLE_10_POSY;
					Apple_10.scale.setTo(0.4);
					sound[2].play();
					}
		Process();							
		}
	
	
	
	
	

	function Process(){			
	 if ( Score == 10)
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
	 //game.debug.spriteInfo(Apple_10,32,32);
}