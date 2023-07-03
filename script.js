const DEAFULT_COLOR = "#000000"

let currentColor = DEAFULT_COLOR

const masterDiv = document.getElementById('container')
const reset = document.getElementById('reset')
const colorPicker = document.getElementById('color')

function setCurrentColor(newColor) {
    currentColor = newColor
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function makegrid(x) {
    masterDiv.innerHTML = ""

    masterDiv.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    masterDiv.style.gridTemplateRows = `repeat(${x}, 1fr)`

    for (let i = 0; i < x * x; i++) {
        const childDiv = document.createElement('div')
        childDiv.style.width = `calc(500px / ${x})`
        childDiv.style.height = `calc(500px / ${x})`

        childDiv.classList.add('childDiv')
        masterDiv.appendChild(childDiv)
    }
}

function changeColor(e) {  
    if (e && e.style) {
        e.style.backgroundColor = currentColor;
    }
}

masterDiv.addEventListener('mouseover', (e) => {
    changeColor(e.target)
})

reset.addEventListener('click', () => {
    const childDivs = document.querySelectorAll('.childDiv')

    childDivs.forEach(childDiv => {
        if (childDiv.style) {
            childDiv.style.backgroundColor = 'rgb(255, 255, 255)'
        }
    });
})

makegrid(8);