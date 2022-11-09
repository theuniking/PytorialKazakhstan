import React, {useEffect, useState} from "react";

function CodeInput({syntax}) {

    const list = syntax.code.split("\\n").map(
        item => {
            return (
                <div className="item">{item}</div>
            )
        }
    )

    return (
            <div>
                {syntax.explanation}
                <br/>
                <div className="ui teal message">

                    <div className="ui ordered list">
                        {list}
                    </div>
                </div>
            </div>
          )
}

export default CodeInput