class Player {
  constructor(px, py, x, y) {
    //For sprite
    this.px = px;
    this.py = py;
    this.x = x;
    this.y = y;
    this.ammo = 100;
    this.maxammo = 1000;
    //For vector
    this.pos = createVector(width / 2, height / 2);
  }
  showsprite() {
    //Draw character sprite
    this.ammo = constrain(this.ammo, 1, this.maxammo);
    rectMode(CENTER);
    fill(255);
    rect(this.px + 6, this.py, this.x, this.y / 2);
    ellipse(this.px, this.py, this.x, this.y);
  }
  movement() {
    //Rotation by cursor
    this.angle = atan2(mouseY - height / 2, mouseX - width / 2); //Must - height/2 etc because canvas is translated to that place. Hence, must take into account.
    rotate(this.angle);
    //Movement
  }
}
