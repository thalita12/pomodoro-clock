import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const formatNumber = value => {
  return String(value).padStart(2, '0')
}

const Countdown = ({seconds, minutes}) => {
  const formattedSeconds = formatNumber(seconds)
  const formattedMinutes = formatNumber(minutes)

  useEffect(() => {
    document.title = `${formattedMinutes}:${formattedSeconds} | Pomodoro Clock`
  }, [formattedSeconds, formattedMinutes])

  return (
    <div className={styles.counter}>
      {formattedMinutes}:{formattedSeconds}
    </div>
  )
}

Countdown.propTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number
}

export default Countdown
