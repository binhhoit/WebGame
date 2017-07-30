
var game = new Phaser.Game(1024, 640, Phaser.CANVAS, 'game_div', { preload: preload, create: create });


var scoretext;
var diem = 0;

function preload () {
	
	game.scale.forceOrientation(false, true);
	
	game.load.image('bg', 'assets/images/nengame1.png');
    game.load.image('carot1', 'assets/images/carot1.png');
	game.load.image('carot2', 'assets/images/carot2.png');
	game.load.image('carot3', 'assets/images/carot3.png');
	game.load.audio('music','assets/sounds/score.mp3');
	game.load.audio('music1','assets/sounds/fail.mp3');
	game.load.audio('music3','assets/sounds/gioi_qua.mp3');
	game.load.audio('music4','assets/sounds/hoan_ho.mp3');
	game.load.audio('music5','assets/sounds/yeah.mp3');
	game.load.audio('music6','assets/sounds/1_Game1.mp3');
	game.load.image('gio', 'assets/images/gio.png');
	game.load.image('btn','assets/images/button.png');
	
}


function create() {
	var bg = game.add.sprite(0, 0, 'bg');
	var style = { font: "30px r0c0iLinotte", fill: "#000"};
  	scoretext = game.add.text(0, 10, '0',style);
	
	music6 = game.add.audio('music6');
    music6.onDecoded.add(start, this);

	
	
    var image = game.add.sprite(300, 300, 'carot1');
    image.scale.setTo(0.5, 0.5);
    image.inputEnabled = true;

	image.events.onInputDown.add(score, this);
	image.events.onInputDown.add(action, this);
	image.events.onInputDown.add(animation, this);
	

	
		
	
	var image1 = game.add.sprite(400, 300, 'carot2');
    image1.scale.setTo(0.5, 0.5);
    image1.inputEnabled = true;

	image1.events.onInputDown.add(fail, this);
	image1.events.onInputDown.add(action1, this);
	image1.events.onInputDown.add(animation3, this);


	
	var image2 = game.add.sprite(500, 300, 'carot1');
    image2.scale.setTo(0.5, 0.5);
    image2.inputEnabled = true;

	image2.events.onInputDown.add(score1, this);
	image2.events.onInputDown.add(action, this);
	image2.events.onInputDown.add(animation1, this);


	
	
	var image3 = game.add.sprite(600, 300, 'carot3');
    image3.scale.setTo(0.5, 0.5);
    image3.inputEnabled = true;

	image3.events.onInputDown.add(fail, this);
	image3.events.onInputDown.add(action1, this);
	image3.events.onInputDown.add(animation4, this);


	
	
	var image4 = game.add.sprite(700, 300, 'carot1');
    image4.scale.setTo(0.5, 0.5);
    image4.inputEnabled = true;

	image4.events.onInputDown.add(score2, this);
	image4.events.onInputDown.add(action, this);
	image4.events.onInputDown.add(animation2, this);

	
	var gio = game.add.sprite(50, 230, 'gio');
	gio.scale.setTo(0.4);
	
	game.input.setInteractiveCandidateHandler(handler, this);
	
	var btn = game.add.button(900, 500, 'btn', process, this);
	btn.scale.setTo(0.3);


}


function start() {

    music6.fadeIn(4000);

}


function handler (pointer, candidates, favorite) {

    if (candidates.length > 1)
    {
     
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

function score(){
		
		music = game.add.audio('music');
		music.play();
		
		music = game.add.audio('music5');
		music.play();
		
		
}

function score1(){
		music = game.add.audio('music');
		music.play();

		
		music = game.add.audio('music5');
		music.play();

}

function score2(){
		music = game.add.audio('music');
		music.play();

		
		music = game.add.audio('music5');
		music.play();

}

function fail(){
		music = game.add.audio('music1');
		music.play();

}

function action(image){
	image.visible = image.scale.setTo(0.4);

}
function action1(image1){
	
	image1.visible = image1.scale.setTo(0.4);
}

function action(image2){

	image2.visible = image2.scale.setTo(0.4);
}
function action1(image3){
	
	image3.visible = image3.scale.setTo(0.4);
}

function action(image4){

	image4.visible = image4.scale.setTo(0.4);
}

function animation(image){
	image.inputEnabled = false;
	diem ++;
	scoretext.text = diem;
	image.animations.add('teeter');
    image.animations.play('teeter', 5, true);
    game.add.tween(image).to({ y: [100, 250], x: [200, 110] }, 2000, Phaser.Easing.Quadratic.InOut, true);
	
}

function animation1(image2){
	image2.inputEnabled = false;
	diem ++;
	scoretext.text = diem;
	image2.animations.add('teeter');
    image2.animations.play('teeter', 5, true);
    game.add.tween(image2).to({ y: [100, 270], x: [200, 130] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animation2(image4){
	image4.inputEnabled = false;
	diem ++;
	scoretext.text = diem;
	image4.animations.add('teeter');
    image4.animations.play('teeter', 5, true);
    game.add.tween(image4).to({ y: [100, 290], x: [200, 150] }, 2000, Phaser.Easing.Quadratic.InOut, true);
}

function animation3(image1){
	image1.animations.add('teeter');
    image1.animations.play('teeter', 5, true);
   	game.add.tween(image1).to({ y: [250, 340], x: [400, 400] }, 1000, Phaser.Easing.Quadratic.InOut, true);

}

function animation4(image3){
	image3.animations.add('teeter');
    image3.animations.play('teeter', 5, true);
    game.add.tween(image3).to({ y: [250, 340], x: [600, 600] }, 1000, Phaser.Easing.Quadratic.InOut, true);
}

function process(){
	if( diem >= 3 ){
		var winx = window.location="/bcm/level9/game2";
	}
	else{
		var style = { font: "30px r0c0iLinotte", fill: "#f00"};
  		text = game.add.text(900, 0, 'Try Again !',style);
		music = game.add.audio('music1');
		music.play();
		music.fadeIn(100);
	}
}

function update(){
	
}

