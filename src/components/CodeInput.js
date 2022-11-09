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
                <br/>
                <span style={{fontStyle:"italic"}}>

                {syntax.explanation}
                </span>
                <br/>
                <div className="ui black inverted segment">

                    <div className="ui inverted ordered list" >
                        {list}
                    </div>
                </div>
            </div>
          )
}

export default CodeInput