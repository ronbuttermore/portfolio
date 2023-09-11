import './App.css';
import React from "react";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div class="page">
      <div class="content">
        <Navigation />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
