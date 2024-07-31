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

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clear();
})

function clear() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.setAttribute('style','background-color: white;');
    });
}

function drawBlack() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.setAttribute('style','background-color: black;');
        });
    });
}



















console.log('hello');