//Global Variables
let blockers = [];
let stars = [];
let canvax = 800;
let canvay = 400;
let charsprite;
let charsprite2;
let meteorsprite;
let menu1;
let menu2;
let reset = false;
let globalstart = true;
let arcadefont;
let globalscore = 0;
let g = 0.2;
let v = 0;
let l = 6;

function preload() {
  //Load media library
  charsprite = loadImage("Media/Idle.png");
  charsprite2 = loadImage("Media/Lift.png");
  meteorsprite = loadImage("Media/Meteor.png ");
  menu1 = loadImage("Media/Start.png");
  menu2 = loadImage("Media/End.png");
  arcadefont = loadFont("Media/Normfont.ttf");
}

function setup() {
  createCanvas(800, 400);
  //Summon Player at 200, 200
  character = new Character(200, 200, g, v, l, 1, 0.01);
  //Initiate Menu system
  menu = new Menu(width / 2, height / 2, 360, 360);
  end = new End(width / 2, height / 2, 360, 360);
  createP("&nbsp");
  createP("How to play: Dodge the meteors by propelling or falling!");
}

function draw() {
  //Draw Backdrop
  background(40);
  // Start and end of game system
  if (globalstart == true) {
    //Create parallax
    if (random(1) < 0.3) {
      star = new Stars(0, random(0, height - 10), 30, 1, 2);
      stars.push(star);
    }
    for (n = 0; n < stars.length; n++) {
      stars[n].show();
      if (stars[n].x > 800) {
        stars.splice(n, 1);
      }
    }
    //Initiate physics
    character.startphysics();
    //Draw player
    character.show();
    //Spawning mechanisim
    if (character.startgame == true) {
      //Spawn random blocker
      if (random(1) < character.bspawn) {
        blocker = new Blocker(canvax, random(0, canvay), 60, 60);
        blockers.push(blocker);
      }
      //Draw all blockers
      for (let i = 0; i < blockers.length; i++) {
        blockers[i].show();
        blockers[i].move();
        //Leveling reference point
        blockers[i].x += character.blockspe;
        if (blockers[i].x < 0) {
          blockers.splice(i, 1);
        }
      }
    }
    //Test for player collision on every blocker
    for (let i = 0; i < blockers.length; i++) {
      //If collision = true, gameover
      if (blockers[i].toucheschar(character)) {
        character.endgame = true;
        reset = true;
      }
    }

    //Start system
    menu.start();
    //Draw Score
    fill(255);
    textSize(50);
    strokeWeight(1);
    textFont(arcadefont);
    text(character.score, 20, 60);
    //Draw globalscore
    fill(218, 165, 32);
    stroke(218, 165, 32);
    textSize(20);
    strokeWeight(1);
    textFont(arcadefont);
    text("Prev: " + globalscore, 20, 95);
  }

  //End system
  if (character.reset == true || reset == true) {
    end.show();
    blockers.splice(0, blockers.length);
    stars.splice(0, stars.length);
    globalstart = false;
  }

  //Save Score system
  if (globalstart == false) {
    globalscore = character.score;
  }

  //Draw watermark
  fill(255);
  stroke(255);
  textSize(15);
  strokeWeight(1);
  textFont(arcadefont);
  text("© 2019 realetao & Studio Ezorical", 10, 390);
}

function keyPressed() {
  //Reset game via key press
  if (keyCode == ENTER) {
    globalstart = true;
    reset = false;
    end.reset();
  }

  //Start game via key press
  if (key == " ") {
    character.control();
    character.jumped = true;
  }
  return false;
}

function keyReleased() {
  //Swap load system
  if (key == " ") {
    character.jumped = false;
  }
  return false;
}
