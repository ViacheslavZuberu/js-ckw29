const a = document.querySelector("a");
const img = document.querySelector("img");

if (a.hasAttribute("href")) {
    console.log("У ссылки есть href!");
} else {
    console.log("У ссылки НЕТ href!");
}

console.log(a.getAttribute("href"));

a.setAttribute("href", "Hello!");

console.log(a.getAttribute("href"));
