import React, { Component, Fragment } from 'react';
import { AppBar, Grid, TextField, Box } from "@material-ui/core"
import SvgIcon from '@material-ui/core/SvgIcon';
import '../../index.css'


class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Grid container align="center" style={{height:100}} alignItems="center">
                        <Grid item sm>
                            <Box height={100}>
                                <SvgIcon onClick={this.props.redirectToUserFeed}>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </SvgIcon>
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
                                        <SvgIcon>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </SvgIcon>
                                        <SvgIcon>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </SvgIcon>
                                        <SvgIcon onClick={this.props.redirectToUserPage}>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </SvgIcon>
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