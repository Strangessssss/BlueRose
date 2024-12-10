
let petals = $("#flower-1 .petal");
let leaf = $("#leaf");


$(function () {
});

$("#stem-1").on("animationend", function () {
    let degree = -10;
    const changeDegree = degree * -2;
    petals.each(function () {
        const styleSheet = document.styleSheets[0];
        const keyframes = `
        @keyframes rotateDynamic${degree} {
            0% {
                transform: rotate(0deg);
                translate: 0;
            }
            100% {
                transform: rotate(${degree}deg);
                translate: ${degree / 12.5}rem;
            }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
        $(this).css("animation", `rotateDynamic${degree} 3s linear forwards`);
        degree += changeDegree;
    })
    leaf.css("animation", `shaking 10s infinite ease-in-out`);
});
