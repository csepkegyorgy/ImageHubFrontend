import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';
import { AuthenticateUserByFacebookLogin } from './DataAccessLayer'

class App extends Component {
  state = {
    loggedInUser : null,
  }

  handleUserLogin = (facebookResponse) => {
    let responseUserState =
      AuthenticateUserByFacebookLogin(facebookResponse)
        .then(res => {
          if (res.errors) {
              console.log(res.error)
          }
          else {
            if (res.successfulLogin === true) {
              this.setState({ loggedInUser : res })
            }
            else {
              this.setState({ loggedInUser : null })
            }
          }
        });
  }

  render() {
    return (
      <Fragment>
        <Header loggedInUser={this.state.loggedInUser} />
        <ImageHubBody loggedInUser={this.state.loggedInUser} handleUserLogin={this.handleUserLogin}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;