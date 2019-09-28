import React, { Component, Fragment } from 'react';
import { AppBar, Grid, TextField, Box } from "@material-ui/core"
import SvgIcon from '@material-ui/core/SvgIcon';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Grid container align="center" style={{height:100}} alignItems="center">
                        <Grid item sm>
                            <Box border={1} height={100}>
                                <SvgIcon>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </SvgIcon>
                            </Box>
                        </Grid>
                        <Grid item sm>
                            {this.props.loggedInUser &&
                                <Fragment>
                                    <Box border={1} height={100}>
                                        <TextField variant="filled">

                                        </TextField>
                                    </Box>
                                </Fragment>
                            }
                        </Grid>
                        <Grid item sm>
                            {this.props.loggedInUser &&
                                <Fragment>
                                    <Box border={1} height={100}>
                                        <SvgIcon>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </SvgIcon>
                                        <SvgIcon>
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </SvgIcon>
                                        <SvgIcon>
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