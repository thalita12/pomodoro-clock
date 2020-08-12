import React from 'react';

import styles from './index.module.css';

export default function Session({ start, type, onStart }) {
    const typeSession = type === 'session' ? 'Session' : 'Break';

    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <p className={styles.title}>{ typeSession }</p>
            </div>

            <div className={styles.counter}>
                25:00
            </div>

            {
                start ? (
                <button className={styles.buttonPrimary} onClick={onStart}>
                    <i className="fa fa-play"/> Play
                </button>
            ) : (
                <>
                    <button className={styles.buttonPrimary}>
                        <i className="fa fa-pause"/> Pause
                    </button>

                    <button className={styles.buttonSecondary}>
                        <i className="fa fa-undo"/> Reset
                    </button>
                </>
            )
            }

            <p className={styles.info}><b>Break</b> 5 min</p>
        </div>
    );
}