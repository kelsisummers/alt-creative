import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Main from './pages/Main';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
    // this.isMobile = this.isMobile.bind(this);
  }

  isMobile() {
    let width = document.documentElement.clientWidth;
    console.log(width);

    console.log(width)
    if (width <= 768){
      console.log('im mobile')
      this.setState({mobile: true});
      console.log(this.state.mobile);
    } else {
      console.log('im not')
      this.setState({mobile: false});
      console.log(this.state.mobile);
    }
  }

  componentDidMount(){
    this.isMobile();
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header"></header>
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

// export default App;
