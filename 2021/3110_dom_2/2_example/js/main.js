function getRandomNumber(min, max) {
    return Math.round(
        min - 0.5 + Math.random() * (max - min + 1)
    );
}

function getRandomColorPart() {
    const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    return hex[getRandomNumber(0, hex.length - 1)];
}

function getRandomColor() {
    let color = "#";

    for (let i = 0; i < 8; i++) {
        color += getRandomColorPart();
    }

    return color;
}

const boxes = document.querySelectorAll(".container > div");

function clearGrid(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = null;
    }
}

function colorCell(boxes, index, color) {
    boxes[index].style.backgroundColor = color;
}

function colorRandomCell(boxes, color) {
    colorCell(
        boxes,
        getRandomNumber(0, boxes.length - 1),
        color
    );
}

setInterval(function() {
    clearGrid(boxes);
    colorRandomCell(boxes, getRandomColor());
}, 1000);