//The test will occur every time the page loads
function alertInfo () {
    alert("Заплати за сайт!!!");// or server deleteAll maybe...
}

function checkTime () {
    let timeInSec = Math.floor(Date.now()/1000);
    console.log(timeInSec);
    if (timeInSec > 45235623623562356) { //unixtimestamp.com transfer date to seconds
        alertInfo();
    }
}
// In this case it's important to return only an integer (so a simple division won't do), and also to only return actually elapsed seconds (that's why this code uses Math.floor() and not Math.round())
checkTime();
