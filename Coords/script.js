document.getElementById('test').onmousemove =  function(e) {
    e = event || window.event; //для старых браузеров
    document.getElementById('offx').innerHTML = e.offsetX;
    document.getElementById('offy').innerText = e.offsetY;

}

// target.style.display = 'none'
// target.classList.toggle('bordered')
