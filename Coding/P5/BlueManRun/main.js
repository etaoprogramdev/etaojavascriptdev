//Creating animations from sprite sheets
var sprite_sheet_image;
var sprite_sheet;
var explode_animation;
//Variables
let Player;
let Obstacles = [];
let jumped = false;
let startgame = false;
let endgame = false;
let menu2;
let Over;
let menu;
let menu1;
let spawnrate = 0;
let font;
let started = false;
let obstacleimg;
//Replace Variables
posx = 150;
posy = 200;
x = 35;
y = 60;
speed = 2;
groundpos = 390;
textopa = 300;

function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadSpriteSheet("assets/explode_sprite_sheet.png", 60, 155, 6);
  explode_animation = loadAnimation(sprite_sheet);
  // load the full sprite sheet for example reference only
  sprite_sheet_image = loadImage("assets/explode_sprite_sheet.png");
  menu1 = loadImage("assets/f5.png");
  menu2 = loadImage("assets/spacebar.png");
  font = loadFont("assets/Normfont.ttf");
  obstacleimg = loadImage("assets/obstacle.png");
}

function setup() {
  createCanvas(1300, 400);
  Player = new Character(-100, -100, x, y, groundpos, speed);
  Over = new End();
  menu = new Menu(height / 2, width / 2, 128, 128);
  //Draw Intructions
  createP("&nbsp;");
  createP(
    "Tip: The jump meter is a counter to show how many jumps you have charged!"
  );
}

function draw() {
  if (endgame == false) {
    background(40);
  }
  if (endgame == false && startgame == true) {
    background(130, 113, 145);
    Player.jumpmeter();
  }

  //Start system
  Player.show();
  Player.move();
  //Spawn random obstacles
  if (random(1) < spawnrate) {
    Obstacle = new Blockers(1500, 330, 80, 60);
    Obstacles.push(Obstacle);
  }

  //Draw all obstacles
  for (let i = 0; i < Obstacles.length; i++) {
    Obstacles[i].show();
    //Testfor collision
    hit = collideRectRect(
      Player.posx,
      Player.posy,
      Player.x,
      Player.y,
      Obstacles[i].posx,
      Obstacles[i].posy,
      Obstacles[i].x,
      Obstacles[i].y
    );
    if (hit) {
      endgame = true;
    }
    if (Obstacles[i].posx < -50) {
      Obstacles.splice(i, 1);
    }
    if (Obstacles.length > 5) {
      spawnrate = 0;
    }
    if (Obstacles.length < 9) {
      spawnrate = 0.0105;
    }
  }

  //Draw start menu
  imageMode(CENTER);
  image(menu2, menu.imgx, menu.imgy, 128, 128);
  //Draw Instruction
  textSize(20);
  strokeWeight(1);
  textFont(font);
  noStroke();
  fill(255, 255, 255);
  textAlign(CENTER);
  text('"W" to jump or doublejump', width / 2, textopa + 20);
  text('"Space" to start', width / 2, textopa + 60);
  //Draw score
  textSize(50);
  strokeWeight(1);
  textFont(font);
  textAlign(LEFT);
  fill(255);
  text(Player.score, 20, 65);
  //Draw menu
  if (endgame == true) {
    clear();
    background(40);
    textSize(20);
    strokeWeight(1);
    textFont(font);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text('"F5" to play again', width / 2, 330);
    text('"Fn + F5" on special devices', width / 2, 360);
    menu.end();
  }
  //Draw branding
  textSize(15);
  strokeWeight(1);
  textFont(font);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text("© 2019 realetao & Studio Ezorical", width / 2, 30);
  if (endgame == true) {
    //Draw Final Score
    Player.xp = 0;
    textSize(15);
    strokeWeight(1);
    textFont(font);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text("SCORE: " + Player.score, width / 2, 90);
  }
}

function keyPressed() {
  if (Player.jumped <= 2) {
    if (key == "w" || key == "W") {
      Player.jump();
      Player.jumped += 1;
    }
  }
  // if (key == "f" || key == "F") {
  //   Player.posy += 200;
  // }
  if (key == " " && started == false) {
    textopa = 700;
    startgame = true;
    endgame = false;
    Player.posx = 150;
    Player.posy = 200;
    menu.imgx = -110;
    menu.imgy = -110;
    Player.jumped = 0;
    Player.gravity = 1.5;
    spawnrate = 0.0102;
    Player.blockspeed = -4.5;
    Player.gx = 390;
    Player.gy = 800;
    Player.xp = 1;
    started = true;
  }
}
