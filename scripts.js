let sideLength = 16
const container = document.getElementById('container')
const clearBtn = document.getElementById('clear-btn')
const dimensionsBtn = document.getElementById('dimensions-btn')

for (let i = 0; i < sideLength; i++) {
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    divRow.style.cssText = `
        width: 100%;
        height: ${100 / sideLength}%;
        margin: 0;
        padding: 0;
        display: block;`
     
    container.appendChild(divRow);
}

let rows = document.querySelectorAll('.row')

for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < sideLength; j++) {
        const div = document.createElement('div')
        div.classList.add('tile')
        div.setAttribute('onmouseover', 'sketch(this)')
        div.style.cssText = `
        width: ${100 / sideLength}%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: inline-block;`
    
        rows[i].appendChild(div)
    }
}

function sketch(tile) {
    tile.classList.add('active')
}
    