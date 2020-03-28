import React, { Component } from "react";
import LightContainer from "./Components/LightContainer";
import CounterContainer from "./Components/CounterContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div> hello</div>
        <LightContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
