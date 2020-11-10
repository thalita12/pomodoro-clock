import sound from '../../assets/audio/ting.mp3'

const likeAudio = new Audio(sound)

export const playSound = () => likeAudio.play()

export const pauseSound = () => likeAudio.pause()
