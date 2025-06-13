import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import './Landing.css';

export function Landing() {

    return (
        <div id="landing">
            <div className="bg"></div>
            <div className="faded"></div>
            <Header></Header>
            <Footer></Footer>
        </div>
    );

}