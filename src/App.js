import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        
      </div>
    );
  }
}

export default App;
