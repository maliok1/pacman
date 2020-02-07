class Pacman {
  constructor(xpos, mouth, htmlElement, TILE_SIZE = 85) {
    this.TILE_SIZE = TILE_SIZE;
    this.xpos = xpos;
    this.mouth = mouth;
    this.htmlElement = htmlElement;
  }

  moveRight() {

    this.mouth = !this.mouth;
    if (this.mouth) {
      this.htmlElement.style.backgroundPositionX = "0%";
    } else {
      this.htmlElement.style.backgroundPositionX = "100%";
    }

    this.xpos += this.TILE_SIZE;
    this.htmlElement.style.left = this.xpos + "px";

    // let mouth = 0;
    // document.addEventListener('keydown', (event) => {
    //   if (event.key === 'ArrowRight') {
    //     mouth = 85;
    //     pacmanELm.style.backgroundPositionX = `${mouth}px`;
    //   }

    //   currentPosition += TILE_SIZE;
    //   pacmanELm.style.left = `${currentPosition}px`;

    //   // console.log(`${currentPosition}px`);
    // });

    // let xpos = 0;
    // const TILE_SIZE = 85;
    // let currentPosition = 0;

  }

  update() {}
}