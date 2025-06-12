import React from "react";
import { DropDown } from "./DropDown";
import './Header.css'
import { Logo } from "./Logo";
import { ButtonRed } from "./ButtonRed";

export function Header() {
    
    return (
        <div id="head">
            <Logo></Logo>
            <div className="d-flex align-items-center">
                <DropDown img="language.png" text="Українська"></DropDown>
                <ButtonRed text="Sign In"></ButtonRed>
            </div>
        </div>
    );

}