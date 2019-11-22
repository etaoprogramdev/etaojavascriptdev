class End {
  constructor(posx, posy, x, y) {
    this.posx = posx;
    this.posy = posy;
    this.x = x;
    this.y = y;
  }
  show() {
    if (character.endgame == true) {
      imageMode(CENTER);
      image(menu2, this.posx, this.posy, this.x, this.y);
    }
  }
  
  reset(){
    //Reset function to be called
    character.reset = false;
    character.startgame = false;
    character.x = 200;
    character.y = 200;
    character.g = g;
    character.v = v;
    character.l = l;
    character.score = 0;
    character.blockspe = 0;
    character.bspawn = 0.01;
    // blockers.splice(0, blockers.length);
    // stars.splice(0, stars.length);
  }
}