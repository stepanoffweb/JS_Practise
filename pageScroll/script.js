document.addEventListener('DOMContentLoaded', function() {
    let pages = document.querySelectorAll('.page');
    let delta = 0;
    let p = 0;
    numElem = 50; // с запасом для долп. картинок
    pages.forEach(function(elem, i) {
        elem.style.zIndex = numElem - i;
    });

    function pageScroll(event) {
        delta += event.detail || event.deltaY; //Firefox ||  Crom

        pages[p].style.top = -delta + 'px';

        if(delta >= pages[p].offsetHeight) {
            p++;
            delta = 0;
        }

        if(p === pages.length -1) {
            pages[p].style.top = null; // почему не 0?
            delta =0;
        }
        if(p === pages.length -1 && delta < 0) { // запрет скролла вверх для 1-й страницы
            pages[p].style.top = null;
            delta =0;
        }
        if(p === pages.length -1 && delta < 0) { // запрет скролла вверх для 1-й страницы
            pages[p].style.top = null;
            p--;
            delta = pages[p].offsetHeight;
            pages[p].style.top = -delta + 'p';
        }

    }
    if (navigator.userAgent.search(/Firefox/) !== -1) {
        document.addEventListener('MozMousePixelScroll', pageScroll);// for Firefox
    } else {
        document.addEventListener('wheel', pageScroll);
    }

    // console.log();




});
