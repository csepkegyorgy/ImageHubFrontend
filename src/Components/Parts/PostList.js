import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import PostPane from "./PostPane"


class PostList extends Component {
    render() {
        return(
            <Fragment>
                <Grid container spacing={0} direction={this.props.direction} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                    {this.props.posts.map(post => {
                        return(
                            <Grid item sm style={{margin:10}} key={post.postId}>
                                <PostPane post={post}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </Fragment>
        );
    }
}

export default PostList;