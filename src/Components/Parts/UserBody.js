import React, { Component, Fragment } from 'react';
import { Button, Grid, Box, Paper, CircularProgress, TextField } from '@material-ui/core';
import PostList from '../Parts/PostList';
import { UploadImageForPost, GetPostImageUrlById, SubmitPost } from '../../DataAccessLayer';
import { green } from '@material-ui/core/colors';


class UserBody extends Component {
    state = {
        uploadedImageForPost: null,
        uploadingImage: false,
        postDescription: null
    }

    imageInputChanged = (fileEvent) => {
        if (fileEvent.target.files[0] !== undefined) {
            this.setState({ uploadingImage: true });
            UploadImageForPost(this.props.loggedInUser.userId, fileEvent.target.files[0])
                .then(res => {
                    if (res.success === true) {
                        this.setState({ uploadedImageForPost: res.fileName }, () => this.setState({ uploadingImage: false }))
                    }
                    else {
                        this.setState({ uploadingImage: false })
                    }
                });
        }
    }

    submitPost = () => {
        if (this.state.uploadedImageForPost !== null && this.state.postDescription !== null){
            SubmitPost(this.props.loggedInUser.userId, this.state.uploadedImageForPost, this.state.postDescription)
            .then(res => {
                if (res.success === true) {
                    this.setState({ uploadedImageForPost: null })
                    this.setState({ postDescription: null })
                    this.props.refreshPosts();
                }
                else {
                    console.log("whoops")
                }
            });
        }
        else{
            console.log("nulllssss")
        }
    }


    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item sm={9}>
                        {this.props.posts && this.props.posts.length > 0 &&
                            <PostList posts={this.props.posts} direction="row" redirectToUserPage={this.props.redirectToUserPage} />
                        }
                    </Grid>
                    <Grid item sm={2} style={{ margin: 10 }}>
                        <Paper>
                            <Grid container direction="column" style={{ padding: 10 }}>
                                <Grid item>
                                    <input
                                        accept="image/jpeg"
                                        style={{ display: "none" }}
                                        id="uploadButton"
                                        multiple
                                        type="file"
                                        onChange={this.imageInputChanged}
                                    />
                                    <label htmlFor="uploadButton">
                                        <Button disabled={this.state.uploadingImage} variant="contained" component="span">
                                            SELECT IMAGE
                                </Button>
                                        {this.state.uploadingImage && <CircularProgress size={24} className={{
                                            color: green[500],
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: -12,
                                            marginLeft: -12
                                        }} />}
                                    </label>
                                </Grid>
                                {this.state.uploadedImageForPost &&
                                    <Grid item>
                                        <img height={150} width={150} src={GetPostImageUrlById(this.state.uploadedImageForPost)} />
                                    </Grid>
                                }
                                <Grid item>
                                    <TextField
                                        id="description"
                                        label="Description"
                                        type="text"
                                        name="description"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e) => this.setState({ postDescription: e.target.value })}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" onClick={this.submitPost}>
                                        POST
                            </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>)
    }
}

export default UserBody