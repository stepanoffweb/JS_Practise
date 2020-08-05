export class Question { // группируем методы по функциональности
  // комбайн: пихаем введенный вопрос на сервер, полученный ответ парсим, сохраняем в localStorage и рендерим
  static create(question) { //контекст не нужен -> методы статические
    return fetch('https://quiz-68de2.firebaseio.com/questions.json', {// правила firebase - указать формат
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      question.id = response.name
      return question
    })
    .then(addToLocalStorage)// колбэк передает принятый аргумент параметром в вызываемую функцию!
    .then(Question.renderList) // не this, тк static
  }

  static fetch(token) { // получаем по токену данные из базы
    if (!token) {
      return Promise.resolve('<p class="error">У вас нет токена</p>') // ????? кто кого ждет...
    }
    return fetch(`https://quiz-68de2.firebaseio.com/questions.json?auth=${token}`)
    .then(response => response.json())
    .then(response => {
      if (response && response.error) {
        return `<p class="error">${response.error}</p>`
      }
      return response ? Object.keys(response).map(key => ({
        ...response[key],// получаем доступ ко всем элементам объекта
        id: key
      })) : []
    })
  }

  static renderList() { // рендерим список данных из localStorage
    const questions = getFromLocalStorage()
    const html = questions.length
    ? questions.map(toCard).join('')
    : `<div class="mui--text-headline">Вапросов не було...</div>`

    const list = document.getElementById('list')
    list.innerHTML = html

  }

  static arrToHtml(questions) { // полученный с сервера массив перегоняем в строку для последующего рендера
    return questions.length
      ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join('')}</ol>`
      : '<p>Вопросов пока нет</p>'
  }
}
function toCard (question) {// подготавливаем шаблон для рендеринга отдельного блока данных
    return `<div class="mui--text-black-54">${new Date(question.date).toLocaleDateString()}
      ${new Date(question.date).toLocaleTimeString()}</div>
        <div>${question.text}</div>
        <br>`
}

function addToLocalStorage (question) {// перезаписываем localStorage с добавлением новых и сохранением старых данных
  let all = getFromLocalStorage()
  all.push(question)
  localStorage.setItem('questions', JSON.stringify(all))
}
function getFromLocalStorage () {
  return JSON.parse(localStorage.getItem('questions') || '[]') // !!! парсить строку в массив
}
// window.question = Question
