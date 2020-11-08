const sound = document.createElement('audio')
sound.src = '../../../public/audio/horse.ogv'
sound.setAttribute('preload', 'auto')
sound.setAttribute('controls', 'none')
// sound.style.display = 'none'

document.body.appendChild(sound)

const playAudio = () => {
  sound.play()
}

const pauseAudio = () => {
  sound.pause()
}

export {playAudio, pauseAudio}
