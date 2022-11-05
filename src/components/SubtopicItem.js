import React from "react";
import CodeInput from "./CodeInput";

function SubtopicItem({header,text,syntax}) {
    return (
        <div>
            <div className="ui hidden divider"></div>

            <h3 className="ui dividing header">
                {header}
                </h3>
                    <p>{text}</p>
            {
                syntax &&
                <CodeInput syntax={syntax}/>

            }

        </div>
    )
}

export default SubtopicItem