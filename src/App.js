import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Testimonials />
        <Test/>
      </main>
      <Footer />
    </div>
  );
}

export default App;