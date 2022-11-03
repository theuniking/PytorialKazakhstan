import React from "react";

function SubtopicItem({header,text}) {
    return (
        <div>
            <div className="ui hidden divider"></div>

            <h3 className="ui dividing header">
                {header}
                </h3>
                    <p>{text}</p>

        </div>
    )
}

export default SubtopicItem