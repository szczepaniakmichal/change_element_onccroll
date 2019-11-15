// create and add elements
const div = document.createElement('div');
document.body.appendChild(div);

// variables
let height = 0;
let width = window.innerWidth;
const maxHeight = window.innerHeight / 2;
let flagHeight = true;

// styles
document.body.style.height = '10000px';
div.style.height = height + 'px';
div.style.width = width + 'px';
div.style.position = 'fixed';

// function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeHeight = () => {
    if (height >= maxHeight) {
        flagHeight = !flagHeight;
    } else if (height === 0) {
        flagHeight = true;
    }

    if (flagHeight) {
        height += 5;
    } else {
        height -= 5;
    }

    div.style.height = height + 'px';

    if ( height === 0 || height === maxHeight) {
        div.style.backgroundColor = getRandomColor();
    }
};



window.addEventListener('scroll', changeHeight);