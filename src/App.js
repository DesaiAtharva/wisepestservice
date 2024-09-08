import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Test from './components/Test';
import Why from './components/Why';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Testimonials />
        <Why/>
        <Test/>
      </main>
      <Footer />
    </div>
  );
}

export default App;