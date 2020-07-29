export const videoPlayInit = () => {
  const videoPlayer = document.querySelector('.video-player')
  const videoBtnPlay = document.querySelector('.video-button__play')
  const videoBtnStop = document.querySelector('.video-button__stop')
  const videoProgress = document.querySelector('.video-progress')
  const videoTimePassed = document.querySelector('.video-time__passed')
  const videoTimeTotal = document.querySelector('.video-time__total')

  // console.log(videoPlayer)
  const toggleIcon = () => {
    if(videoPlayer.paused) {
      videoBtnPlay.classList.remove('fa-play')
      videoBtnPlay.classList.add('fa-pause')
    } else {
      videoBtnPlay.classList.remove('fa-pause')
      videoBtnPlay.classList.add('fa-play')
    }
  }

  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play()
    } else {
      videoPlayer.pause()
    }
  }

  const stopPlay = () => {
    videoPlayer.pause()
    videoPlayer.currentTime = 0
  }

  const addZero = n => n < 10 ? '0' + n : n

  videoPlayer.addEventListener('click', togglePlay)
  videoBtnPlay.addEventListener('click', togglePlay)

  videoPlayer.addEventListener('play', toggleIcon)
  videoPlayer.addEventListener('pause', toggleIcon)
  videoBtnStop.addEventListener('click', stopPlay)
  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime
    const duration = videoPlayer.duration// в секундах с 6 знаками после зпт
    console.log(currentTime)

    videoProgress.value = (currentTime / duration) * 100
    let minutesPassed = Math.floor(currentTime / 60)
    let secondsPassed = Math.floor(currentTime % 60)

    let minutesTotal = Math.floor(duration / 60)
    let secondsTotal = Math.floor(duration % 60)

    videoTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`
    videoTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`

  })

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration
    const value = videoProgress.value // положение движка в % от общей продолжительности

    videoPlayer.currentTime = (value * duration) / 100
  })

}
