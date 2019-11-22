class Stars {
  constructor(x, y, sx, sy, addonspeed){
    this.x = x;
    this.y = y;
    this.sy = sy;
    this.sx = sx;
    this.addonspeed = addonspeed;
  }
  
  show() {
    rect(this.x, this.y, this.sx, this.sy, 30);
    this.x += 10+this.addonspeed;
  }

}
