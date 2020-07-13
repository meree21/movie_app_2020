// 카운터
import React, { Fragment } from 'react';
import ProTypes from "prop-types";

class App extends React.Component{
  //object
  state = {
    count: 0
  };
//function(javascirt)
  add = () => {
    this.setState({count : + 1})          
  };
  minus = () => {
    this.setState({count : - 1})
  }; 
 render(){
   return(
     <div>
      <h1> The number id {this.state.count}</h1>
     // add버튼을 클릭하면 this.add를 실행
      <button onClick={this.add()}>add</button>
    // minus버튼을 클릭하면 this.minus를 실행
      <button onClick={this.minus()}>minus</button>
     </div>
   );
 } 
}

export default App;
