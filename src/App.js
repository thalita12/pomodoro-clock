import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Session from './components/session';
import Footer from './components/footer';

import constant from './constants/type';

function App() {
    const [currentSession, setCurrentSession] = useState(constant.SESSION);
    const [nextSession, setNextSession] = useState(constant.BREAK);
    const [start, isStart] = useState(false);
    const [pause, isPause] = useState(false);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    const counterSession = useCallback(() => {
        if (pause) return;

        if (minutes === 0 && seconds === 0) {
            isStart(false);
            setNextSession(currentSession);
            setCurrentSession(nextSession);
        }
        else {
            if (seconds === 0) {
                setMinutes(prevMinutes => prevMinutes - 1);
                setSeconds(59);
            } else {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }
    }, [minutes, seconds, currentSession, nextSession, pause]);

    useEffect(() => {
        if (!start) {
            return;
        }
        const interval = setInterval(counterSession, 1000);

        return () => clearInterval(interval);
    }, [counterSession, start]);

    const handleStart = () => {
        isStart(true);

        if (currentSession === constant.SESSION) {
            setNextSession(constant.BREAK);
        } else {
            setNextSession(constant.SESSION);
        }
    };

    const handlePause = () => {
        isPause(true);
    };

    const handleContinue = () => {
        isPause(false);
    };

    const handleReset = () => {
        handleContinue();
        setMinutes(25);
        setSeconds(0);
    };

    const handleStop = () => {
        isStart(false);
        isPause(false);
        setMinutes(25);
        setSeconds(0);
    };

  return (
    <div className="app">
      <h1 className="title"><strong>Pomodoro Clock</strong></h1>

      <Session currentSession={currentSession}
               nextSession={nextSession}
               minutes={minutes}
               seconds={seconds}
               start={start}
               pause={pause}
               onStart={handleStart}
               onPause={handlePause}
               onReset={handleReset}
               onContinue={handleContinue}
               onStop={handleStop}/>

      <Footer/>
    </div>
  );
}

export default App;
