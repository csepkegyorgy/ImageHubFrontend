import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import ImageHubBody from './Components/Layouts/ImageHubBody';
import Footer from './Components/Layouts/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { AuthenticateUserByFacebookLogin, LoadUserPosts } from './DataAccessLayer'
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
    //{userId: "7bc130e4-60bc-4c45-84a4-f995bd991ed5", email:"asd@asd.hu", name:"mock"},
    posts: [],
    bodySite : "feed",
    userPageUserId : null
  }

  handleUserLogin = (facebookResponse) => {
    AuthenticateUserByFacebookLogin(facebookResponse)
      .then(res => {
        if (res.errors) {
          console.log(res.error)
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
  
  // createMockPosts()
  // {
  //   this.state.posts.push(        
  //         {
  //           "postid": "1e0dcfee-fe1f-4314-8abe-32ae708d131f",
  //           "postername": "Mihail Szergejevics Gorbacsov",
  //           "posterid": "4d6cbdd7-bfda-4664-a7a1-e70a91bbdd45",
  //           "posterprofileiconid": "4d6cbdd7-bfda-4664-a7a1-e70a91bbdd45_19861011151515.jpg",
  //           "imageid": "4d6cbdd7-bfda-4664-a7a1-e70a91bbdd45_19861011202020.jpg",
  //           "postdescription": "Yo me and my dude Ronny Long-ago havin a good ol doobie rn #wasted",
  //           "hubtasticcount": 420,
  //           "date": "1986-10-11T20:20:20.511Z",
  //           "ishubbedbycurrentuser": true
  //         }       
           
  //     //https://picsum.photos/id/169/400/400
  //   )
  // }

  redirectToUserPage = (userId) => {
    console.log(userId)
      this.setState({bodySite:"user", userPageUserId: userId}, this.refreshPosts);
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
          />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;