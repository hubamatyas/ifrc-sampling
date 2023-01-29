import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/index';
import Footer from './components/Footer/index';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;