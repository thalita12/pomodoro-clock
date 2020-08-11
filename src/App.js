import React from 'react';
import './App.css';
import Session from './components/session';
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <h1 className="title"><strong>Pomodoro Clock</strong></h1>

      <Session/>

      <Footer/>
    </div>
  );
}

export default App;
