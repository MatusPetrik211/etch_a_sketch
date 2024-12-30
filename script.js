// Function for setting the canvas size in blocks
function createCanvas(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

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

function getSize() {
    const size = window.prompt('Enter the size of canvas: (maximum is 100)');
    if(size < 100 && 0 < size) {
        createCanvas(size); 
    }
    else {
        window.alert('Enter a valid size');
    }
}

function clearCanvas() {
    document.querySelectorAll('.block').forEach(block => block.setAttribute('style', 'background-color: white'));
}

function drawBlack() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.setAttribute('style','background-color: black;');
        });
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
            block.setAttribute('style',`background-color: rgb(${randomNumber()},${randomNumber()},${randomNumber()})`);
        });
    });
}

function randomNumber() {
    return Math.floor(Math.random() * 255)
}

document.querySelector('.change-size').addEventListener('click', getSize);
document.querySelector('.clear').addEventListener('click', clearCanvas);
document.querySelector('.black').addEventListener('click', drawBlack);
document.querySelector('.random').addEventListener('click', drawRandom);
document.querySelector('.shading').addEventListener('click', drawShaded);

createCanvas(16);
drawBlack();
