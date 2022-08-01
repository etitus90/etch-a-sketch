let rows = 16
let columns = 16
const container = document.getElementById('container')




for (let i = 0; i <= columns; i++) {
    const div = document.createElement('div')

    div.style.cssText = `
    width: ${100 / columns}%;
    height: ${100 / rows}%;
    margin: 0;
    padding: 0;
    background-color: white;
    display: inline-block;`

    container.appendChild(div);
}