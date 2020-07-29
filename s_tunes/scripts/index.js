import {videoPlayInit} from './videoPlay.js'
import {audioPlayInit} from './audioPlay.js'
import {radioPlayInit} from './radioPlay.js'

videoPlayInit()
const playBtn = document.querySelectorAll('.player-btn')
const playBlock = document.querySelectorAll('.player-block')
const title = document.querySelector('.temp')

const deactivatePlayer = () => {
    title.style.display = 'none'
    playBtn.forEach(btn => btn.classList.remove('active'))
    playBlock.forEach(block => block.classList.remove('active'))
}

playBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivatePlayer()
        btn.classList.add('active')
        playBlock[i].classList.add('active')
    })
})
