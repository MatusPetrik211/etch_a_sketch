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



createCanvas(3);


















console.log('hello');