import React from "react";
import ListElements from "../components/ListElements";


function TutorialsPage({courses,setCurrentTopicIndex}){


    const list = courses.map(
        (course,index) => {
            return (
                <ListElements
                    key={index}
                    course={course}
                    index={index}
                    setCurrentTopicIndex={setCurrentTopicIndex}
                />

            )
        }
    )
    return (
        <div className="ui container">
            <h1 className="ui header">All courses</h1>
            <div className="ui link special three cards">
                {list}
            </div>

        </div>
)
}
export default TutorialsPage