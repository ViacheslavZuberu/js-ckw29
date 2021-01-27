const html = document.documentElement;
const body = document.body;

const div = body.firstElementChild.lastElementChild;

setInterval(function() {

    div.textContent = Math.random();

}, 1000);

console.dir(html);
console.dir(body);
