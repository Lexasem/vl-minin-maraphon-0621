const board = document.querySelector('#board');
const squaresQty = 400;
const squareTpl = document.createElement('div');
squareTpl.className = 'square';


for(let i = 0; i < squaresQty; i++){
    const square = squareTpl.cloneNode();
    square.addEventListener('mouseover', e => setColor(e.target));
    square.addEventListener('mouseleave', e => removeColor(e.target));
    board.append(square);
}

function getRandomColor() {
    let color = (new Array(3)).fill(0);
    return 'rgb(' + color.map(() => Math.floor(Math.random()*255)).join(',') + ')';
}

function setColor(el){
    const color = getRandomColor();
    el.style = `background-color: ${color}; box-shadow: 0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el){
    el.style = undefined;
}
