import React, { Component, Fragment } from 'react';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { GetPostImageUrlById } from '../../DataAccessLayer';
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';
import { GetUserFeed } from '../../DataAccessLayer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

class PostPane extends Component {

    getDateStringForPost = () => {
        const dayInMillisecs = 86400000;
        const hourInMillisecs = 3600000;
        const minuteInMillisecs = 60000;

        let postDate = new Date(this.props.post.date)
        let dateDiff = new Date() - postDate
        let dateString = "Just now";
        if (dateDiff > dayInMillisecs){
            dateString = postDate.toLocaleDateString()
        }
        else if (dateDiff > hourInMillisecs) {
            let hours = Math.round(dateDiff / hourInMillisecs)
            if (hours === 1) {
                dateString =  "1 hour ago";
            }
            else {
                dateString = hours + " hours ago"
            }
        }
        else if (dateDiff > minuteInMillisecs) {
            let minutes = Math.round(dateDiff / minuteInMillisecs)
            if (minutes === 1) {
                dateString =  "1 minute ago";
            }
            else {
                dateString = minutes + " minutes ago"
            }
        }

        return dateString;
    }

    render() {
        let dateString = this.getDateStringForPost();
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
                        title={<Button 
                             onClick= {GetUserFeed(this.props.post.posterid, 15, null)}
                            >
                            {/* John Doe */}
                            {this.props.post.posterName}
                        </Button>}
                        subheader={dateString}
                    />
                    <CardMedia height={400} width={400} 
                    //image="https://picsum.photos/id/170/400/400"
                    image={GetPostImageUrlById(this.props.post.imageId)} 
                    component="img"
                    />
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


