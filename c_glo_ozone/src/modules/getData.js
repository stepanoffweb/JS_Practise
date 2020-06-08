export default function getData () {
  const goodsWrapper = document.querySelector('.goods')
  return fetch('../db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Данные не были получены, ошибка: ' + response.status)
      }
    })
    .then(data => {
      return data
    })
    .catch((err) => {
      console.warn(err)
      goodsWrapper.innerHTML = '<h1 style="background-color: red; color:white; padding:50px">Упс, что-то пошло не так!</h1> '
    })
}
