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
    constructor(props){
        super(props)        
        // this.escFunction = this.escFunction.bind(this);
    }
    state = {
        isPopoverOpen: false,
        searchResults: null,
    }
    // escFunction(){
    //         this.onSearchBarChange("");
    //         this.setState({ isPopoverOpen: false });
    //   }
    //   componentDidMount(){
    //     document.addEventListener("keydown", this.escFunction, false);
    //   }
    //   componentWillUnmount(){
    //     document.removeEventListener("keydown", this.escFunction, false);
    //   }

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

    closePopover() {        
        this.setState({ isPopoverOpen: false});
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
                                    <Fragment>
                                        <div>
                                    <TextField variant="filled" margin="normal" label="Search..." style={{border: '1px solid black', borderRadius: '4px', backgroundColor: 'white'}} onChange={(e) => this.onSearchBarChange(e)} ></TextField>
                                        </div>
                                    </Fragment>
                                    <Popover                                    
                                        open={this.state.isPopoverOpen}
                                        anchorEl={true}    
                                          >
                                                { console.log("popover is opened: " + this.state.isPopoverOpen) }
                                                {this.state.searchResults &&
                                                <div>
                                                    {/* <Button onClick={this.togglePopoverState()}>X</Button> */}
                                                    <SearchResultList redirectToUserPage={this.props.redirectToUserPage} users={this.state.searchResults} 
                                                    // escFunction={this.escFunction}
                                                    > </SearchResultList>
                                                </div> }
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