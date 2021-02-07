// Переделываем выпадающий список на jQuery

$(function() {
    $("p").css({
        color: "#f00",
        backgroundColor: "#eee"
    });
    
    setInterval(function() {
        $("h2").toggleClass("colored");
    }, 2000);
    
    const p = document.querySelector("p");
    
    $("p:last").on("click", function() {
        console.log("P is clicked!");
    });
});


