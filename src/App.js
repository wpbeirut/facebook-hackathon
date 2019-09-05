import React, { Component } from "react";
import Routes from "./layout/Routes";
import Page from './layout/Page'

class App extends Component {
  render() {
    return (
      <div>
        <Page>
          <Routes />
        </Page>
      </div>
    );
  }
}

export default App;
