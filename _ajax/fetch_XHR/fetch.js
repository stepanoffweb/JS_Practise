const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest (method, url, body = null) { // возвращает промис
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    return response.json().then(error => {
      const err = new Error('Что-то пошло не так')
      err.data = error
      throw err
    })
  })
}

// sendRequest('GET', requestUrl, )
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const somebody = {
  name: 'Vasiliy',
  age: 55
}

sendRequest('POST', requestUrl, somebody)
  .then(data => console.log(data))
  .catch(err => console.log(err))
