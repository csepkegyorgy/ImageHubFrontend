import React, { Component, Fragment } from 'react';
import { Button, Grid, Box, Paper, CircularProgress, TextField } from '@material-ui/core';
import LoginPane from '../Parts/LoginPane';
import PostList from '../Parts/PostList';
import { green } from '@material-ui/core/colors';
import UserBody from '../Parts/UserBody';
import Feed from '../Parts/Feed';


class ImageHubBody extends Component {
    

    render() {
        console.log(this.props.redirectToUserPage)
        return (
            <Fragment>
                {!this.props.loggedInUser &&
                    <Fragment>
                        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                            <Grid item xs={3}>
                                <LoginPane handleUserLogin={this.props.handleUserLogin} />
                            </Grid>
                        </Grid>
                    </Fragment>
                }

                {this.props.loggedInUser && this.props.bodySite === "feed" &&
                    <Fragment>
                        {this.props.posts && this.props.posts.length > 0 &&
                           <Feed loggedInUser={this.props.loggedInUser} posts={this.props.posts} />
                        }
                    </Fragment>
                }

                {this.props.loggedInUser && this.props.bodySite === "user" &&
                    <UserBody userRelation={this.props.userRelation} loggedInUser={this.props.loggedInUser} userPageUserId={this.props.userPageUserId} posts={this.props.posts} redirectToUserPage={this.props.redirectToUserPage} />
                }
            </Fragment>
        );
    }
}

export default ImageHubBody;