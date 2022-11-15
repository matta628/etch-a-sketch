const etchContainer = document.querySelector('.etch-container');
etchContainer.style.display = "flex";
etchContainer.style.flexDirection = "column";
etchContainer.style.backgroundColor = "black";
//etchContainer.style.border = "50px solid goldenrod";
//etchContainer.style.borderRadius = "50px";

function clearGrid(parent){
    while (parent.lastElementChild){
        console.log(parent.lastElementChild);
        parent.removeChild(parent.lastElementChild);
    }
}

let blackAndWhite = true;
function colorCell(cell){
    if (blackAndWhite){
        cell.style.opacity = (cell.style.opacity - .1).toString();
    }
    else{
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
}

let totalLen = 500;
let n = 16;
function drawGrid(n){
    clearGrid(etchContainer);
    for (let i = 0; i < n; i++){
        const rowDiv = document.createElement('div');
        rowDiv.style.display = "flex";
        for (let j = 0; j < n; j++){
            const element = document.createElement('div');
            element.classList.add("cell");
            element.style.width = `${totalLen/n}px`;
            element.style.height = `${totalLen/n}px`;
            element.style.backgroundColor = "#FAF9F6";
            element.style.opacity = "1"
            element.style.border = ".5px solid black";
            rowDiv.appendChild(element);
        }
        etchContainer.appendChild(rowDiv);
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            colorCell(cell);
        });
    });
}
drawGrid(n);

const slider = document.querySelector('#slider');
slider.onchange = function () {
    n = this.value;
    drawGrid(n);
    this.nextElementSibling.value = this.value;
}

const dimension = document.querySelector('#text-input');
dimension.onchange = function () {
    n = this.value;
    drawGrid(n);
    this.previousElementSibling.value = this.value;
}

const eraseButton = document.querySelector('#erase-button');
eraseButton.addEventListener('click', () => {
    drawGrid(n);
});

const blackButton = document.querySelector('#black-button');
blackButton.addEventListener('click', () => {
    if (!blackAndWhite) {
        drawGrid(n);
        blackAndWhite = true;
    }

});
const rgbButton = document.querySelector('#rgb-button');
rgbButton.addEventListener('click', () => {
    if (blackAndWhite){
        drawGrid(n);
        blackAndWhite = false;
    }
});