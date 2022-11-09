import React from "react";
import CodeInput from "./CodeInput";
import NewLine from "./NewLine";

function SubtopicItem({header,text,syntax}) {


    return (
        <div className="ui raised segment">

            <h3 className="ui teal header">
                {header}
                </h3>
            <NewLine p={text}/>
            {
                syntax &&
                <CodeInput syntax={syntax}/>

            }

        </div>
    )
}

export default SubtopicItem