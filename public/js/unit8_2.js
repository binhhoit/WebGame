	// Initialize Phaser, and creates full game

	var game = new Phaser.Game(1024,720, Phaser.CANVAS, 'gameContainer',{ preload: preload, create: create, update:update,render:render  });
   
	// Creates a new 'main' state that wil contain the game
	var background;
	var text;
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
	
	// load Number
		game.load.image('Number_1',NUMBER_1);
		game.load.image('Number_2',NUMBER_2);
		game.load.image('Number_3',NUMBER_3);
		game.load.image('Number_4',NUMBER_4);
		

	// load sound
		game.load.audio('start',SOUND_START);
		game.load.audio('Score_a',SOUND_SCORE);
		game.load.audio('fail',SOUND_FAIL);
		game.load.audio('end',SOUND_END);
		game.load.audio('drop',SOUND_DROP);
	
	}

	// Fuction called after 'preload' to setup the game  
	function create(){ 
	// create background
		background = game.add.sprite(BACKGROUND_POSX,BACKGROUND_POSY,'bg');	
			
    // Set Score Text
    	style = { font: "64px r0c0iLinotte",fill: "#f00"};
	// create sprite Numbers
				

		// add sound
		sound[0] = game.add.audio('start');
		sound[0].play();
		sound[1] =game.add.audio('Score_a');
		sound[2] =game.add.audio('fail');
		sound[3] =game.add.audio('end');
		sound[4] =game.add.audio('drop');

		
		
		Number_1 = game.add.sprite(NUMBER_1_POSX,NUMBER_1_POSY,'Number_1');
		Number_1.scale.setTo(0.35);
		Number_2 = game.add.sprite(NUMBER_2_POSX,NUMBER_2_POSY,'Number_2');
		Number_2.scale.setTo(0.35);
		Number_3 = game.add.sprite(NUMBER_3_POSX,NUMBER_3_POSY,'Number_3');
		Number_3.scale.setTo(0.35);
		Number_4 = game.add.sprite(NUMBER_4_POSX,NUMBER_4_POSY,'Number_4');
		Number_4.scale.setTo(0.35);

		
		
		//create drag and drop Number		
		Number_1.inputEnabled = true;					//cho phep nhap						
		Number_1.input.enableDrag();                     //kich hoat keo tha
		Number_1.events.onInputDown.add(score_s, this);	//âm thanh khi kéo
		Number_1.events.onDragStop.add(stopDrag_1);		// quy định các luật dừng
		Number_2.inputEnabled = true;					
		Number_2.input.enableDrag();
		Number_2.events.onInputDown.add(score_s, this);
		Number_2.events.onDragStop.add(stopDrag_2);
		Number_3.inputEnabled = true;					
		Number_3.input.enableDrag();
		Number_3.events.onInputDown.add(score_s, this);
		Number_3.events.onDragStop.add(stopDrag_3);
		Number_4.inputEnabled = true;
		Number_4.input.enableDrag();
		Number_4.events.onInputDown.add(score_s, this);
		Number_4.events.onDragStop.add(stopDrag_4);
		
		
    }


	
	function score_s(){
		sound[4].play();		
		}
	
	//drap and drop Number 1
		function stopDrag_1(){
		Number_1.scale.setTo(0.25);
		if(Number_1.y >377 && Number_1.x <720 && Number_1.x >570){
			Number_1.inputEnabled = false;	
			Number_1.x= '658.9';
			Number_1.y= '452';
			Score++;
			sound[1].play();
			}else{
					Number_1.x= NUMBER_1_POSX;
					Number_1.y= NUMBER_1_POSY;
					Number_1.scale.setTo(0.35);
					sound[2].play();
					}
		Process();							
		}
	//drag and drop Number3 vị trí 2
	function stopDrag_3(){
		Number_3.scale.setTo(0.25);
		if(Number_3.y > 377 && Number_3.x < 202 && Number_3.x > 60){
						Number_3.inputEnabled = false;	
						Number_3.x= '127';
						Number_3.y= '452';
						Score++;
						sound[1].play();
						}else{
							
									Number_3.x= NUMBER_3_POSX;
									Number_3.y= NUMBER_3_POSY;
									Number_3.scale.setTo(0.35);
									sound[2].play();
									}
		Process();		
		}
	//drag and drop NUMBER5-4
		function stopDrag_4(){
		Number_4.scale.setTo(0.25);
		if(Number_4.y > 377 && Number_4.x < 617 && Number_4.x > 439){
						Number_4.inputEnabled = false;	
						Number_4.x= '525';
						Number_4.y= '449';
						Score++;
						sound[1].play();
						}else{
							
									Number_4.x= NUMBER_4_POSX;
									Number_4.y= NUMBER_4_POSY;
									Number_4.scale.setTo(0.35);
									sound[2].play();
									}
		Process();		
		}
		
	//drag and drop NUMBER8-2
	
		function stopDrag_2(){
		Number_2.scale.setTo(0.25);
		if(Number_2.y > 377 &&  Number_2.x > 800){
						Number_2.inputEnabled = false;	
						Number_2.x= '906';
						Number_2.y= '453';
						Score++;
						sound[1].play();
						}else{
							
									Number_2.x= NUMBER_2_POSX;
									Number_2.y= NUMBER_2_POSY;
									Number_2.scale.setTo(0.35);
									sound[2].play();
									}
		Process();		
		}

	function Process(){			
		 if ( Score == 4)
		{   
			sound[3].play();
			game.time.events.add(Phaser.Timer.SECOND * 4, Process2, this);     
		}
		}				

	function Process2()
	{
		game.add.tween(winx = window.location="/bcm/").to( 
		{ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		
	}
	
	
   
	function update(){		
		game.scale.forceOrientation(false, true);
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setScreenSize( true );		
	}
	function render() {
     //game.debug.spriteInfo(Score,32,32);
	 //game.debug.spriteInfo(Number_1,32,32);
	 //game.debug.spriteInfo(Number_4,32,32);
}