	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.CANVAS, 'gameContainer',{ preload: preload, create: create, update:update,render:render  });
   
	// Creates a new 'main' state that wil contain the game
	var background;
	var Bird;
	var text;
	var Bird_1,Bird_2,Bird_3,Bird_4;
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
		
	//load Nest
		game.load.image('Nest1',NEST_IMAGE1);
		game.load.image('Nest2',NEST_IMAGE2);
		game.load.image('Nest3',NEST_IMAGE3);
		game.load.image('Nest4',NEST_IMAGE4);
	// load Bird
		game.load.image('Bird_1',BIRD_1);
		game.load.image('Bird_2',BIRD_2);
		game.load.image('Bird_3',BIRD_3);
		game.load.image('Bird_4',BIRD_4);

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
	// create sprite Birds
				

		// add sound
		sound[0] = game.add.audio('start');
		sound[0].play();
		sound[1] =game.add.audio('Score_a');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
		sound[4] =game.add.audio('drop');
		
		// cread bird
		
		

		// create Nest
      	Nest_1 = game.add.sprite(NEST_1_POSX,NEST_1_POSY,'Nest1');
      	Nest_1.scale.setTo(0.3);
		Nest_2 = game.add.sprite(NEST_2_POSX,NEST_2_POSY,'Nest2');
      	Nest_2.scale.setTo(0.3);
		Nest_3 = game.add.sprite(NEST_3_POSX,NEST_3_POSY,'Nest3');
      	Nest_3.scale.setTo(0.3);
		Nest_4 = game.add.sprite(NEST_4_POSX,NEST_4_POSY,'Nest4');
      	Nest_4.scale.setTo(0.3);
		
		Bird_1 = game.add.sprite(BIRD_1_POSX,BIRD_1_POSY,'Bird_1');
		Bird_1.scale.setTo(0.5);
		Bird_2 = game.add.sprite(BIRD_2_POSX,BIRD_2_POSY,'Bird_2');
		Bird_2.scale.setTo(0.5);
		Bird_3 = game.add.sprite(BIRD_3_POSX,BIRD_3_POSY,'Bird_3');
		Bird_3.scale.setTo(0.5);
		Bird_4 = game.add.sprite(BIRD_4_POSX,BIRD_4_POSY,'Bird_4');
		Bird_4.scale.setTo(0.5);
		
		//create drag and drop Bird		
		Bird_1.inputEnabled = true;					//cho phep nhap						
		Bird_1.input.enableDrag();                     //kich hoat keo tha
		Bird_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
		Bird_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
		Bird_2.inputEnabled = true;					
		Bird_2.input.enableDrag();
		Bird_2.events.onInputDown.add(score_s, this);
		Bird_2.events.onDragStop.add(stopDrag_2);
		Bird_3.inputEnabled = true;					
		Bird_3.input.enableDrag();
		Bird_3.events.onInputDown.add(score_s, this);
		Bird_3.events.onDragStop.add(stopDrag_3);
		Bird_4.inputEnabled = true;					
		Bird_4.input.enableDrag();
		Bird_4.events.onInputDown.add(score_s, this);
		Bird_4.events.onDragStop.add(stopDrag_4);
		
    }
	
	function score_s(){
		sound[4].play();		
		}
	
	//drap and drop Bird 3
		function stopDrag_1(){
		Bird_1.scale.setTo(0.5);
		if(Bird_1.y >131 && Bird_1.y < 212 && Bird_1.x <920 && Bird_1.x >735){
			Bird_1.inputEnabled = false;	
			Bird_1.x= '815';
			Bird_1.y= '141.6';
			Score++;
			sound[1].play();
			}else{
					Bird_1.x = BIRD_1_POSX ;
					Bird_1.y = BIRD_1_POSY ;
					Bird_1.scale.setTo(0.5);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Bird6
	function stopDrag_2(){
		Bird_2.scale.setTo(0.5);
		if(Bird_2.y <310 && Bird_2.y >237 && Bird_2.x <477 && Bird_2.x > 330){
						Bird_2.inputEnabled = false;	
						Bird_2.x= '382';
						Bird_2.y= '296';
						Score++;
						sound[1].play();
						}else{
							
									Bird_2.x= BIRD_2_POSX;
									Bird_2.y= BIRD_2_POSY;
									Bird_2.scale.setTo(0.5);
									sound[2].play();
									}
		Process();		
		}
	//drag and drop Bird5
		function stopDrag_3(){
		Bird_3.scale.setTo(0.5);
		if(Bird_3.y <411 && Bird_3.y >353 && Bird_3.x <951 && Bird_3.x > 779){
			Bird_3.inputEnabled = false;	
			Bird_3.x= '835';
			Bird_3.y= '372';
			Score++;
			sound[1].play();
			}else{
				Bird_3.x= BIRD_3_POSX;
				Bird_3.y= BIRD_3_POSY;
				Bird_3.scale.setTo(0.5);
				sound[2].play();
				}
		Process();							
		}
	//drag and drop Bird4
	function stopDrag_4(){
		Bird_4.scale.setTo(0.5);
		if(Bird_4.y <300 && Bird_4.y >243 && Bird_4.x <244 && Bird_4.x > 87)
		{
			Bird_4.inputEnabled = false;	
			Bird_4.x= '131';
			Bird_4.y= '259';
			Score++;
			sound[1].play();
			}else {					
					Bird_4.x= BIRD_4_POSX;
					Bird_4.y= BIRD_4_POSY;
					Bird_4.scale.setTo(0.5);
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
		button.scale.setTo(0.5);
		game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);     
    }
	}				
	function Delay1()
	{
		game.add.tween(sound[3].play()).to( 2000, Phaser.Easing.Linear.None, true);		
	}
	function Process2()
	{
		game.add.tween(winx = window.location="/bcm/level6/game2/").to( 
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		
	}
	
	
   
	function update(){		
		game.scale.forceOrientation(false, true);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setScreenSize( true );		
	}
	function render() {
     //game.debug.spriteInfo(Score,32,32);
	 //game.debug.spriteInfo(Bird_4,32,32);
}