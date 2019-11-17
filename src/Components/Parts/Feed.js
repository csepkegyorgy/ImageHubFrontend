import React, { Component, Fragment } from 'react';
import PostList from '../Parts/PostList';
import { UploadImageForPost, GetPostImageUrlById, SubmitPost } from '../../DataAccessLayer';

class Feed extends Component {

    render() {
        return (
            <PostList posts={this.props.posts} direction="column" />
        )
    }
}

export default Feed
