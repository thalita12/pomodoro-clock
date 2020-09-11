import React, {useCallback, useEffect, useState} from 'react'

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
  const [seconds, setSeconds] = useState(10)

  const counterSession = useCallback(() => {
    if (pause) return

    if (minutes === 0 && seconds === 0) {
      isStart(false)
      setNextSession(currentSession)
      setCurrentSession(nextSession)
      setMinutes(5)
      setSeconds(0)
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
    } else {
      setNextSession(SESSION)
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
    <div className="app">
      <h1 className="title">
        <strong>Pomodoro Clock</strong>
      </h1>

      <Session
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onContinue={handleContinue}
        onStop={handleStop}
      />

      <Footer />
    </div>
  )
}

export default App
