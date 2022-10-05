const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'Chartreuse', 'blue', 'AliceBlue', 'purple', 'pink', 'Aqua', 'black', 'yellow', 'CornflowerBlue', 'orange', 'gold', 'GhostWhite','Crimson']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}




