class Blockers {
  constructor(posx, posy, x, y) {
    this.posy = posy;
    this.posx = posx;
    this.x = x;
    this.y = y;
  }

  show() {
    //// Hitbox
    // noStroke();
    // fill(0);
    // rect(this.posx, this.posy, this.x, this.y);
    image(obstacleimg, this.posx, this.posy, this.x, this.y);
    this.posx += Player.blockspeed;
  }
}
