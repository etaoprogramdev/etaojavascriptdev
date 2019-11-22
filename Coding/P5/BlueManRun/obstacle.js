class Blockers {
    constructor(posx, posy, x, y) {
      this.posy = posy;
      this.posx = posx;
      this.x = x;
      this.y = y;
    }
  
    show() {
      stroke(255);
      strokeWeight(4);
      fill(0, 10);
      image(obstacleimg,this.posx, this.posy, this.x, this.y);
      this.posx += Player.blockspeed;
    }
    
  }