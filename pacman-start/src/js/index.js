document.addEventListener('DOMContentLoaded', () => {
  // const pacmanELm = document.querySelector('.entity--pac');
  // let xpos = 0;
  // const TILE_SIZE = 85;
  // let currentPosition = 0;
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

  const pacmanEntity = new Pacman(0, true, document.querySelector('.entity--pac'))

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      pacmanEntity.moveRight()
    }
  });
})