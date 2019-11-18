import React, { Component, Fragment } from 'react';
import { AppBar, Grid, TextField, Box, IconButton, Avatar, Button, Toolbar, Popover, Typography } from "@material-ui/core"
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';
import { GetAppLogoUrl } from '../../DataAccessLayer';
import SvgIcon from '@material-ui/core/SvgIcon';
import Settings from '@material-ui/icons/Settings';
import Comment from '@material-ui/icons/Comment'
import '../../index.css'
import SearchResultList from '../Parts/SearchResultList';
import { SearchUsersByPartialUserName } from '../../DataAccessLayer';


class Header extends Component {
    state = {
        isPopoverOpen: false,
        searchResults: null
    }

    onSearchBarChange(e) {
        let newValue = e.target.value;
        if (newValue.length > 0){
            this.setState({ isPopoverOpen: true });
            SearchUsersByPartialUserName(newValue)
            .then(res => {
                if (res.success === true)
                {
                    this.setState({searchResults: res.users})
                }
                else {
                    console.log(res.errors);
                }
            })
        }
    }


    render() {
        return (
            <Fragment>
                <AppBar position="static" >
                    <Grid container align="center" style={{ height: 100 }} alignItems="center">
                        <Grid item xs={2}>
                            <Box height={100}>
                                <img height={80} src={GetAppLogoUrl()} onClick={this.props.redirectToUserFeed} />
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
                                    <TextField variant="filled" onChange={(e) => this.onSearchBarChange(e)} />

                                    <Popover
                                        open={this.state.isPopoverOpen}
                                        anchorEl={true}
                                        anchorPosition={{ top: 0, left: 400 }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                          }}
                                          transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                          }}>
                                                { console.log("popover is opened: " + this.state.isPopoverOpen) }
                                                {this.state.searchResults && <SearchResultList redirectToUserPage={this.props.redirectToUserPage} users={this.state.searchResults}></SearchResultList>}                                                
                                                < Typography > The content of the Popover.</Typography>
                                    </Popover>
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
                                        <Avatar src={GetProfileIconImageUrlById(this.props.loggedInUser.profileIconId)} onClick={() => this.props.redirectToUserPage(this.props.loggedInUser.userId)} />
                                    </Button>
                                </Box>
                            </Fragment>
                        }
                    </Grid>
                    </Grid>
                </AppBar>
            </Fragment >
        );
    }
}

export default Header;