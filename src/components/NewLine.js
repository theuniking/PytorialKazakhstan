import React from "react";

function NewLine({p}) {
    const list = p.split("\\n").map(
        item => {
            return <span>{item}<br/></span>
        }
    )
    return list

}

export default NewLine