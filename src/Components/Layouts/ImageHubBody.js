import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import LoginPane from '../Parts/LoginPane';
import { GetPostImageUrlById } from '../../DataAccessLayer'
import PostPane from '../Parts/PostPane';

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
                
                { this.props.loggedInUser && 
                    // <Fragment>
                    //     <h1>{this.props.loggedInUser.name} - {this.props.loggedInUser.facebookUserId}</h1>
                    //     <h2>{this.props.loggedInUser.email}</h2>
                    //     <h2>{this.props.loggedInUser.userId}</h2>
                    //     <img src={GetPostImageUrlById(this.props.loggedInUser.profileIconId)}/>
                    // </Fragment>
                    <Fragment>
                        {this.props.posts && this.props.posts.length > 0 &&
                            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                                {this.props.posts.map(post => {
                                    return(
                                        <Grid item sm style={{margin:10}} key={post.postId}>
                                            <PostPane post={post}/>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        }
                    </Fragment>
                }
            </Fragment>
        );
    }
}

export default ImageHubBody;