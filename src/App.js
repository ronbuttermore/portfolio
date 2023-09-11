import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div class="page">
      <div class="content">
        <Header />
      </div>
      <div class="footcontainer">
        <div class="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
