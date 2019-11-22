class Character {
  constructor(x, y, g, v, l, xp, bspawn) {
    //Local variables (access via 'name'.symbol e.g.character.velocity)
    this.gravity = g;
    this.velocity = v;
    this.csizex = 40;
    this.csizey = 40;
    this.lift = l;
    this.x = x;
    this.y = y;
    this.jumped = false;
    this.startgame = false;
    this.endgame = false;
    this.reset = false;
    this.score = 0;
    this.xp = xp;
    this.blockspe = 0;
    this.bspawn = bspawn;
  }

  show() {
    print(this.velocity);
    //Draw Player
    stroke(255);
    strokeWeight(4);
    fill(0);
    //Determine sprite
    if (this.jumped == false) {
      image(charsprite, this.x, this.y, this.csizex, this.csizey);
    }
    if (this.jumped == true) {
      image(charsprite2, this.x, this.y, this.csizex, this.csizey);
    }
    //Game over if too high or low
    if (this.y >= height) {
      this.endgame = true;
      this.reset = true;
    } else if (this.y <= 0) {
      this.endgame = true;
      this.reset = true;
    }
  }

  startphysics() {
    //Trigger physics system
    if (key == " ") {
      this.startgame = true;
    }
    //If triggered, engine turns on
    if (this.startgame == true) {
      this.velocity += this.gravity;
      this.y += this.velocity;
      this.score += this.xp;
      //Leveling system
      if (character.score >= 1000) {
        this.blockspe = -2;
      }
      if (character.score >= 2000) {
        this.blockspe = -3;
      }
      if (character.score >= 3000) {
        this.blockspe = -4;
      }
      if (character.score >= 4000) {
        this.blockspe = -5;
      }
      if (character.score >= 5000) {
        this.blockspe = -6;
      }
      if (character.score >= 6000) {
        this.blockspe = -6;
      }
      if (character.score >= 7000) {
        this.blockspe = -7;
      }
      if (character.score >= 8000) {
        this.blockspe = -8;
      }
      if (character.score >= 9000) {
        this.blockspe = -9;
      }
      if (character.score >= 10000) {
        this.blockspe = -10;
      }
    } else {
      this.velocity = 0;
    }
    console.log(this.lift);
  }

  control() {
    //Lift system
    if (this.startgame == true) {
      this.velocity -= this.lift;
    }
  }
}
