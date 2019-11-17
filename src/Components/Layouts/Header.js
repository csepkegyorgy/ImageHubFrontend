import React, { Component, Fragment } from 'react';
import { AppBar, Grid, TextField, Box, IconButton, Avatar, Button, Toolbar } from "@material-ui/core"
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';
import { GetAppLogo } from '../../DataAccessLayer';
import SvgIcon from '@material-ui/core/SvgIcon';
import Settings from '@material-ui/icons/Settings';
import Comment from '@material-ui/icons/Comment'
import '../../index.css'


class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static" >
                    {/* <Toolbar>
                        <Button>
                            <img src={GetAppLogo()} onClick={this.props.redirectToUserFeed} />
                        </Button>
                    </Toolbar> */}
                    <Grid container align="center" style={{ height: 100 }} alignItems="center">
                        <Grid item xs={2}>
                            <Box height={100}>
                                <Button>
                                    <img src={GetProfileIconImageUrlById(this.props.loggedInUser.posterProfileIconId)} onClick={this.props.redirectToUserPage} />
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box height={100}>
                                <h1 className="title">ImageHub</h1>
                            </Box>
                        </Grid>
                        <Grid item sm>
                            {this.props.loggedInUser &&
                                <Fragment>
                                    <TextField variant="filled" />
                                </Fragment>
                            }
                        </Grid>
                        <Grid item sm>
                            {this.props.loggedInUser &&
                                <Fragment>
                                    <Box height={100}>
                                        <IconButton aria-label="settings">
                                            <Comment />
                                        </IconButton>
                                        <IconButton aria-label="settings">
                                            <Settings />
                                        </IconButton>
                                        <Button>
                                            <Avatar src={GetProfileIconImageUrlById(this.props.loggedInUser.posterProfileIconId)} onClick={this.props.redirectToUserPage} />

                                        </Button>
                                    </Box>
                                </Fragment>
                            }
                        </Grid>
                    </Grid>
                </AppBar>
            </Fragment>
        );
    }
}

export default Header;