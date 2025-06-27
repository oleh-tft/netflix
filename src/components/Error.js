import React from "react";
import './Error.css';
import { Logo } from "./Logo";
import { ButtonMain } from "./ButtonMain";
import { useNavigate } from 'react-router-dom';


export function Error() {
    const navigate = useNavigate();

    return (
        <div id="error">
            <div className="logocentered">
                <Logo></Logo>
            </div>
            <div className="bgerror"></div>
            <div className="fadederror"></div>

            <div className="header"></div>
            <div className="textblock">

                <div className="titleerror">Lost your way?</div>
                <div className="texterror">Sorry, we can't find that page. You'll find lots to explore on the home page. </div>
                <ButtonMain
                    // bg ="white"
                    // color="black"
                    // padding="10px 20px"
                    text="Netflix Home" onClick={() => navigate('/')}></ButtonMain>

                <div className="codeerror">
                    <div className="stick"></div>
                    <div className="codetext">Error Code</div>
                    <div className="codetext" style={{ fontWeight: 700 }}>NSES-404</div>
                </div>
            </div>
        </div>
    );

}