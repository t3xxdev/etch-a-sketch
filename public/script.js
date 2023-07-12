const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = "color";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const masterDiv = document.getElementById('container');
const reset = document.getElementById('reset');
const colorPicker = document.getElementById('color');
const rainbowMode = document.getElementById('rainbow');

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

colorPicker.addEventListener('input', (e) => setCurrentColor(e.target.value));
colorPicker.addEventListener('click', (e) => setCurrentMode('color'));
rainbowMode.addEventListener('click', (e) => setCurrentMode('rainbow'));

let mouseDown = false;
document.addEventListener('mousedown', () => (mouseDown = true));
document.addEventListener('mouseup', () => (mouseDown = false));

function makeGrid(x) {
    masterDiv.innerHTML = "";
    masterDiv.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    masterDiv.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    for (let i = 0; i < x * x; i++) {
        const childDiv = document.createElement('div');
        childDiv.style.width = `calc(500px / ${x})`;
        childDiv.style.height = `calc(500px / ${x})`;

        childDiv.classList.add('childDiv');
        masterDiv.appendChild(childDiv);
    }

    const childDivs = document.querySelectorAll('.childDiv');
    childDivs.forEach(childDiv => {
        childDiv.addEventListener('mouseover', (e) => {
            if (e.buttons === 1 || e.buttons === 3) {
                changeColor(e.target);
            }
        });
    });
}

function changeColor(element) {
    if (currentMode === "rainbow") {
        const rR = Math.floor(Math.random() * 256);
        const rG = Math.floor(Math.random() * 256);
        const rB = Math.floor(Math.random() * 256);

        element.style.backgroundColor = `rgb(${rR}, ${rG}, ${rB})`;
    } else if (currentMode === "color") {
        element.style.backgroundColor = currentColor;
    }
}

reset.addEventListener('click', () => {
    const childDivs = document.querySelectorAll('.childDiv');

    childDivs.forEach(childDiv => {
        childDiv.style.backgroundColor = 'rgb(255, 255, 255)';
    });
});

rainbowMode.addEventListener('click', () => {   
    let rR = Math.floor(Math.random() * 256);
    let rG = Math.floor(Math.random() * 256);
    let rB = Math.floor(Math.random() * 256);

    currentColor = `rgb(${rR}, ${rG}, ${rB})`;
});

makeGrid(8);