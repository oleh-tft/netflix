import React from "react";
import { DropDown } from "./DropDown";
import './Header.css'
import { Logo } from "./Logo";
import { ButtonMain } from "./ButtonMain";

export function Header() {
    
    return (
        <div id="head">
            <Logo></Logo>
            <div className="d-flex align-items-center justify-content-between btncontainer">
                <DropDown img="language.png" text="Українська"  ></DropDown>
                <ButtonMain color="red" text="Sign In"></ButtonMain>
            </div>
        </div>
    );

}