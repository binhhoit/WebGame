var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'game_div', { preload: preload, create: create });

var scoretext;
var diem = 0;
var music;

function preload () {

	
	game.load.audio('music2', 'assets/sounds/unit1_2/music.mp3');
    game.load.image('carot1', 'assets/images/unit1_game2/1nam.png');
	game.load.image('carot2', 'assets/images/unit1_game2/2nam.png');
	game.load.image('carot3', 'assets/images/unit1_game2/2nam.png');
	game.load.audio('music','assets/sounds/unit1_2/score.mp3');
	game.load.audio('music1','assets/sounds/unit1_2/fail1.mp3');
	game.load.audio('music3','assets/sounds/unit1_2/yeah.mp3');
	game.load.audio('music4','assets/sounds/unit1_2/1_Game2.mp3');
	game.load.audio('music5','assets/sounds/unit1_2/gioi_qua.mp3');
	game.load.image('gio', 'assets/images/unit1_game2/gio.png');
	game.load.image('btn','assets/images/unit1_game2/ic_next.png');
	game.load.audio('music6','assets/sounds/unit1_2/fail1.mp3');
	game.load.image('background', 'assets/images/unit1_game2/nengame1.png');
	
	game.scale.forceOrientation(false, true);

}


function create() {
	var background = game.add.sprite(0, 0, 'background');
	
	var style = { font: "30px r0c0iLinotte", fill: "#000"};
    //scoretext = game.add.text(0, 10, '0',style);
	
	music4 = game.add.audio('music4');
    music4.onDecoded.add(start, this);
	
	
    var image = game.add.sprite(400, 420, 'carot1');
    image.scale.setTo(0.22, 0.22);
    image.inputEnabled = true;
	image.events.onInputDown.add(score, this);
	image.events.onInputDown.add(action, this);
	image.events.onInputDown.add(animation, this);
	image.events.onInputDown.add(process1, this);
	
		
	
	var image1 = game.add.sprite(600, 420, 'carot2');
    image1.scale.setTo(0.22, 0.22);
    image1.inputEnabled = true;
	image1.events.onInputDown.add(fail, this);
	image1.events.onInputDown.add(action1, this);
	image1.events.onInputDown.add(animation1, this);
	
		
	
	var image2 = game.add.sprite(800, 420, 'carot3');
    image2.scale.setTo(0.22, 0.22);
    image2.inputEnabled = true;
	image2.events.onInputDown.add(fail, this);
	image2.events.onInputDown.add(action1, this);
	image2.events.onInputDown.add(animation2, this);
	
	//var btn = game.add.button(900, 500, 'btn', process, this);
	//btn.scale.setTo(0.3);
	
}
//function openlink_lv1(){
//	var winx = window.location="http://192.168.11.16/butchimau/map_level/";
	//var winx = window.open(link, "_seft");
	//winx.focus();
//}
//function start() {

//    music.fadeIn(4000);

//}

//function render() {
//    game.debug.soundInfo(music, 20, 32);
//}

function start() {

    music4.fadeIn(4000);

}

function score(){
		music = game.add.audio('music');
		music.play();
		music.fadeIn(100);
		
		music = game.add.audio('music3');
		music.play();
		music.fadeIn(300);
}
function fail(){
		music = game.add.audio('music1');
		music.play();
		music.fadeIn(100);
}
/*function listener () {
		text.text = "Làm tốt lắm !";
		
}

function listener1 () {
		text.text = "Sai rồi !";
}

function listener2 () {
		text.text = "Hãy thử lại !";
		
}*/


function action(image){	
	image.visible = image.scale.setTo(0.25);
}
function action1(image1){
	
	image1.visible = image1.scale.setTo(0.2);
}
function action1(image2){

	image2.visible = image2.scale.setTo(0.2);
}

function animation(image){
	music = game.add.audio('music3');
	music.play();
	image.inputEnabled = false;
	diem ++;
	//scoretext.text = diem;
	image.animations.add('teeter');
    image.animations.play('teeter', 5, true);
    game.add.tween(image).to({ y: [100, 400], x: [100, 120] }, 2000, Phaser.Easing.Quadratic.InOut, true);
	
}

function animation1(image1){
	
	image1.animations.add('teeter');
    image1.animations.play('teeter', 5, true);
    game.add.tween(image1).to({ y: [150, 430], x: [600, 600] }, 2000, Phaser.Easing.Quadratic.InOut, true);	
}

function animation2(image2){
	
	image2.animations.add('teeter');
    image2.animations.play('teeter', 5, true);
    game.add.tween(image2).to({ y: [150, 430], x: [800, 800] }, 2000, Phaser.Easing.Quadratic.InOut, true);	
}
function process1(){
	if( diem >= 1 ){
		music = game.add.audio('music5');
		music.play();
		game.time.events.add(Phaser.Timer.SECOND * 3, Delay1, this);
	}
	else{
		false;
	}
}
function Delay1(){
	var winx = window.location="/bcm/index.html";
}