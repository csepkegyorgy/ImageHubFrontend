import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { AuthenticateUserByFacebookLogin } from './DataAccessLayer'
import { GetUserFeed } from './DataAccessLayer'

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class App extends Component {
  state = {
    loggedInUser: { userId: "7bc130e4-60bc-4c45-84a4-f995bd991ed5", email:"asd@asd.hu", name:"mock"},
    posts: []
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
              this.setState({ loggedInUser: res }, this.userSuccessfulLogin)
            }
            else {
              this.setState({ loggedInUser: null })
            }
          }
        });
  }

  userSuccessfulLogin = () => {
    GetUserFeed(this.state.loggedInUser.userId, 15, null)
      .then(res => {
        console.log(res.posts)
        this.setState({posts : res.posts})
      })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header loggedInUser={this.state.loggedInUser} />
        <ImageHubBody loggedInUser={this.state.loggedInUser} handleUserLogin={this.handleUserLogin} posts={this.state.posts}/>
        <Footer />
      </MuiThemeProvider>
    );
  }

  componentWillMount() {
    //this.userSuccessfulLogin();
  }
}

export default App;