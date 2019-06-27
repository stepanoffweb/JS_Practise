function alertInfo () {
    alert("Заплати за сайт!!!");// в реале - подвесить страницу\ отправить на сервер deleteAll...
}

function checkTime () {
    let timeInSec = Math.round(Date.now()/1000);
    console.log(timeInSec);
    if (timeInSec > 45235623623562356) { //unixtimestamp.com перевод нужной даты в секунды
        alertInfo();
    }
}

checkTime();
