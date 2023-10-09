
let colour = "black"

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div=> div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let gridSize = size * size;
for (let i = 0; i < gridSize; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colourSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
    }
}


function colourSquare() {
    if (colour == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`;
    }
    else {
    this.style.backgroundColor = colour;
    }
}

populateBoard(16)
s

function changeSize(input) {
    if (input >=2 && input <=100) {
    populateBoard(input)
    }
    else {
        console.log('Error, choose a number between 2 and 100')
    }
}

function changeColour(choice) {
    colour = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div=> div.style.backgroundColor = 'white');
}


