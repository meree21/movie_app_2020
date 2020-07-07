import React, { Fragment } from 'react';
import ProTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    console.log("add");            
  };
  minus = () => {
    console.log("minus")
  }; 
 render(){
   return(
     <div>
      <h1>아ㅗㅓㅇ아ㅗㅇ {this.state.count}</h1>
      <button onClick={this.add()}>add</button>
      <button>minus</button>
     </div>
   );
 } 
}

export default App;
