import React from "react";
import './DropDown.css'

export function DropDown(props) {
    
    return (
        <div className="comp">
            <img src={props.img}/>
            <span>{props.text}</span>
            <div className="arrow">\/</div>
        </div>
    );

}