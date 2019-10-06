import React, { Component, Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import LoginPane from '../Parts/LoginPane';
import PostList from '../Parts/PostList';

class ImageHubBody extends Component {
    render() {
        return (
            <Fragment>
                { !this.props.loggedInUser && 
                    <Fragment>
                        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                            <Grid item xs={3}>
                                <LoginPane handleUserLogin={this.props.handleUserLogin}/>
                            </Grid>   
                        </Grid>
                    </Fragment>
                }
                
                { this.props.loggedInUser && this.props.bodySite === "feed" &&
                    <Fragment>
                        { this.props.posts && this.props.posts.length > 0 &&
                            <PostList posts={this.props.posts} direction="column" />
                        }
                    </Fragment>
                }

                { this.props.loggedInUser && this.props.bodySite === "user" &&
                    <Fragment>
                        { this.props.posts && this.props.posts.length > 0 &&
                            <PostList posts={this.props.posts} direction="row" />
                        }
                    </Fragment>
                }
            </Fragment>
        );
    }
}

export default ImageHubBody;