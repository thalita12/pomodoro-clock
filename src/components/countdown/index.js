import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const formatNumber = (value) => {
  return String(value).padStart(2, '0')
}

const Countdown = ({seconds, minutes}) => {
  return (
    <div className={styles.counter}>
      {formatNumber(minutes)}:{formatNumber(seconds)}
    </div>
  )
}

Countdown.propTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number
}

export default Countdown
