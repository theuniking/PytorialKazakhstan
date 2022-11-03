import {Link} from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import Masthead from "./Masthead";
import '../index.css'

function TopBar({currentPath, setIsShowing, isShowing}) {
    return (
        <div className={`ui inverted vertical center aligned segment ${currentPath==="/" ? "masthead" : ""}`}>
            <div className="ui inverted container secondary menu">
                <Link className={`item ${currentPath === "/" ? "teal active" : ""}`} to="/">
                    Home
                </Link>
                <Link className={`item ${currentPath === "/tutorials" ? "teal active" : ""}`} to="/tutorials">
                    Tutorials
                </Link>
                {
                    currentPath === "/topic" &&
                    <div className={`item ${isShowing ? "active" : ""}`} onClick={(e) => {
                        setIsShowing(!isShowing)
                    }
                    }>
                        {
                            isShowing === false &&
                            <i className="bars icon"></i>
                        }
                        Menu
                    </div>
                }
                <div className="right item">
                    <Link to="/login">
                        <button className="ui teal inverted large button">
                            Log in

                        </button>
                    </Link>
                </div>

            </div>
            {currentPath === "/" &&
                <Masthead/>}

        </div>
    )
}

export default TopBar