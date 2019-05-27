import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <hr/>
          <Header />
          <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
      <hr/>
      <Footer />
    </div>

  );
}

export default App;
