import React, { Component, Fragment } from 'react';
import PostList from '../Parts/PostList';

class Feed extends Component {

    render() {
        return (
            <PostList posts={this.props.posts} direction="column" />
        )
    }
}

export default Feed
