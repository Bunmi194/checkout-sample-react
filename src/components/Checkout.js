import React from "react";
import {Link} from "react-router-dom";

function Checkout(props) {
    return(
        <>
            <div>
                <button type="button" id={props.id} onClick={props.checkout}>
                {props.name}</button>
            </div>
        </>
    )
}

export default Checkout