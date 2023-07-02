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
    let rR = Math.floor(Math.random() * 256)
    let rG = Math.floor(Math.random() * 256)
    let rB = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${rR}, ${rG}, ${rB})`
    e.style.backgroundColor = randomColor
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

makegrid(12);