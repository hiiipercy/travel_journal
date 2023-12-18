import React from "react";

export default function Content(props){
    return(
        <div className="Content">
            <div className="images">
                <img src={props.imageUrl} />
            </div>
            <div className="info">
                <p style={{color:"green", fontWeight:700}}>{props.title}</p>
                <p><i class='bx bxs-location-plus'></i>{props.location}</p>
                <p style={{fontWeight:300, fontSize:12}}>{props.startDate} - {props.endDate}</p>
                <p style={{fontWeight:300, fontSize:12}}>{props.description}</p>
            </div>
        </div>
    )
}