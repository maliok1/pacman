class Pacman {
  constructor(xpos, ypos, mouth, htmlElement, TILE_SIZE = 85) {
    this.TILE_SIZE = TILE_SIZE;
    this.ypos = ypos;
    this.xpos = xpos;
    this.mouth = mouth;
    this.htmlElement = htmlElement;
  }

  move(arrow) {
    if(arrow === 'right') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionX = "0%";
      } else {
        this.htmlElement.style.backgroundPositionX = "100%";
      }
      this.xpos += this.TILE_SIZE;
      this.htmlElement.style.left = this.xpos + "px";
    }

    else if(arrow === 'left') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "25%";
        this.htmlElement.style.backgroundPositionX = "0%";
        } else {
          this.htmlElement.style.backgroundPositionY = "25%";
          this.htmlElement.style.backgroundPositionX = "100%";
        }

        this.xpos += this.TILE_SIZE;
        this.htmlElement.style.right = this.xpos + "px";
     } 
     else if(arrow === 'up') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "95%";
        this.htmlElement.style.backgroundPositionX = "0%";
        } else {
          this.htmlElement.style.backgroundPositionY = "95%";
          this.htmlElement.style.backgroundPositionX = "100%";
        }
        this.ypos += this.TILE_SIZE;
        this.htmlElement.style.bottom = this.ypos + "px";
     } 
     else if(arrow === 'down') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "60%";
        this.htmlElement.style.backgroundPositionX = "0%";
        } else {
          this.htmlElement.style.backgroundPositionY = "60%";
          this.htmlElement.style.backgroundPositionX = "100%";
        }
        this.ypos += this.TILE_SIZE;
        this.htmlElement.style.top = this.ypos + "px";
     } 
    
    

  }

  // moveLeft() {
  //   this.mouth = !this.mouth;
  //   if (this.mouth) {
  //     this.htmlElement.style.backgroundPositionY = "25%";
  //     this.htmlElement.style.backgroundPositionX = "0%";
  //   } else {
  //     this.htmlElement.style.backgroundPositionY = "25%";
  //     this.htmlElement.style.backgroundPositionX = "100%";
  //   }

  //   this.xpos += this.TILE_SIZE;
  //   this.htmlElement.style.right = this.xpos + "px";
    
  // }

  update() {}
}