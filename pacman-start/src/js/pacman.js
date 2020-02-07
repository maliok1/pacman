class Pacman {
  constructor(xpos, ypos, mouth, htmlElement, TILE_SIZE = 85) {
    this.TILE_SIZE = TILE_SIZE;
    this.ypos = ypos;
    this.xpos = xpos;

    this.mouth = mouth;
    this.htmlElement = htmlElement;

    this.update();
  }

  move(arrow) {
    if (arrow === 'right') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "0%"
        this.htmlElement.style.backgroundPositionX = "0%";
      } else {
        this.htmlElement.style.backgroundPositionY = "0%";
        this.htmlElement.style.backgroundPositionX = "100%";
      }

      this.xpos += this.TILE_SIZE;
    } else if (arrow === 'left') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "25%";
        this.htmlElement.style.backgroundPositionX = "0%";
      } else {
        this.htmlElement.style.backgroundPositionY = "25%";
        this.htmlElement.style.backgroundPositionX = "100%";
      }

      this.xpos -= this.TILE_SIZE;
    } else if (arrow === 'up') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "95%";
        this.htmlElement.style.backgroundPositionX = "0%";
      } else {
        this.htmlElement.style.backgroundPositionY = "95%";
        this.htmlElement.style.backgroundPositionX = "100%";
      }
      this.ypos -= this.TILE_SIZE;
    } else if (arrow === 'down') {
      this.mouth = !this.mouth;
      if (this.mouth) {
        this.htmlElement.style.backgroundPositionY = "60%";
        this.htmlElement.style.backgroundPositionX = "0%";
      } else {
        this.htmlElement.style.backgroundPositionY = "60%";
        this.htmlElement.style.backgroundPositionX = "100%";
      }
      this.ypos += this.TILE_SIZE;

    }

    this.update();
  }

  update() {
    this.htmlElement.style.left = this.xpos + "px";
    this.htmlElement.style.top = this.ypos + "px";
  }

  mount(stageDisplay) {
    this.update()
    stageDisplay.appendChild(this.htmlElement)

  }
}