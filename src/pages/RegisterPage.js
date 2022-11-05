import React from "react";
import LogIn from "../components/LogIn";
import {Link} from "react-router-dom";

function RegisterPage(){

    return (
        <div className="ui grid middle aligned" style={{height:"100vh",background:"#ececec",width:"100%",margin:"0 auto"}}>
            <div className="row">
                <div className="column" align="middle">


                    <div className="ui horizontal segment" style={{maxWidth:"600px",padding:"120px 60px"}}>
                                <form className="ui form">
                                    <h1 className="ui center aligned teal icon header">
                                        <i className="user circle icon"></i>
                                        Sign UP
                                        <div className="ui hidden divider"/>
                                    </h1>
                                    <div className="two fields">
                                        <div className="field">
                                            <input type="text" name="first-name" placeholder="First Name"/>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="last-name" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <input type="text" name="login" placeholder="Login"/>
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password" placeholder="Password"/>
                                    </div>
                                    <Link to="/login">Don't have and account?</Link>
                                    <div className="ui hidden divider"/>
                                    <button className="ui large fluid teal button">Sign Up</button>
                                </form>



                </div>
            </div>
        </div>
        </div>
    )
}
export default RegisterPage