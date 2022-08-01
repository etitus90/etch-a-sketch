let rows = 16
let columns = 16
const div = document.createElement('div')


div.classList.add('segment')
div.classList.contains('segment').style.cssText = `
    width: ${100 / columns}%;
    height: ${100 / rows}%
    margin: 0;
    padding: 0;
    `