import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React, { Component, Fragment } from "react";
import { CreateUnfollowUserRequest, CreateFollowUserRequest, CreateRejectFollowUserRequest, CreateAcceptFollowUserRequest } from '../../DataAccessLayer';

class FollowButtonVariant extends Component {



    unfollow = () => {
        CreateUnfollowUserRequest(this.props.loggedInUser.userId, this.props.targetUserId)
        .then(res => {
            this.afterClick();
        })
    }

    sendFollowRequest = () => {
        CreateFollowUserRequest(this.props.loggedInUser.userId, this.props.targetUserId)
        .then(res => {
            this.afterClick();
        })
    }
    
    rejectFollowRequest = () => {
        CreateRejectFollowUserRequest(this.props.loggedInUser.userId, this.props.targetUserId)
        .then(res => {
            this.afterClick();
        })
    }
    
    acceptFollowRequest = () => {
        CreateAcceptFollowUserRequest(this.props.loggedInUser.userId, this.props.targetUserId)
        .then(res => {
            this.afterClick();
        })
    }

    afterClick = () => {
        this.props.redirectToUserPage(this.props.targetUserId)
    }

    render() {
        let requestStatus = this.props.requestStatus;
        console.log("requestStatus:" + requestStatus)
        return (
            <Fragment>
                {requestStatus === "following" &&
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => this.unfollow()}>
                        Unfollow
                    </Button>
                }

                {requestStatus === "incomingpending" &&
                <Fragment>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => this.acceptFollowRequest()}>
                        Accept
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => this.rejectFollowRequest()}>
                        Decline
                    </Button>
                </Fragment>
                }

                {requestStatus === "outgoingpending" &&
                <Fragment>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => this.unfollow()}>
                        Withdraw request
                    </Button>
                </Fragment>
                }

                {requestStatus === "none" &&
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => this.sendFollowRequest()}>
                    Follow
                    </Button>
                }

            </Fragment>

        )
    }
}

export default FollowButtonVariant;