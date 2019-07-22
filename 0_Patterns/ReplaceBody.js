let imgs = document.querySelectorAll("#our_works a"),
    body,
    page;

imgs.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        let unit = event.currentTarget;
        if (unit && unit.tagName == 'A') {
            // document.querySelector('body').style.cssText = "background: url('../img/our_works/big_img/1.png') center cover";
            // document.querySelector('body').style.display = 'none';
            body = document.querySelector('body'),
            imgBigPath = unit.href;
            imgBig = document.createElement('img');
            imgBig.src = imgBigPath;
            imgBig.style.cssText = "display: block; margin: auto; height: 70vh; box-sizing: content-box;";
            bodyNew = document.createElement('body');
            // bodyNew.setAttribute('id', 'new');
            bodyNew.id = 'new';
            bodyNew.style.cssText = "background-color: #0e0e0e; height: 100%;padding-top: 5%";
            page = body.parentNode.replaceChild(bodyNew, body);
            body = bodyNew;
            document.body.appendChild(imgBig);

            body.addEventListener('click', function (event) {
                if (event.target.tagName != 'IMG' && body.id == 'new') {
                    console.log('tag + ' + event.target.tagName);
                    body.parentNode.replaceChild(page, body);
                }
            });
        }
    });
});

