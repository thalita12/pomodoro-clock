import React from 'react';

import styles from './index.module.css';

export default function Session() {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <p className={styles.title}>Session</p>
                <p>more</p>
            </div>

            <div className={styles.counter}>
                05:00
            </div>

            <button className={styles.button}>
                Play
            </button>

            <p className={styles.info}><b>Break</b> 5 min</p>
        </div>
    );
}