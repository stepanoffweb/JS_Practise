
function progressbar(t) {
    let mark = 0;
    t = Math.round(t*1000/100);
    let progress = setInterval(function() {
        if(mark >100) {
            clearInterval(progress);
        } else {
            document.getElementById('progress-bar').value = mark;
        }
        mark++;
    }, t);
}

progressbar(15);


