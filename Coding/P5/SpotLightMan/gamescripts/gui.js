class GUI {
  constructor() {
    this.shopx = 600;
    this.shopy = 30;
    this.shopopened = false;
  }
  shop() {
    //Draw button
    fill(111, 185, 143);
    rect(650, -500, 100, 50, 6);
    fill(255);
    textSize(25);
    text('SHOP', 665, -468);
    //Shop
    if (mouseButton == LEFT) {
      this.shopclicked = collidePointRect(mouseX, mouseY, 650, -500, 100, 50);
      rect(540, -420, 300, 600, 30);
      this.shopopened = true;
    }
  }
}
