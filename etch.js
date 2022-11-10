const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.border = "50px solid goldenrod";
container.style.borderRadius = "50px";

let totalLen = 500;
let n = 16;
for (let i = 0; i < n; i++){
    const rowDiv = document.createElement('div');
    rowDiv.style.display = "flex";
    for (let j = 0; j < n; j++){
        const element = document.createElement('div');
        element.classList.add("cell");
        element.style.width = `${totalLen/n}px`;
        element.style.height = `${totalLen/n}px`;
        element.style.backgroundColor = "#FAF9F6";
        element.style.border = ".5px solid black";
        rowDiv.appendChild(element);
    }
    container.appendChild(rowDiv);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'gray';
    })
})