import React from "react";
import { useTranslation } from 'react-i18next';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ButtonMain } from "./ButtonMain";

import './Landing.css';
import { FAQSection } from "./FAQ";
import Emailinput from "./Emailinput";

export function Landing() {

    const { t } = useTranslation();

    return (
        <div>
            <div id="landing">
                <div className="bg"></div>
                <div className="faded"></div>
                <Header></Header>
            </div>
            <main>
                <div style={{paddingTop: "10%", paddingBottom: "15%"}}>
                    <div style={{color: "white", textAlign: "center", marginTop: "40px" }} className="maintext-container">
                        <h1 style={{ marginBottom: "20px", fontSize: "4rem", fontWeight: "700" }}>{t('landing.text.1')}</h1>
                        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>{t('landing.text.2')}</p>
                        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>{t('landing.text.3')}</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                            <Emailinput></Emailinput>
                            <ButtonMain color="red" text={t('landing.button.1')}></ButtonMain>
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