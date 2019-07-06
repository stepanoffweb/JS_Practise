let screen = document.getElementsByClassName('text')[0],
    val = document.getElementsByClassName('form')[0],
    eq = document.getElementsByClassName('equal')[0];

val.onclick = (e) => {
    console.log(e.target);
    console.log(screen);
    if(e.target.classList.contains('equal')) {
        screen.value = eval(screen.value);
    } else if(e.target.classList.contains('back')) {
        screen.value = screen.value.substring(0, screen.value.length-1);
    console.log(screen.value);
    } else if(e.target.classList.contains('clean')) {
        screen.value = '';
    } else {screen.value += e.target.getAttribute('value');}
}

