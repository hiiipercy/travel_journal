import React from "react";

export default function Content(props){
    return(
        <div className="Content">
            <div className="images">
                <img className="imagess" src={props.imageUrl}/>
            </div>
            <div className="body--main">
                <div className="location"><img src="./loc.png"/>{props.location}</div>
            {props.title && <h3>{props.title}</h3>}
            <span className="date">{props.startDate}-{props.endDate}</span>
            <p className="descr">{props.description}</p>
            </div>
        </div>
    )
}