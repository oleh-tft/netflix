import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ButtonMain } from "./ButtonMain";

import './Landing.css';
import { FAQSection } from "./FAQ";
import Emailinput from "./Emailinput";

export function Landing() {

    return (
        <div>
            <div id="landing">
                <div className="bg"></div>
                <div className="faded"></div>
                <Header></Header>
            </div>
            <main>
            <div style={{paddingTop: "15%", paddingBottom: "15%"}}>
                <div style={{color: "white", textAlign: "center", marginTop: "40px" }}>
                <h1 style={{ marginBottom: "20px" }}>
              Unlimited movies, TV shows and more
                 </h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
               Watch anywhere. Cancel anytime.
                 </p>
                 <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
                 Ready to watch? Enter your email to create or restart your membership.
                 </p>
                 <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
           <Emailinput></Emailinput>
                      <ButtonMain color="red" text="Get Started"></ButtonMain>
                 </div>
               </div>
            </div>
            <div className="FAQ">
                  <FAQSection></FAQSection>
            </div>
            </main>
            <div className="Footer">
                 <Footer></Footer>
            </div>
        </div>
    );

}