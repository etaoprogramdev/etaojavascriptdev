let Bullets = [];
let Bullet;
let auto = false;
let bulletspeed = 15;
let akbutton;
let p90button;
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
  canvas = createCanvas(1700, 1040);
  canvas.position(0, 0);
  canvas.class('rpgui-container framed-golden');
  canvas.style('image-rendering', 'pixelated');
  //Summon player
  Player = new Player(0, 0, 50, 50);
  //Shop Expensive to cheap excluding bullets
  morebullet = createButton('BUY 50 BULLET $30');
  morebullet.class('rpgui-button');
  morebullet.style('image-rendering', 'pixelated');
  morebullet.style('font-family', 'Minecraft');
  morebullet.style('font-size', 'smaller');
  morebullet.position(1780, 950);
  akbutton = createButton('UPGRADE TO AK $100');
  akbutton.class('rpgui-button');
  akbutton.style('image-rendering', 'pixelated');
  akbutton.style('font-family', 'Minecraft');
  akbutton.style('font-size', 'smaller');
  akbutton.position(1715, 20);
  //Cost module Links to individual functions
  if (Money >= 100) {
    akbutton.mouseReleased(initialupgrade);
  }
  if (Money >= 50) {
    morebullet.mouseReleased(addbullet);
  }
}

function draw() {
  print(bulletspeed);
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
  text(Player.ammo, 50, 130);
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

function initialupgrade() {
  bulletspeed = 10;
  Money -= 100;
  akbutton.remove();
  p90button = createButton('UPGRADE TO P90 $200');
  p90button.class('rpgui-button');
  p90button.style('image-rendering', 'pixelated');
  p90button.style('font-family', 'Minecraft');
  p90button.style('font-size', 'smaller');
  p90button.position(1715, 20);
  if (Money >= 200) {
    p90button.mouseReleased(P90);
  }
}

function P90() {
  bulletspeed = 5;
  Money -= 200;
  p90button.remove();
}
function addbullet() {
  Money -= 50;
  Player.ammo += 50;
}
