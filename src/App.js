import React, {useCallback, useEffect, useState} from 'react'

import {playAudio, pauseAudio} from './common/utils/sound'

import Session from './components/session'
import Footer from './components/footer'

import {BREAK, SESSION} from './constants/constants'

import './App.css'

function App() {
  const [currentSession, setCurrentSession] = useState(SESSION)
  const [nextSession, setNextSession] = useState(BREAK)
  const [start, isStart] = useState(false)
  const [pause, isPause] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(5)
  const [nextMinutes, setNextMinutes] = useState(5)

  const counterSession = useCallback(() => {
    if (pause) return

    if (minutes === 0 && seconds === 0) {
      isStart(false)
      playAudio()
      setTimeout(() => {
        setNextSession(currentSession)
        setCurrentSession(nextSession)
        setMinutes(5)
        setSeconds(0)
        pauseAudio()
      }, 2000)
    } else {
      if (seconds === 0) {
        setMinutes(prevMinutes => prevMinutes - 1)
        setSeconds(59)
      } else {
        setSeconds(prevSeconds => prevSeconds - 1)
      }
    }
  }, [minutes, seconds, currentSession, nextSession, pause])

  useEffect(() => {
    if (!start) {
      return
    }
    const interval = setInterval(counterSession, 1000)

    return () => clearInterval(interval)
  }, [counterSession, start])

  const handleStart = () => {
    isStart(true)

    if (currentSession === SESSION) {
      setNextSession(BREAK)
      setNextMinutes(5)
    } else {
      setNextSession(SESSION)
      setNextMinutes(10)
    }
  }

  const handlePause = () => {
    isPause(true)
  }

  const handleContinue = () => {
    isPause(false)
  }

  const handleReset = () => {
    handleContinue()
    setMinutes(25)
    setSeconds(0)
  }

  const handleStop = () => {
    isStart(false)
    isPause(false)
    setMinutes(25)
    setSeconds(0)
  }

  return (
    <>
      <div className="app">
        <h1 className="title">
          <strong>Pomodoro Clock</strong>
        </h1>

        <Session
          nextSession={nextSession}
          currentSession={currentSession}
          minutes={minutes}
          seconds={seconds}
          start={start}
          pause={pause}
          nextMinutes={nextMinutes}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          onContinue={handleContinue}
          onStop={handleStop}
        />
      </div>

      <Footer />
    </>
  )
}

export default App
