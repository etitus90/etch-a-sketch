let rows = 16
let columns = 16
const container = document.getElementById('container')
const div = document.createElement('div')
const css = document.styleSheets[0]

div.style.cssText = `
    width: ${100 / columns}%;
    height: ${100 / rows}%;
    margin: 0;
    padding: 0;
    background-color: white;
    display: inline-block;`

for (let i = 0; i <= columns; i++) {
    container.appendChild(div);
}