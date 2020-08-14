import React from 'react';

import styles from './index.module.css';

export default function Session({ start, currentSession, nextSession, onStart, onPause, onReset }) {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <p className={styles.title}>{ currentSession }</p>
            </div>

            <div className={styles.counter}>
                25:00
            </div>

            {
                start ? (
                    <>
                        <button className={styles.buttonPrimary} onClick={onPause}>
                            <i className="fa fa-pause"/> Pause
                        </button>

                        <button className={styles.buttonSecondary} onClick={onReset}>
                            <i className="fa fa-undo"/> Reset
                        </button>
                    </>
            ) : (
                <button className={styles.buttonPrimary} onClick={onStart}>
                    <i className="fa fa-play"/> Play
                </button>
                )
            }

            <p className={styles.info}><b>{ nextSession }</b> 5 min</p>
        </div>
    );
}