//imports 
import React, { Component } from 'react'
import { Paper, Tabs, AppBar, Tab } from '@material-ui/core'
import '../Styles/HeaderStyle.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = this.propstToState(props.isLoggedIn);

    }

    propstToState(isLoggedIn) {
        return {
            isLoggedIn: isLoggedIn
        };
    }

    renderLogo() {
        return (
            <React.Fragment>
                <span className="header col-md-2">
                    <img className="header-img" src="https://image.shutterstock.com/image-vector/frame-fingers-icon-vector-illustration-600w-408226861.jpg" ></img>
                </span>
                <span className="col-md-2">
                    <text className="title">ImageHub</text>
                </span>
            </React.Fragment>


        );

    }

    render() {
        return (
            <AppBar position="static">
                <div>
                    {this.renderLogo()}
                </div>

            </AppBar>
        );
    }

}


export default Header