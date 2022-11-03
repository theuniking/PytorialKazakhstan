import React from "react";
import logo from '../components/pictures/pylogo.png';
import {Link} from "react-router-dom";

function ListElements({course,index,setCurrentTopicIndex}){

    const list = course.tutorials.map(
        (tutorial,index) => {
            return (
                <li>
                        {tutorial.name}

                </li>
            )
        }
    )

    return (
        <Link className="ui teal card" onClick={() => setCurrentTopicIndex(index)} to="/topic">


            <div className="image">
                <img src={logo}/>
            </div>
            <div className="content">
                <div className="header">
                    {course.topic}</div>

                <ol className="ui list">
                    {list}
                </ol>
            </div>
            <div className="ui extra content">
                <i className="save outline icon"></i>
                Mark as last
            </div>


        </Link>

    )
}
export default ListElements