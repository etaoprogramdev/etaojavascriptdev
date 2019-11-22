class Character {
    constructor(posx, posy, x, y, groundpos, speed) {
      this.posx = posx;
      this.posy = posy;
      this.x = x;
      this.y = y;
      this.gravity = 0;
      this.velocity = 0;
      this.speed = speed;
      this.jumped = 3;
      this.xp = 0;
      this.score =0;
      this.blockspeed = 0;
      this.level = 100;
      this.gx = -100;
      this.gy = -100;
      this.xp = 0;
    }
  
    show() {
    // animate the sprite sheet
    // push();
    // scale(1/2);
    animation(explode_animation, this.posx, this.posy-60);
    // pop();
    }
  
    move() {
      stroke(0);
      strokeWeight(6);
      fill(0, 150, 0);
      rect(0, this.gx, this.gy+10, this.gx+10);
      //Physics
      this.posy += this.velocity;
      this.velocity += this.gravity;
      //Constrain posy
      this.posy = constrain(this.posy, 0, height - this.y);
      //Check for jump limiter
      if (this.posy == height - this.y ) {
        if (this.jumped >= 2){
          this.jumped = 0;
        }
      }
      //Leveling system
      this.score += this.xp;
      if (this.score > this.level){
        this.blockspeed += -1; 
        this.level += 100;
      }
    }

    jumpmeter(){
      textFont(font);
      noStroke();
      fill(255);
      strokeWeight(1);
      textSize(25);
      textAlign(CENTER);
      this.jumps = 0;
      if (this.jumped <= 0){
        this.jumps = 2;
      } else if (this.jumped >= 1) {
        this.jumps = 1;
      }
      if (this.jumped > 1){
        this.jumps = 0;
      }
      text('Jump meter: ' + this.jumps, 400, 100);
    }
  
    movement() {
      //Right
      if (keyIsDown(68)) {
        this.posx += this.speed;
      }
      //Left
      if (keyIsDown(65)) {
        this.posx -= this.speed;
      }
    }
  
    jump() {
      if (this.jumped == 0) {
        this.velocity = -21  ;
      }
      if (this.jumped == 1) {
         this.velocity = -21; 
      }
    }
  }