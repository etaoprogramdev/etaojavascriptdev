class Menu {
  constructor(posx, posy, x, y) {
    this.posx = posx;
    this.posy = posy;
    this.x = x;
    this.y = y;
  }
  
  start(){
  if (character.startgame == false) {
    imageMode(CENTER);
    image(menu1, this.posx, this.posy, this.x, this.y); 
  }
    return false;
  }

}