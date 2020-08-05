import './styles.css'
import { isValid, createModal } from './utils.js'
import { Question } from './question.js'
import { getAuthForm, authWithEmailAndPass } from './auth.js'

const form = document.getElementById('form')
const input = document.getElementById('question-input')
const modalBtn = document.getElementById('modal-btn')
const submitBtn = document.querySelector('[type=submit]')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitHandler)
input.addEventListener('input', inputHandler)
modalBtn.addEventListener('click', openModal)

function inputHandler () {
    submitBtn.disabled = !isValid(input.value)
}

function submitHandler (e) {
    e.preventDefault()

    if (isValid(input.value)) {
      const question = {
        text: input.value.trim(),
        date: new Date().toJSON()
      }
      submitBtn.disabled = true
      // Async POST request
      Question.create(question)
        .then(() => {
          // console.log(question);
          input.value = ''
          input.className = '' // избавляемся от нативной валидации от MUI
          submitBtn.disabled = false
        })
    }
}

function openModal() {
    createModal('Authorization', getAuthForm())
    document
      .getElementById('auth-form')
      .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler (e) {
    e.preventDefault()

    const btn = e.target.querySelector('button')
    const mail = e.target.querySelector('#email').value
    const pass = e.target.querySelector('#password').value

    btn.disabled = true
    authWithEmailAndPass(mail, pass) // авторизация по паролю/логину и получение уникального токена
      .then(Question.fetch) // принимает token и возвращает данные из базы
      .then(renderModalAfterAuth)
      .then(() => btn.disabled = false)
}

function renderModalAfterAuth (content) {
    if (typeof content === 'string') {
      createModal('Ошибка!', content)
    } else {
      createModal('Список', Question.arrToHtml(content))
    }
}
