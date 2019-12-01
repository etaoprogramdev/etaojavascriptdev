let Bullets = [];
let Bullet;
let auto = false;
let bulletspeed = 7;
let morebullet;
let canvas;
let fippsfont;
let Money = 300;
//Timer objects
let timer = 0;
let backgroundpic;
//Character
let moveright = false;
let moveleft = false;
let moveup = false;
let movedown = false;

function preload() {
  fippsfont = loadFont('assets/Minecraft.ttf');
  backgroundpic = loadImage('assets/gamebg.png');
}
function setup() {
  canvas = createCanvas(1900, 1040);
  //Summon player
  Player = new Player(0, 0, 50, 50);
}

function draw() {
  background(backgroundpic);
  //Timer module
  if (timer >= bulletspeed) {
    if (auto) {
      Player.ammo -= 1;
      //Summon bullet object
      for (let n = 0; n < Player.ammo; n++) {
        Bullets.push(new Projectile(Player.pos, Player.angle));
      }
    } else if (!auto) {
      Player.ammo -= 0;
    }
    timer = 0;
  }
  timer += 1;
  //Draw bullets
  for (let n = 0; n < Bullets.length; n++) {
    Bullets[n].show();
    Bullets[n].movement();
    //Bullet delete if outside
    if (
      Bullets[n].pos.x >= width + 50 ||
      Bullets[n].pos.y >= height + 50 ||
      Bullets[n].pos.y <= height - height - 100 ||
      Bullets[n].pos.x <= width - width - 100
    ) {
      Bullets.splice(n, 1);
    }
  }
  //Random
  push();
  translate(width / 2, height / 2);
  Player.movement();
  Player.showsprite();
  pop();
  push();
  noStroke();
  fill(255);
  textFont(fippsfont);
  textSize(70);
  text(Player.ammo - 1, 50, 130);
  text(Money, 50, 250);
  pop();
  // Character movement
}

function mousePressed() {
  //Shoot ammo use system
  if (mouseButton == LEFT) {
    auto = true;
  }
}
function mouseReleased() {
  if (mouseButton == LEFT) {
    auto = false;
  }
}
