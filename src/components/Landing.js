import React from "react";
import { useTranslation } from 'react-i18next';
import { HeaderLanding } from "./HeaderLanding";
import { Footer } from "./Footer";

import './Landing.css';
import { FAQSection } from "./FAQ";
import Emailinput from "./Emailinput";
import { ButtonSVG } from "./ButtonSVG";

export function Landing() {

    const { t } = useTranslation();
    const rightArrow = 'M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z'

    return (
        <div>
            <div id="landing">
                <div className="bg" style={{backgroundImage: `url('${t('landing.bg')}')`}}></div>
                <div className="faded"></div>
                <div className="bggrad"></div>
                <HeaderLanding></HeaderLanding>
            </div>
            <main style={{margin: "10rem 0"}}>
                <div style={{minHeight: "55rem", display: "flex", justifyContent: "center"}}>
                    <div style={{color: "white", textAlign: "center", marginTop: "40px" }} className="maintext-container">
                        <h1 style={{ marginBottom: "20px", fontSize: "3.5rem", fontWeight: "900" }}>{t('landing.text.1')}</h1>
                        <p style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "20px" }}>{t('landing.text.2')}</p>
                        <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{t('landing.text.3')}</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                            <Emailinput></Emailinput>
                            <ButtonSVG color="red" text={t('landing.button.1')} d={rightArrow} minWidth="35%"></ButtonSVG>
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