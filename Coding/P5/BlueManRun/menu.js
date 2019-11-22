class Menu {
    constructor(posy, posx, x, y) {
      this.posy = posy;
      this.posx = posx;
      this.x = x;
      this.y = y;
      this.imgx = width/2;
      this.imgy = height/2;
    }
    
    end() {
      imageMode(CENTER);
      image(menu1, this.posx, this.posy, this.x, this.y);
    }
  
  }