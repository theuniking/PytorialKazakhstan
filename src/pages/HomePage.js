import React, {useEffect, useState} from "react";
import "../index.css"
import logo from '../components/pictures/python.jpg';

function HomePage() {




    return (
        <div className="ui center aligned container">

                <div style={{marginTop: "200px"}}></div>

                <div className="ui three statistics">

                        <div className="statistic">
                                <div className="text value">
                                        Three<br/>
                                        Thousand
                                </div>
                                <div className="label">
                                        Signups
                                </div>
                        </div>
                        <div className="statistic">
                                <div className="value">
                                        <i className="python icon"></i> 5
                                </div>
                                <div className="label">
                                        Icons
                                </div>
                        </div>
                        <div className="statistic">
                                <div className="value">
                                        <img src={logo} className="ui circular inline image"/>
                                                42
                                </div>
                                <div className="label">
                                        Team Members
                                </div>
                        </div>
                </div>


        </div>
    )
}

export default HomePage