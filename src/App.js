import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Main from './pages/Main';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">

      <header className="App-header"></header>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
