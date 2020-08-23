let images = document.querySelectorAll('.slider img'),
    current = 1;

function sliderRight() {
    for (let i =0 ; i < images.length; i++) {
        images[i].classList.add('transparent');
    }
    (current < images.length -1) ? current++ : current = 0;
        images[current].classList.remove('transparent');
};

function sliderLeft() {
    for (let i =0 ; i < images.length; i++) {
        images[i].classList.add('transparent');
    }
    (current > 0) ? current-- : current = images.length-1;
        images[current].classList.remove('transparent');
};



document.querySelector('.right').onclick = sliderRight;
document.querySelector('.left').onclick = sliderLeft;
