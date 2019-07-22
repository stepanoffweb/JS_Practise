(function () {
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

let ball = document.getElementsByClassName('inner')[0],
    stop = document.getElementsByTagName('body')[0],
    id,
    fps = 5;

function bum() {
    setTimeout(function() {
        id = requestAnimationFrame(bum);
        if (ball.mouseover == true) {
            ball.classList.toggle('bum');
        } else {
            cancelAnimationFrame(id);
        }
    }, 1000 / fps);
}

ball.addEventListener('mouseover', function() {
    id = requestAnimationFrame(bum);
});
