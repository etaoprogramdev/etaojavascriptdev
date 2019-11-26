class Projectile {
  constructor(ppos, pangle) {
    //For vector
    this.pos = createVector(ppos.x, ppos.y);
    this.vel = p5.Vector.fromAngle(pangle);
    this.vel.mult(30);
  }

  show() {
    push();
    stroke(224, 143, 98);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
    pop();
  }
  movement() {
    this.pos.add(this.vel);
  }
  showsprite() {}
  kill() {}
}
