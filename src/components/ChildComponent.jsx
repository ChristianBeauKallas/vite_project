import { useState } from "react";

export default function ChildComponent(props){

    return(
        <div>
            <p>{props.message}</p>
            <p>{props.believe}</p>
        </div>
    )
}

