import React from 'react'
import {connect} from 'react-redux'
import {
  getStart,
  getPause,
  getCurrentSession,
  getNextSession,
  getMinutes,
  getSeconds,
  getClock
} from '../../core/selectors'

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
                   nextMinutes,
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
        <b>{nextSession}</b> {nextMinutes} min
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  // start: getStart(state),
  // pause: getPause(state),
  // currentSession: getCurrentSession(state),
  // nextSession: getNextSession(state),
  // minutes: getMinutes(state),
  // seconds: getSeconds(state),
  // clock: getClock(state)
})

Session.propTypes = {
  currentSession: PropTypes.string,
  nextSession: PropTypes.string,
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  nextMinutes: PropTypes.number,
  pause: PropTypes.bool,
  start: PropTypes.bool,
  onContinue: PropTypes.func,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

export default connect(mapStateToProps)(Session)
