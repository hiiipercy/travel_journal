import React from "react";

export default function Header(props){
    
    return(
        <div className="head">
            <h1><i class='bx bxs-plane-alt'></i><span>T</span>ravel.</h1>
            <label class="switch">
                <input type="checkbox"
                checked={props.dark}
                onChange={props.mode}/>
                <span class="slider round"></span>
            </label>
        </div>
    )
}