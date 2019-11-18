import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React, { Component, Fragment } from "react";


class FollowButtonVariant extends Component {


    render() {
        return (
            <Fragment>
                {this.props.requestStatus === "followed" &&
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}>
                        Unfollow
                    </Button>
                }

                {
                    this.props.requestStatus === "pending" &&
                    <Fragment>

                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon />}>
                            Accept
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon />}>
                            Decline
                        </Button>
                    </Fragment>
                }

                {this.props.requestStatus === "none" &&
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}>
                    Follow
                    </Button>
                }

            </Fragment>

        )
    }
}

export default FollowButtonVariant;