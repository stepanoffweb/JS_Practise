// замер ширины полосы прокрутки на разных браузерах

function calcScroll() {

	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	let scroollWidth = div.offsetWidth - div.clientWidth;
	document.body.removeChild;

	return scrollWidth;
}