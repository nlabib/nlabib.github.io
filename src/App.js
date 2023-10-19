import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
