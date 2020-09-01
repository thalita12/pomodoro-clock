import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Button = ({pause, start, onContinue, onPause, onReset, onStart, onStop}) => {
  return (
    <>
      {!start ? (
        <button className={styles.buttonPrimary} onClick={onStart}>
          <i className="fa fa-play" /> Play
        </button>
      ) : null}

      {start ? (
        <>
          {pause ? (
            <button className={styles.buttonSecondary} onClick={onContinue}>
              <i className="fa fa-play" /> Continue
            </button>
          ) : (
            <button className={styles.buttonSecondary} onClick={onPause}>
              <i className="fa fa-pause" /> Pause
            </button>
          )}

          <button className={styles.buttonSecondary} onClick={onReset}>
            <i className="fa fa-undo" /> Reset
          </button>

          <button className={styles.buttonSecondary} onClick={onStop}>
            <i className="fa fa-stop" /> Stop
          </button>
        </>
      ) : null}
    </>
  )
}

Button.propTypes = {
  pause: PropTypes.bool,
  start: PropTypes.bool,
  onContinue: PropTypes.func,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

export default Button
