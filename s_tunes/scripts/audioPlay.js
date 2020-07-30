import {addZero} from './support.js'

export const audioPlayInit = () => {
  const audio = document.querySelector('.audio')
  const audioImg = document.querySelector('.audio-img')
  const audioHeader = document.querySelector('.audio-header')
  const audioPlayer = document.querySelector('.audio-player')
  const audioNav = document.querySelector('.audio-navigation')
  const audioBtnPlay = document.querySelector('.audio-button__play')
  const audioProgress = document.querySelector('.audio-progress')
  const audioProgressTiming = document.querySelector('.audio-progress__timing')
  const audioTimePassed = document.querySelector('.audio-time__passed')
  const audioTimeTotal = document.querySelector('.audio-time__total')

  const playlist = ['hello', 'flow', 'speed']
  let trackIndex = 0
  const track = () => playlist[trackIndex]
  // console.log('track', track())

  const loadTrack = () => {
    const isPaused = audioPlayer.paused
    audioImg.src = `./audio/${track()}.jpg`
    audioHeader.textContent = track().toUpperCase()
    audioPlayer.src = `./audio/${track()}.mp3`

    if (isPaused) { // сохраняем предыдущее состояние при смене объекта audio
      audioPlayer.pause()
    } else {
      audioPlayer.play()
    }
  }

  const prevTrack = () => {
    if (trackIndex !== 0) {
      trackIndex--
    } else {
      trackIndex = playlist.length - 1
    }
    loadTrack()
  }
  const nextTrack = () => {
    if (trackIndex === playlist.length - 1) {
      trackIndex = 0
    } else {
      trackIndex++
    }
    loadTrack()
  }

  audioNav.addEventListener('click', ({target}) => {
    if (target.classList.contains('audio-button__play')) {
      audio.classList.toggle('play')
      audioBtnPlay.classList.toggle('fa-play')
      audioBtnPlay.classList.toggle('fa-pause')
      audioHeader.textContent = track().toUpperCase()

      if (audioPlayer.paused) {
        audioPlayer.play()
      } else {
        audioPlayer.pause()
      }
    }

    if (target.classList.contains('audio-button__prev')) {
      prevTrack()
    }
    if (target.classList.contains('audio-button__next')) {
      nextTrack()
    }
  })

  audioPlayer.addEventListener('ended', () => {
    nextTrack()
    audioPlayer.play()
  })

  audioPlayer.addEventListener('timeupdate', () => {
    const duration = audioPlayer.duration
    const currentTime = audioPlayer.currentTime
    const progress = (currentTime / duration) * 100

    audioProgressTiming.style.width = progress + '%'
    const minutesPassed = Math.floor(currentTime / 60) || '0'
    const secondsPassed = Math.floor(currentTime % 60) || '0'
    const minutesTotal = Math.floor(duration / 60) || '0'
    const secondsTotal = Math.floor(duration % 60) || '0'

    audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`
    audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`
  })

  audioProgress.addEventListener('click', e => {
    const x = e.offsetX
    const totalWidth = audioProgress.clientWidth
    const progress = (x / totalWidth) * audioPlayer.duration

    audioPlayer.currentTime = progress
  })

}

