function clock() {
    let date = new Date(),
        hours = addZero(date.getHours()),
        minutes = addZero(date.getMinutes()),
        seconds = addZero(date.getSeconds());

    document.getElementsByTagName('div')[0].textContent = hours + ":" + minutes + ":" + seconds;
}

function addZero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

setInterval(clock, 1000);
