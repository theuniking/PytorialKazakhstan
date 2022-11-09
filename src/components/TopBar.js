import {Link} from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import Masthead from "./Masthead";
import '../index.css'

function TopBar({currentPath, setIsShowing, isShowing}) {
    return (
        <div className={`ui inverted vertical center aligned segment ${currentPath==="/" ? "masthead" : ""}`}>
            <div className="ui inverted container secondary menu">
                <Link className={`item teal ${currentPath === "/" ? "active" : ""}`} to="/">
                    Үй
                </Link>
                <Link className={`item teal ${currentPath === "/tutorials" ? "active" : ""}`} to="/tutorials">
                    Туториалдар
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
                        Мәзір
                    </div>
                }
                <div className="right teal item">
                    <Link to="/login">
                        <button className="ui inverted button">
                            Кіру

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