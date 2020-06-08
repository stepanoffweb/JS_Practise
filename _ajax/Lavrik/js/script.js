window.addEventListener('DOMContentLoaded', () => {
  function init () {
    const request = new XMLHttpRequest() // старый добрый...
    request.open('GET', 'http://localhost:3000/people')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('readystatechange', function () {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response)

        data.forEach(item => {
          const card = document.createElement('div')
          card.classList.add('card')
          let icon
          if (item.sex === 'male') {
            icon = 'icons/mars.png'
          } else {
            icon = 'icons/female.png'
          }
          card.innerHTML = `
                <img src="${item.photo}" alt="person" />
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="${item.sex}">
                </div>
                <div class="age">${item.age}</div>
                `
          document.querySelector('.app').appendChild(card)
        })
      } else {
        console.error('WTF!!!!')
      }
    })
    this.remove() // в контексте кнопки вызова
  }

  document.querySelector('.btn-1').addEventListener('click', init, {
    once: true
  })

  //  реализация на fetch API (promises)
  function createCards (response) {
    response.forEach(item => {
      const card = document.createElement('div')
      card.classList.add('card')
      let icon
      if (item.sex === 'male') {
        icon = 'icons/mars.png'
      } else {
        icon = 'icons/female.png'
      }
      card.innerHTML = `
                <img src="${item.photo}" alt="person" />
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="${item.sex}">
                </div>
                <div class="age">${item.age}</div>
                `
      document.querySelector('.app').appendChild(card)
    })
  }
  async function getResourses (url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }
  function initFetch () {
    // fetch('http://localhost:3000/people')
    //     .then(data => data.json())
    getResourses('http://localhost:3000/people')
      .then(data => createCards(data))
      .catch(err => console.error(err))

    this.remove()
  }

  document.querySelector('.btn-2').addEventListener('click', initFetch, {
    once: true
  })

  // axios - библиотека на основе XMLHttpRequest с поддержкой Promise API и автоматически трансформирует данные в JSON
  function initAxios () {
    // fetch('http://localhost:3000/people')
    //     .then(data => data.json())
    getAxios('http://localhost:3000/people')
      .then(data => createCards(data.data)) // объект axios с дополнит полями
      .catch(err => console.error(err))

    this.remove()
  }
  async function getAxios (url) {
    const res = await axios(url)

    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return res
  }

  document.querySelector('.btn-3').addEventListener('click', initAxios, {
    once: true
  })
})
