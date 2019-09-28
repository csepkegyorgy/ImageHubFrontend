import React, { Component, Fragment } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Paper, Box } from '@material-ui/core';

class LoginPane extends Component {

    handleFacebookResponse = response => {
        this.props.handleUserLogin(response)
    }

    handleClickOnFacebookLoginButton = () => {
        console.log("clicked on facebook login")
    }

    render() {
        return (
            <Fragment>
                <Paper style={{padding:20}}>
                    <Box height={200}>
                        <FacebookLogin
                            appId="2508590412568616"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.handleClickOnFacebookLoginButton}
                            callback={this.handleFacebookResponse} />
                    </Box>
                </Paper>
            </Fragment>
        );
    }
}

export default LoginPane;