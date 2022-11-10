const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.border = "50px solid goldenrod";
container.style.borderRadius = "50px";

for (let i = 0; i < 16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.style.display = "flex";
    for (let j = 0; j < 16; j++){
        const element = document.createElement('div');
        element.style.backgroundColor = "#FAF9F6";
        element.style.width = "30px";
        element.style.height = "30px";
        element.style.border = ".5px solid black";
        rowDiv.appendChild(element);
    }
    container.appendChild(rowDiv);
}