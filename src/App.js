import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {

   //*** */adjust min and max to change numbers calculated
    let min = 1;
    let max = 1000;

    let total = 0;
      for (let num = min; num < max; num++) {
        total = total + num;
    }
 
  return (
    <div className="App">
      <p>Add numbers 1 through {max}</p>
      <ul>Total is: {total}</ul>
    </div>
  );
  }
}

export default App;