import React from 'react';
import './App.css';
import Session from './components/session';
import Footer from "./components/footer";

function App() {
    let type = 'session';
    let start = true;

    const handleStartSession = () => {
        console.log('Começou a sessão!');
    };

  return (
    <div className="app">
      <h1 className="title"><strong>Pomodoro Clock</strong></h1>

      <Session type={type} start={start} onStart={handleStartSession}/>

      <Footer/>
    </div>
  );
}

export default App;
