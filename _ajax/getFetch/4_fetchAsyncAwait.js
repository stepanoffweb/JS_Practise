const delay = ms => {
    return new Promise(r => {setTimeout(() => r(), ms)})
}

// delay(2000).then(() => {console.log('2 sec')})

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(1500)
//     .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {console.table('Data: ', data)
//     })
//     .catch(e => console.error(e))

// ========================= new (ES6) operators - async/ await
async function fetchAsyncTodos() {
    console.log('Fetch todo started...')
    try {
        await delay(1500)
        const response = await fetch(url)
        const data = await response.json()
        console.table('Data: ', data)
    } catch(e) {
        console.error(e)
    }

    }

fetchAsyncTodos()
