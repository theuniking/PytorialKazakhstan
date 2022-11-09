import React from "react";
import CodeInput from "./CodeInput";

function SubtopicItem({header,text,syntax}) {

    const list = text.split("\\n").map(
        item => {
            return <p>{item}</p>
        }
    )

    return (
        <div>
            <div className="ui hidden divider"></div>

            <h3 className="ui dividing header">
                {header}
                </h3>
            {list}
            {
                syntax &&
                <CodeInput syntax={syntax}/>

            }

        </div>
    )
}

export default SubtopicItem