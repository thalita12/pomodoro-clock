import React from 'react'

import Button from '../button'
import Countdown from '../countdown'

import styles from './index.module.css'

export default function Session({
  start,
  pause,
  currentSession,
  nextSession,
  minutes,
  seconds,
  onStart,
  onPause,
  onReset,
  onContinue,
  onStop,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <p className={styles.title}>{currentSession}</p>
      </div>

      <Countdown minutes={minutes} seconds={seconds} />

      <Button
        start={start}
        pause={pause}
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
        onContinue={onContinue}
        onStop={onStop}
      />

      <p className={styles.info}>
        <b>{nextSession}</b> 5 min
      </p>
    </div>
  )
}
