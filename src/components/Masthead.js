import React from "react";
import {Link} from "react-router-dom";

function Masthead() {
    return (
        <div className="ui container">

            <div style={{marginTop:"15vh"}}/>

            <h1 className="ui inverted  center aligned icon header">
                <i className="python icon"></i>
            </h1>
            <div className="ui hidden divider"/>
            <Link to="/tutorials">

                <div className="ui large inverted button">Туториалдарға бару<i className="right caret icon"></i></div>
            </Link>
        </div>
    )
}

export default Masthead