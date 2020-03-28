const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.responseType = 'json' // == JSON.parse(xhr.response)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) { // обработка ошибок сервера
                // console.error(xhr.response)
                reject(xhr.response)
            } else {
                // console.log(xhr.response)
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => // обработка ошибок  сети
            // console.log(xhr.response)
            reject(xhr.response)
        xhr.send(JSON.stringify(body))
    })
}

sendRequest('GET', requestUrl, )
    .then(data => console.log(data))
    .catch(err => console.log(err))

const somebody = {
    name: 'Vasiliy',
    age: 55
}

sendRequest('POST', requestUrl, somebody)
    .then(data => console.log(data))
    .catch(err => console.log(err))
