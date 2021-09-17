const container = document.getElementById('container')
const colors = ['#74217A', '#B15112', '#40B4FB', '#B98203', '#A1C957']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0.1px 0.1px 1.5px white`
}

function removeColor(element) {
   element.style.background = '#161616'
   element.style.boxShadow = 'none'
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*5)]
}
