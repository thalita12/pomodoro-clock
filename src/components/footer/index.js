import React from 'react';

import styles from './index.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <button className={styles.button}>
                Learn more about Pomodoro's technique
            </button>

            <p className={styles.property}>
                App Ideas Collection by Thalita
            </p>
        </div>
    );
}