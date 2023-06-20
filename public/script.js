const masterDiv = document.getElementById('container')
const reset = document.getElementById('reset')

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
    const rR = Math.floor(Math.random() * 256)
    const rG = Math.floor(Math.random() * 256)
    const rB = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${rR}, ${rG}, ${rB})`
    e.target.style.backgroundColor = randomColor
}

masterDiv.addEventListener('mouseover', changeColor)

reset.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of squares per side for the new grid (maximum 100):')
    gridSize = parseInt(gridSize)
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert('Invalid input. Please enter a number between 1 and 100.')
    } else {
      createGrid(gridSize)
    }
})

makegrid(4);