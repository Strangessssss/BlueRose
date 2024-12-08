$(function () {
    $('.leaf').each(function (index) {

        if ((index + 1) % 2 === 0) {
            $(this).css("background-color", "#004c10");
        }
        if ((index + 1) % 3 === 0) {
            $(this).css("background-color", "#006a14");
        }
        if ((index + 1) % 4 === 0) {
            $(this).css("background-color", "#005311");
        }
        console.log(123);
    });

    $(".line > div:last-child").each(function () {
        $(this).css("width", random(5, 10).toString + "rem");
    })
});


function random(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}