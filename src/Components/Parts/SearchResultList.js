import React, { Component, Fragment } from "react";
import { Grid, Box, Avatar, Typography, Paper, Button } from "@material-ui/core";
import { GetProfileIconImageUrlById } from '../../DataAccessLayer';


class SearchResultList extends Component {
    render() {
        return(
            <Fragment>
                <Grid container direction="column" spacing={0} 
                // style={{verticalAlign: 'center'
                //     // minHeight: '100vh'
                // }}
                //  direction={this.props.direction} 
                 alignItems="center" justify="center">
                    {this.props.users.map(user => {
                        return(
                            <Button onClick={() => {
                                this.props.redirectToUserPage(user.userId);
                                // this.props.escFunction();
                            }}>
                            <Grid container direction="row" style={{margin:10}} key={user.userId}>
                               <Grid item sm={4}>
                                    <Box margin={5}>
                                        <Avatar src={GetProfileIconImageUrlById(user.profileImageId)} />
                                    </Box>
                                </Grid>
                                <Grid item sm={8}>
                                    <Box margin={5}>
                                        <Paper>
                                            <Box margin={1}>
                                            <Typography variant="overline" display="block">{user.name}</Typography>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                            </Button>  
                        );
                    })}
                </Grid>
            </Fragment>
        );
    }
}

export default SearchResultList;