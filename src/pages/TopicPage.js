import React from "react";
import SubtopicItem from "../components/SubtopicItem";

function TopicPage({courses, isShowing,setIsShowing,currentTopicIndex,setCurrentTopicIndex}) {

    const list = courses[currentTopicIndex].tutorials.map(
        tutorial => {
            return <SubtopicItem header={tutorial.name} text={tutorial.description}/>
        }
    )

    const menu = courses.map(
        (course,index) => {
            return <a className={`item teal ${currentTopicIndex === index ? "active" : ""}`} onClick={(e) => setCurrentTopicIndex(index)}>{course.topic}</a>
        }
    )


    return (
        <div>

            {
                isShowing === true &&
                <div className="ui visible sidebar vertical menu">
                    <div className="item" onClick={(e) => {
                        setIsShowing(false)

                    }}>
                        Close
                        <i className="angle left icon"></i>
                    </div>
                    {menu}
                </div>
            }
            <div className="ui container">

                {
                    currentTopicIndex > 0 &&
                    <div className="ui vertical animated teal left floated large button" tabIndex="0" onClick={(e) => setCurrentTopicIndex(currentTopicIndex - 1)}>
                        <div className="visible content">Previous</div>
                        <div className="hidden content">
                            <i className="left arrow icon"></i>
                        </div>
                    </div>
                }
                {
                    currentTopicIndex < courses.length - 1 &&
                    <div className="ui vertical animated teal right floated large button" tabIndex="0" onClick={(e) => setCurrentTopicIndex(currentTopicIndex + 1)}>
                        <div className="visible content">Next</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </div>
                }
                <h1 className="ui center aligned teal header">{courses[currentTopicIndex].topic}</h1>
                <p>

                    {courses[currentTopicIndex].description}
                </p>
                {list}
            </div>
        </div>
    )
}

export default TopicPage