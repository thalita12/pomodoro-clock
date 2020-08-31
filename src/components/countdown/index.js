import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Countdown = ({seconds, minutes}) => {
  return (
    <div className={styles.counter}>
      {minutes !== 0 ? minutes : '00'}:{seconds !== 0 ? seconds : '00'}
    </div>
  )
}

Countdown.protoTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number
}

export default Countdown