import React, { useState } from 'react';
import './App.css';
import Session from './components/session';
import Footer from "./components/footer";

import constant from "./constants/type";

function App() {
    const [currentSession, setCurrentSession] = useState(constant.SESSION);
    const [nextSession, setNextSession] = useState(constant.BREAK);
    const [start, isStart] = useState(false);
    let minute = 1;
    let second = 0;

    const handleStart = () => {
        isStart(true);

        if (currentSession === constant.SESSION) {
            setNextSession(constant.BREAK);
        } else {
            setNextSession(constant.SESSION);
        }
        timer();
    };

    const handlePause = () => {
        console.log('chamou o pauseee');
    };

    const handleReset = () => {
        console.log('chamou o reset');
    };

    const timer = () => {
        setInterval(() => {
            if (minute ===  0 && second === 0) {
                isStart(false);
                setNextSession(currentSession);
                setCurrentSession(nextSession);
            }
            else {
                if (second === 0) {
                    minute--;
                    second = 59;
                } else {
                    second--;
                }
            }
            console.log(`${minute}:${second}`)
        }, 1000);
    };

  return (
    <div className="app">
      <h1 className="title"><strong>Pomodoro Clock</strong></h1>

      <Session currentSession={currentSession} nextSession={nextSession} start={start} onStart={handleStart} onPause={handlePause} onReset={handleReset} />

      <Footer/>
    </div>
  );
}

export default App;
