import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { AuthenticateUserByFacebookLogin, LoadUserPosts, GetUserRelationByUserId } from './DataAccessLayer'
import { GetUserFeed } from './DataAccessLayer'

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class App extends Component {
  state = {
    loggedInUser: 
    null,
    posts: [],
    bodySite : "feed",
    userPageUserId : null,
    userRelation: null
  }

  handleUserLogin = (facebookResponse) => {
    AuthenticateUserByFacebookLogin(facebookResponse)
      .then(res => {
        if (res.errors) {
          console.log(res.errors)
        }
        else {
          if (res.successfulLogin === true) {
            this.setState({ loggedInUser: res }, this.refreshPosts)
          }
          else {
            this.setState({ loggedInUser: null })
          }
        }
      });
  }

  redirectToUserPage = (userId) => {
      if (userId == this.state.loggedInUser.userId) {
          this.setState({userRelation:null}, () => {this.setState({bodySite:"user", userPageUserId: userId}, this.refreshPosts)});
      }
      else {
        GetUserRelationByUserId(this.state.loggedInUser.userId, userId)
        .then(res => {
          this.setState({userRelation: res.relation}, () => {this.setState({bodySite:"user", userPageUserId: userId}, this.refreshPosts)})
        })
      }
  }
  
  redirectToUserFeed = () => {
    this.setState({bodySite:"feed", userPageUserId:null}, this.refreshPosts);
  }

  refreshPosts = () => {
    if (this.state.bodySite === "user"){
      LoadUserPosts(this.state.userPageUserId, this.state.loggedInUser.userId, 15, null)
        .then(res => {
          this.setState({posts : res.posts})
        })
    }
    else if (this.state.bodySite === "feed"){
      GetUserFeed(this.state.loggedInUser.userId, this.state.loggedInUser.userId, 15, null)
        .then(res => {
          this.setState({posts : res.posts})
        })
    }
  }

  render() {
    // this.createMockPosts();
    return (
      <MuiThemeProvider theme={theme}>
        <Header
          loggedInUser={this.state.loggedInUser}
          redirectToUserFeed={this.redirectToUserFeed}
          redirectToUserPage={this.redirectToUserPage}
          />
        <ImageHubBody
          redirectToUserFeed={this.redirectToUserFeed}
          redirectToUserPage={this.redirectToUserPage}
          loggedInUser={this.state.loggedInUser}
          bodySite={this.state.bodySite}
          handleUserLogin={this.handleUserLogin}
          posts={this.state.posts}
          refreshPosts={this.refreshPosts}
          userPageUserId={this.state.userPageUserId}
          userRelation={this.state.userRelation}
          />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;