document.addEventListener('DOMContentLoaded', () => {
  const pacmanELm = document.querySelector('.entity--pac');

  let xpos = 0;
  let TILE_SIZE = 85

  let currentPosition = 0;
  currentPosition +=  TILE_SIZE;

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      pacmanELm.style.backgroundPositionX = `${xpos + TILE_SIZE}px`; 
    }
    currentPosition +=  TILE_SIZE;
    pacmanELm.style.left = `${currentPosition}px`;
    
    console.log(`${currentPosition}px`);
  });
})