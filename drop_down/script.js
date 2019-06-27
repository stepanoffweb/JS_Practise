let subs = document.getElementsByClassName('submenu');

closeMenu();

function closeMenu () {
    for (let i=0; i < subs.length; i++) {
        subs[i].style.display= 'none';
    }
}

// document.getElementsByClassName('submenu').forEach((el) => el.style.display= 'none');

document.getElementsByTagName('nav')[0].onmouseover = function(e) {
	console.log(e.target);
  if (e.target.className == 'menu-item') {
	  let s= e.target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display = 'block';
	}
}
