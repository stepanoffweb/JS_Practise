document.querySelector('.btn').onclick = function () {
  const text = document.querySelector('.message').value
  const token = '1027342168:AAEn2r0Bk79e0LTWgYiNLIn7iuLl81uWTxc'
  const id = '-337556407'
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${text}`

  const request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.send()
}
