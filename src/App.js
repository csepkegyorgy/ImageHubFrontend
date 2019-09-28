import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({  
    palette: {
      primary: green
    }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header className="header-title" />
        <ImageHubBody />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;