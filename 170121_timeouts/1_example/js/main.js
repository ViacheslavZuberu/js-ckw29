function showMessage(name) {
    document.write(`<p>Hello, ${name}!</p>`);
};

// EventLoop | JSR | Напомнить про видео
//! value - идентификатор задержки
const value = setTimeout(showMessage, 3000, "Nikita");

setTimeout(function() {
    //! Отмена выполнения отложенной операции
    clearTimeout(value);
}, 2000);

//! Интервалы
const timerId = setInterval(showMessage, 2000, "Nikita");

setTimeout(function() {
    clearInterval(timerId);
}, 10000);

//! Recursive Timeout
setTimeout(function printStuff(i) {
    console.log("i: ", i);
    if (i < 10) {
        setTimeout(printStuff, 1000, ++i);
    }
}, 1000, 1);
