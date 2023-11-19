const cube = document.getElementById('cube');
const gameBoard = document.getElementById('game-board');

let cubePositionY = 0;
let cubePositionX = 0;
let downInterval;

function moveCubeDown() {
    cubePositionY += 50;
    if (cubePositionY > gameBoard.clientHeight - cube.clientHeight) {
        cubePositionY = gameBoard.clientHeight - cube.clientHeight;
        stopCube();
    }
    cube.style.transform = `translate(${cubePositionX}px, ${cubePositionY}px)`;
}

function stopCube() {
    clearInterval(downInterval);
    document.removeEventListener('keydown', moveCube);
}

downInterval = setInterval(moveCubeDown, 1000);

document.addEventListener('keydown', moveCube);

function moveCube(event) {
    if (event.key === 'ArrowLeft') {
        cubePositionX -= 10;
    } else if (event.key === 'ArrowRight') {
        cubePositionX += 10;
    }

    // granici polya
    if (cubePositionX < 0) {
        cubePositionX = 0;
    } else if (cubePositionX > gameBoard.clientWidth - cube.clientWidth) {
        cubePositionX = gameBoard.clientWidth - cube.clientWidth;
    }

    cube.style.transform = `translate(${cubePositionX}px, ${cubePositionY}px)`;
}
