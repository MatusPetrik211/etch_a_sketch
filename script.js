// Function for setting the canvas size in blocks
function createCanvas(size) {
    const container = document.querySelector('.container');

    function createColumn() {
        const column = document.createElement('div');
        column.classList.toggle('column');
        container.appendChild(column);
        function createBlock() {
            const block = document.createElement('div');
            block.classList.toggle('block');
            column.appendChild(block);
        }
        for(let i = 0; i < size; i++) {
            createBlock();
        }
    }
    
    for(let i = 0; i < size; i++) {
        createColumn();
    }
}

createCanvas(16);
drawBlack();

const sizeButton = document.querySelector('.change-size');
sizeButton.addEventListener('click', () => {
    getSize();
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clear();
});

const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    drawBlack();
});

const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    drawRandom();
});

const shadeButton = document.querySelector('.shading');
shadeButton.addEventListener('click', () => {
    drawShaded();
})

function drawBlack() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.setAttribute('style','background-color: black;');
        });
    });
}

function getSize() {
    const size = window.prompt('Enter the size of canvas: (maximum is 100)');
    if(size > 100 || 0 > size || isNaN(size)) {
        window.alert('Enter a valid size');
    }
    else {
        const columns = document.querySelectorAll('.column');   
        columns.forEach((column) => {
            column.remove();
        })
        createCanvas(size); 
    }
}

function clear() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.setAttribute('style','background-color: white;');
    });
}

function drawShaded() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        let opacity = 0.2;
        block.addEventListener('mouseover', () => {
        block.setAttribute('style',`background-color: rgb(0, 0, 0, ${opacity});`);
        opacity += 0.1;
        });
    });
}

function drawRandom() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            const randomRed = Math.floor(Math.random() * 255);
            const randomGreen = Math.floor(Math.random() * 255);
            const randomBlue =  Math.floor(Math.random() * 255);
            block.setAttribute('style',`background-color: rgb(${randomRed},${randomGreen},${randomBlue})`);
        });
    });
}




















console.log('hello');