document.addEventListener('DOMContentLoaded', function() {
    'use strict'

    const modalBlock = document.querySelector('#modalBlock')
    const btnOpenModal = document.querySelector('#btnOpenModal')
    const closeModal = document.querySelector('#closeModal')
    const question = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')
    const nextBtn = document.querySelector('#next')
    const prevBtn = document.querySelector('#prev')
    const sendBtn = document.getElementById('send')
    const burgerBtn = document.getElementById('burger')

    const firebaseConfig = {
        apiKey: "AIzaSyBaavsz5aWElIbhuMDTKX1WqQCc3MYMMzk",
        authDomain: "burgerjs-47aa2.firebaseapp.com",
        databaseURL: "https://burgerjs-47aa2.firebaseio.com",
        projectId: "burgerjs-47aa2",
        storageBucket: "burgerjs-47aa2.appspot.com",
        messagingSenderId: "769591728533",
        appId: "1:769591728533:web:74291a875cd87d98a57e9c",
        measurementId: "G-X3T8VNN1EW"
    };
    firebase.initializeApp(firebaseConfig);

    const getData = () => {
        formAnswers.textContent = 'LOADING'
        prevBtn.classList.add('d-none')
        nextBtn.classList.add('d-none')
        // setTimeout(() => {
            // fetch('./questions.json')
            // .then(res => res.json())
            // .then(data => insertFormContent(data.questions))
            // .catch(err => {
            //     formAnswers.textContent = 'Error data loading!!!'
            //     console.error(err)})
            firebase.database().ref().child('questions').once('value')
                .then(snap => insertFormContent(snap.val()))
        // }, 1000)
    }

    let clientWidth = document.documentElement.clientWidth
    if(clientWidth < 768) {
        burgerBtn.style.display = 'flex'
    } else {
        burgerBtn.style.display = 'none'

    }
    window.addEventListener('resize', function() {

        // alert(clientWidth)
        if(clientWidth < 768) {
            burgerBtn.style.display = 'flex'
        } else {
            burgerBtn.style.display = 'none'

        }
    })

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.add('active')
        modalBlock.classList.add('d-block');
        getData();
    })
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        getData()
    })

    closeModal.addEventListener('click', () => {
        burgerBtn.classList.remove('active')
        modalBlock.classList.remove('d-block');
    })

    const insertFormContent = (questions) => {
        let index = 0
        let answersBank = []

        const checkAnswer = () => {
            let checkedInputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'phoneNumber')
            let itemAnswers = {}
            checkedInputs.forEach((input, i) => {
                if(index >= 0 && index <= questions.length - 1) {
                    itemAnswers[`${i}_${questions[index].question}`] = input.value
                } else {
                    itemAnswers['Phone number'] = input.value
                }
            })
            answersBank.push(itemAnswers)

        }

        const renderQuizForm = (index) => {
            formAnswers.innerHTML = ''
            // question.textContent = ''
            let module =  questions[index]
            // debugger
            const answersRender = () => {
                module.answers.forEach((answer, i) => {
                const answerItem = document.createElement('div')
                answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center')
                answerItem.innerHTML = `
                <input type=${questions[index].type} id=${answer.url} name="answer" class="d-none" value=${answer.title}>
                <label for=${answer.url} class="d-flex flex-column justify-content-between">
                <img class="answerImg" src=${answer.url} alt="burger">
                <span>${answer.title}</span>
                </label> `

                formAnswers.appendChild(answerItem)
            })}

            const questionRender = (text, hasAnswers) => {
                question.textContent = text
                if(hasAnswers) {answersRender()}
            }
            switch (index) {
                case 0:
                    sendBtn.classList.add('d-none')
                    prevBtn.classList.add('d-none')
                    nextBtn.classList.remove('d-none')
                    questionRender(module.question, true)
                    break
                case questions.length - 1: //last question
                    prevBtn.classList.remove('d-none')
                    nextBtn.classList.remove('d-none')
                    questionRender(module.question, true)
                    break
                case questions.length: // invitation page
                    prevBtn.classList.add('d-none')
                    nextBtn.classList.add('d-none')
                    sendBtn.classList.remove('d-none')
                    questionRender('Your phone number, please!', false)
                    formAnswers.innerHTML = `
                        <div class="form-group">
                            <label for="phoneNumber">Phone number</label>
                            <input type="phone" class="form-control" id="phoneNumber">
                        </div>`
                    break
                case questions.length + 1: // gratitude page
                    prevBtn.classList.add('d-none')
                    nextBtn.classList.add('d-none')
                    sendBtn.classList.add('d-none')
                    questionRender('Thanks! Wait for our callback in 15 minutes!', false)
                    setTimeout(() => {
                        modalBlock.classList.remove('d-block')
                    }, 2000)
                    break
                default:
                    prevBtn.classList.remove('d-none')
                    nextBtn.classList.remove('d-none')
                    sendBtn.classList.add('d-none')
                    questionRender(module.question, true)
            }
        }

        renderQuizForm(index)

        nextBtn.onclick = () => {
            checkAnswer()
            index++
            renderQuizForm(index)
        }

        prevBtn.onclick = () => {
            index--
            renderQuizForm(index)
        }

        sendBtn.onclick = () => {
            checkAnswer()
            console.dir(answersBank)
            firebase.database().ref().child('contacts').push(answersBank)
            index++
            renderQuizForm(index)
        }
    }

})
