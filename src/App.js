import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <ImageHubBody/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;