import React from "react";
import { DropDown } from "./DropDown";
import './Header.css'

export function Header() {
    
    return (
        <div id="head">
            <img src="netflixlogo.png"/>
            <DropDown img="language.png" text="Українська"></DropDown>
        </div>
    );

}