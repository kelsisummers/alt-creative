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
    this.getWidth = this.getWidth.bind(this);
    this.createPath = this.createPath.bind(this);
  }

  getWidth() {
    let width = document.documentElement.clientWidth;
    console.log(width);
    return width;
  }

  // Checks ScreenWidth to Determine if User is on Mobile Device
  checkMobile() {
    let width = document.documentElement.clientWidth;
    if (width <= 768){
      this.setState({isMobile: true});
      console.log(this.state.isMobile);
      return true
    } 
    else {
      this.setState({isMobile: false});
      console.log(this.state.isMobile);
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

  // Function to Create SVG Animation
  createPath(component, extraLength, offset, speed) {
    // Get a reference to the <path>
    const path = document.querySelector(`#${component}-path`);
  
    let widthOutput = document.documentElement.clientWidth;
    // console.log(`initial value: ${widthOutput}`);
  
  
    // Get length of path... ~577px in this case
    let pathLength = path.getTotalLength() + (widthOutput + extraLength);
    // console.log(`initial path length: ${pathLength}`);
      
    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;
      
    path.getBoundingClientRect();
  
    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    // console.log(`path length on scroll?: ${pathLength}`)
      
    // What % down is it? 
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log(scrollPercentage);
      
    // Offset scrollPercentage Based on Component Location
    let scrollOffset = scrollPercentage - offset;
          
    // Length to offset the dashes
    let drawLength = (pathLength * scrollOffset) * speed;
    // console.log(drawLength);
        
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
          
    // When complete, remove the dash array, otherwise shape isn't quite sharp
    if (scrollPercentage >= .99) {
      path.style.strokeDasharray = 'none';  
    } else {
      path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    };
  });
}
  
  render(){
    return (
      <div className="App">
        <header className="App-header"></header>
        <Nav activeTab={this.state.activeTab} handleClick={this.handleClick} checkMobile={this.checkMobile} isMobile={this.state.isMobile}/>
        <Main createPath={this.createPath} getWidth={this.getWidth} activeTab={this.state.activeTab} isMobile={this.state.isMobile}/>
        <Footer />
      </div>
    );
  }
}