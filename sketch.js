let arrows = []; 
let notes = [];
let song;
let songDuration; 
let targetX; 
let score = 0;
let songStartTime = 0; 
var stage = 1;
let bgVideo;
let songPlayed = false;
let combo = 0;
let maxCombo = 0;
let fullCombo;
let victory1, victory2;
let opening, titleBG;

function preload() {
  note = loadImage("note.png");
  note4 = loadImage("note4.png");
  noteSound = loadSound("NoteSound.wav");
  song = loadSound("Suteki_Da_Nae.mp3");
  songDuration = song.duration();
  bgVideo = createVideo("FF10.mp4");
  fullCombo = loadImage("FullCombo.png");
  victory1 = loadSound("Victory1.mp3");
  victory2 = loadSound("Victory2.mp3");
  opening = loadSound("Opening.mp3");
  titleBG = loadImage("SutekiBG.png");
}

function videoEnded(){
  if(song.isPlaying()){
    song.stop();
  }
  stage = 3;
}


function setup() {
  createCanvas(1200, 800);
  targetX = width - 350;
  bgVideo.hide();
  bgVideo.onended(videoEnded); 
  initializeNotes();
}

function initializeNotes(){
  notes = [];
  scheduleNotes(3750, RIGHT_ARROW);
  scheduleNotes(4500, RIGHT_ARROW);
  scheduleNotes(5000, DOWN_ARROW);
  scheduleNotes(5500, DOWN_ARROW);
  scheduleNotes(6250, DOWN_ARROW);
  scheduleNotes(6750, DOWN_ARROW);
  scheduleNotes(7250, UP_ARROW);
  scheduleNotes(8000, UP_ARROW);
  scheduleNotes(8500, UP_ARROW);
  scheduleNotes(9000, LEFT_ARROW);
  scheduleNotes(9750, LEFT_ARROW);
  scheduleNotes(10700, LEFT_ARROW);
  scheduleNotes(11500, LEFT_ARROW);
  scheduleNotes(12000, LEFT_ARROW);
  scheduleNotes(12300, LEFT_ARROW);
  //2 Arrows below
  scheduleNotes(12750, UP_ARROW);
  scheduleNotes(13250, DOWN_ARROW);
  //...
  scheduleNotes(14000, DOWN_ARROW);
  scheduleNotes(15000, DOWN_ARROW);
  scheduleNotes(15300, DOWN_ARROW);
  scheduleNotes(15750, DOWN_ARROW);
  //2 arrows below
  scheduleNotes(16250, RIGHT_ARROW);
  scheduleNotes(16600, RIGHT_ARROW);
  //...
  scheduleNotes(17500, RIGHT_ARROW);
  scheduleNotes(18250, RIGHT_ARROW);
  scheduleNotes(18750, RIGHT_ARROW);
  scheduleNotes(19250, DOWN_ARROW);
  //...
  scheduleNotes(20000, DOWN_ARROW);
  scheduleNotes(20500, DOWN_ARROW);
  scheduleNotes(21000, DOWN_ARROW);
  scheduleNotes(21750, UP_ARROW);
  //...
  scheduleNotes(22500, UP_ARROW);
  scheduleNotes(23000, UP_ARROW);
  //Hoo, kuno
  scheduleNotes(23500, LEFT_ARROW);
  scheduleNotes(24350, LEFT_ARROW);
  scheduleNotes(25250, LEFT_ARROW);
  scheduleNotes(25750, LEFT_ARROW);
  scheduleNotes(26000, LEFT_ARROW);
  scheduleNotes(27000, LEFT_ARROW);
  //Koe
  scheduleNotes(27750, UP_ARROW);
  scheduleNotes(28750,UP_ARROW);
  scheduleNotes(29500, UP_ARROW);
  //2 arrows below
  scheduleNotes(30250, DOWN_ARROW);
  scheduleNotes(30750, DOWN_ARROW);
  scheduleNotes(31125, DOWN_ARROW);
  scheduleNotes(31125, RIGHT_ARROW);
  //tsuki
  scheduleNotes(32125, RIGHT_ARROW);
  scheduleNotes(32500, RIGHT_ARROW);
  scheduleNotes(33000, DOWN_ARROW);
  scheduleNotes(33000, UP_ARROW);
  //ga nijimu
  scheduleNotes(33750,DOWN_ARROW);
  scheduleNotes(34250,DOWN_ARROW);
  scheduleNotes(34750, UP_ARROW);
  scheduleNotes(34750, LEFT_ARROW);
  //kagami wo
  scheduleNotes(35500,UP_ARROW);
  scheduleNotes(36250, UP_ARROW);
  scheduleNotes(36750, UP_ARROW);
  //nagareta
  scheduleNotes(38000, UP_ARROW);
  scheduleNotes(38750, UP_ARROW);
  scheduleNotes(39750, UP_ARROW);
  scheduleNotes(39750, LEFT_ARROW);
  //kokoro
  scheduleNotes(41500,DOWN_ARROW);
  scheduleNotes(42250, DOWN_ARROW);
  scheduleNotes(43250, DOWN_ARROW);
  scheduleNotes(43250, RIGHT_ARROW);
  //...
  scheduleNotes(44000,RIGHT_ARROW);
  scheduleNotes(44750,RIGHT_ARROW);
  //hoshi ga yurete
  scheduleNotes(45750,RIGHT_ARROW);
  scheduleNotes(46250,RIGHT_ARROW);
  scheduleNotes(46650, DOWN_ARROW);
  scheduleNotes(47500, DOWN_ARROW);
  scheduleNotes(47850, UP_ARROW);
  //koboreta
  scheduleNotes(48500, UP_ARROW);
  scheduleNotes(49250, UP_ARROW);
  scheduleNotes(49600,UP_ARROW);
  scheduleNotes(50000,LEFT_ARROW);
  scheduleNotes(50000, RIGHT_ARROW);
  //kakusenai
  scheduleNotes(51000, LEFT_ARROW);
  scheduleNotes(51850, LEFT_ARROW);
  scheduleNotes(52500,UP_ARROW);
  scheduleNotes(53500,UP_ARROW);
  scheduleNotes(54500,UP_ARROW);
  //namida
  scheduleNotes(55250, DOWN_ARROW);
  scheduleNotes(55600, DOWN_ARROW);
  scheduleNotes(55950, DOWN_ARROW);

  scheduleNotes(56750,LEFT_ARROW);
  scheduleNotes(56750, RIGHT_ARROW);
  scheduleNotes(57500,LEFT_ARROW);
  scheduleNotes(57500, RIGHT_ARROW);

  scheduleNotes(58500,RIGHT_ARROW);
  scheduleNotes(59250,DOWN_ARROW);
  scheduleNotes(59800,UP_ARROW);
  scheduleNotes(60500,LEFT_ARROW);
  //suteki da nae
  scheduleNotes(61250,LEFT_ARROW);
  scheduleNotes(61500,LEFT_ARROW);
  scheduleNotes(62000,LEFT_ARROW);
  scheduleNotes(63000,LEFT_ARROW);
  scheduleNotes(63750, LEFT_ARROW);

  scheduleNotes(65500, UP_ARROW);
  scheduleNotes(66250,UP_ARROW);
  scheduleNotes(66750, UP_ARROW);
  scheduleNotes(67250, UP_ARROW);
  scheduleNotes(67750, UP_ARROW);
  scheduleNotes(68100, UP_ARROW);
  scheduleNotes(68450, UP_ARROW);
  //...
  scheduleNotes(68750, DOWN_ARROW);
  scheduleNotes(69750,DOWN_ARROW);
  scheduleNotes(70500, DOWN_ARROW);
  scheduleNotes(71500, DOWN_ARROW);
  scheduleNotes(72000,DOWN_ARROW);
  scheduleNotes(72400, DOWN_ARROW);
  //ikitai ii yo
  scheduleNotes(75000,RIGHT_ARROW);
  scheduleNotes(75500,RIGHT_ARROW);
  scheduleNotes(76000,RIGHT_ARROW);
  scheduleNotes(76750,RIGHT_ARROW);
  scheduleNotes(77500,RIGHT_ARROW);
  //kimi no machi ie
  scheduleNotes(79400,DOWN_ARROW);
  scheduleNotes(80250,DOWN_ARROW);
  scheduleNotes(81000,DOWN_ARROW);
  scheduleNotes(81400,DOWN_ARROW);
  scheduleNotes(81800,DOWN_ARROW);
  scheduleNotes(82200,DOWN_ARROW);
  //ude no naka
  scheduleNotes(82600,RIGHT_ARROW);
  scheduleNotes(83500, LEFT_ARROW);
  scheduleNotes(84350,RIGHT_ARROW);
  scheduleNotes(85000,LEFT_ARROW);
  scheduleNotes(86000,LEFT_ARROW);
  scheduleNotes(86000,RIGHT_ARROW);
  //...
  scheduleNotes(87750,LEFT_ARROW);
  scheduleNotes(88550,UP_ARROW);
  scheduleNotes(89250,DOWN_ARROW);
  scheduleNotes(89600,RIGHT_ARROW);
  //sono kao
  scheduleNotes(90500,RIGHT_ARROW);
  scheduleNotes(91500,DOWN_ARROW);
  scheduleNotes(92250,UP_ARROW);
  scheduleNotes(93000,LEFT_ARROW);

  scheduleNotes(94000,UP_ARROW);
  scheduleNotes(95000,UP_ARROW);
  
  scheduleNotes(95500,DOWN_ARROW);
  scheduleNotes(96000,DOWN_ARROW);
  scheduleNotes(96500,DOWN_ARROW);
  //sotto furete
  scheduleNotes(97000,RIGHT_ARROW);
  scheduleNotes(98000,DOWN_ARROW);
  scheduleNotes(98750,UP_ARROW);

  scheduleNotes(99500,LEFT_ARROW);
  scheduleNotes(100000, LEFT_ARROW);
  scheduleNotes(100500,LEFT_ARROW); 

  scheduleNotes(101500,LEFT_ARROW);
  scheduleNotes(101500, UP_ARROW);
  scheduleNotes(103000,UP_ARROW);
  scheduleNotes(103000,DOWN_ARROW);
  scheduleNotes(103500,RIGHT_ARROW);

  //asa ni tokeru
  scheduleNotes(104000,RIGHT_ARROW);
  scheduleNotes(105000,DOWN_ARROW);
  scheduleNotes(106000,UP_ARROW);

  scheduleNotes(106750,LEFT_ARROW);
  scheduleNotes(107250,LEFT_ARROW);
  scheduleNotes(107500,LEFT_ARROW);

  scheduleNotes(108000, UP_ARROW);
  scheduleNotes(108750, UP_ARROW);
  scheduleNotes(109500, DOWN_ARROW);
  scheduleNotes(110250,DOWN_ARROW);
  //yume miru
  scheduleNotes(111000, RIGHT_ARROW);
  scheduleNotes(111750,DOWN_ARROW);
  scheduleNotes(112500, UP_ARROW);
  scheduleNotes(113250,LEFT_ARROW);
  //...
  scheduleNotes(115250,LEFT_ARROW);
  scheduleNotes(116250,LEFT_ARROW);
  scheduleNotes(116750,LEFT_ARROW);
  scheduleNotes(117750,UP_ARROW);
  scheduleNotes(117750, DOWN_ARROW);

  scheduleNotes(120000, RIGHT_ARROW);
  scheduleNotes(120750, DOWN_ARROW);
  scheduleNotes(121000, UP_ARROW);
  scheduleNotes(121250, LEFT_ARROW);

  scheduleNotes(122500, DOWN_ARROW);
  scheduleNotes(123000, UP_ARROW);
  scheduleNotes(123500, LEFT_ARROW);
  
  scheduleNotes(124000, UP_ARROW);
  scheduleNotes(124250, DOWN_ARROW);
  scheduleNotes(124500, RIGHT_ARROW);
  //...
  scheduleNotes(127150, LEFT_ARROW);
  scheduleNotes(128000, UP_ARROW);
  scheduleNotes(129000, DOWN_ARROW);
  scheduleNotes(129900, RIGHT_ARROW);
  scheduleNotes(130750, DOWN_ARROW);
  scheduleNotes(131750, UP_ARROW);
  scheduleNotes(132500, LEFT_ARROW);
  scheduleNotes(134000, RIGHT_ARROW);

  //...
  scheduleNotes(136000, UP_ARROW);
  scheduleNotes(136000, DOWN_ARROW);

}

function draw(){
  if (stage == 1){
    titleScreen();
  } else if (stage == 2){
    rhythmGame();
  } else if (stage == 3){
    resultScreen();
  }
}
function resetGame() {
  score = 0;
  combo = 0;
  maxCombo = 0;
  arrows = []; 
  songPlayed = false;
  fullCombo = false;
  initializeNotes();

  if(victory1.isPlaying()){
    victory1.stop();
  }
  if(victory2.isPlaying()){
    victory2.stop();
  }
  if (song.isPlaying()) {
    song.stop();
  }
  bgVideo.stop();
  bgVideo.time(0);
}

function mousePressed() {
  if (stage == 1){
    stage = 2;
    bgVideo.play();
    songStartTime = millis();
    opening.stop();
  } else if (stage == 3) {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
        mouseY > height / 2 + 150 && mouseY < height / 2 + 200) {
      resetGame();
      stage = 2;
      bgVideo.play();
      songStartTime = millis();
      }
    }
}

function titleScreen(){
  background(255);
  image(titleBG,0,0,width,height);


if(!opening.isPlaying()){
  opening.play();
}
  textFont('CALIBRI');
  textSize(50);
  textAlign(CENTER);
  text("Click mouse to play", width/2 + 150, 470);
  textSize(100);
  text("Rhythm Game", width/2, 365);
}

function rhythmGame() {
  background(50);
  let currentTime = millis() - songStartTime;

  if(!songPlayed && currentTime >= 3000){
    song.play();
    songPlayed = true
  }
  image(bgVideo,0,0,width,height);
  image(note4, 0, 0);


  for (let i = notes.length - 1; i >= 0; i--) {
    if (notes[i].time <= currentTime) {
      arrows.push({
        type: notes[i].type,
        x: 50,
        speed: 5,
      });
      notes.splice(i, 1); 
    }
  }

  for (let i = arrows.length - 1; i >= 0; i--) {
    arrows[i].x += arrows[i].speed; 

    if (arrows[i].type === RIGHT_ARROW) {
      y = height - 260;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === DOWN_ARROW) {
      y = height - 460;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === UP_ARROW) {
      y = height - 660;
      image(note, arrows[i].x, y - 20, 450, 350);
    } else if (arrows[i].type === LEFT_ARROW) {
      y = height - 830;
      image(note, arrows[i].x, y - 40, 450, 350);
    }

    if (arrows[i].x > width) {
      arrows.splice(i, 1);
      combo = 0;
    }
  }

  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 10, 10);
  text(`Combo: ${combo}`, 10, 40);  
  text(`Max Combo: ${maxCombo}`, 10, 70);  
}

function resultScreen() {
  background(0);
  fill(255);
  textSize(80);
  textAlign(CENTER, CENTER);
  text("Results", width / 2, height / 2 - 200);
  
  textSize(60);
  text(`Your Score: ${score} / 191`, width / 2, height / 2 - 100);

  textSize(80);
  text("Thanks for playing! <3", width/2, height/2 + 300);
  if (combo === 191) { 
    if (!victory1.isPlaying()){
      victory1.play();
    }
    image(fullCombo, width / 2 - fullCombo.width / 2, height / 2 - 30); 
  } else {
    if(!victory2.isPlaying()){
      victory2.play();
    }
    textSize(60);
    text(`Max Combo: ${maxCombo}`, width / 2, height / 2 + 30);  
  }

  fill(255, 255, 255, 150);
  noStroke();
  rect(width / 2 - 100, height / 2 + 150, 200, 50, 10);

  fill(0);
  textSize(30);
  text("Retry", width / 2, height / 2 + 175);
}


function keyPressed() {
  for (let i = arrows.length - 1; i >= 0; i--) {
    if (
      arrows[i].type === keyCode && 
      arrows[i].x > targetX - 30 && 
      arrows[i].x < targetX + 30
    ) {
      score++;
      combo++;  
      if (combo > maxCombo) {
        maxCombo = combo;  
      }
      arrows.splice(i, 1); 
      noteSound.play();
      break;
    }
  }
}

function scheduleNotes(time, type) {
  notes.push({ time: time, type: type});
}
