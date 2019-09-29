import React, { Component, Fragment } from 'react';
import { Paper, Box, Grid, Typography } from '@material-ui/core';
import { GetPostImageUrlById } from '../../DataAccessLayer';
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';

class PostPane extends Component {
    render() {
        console.log(this.props.post)
        console.log(this.props.post.posterProfileIconId)

        return (
            <Fragment>
                <Paper>
                    <Box width={400}>
                        <Grid container direction="column">
                            <Grid item style={{padding:20}}>
                                <img height={50} width={50} src={GetProfileIconImageUrlById("thisdoggo.jpg")}/>
                                <Typography variant="caption">
                                    {this.props.post.posterName}
                                </Typography>
                            </Grid>
                            <Grid item style={{padding:20}}>
                                <Typography variant="h6">
                                    {this.props.post.date}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img height={400} width={400} src={GetPostImageUrlById(this.props.post.imageId)}/>
                            </Grid>
                            <Grid item style={{padding:20}}>
                                <Typography variant="h6">
                                    {this.props.post.hubtasticCount}
                                </Typography>
                            </Grid>
                            <Grid item style={{padding:20}}>
                                <Typography variant="h4">
                                    {this.props.post.postDescription}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Fragment>
        );
    }
}

export default PostPane;