import React from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { Portfolio } from './components/Portfolio/Portfolio';
import { History } from './components/History/History';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Portfolio />
        <History />
        <Footer />
    </div>
  );
}

export default App;
