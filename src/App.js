import React from 'react';
import './App.scss';
import Main from './pages/Main';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isActive: false,
      activeTab: 'services'
    };
    this.checkMobile = this.checkMobile.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Checks ScreenWidth to Determine if User is on Mobile Device
  checkMobile() {
    let width = document.documentElement.clientWidth;
    if (width <= 768){
      this.setState({isMobile: true});
      return true
    } 
    else {
      this.setState({isMobile: false});
      return false
    }
  }

  // Saves the Active Tab to State
  handleClick(e) {
    e.preventDefault();
    const target = e.target.innerText.toLowerCase();
    switch(true) {
      case (target === 'services'):
        this.setState({activeTab: 'services'})
        break;
      case (target === 'about'):
        this.setState({activeTab: 'about'})
        break;
      case (target === 'contact'):
        this.setState({activeTab: 'contact'})
        break;
      //Default Set to Services
      default :
        this.setState({activeTab: 'services'})
    }
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header"></header>
        <Nav activeTab={this.state.activeTab} handleClick={this.handleClick} checkMobile={this.checkMobile} isMobile={this.state.isMobile}/>
        <Main activeTab={this.state.activeTab} isMobile={this.state.isMobile}/>
        <Footer />
      </div>
    );
  }
}