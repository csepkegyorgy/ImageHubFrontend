import React , {Component} from "react";
import Header from "../Components/Header";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header isLoggedIn={false}></Header>
        )
    }
    
}
export default LoginPage