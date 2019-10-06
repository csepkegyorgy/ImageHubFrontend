import React, { Component, Fragment } from 'react';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { GetPostImageUrlById } from '../../DataAccessLayer';
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { maxHeight } from '@material-ui/system';

class PostPane extends Component {
    render() {
        console.log(this.props.post)

        return (
            <Fragment>
                <Card style={{width:400, maxHeight:600}}>
                    <CardHeader
                        avatar={
                            <Avatar src={GetProfileIconImageUrlById(this.props.post.posterProfileIconId)}/>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={this.props.post.posterName}
                        subheader={this.props.post.date}
                    />
                    <CardMedia height={400} width={400} image={GetPostImageUrlById(this.props.post.imageId)} component="img"/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.post.postDescription}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Fragment>
        );
    }
}

export default PostPane;


