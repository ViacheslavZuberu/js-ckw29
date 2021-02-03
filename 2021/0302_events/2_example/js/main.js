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

function colorElements(element) {
    element.style.backgroundColor = getRandomColor();

    if (element.children.length === 0) {
        return;
    }

    [].forEach.call(element.children, function(element) {
        colorElements(element);
    });
}

colorElements(document.body);

Array.prototype.sumAll = function() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }

    return sum;
};

console.log([1, 2, 3, 4, 5].sumAll());