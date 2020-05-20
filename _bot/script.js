document.querySelector('.btn').onclick = function() {
    let text = document.querySelector('.message').value,
        token = '1027342168:AAEn2r0Bk79e0LTWgYiNLIn7iuLl81uWTxc',
        id = '-337556407',
        url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${text}`;

        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
}
