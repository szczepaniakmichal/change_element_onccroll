const div = document.createElement('div');
document.body.appendChild(div);

let height = 0;
const maxHeight = window.innerHeight / 2;
let flagHeight = true;
let flagWidth = true;

let width = window.innerWidth;
const minWidth = window.innerWidth / 2;
const maxWidth = window.innerWidth;

document.body.style.height = '10000px';
div.style.width = width + 'px';
div.style.height = height + 'px';
div.style.position = 'fixed';
const green = div.style.backgroundColor = 'green';

const changeHeight = () => {
    if (height >= maxHeight) {
        flagHeight = !flagHeight;
    } else if (height === 0) {
        flagHeight = true;
    }

    if (flagHeight) {
        height += 1;
        div.style.height = height + 'px';
        width -= 5;
        div.style.width = width + 'px';
        div.style.backgroundColor = green;
    } else {
        height -= 1;
        div.style.height = height + 'px';
        width += 5;
        div.style.width = width + 'px';
        div.style.backgroundColor = 'blue';
    }

    if (width <= minWidth) {
        flagWidth = !flagWidth;
    } else if ( width === maxWidth ) {
        flagWidth = true;
    }

};

window.addEventListener('scroll', changeHeight);