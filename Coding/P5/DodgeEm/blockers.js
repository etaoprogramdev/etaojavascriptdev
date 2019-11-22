class Blocker {
  constructor(x, y, w, h) {
    //Local variables
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  show() {
    //Draw blocker
    // rotate(PI/this.w/2);
    image(meteorsprite, this.x, this.y, this.w, this.h);
  }
  
  toucheschar(other){
  //Collision test, call using 'name'.toucheschar
  let d = dist(this.x, this.y, other.x, other.y);
  if (d < this.w/3 + other.csizex/3 ){
     return true; 
    } else {
    return false; 
    }
  }
  
  move(){
  //Movement, moving left at a rate of 1 unit
  if (character.startgame == true) {
    this.x -= 1;  
  }
  }

}