
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import About from './components/About';
import Rooms from './components/Rooms';
import Contact from './components/Contact';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Rooms/>
      <Contact/>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
