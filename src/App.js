import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Tlist from "./Tlist";

class App extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Tlist} />
      </section>
    );
  }
};

export default App;
