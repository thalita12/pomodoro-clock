import React from 'react';

import styles from './index.module.css';

export default function Session({ start, pause, currentSession, nextSession, minutes, seconds, onStart, onPause, onReset, onContinue, onStop }) {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <p className={styles.title}>{ currentSession }</p>
            </div>

            <div className={styles.counter}>
                { minutes }:{ seconds }
            </div>

            {
                !start ? (
                    <button className={styles.buttonPrimary} onClick={onStart}>
                        <i className="fa fa-play"/> Play
                    </button>
                ) : null
            }

            {
                start ? (
                    <>
                        {
                            pause ? (
                                <button className={styles.buttonSecondary} onClick={onContinue}>
                                    <i className="fa fa-play"/> Continue
                                </button>
                            ) : (
                                <button className={styles.buttonSecondary} onClick={onPause}>
                                    <i className="fa fa-pause"/> Pause
                                </button>
                            )
                        }

                        <button className={styles.buttonSecondary} onClick={onReset}>
                            <i className="fa fa-undo"/> Reset
                        </button>

                        <button className={styles.buttonSecondary} onClick={onStop}>
                            <i className="fa fa-stop"/> Stop
                        </button>
                    </>
                ) : null
            }

            <p className={styles.info}><b>{ nextSession }</b> 5 min</p>
        </div>
    );
}