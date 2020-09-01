import React from 'react'

import Button from '../button'
import Countdown from '../countdown'

import styles from './index.module.css'
import PropTypes from 'prop-types'

const Session = ({
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
  onStop
}) => {
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

Session.propTypes = {
  currentSession: PropTypes.string,
  nextSession: PropTypes.string,
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  pause: PropTypes.bool,
  start: PropTypes.bool,
  onContinue: PropTypes.func,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

export default Session