'use strict';

let hoursVal = document.querySelector('.hours'),
    minVal = document.querySelector('.minutes'),
    secVal = document.querySelector('.seconds'),
    stopBtn = document.querySelector('.stop'),
    startBtn = document.querySelector('.start'),
    resetBtn = document.querySelector('.reset'),
    btns = document.querySelector('.buttons'),
    hours = 0,
    minutes = 0,
    seconds = 0,
    timer;

    function print(unit, field) {
        if (unit < 10) {
            field.textContent = '';
            field.textContent = '0' + unit;
        } else {
            field.textContent = '';
            field.textContent = unit;
        }
    }
// при каждом вызове функции секунды увеличиваются на 1 и время выводится на экран
function tic() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
    }
    print(seconds, secVal);
    if (minutes == 60) {
        minutes = 0;
        hours += 1;
    }
    print(minutes, minVal);
    if (hours == 24) {
        hours = 0;
    }
    print(hours, hoursVal);
}

function output() {
    timer = setInterval(tic, 1000);
}

function clean() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    print(seconds, secVal);
    print(minutes, minVal);
    print(hours, hoursVal);
}
// связываем с кнопками обработчики для запуска, остановки и сброса счетчиков
btns.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('start')) {
        clearTimeout(timer);
        clean();
        output();
    } else if (e.target && e.target.classList.contains('stop')) {
        clearTimeout(timer);
    } else if (e.target && e.target.classList.contains('reset')) {
        clean();
    }
});
