document.addEventListener('DOMContentLoaded', function () {
    let page = document.querySelectorAll('.page'),
        delta = 0,
        p = 0;

    document.body.addEventListener('wheel', function (event) {
        delta += event.deltaY;

        console.log(delta);
    })
});
