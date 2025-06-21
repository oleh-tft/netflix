import React from "react";
import { useTranslation } from 'react-i18next';
import { DropDownLanguage } from "./DropDownLanguage";
import './HeaderLanding.css'
import { Logo } from "./Logo";
import { ButtonMain } from "./ButtonMain";
import { useNavigate } from "react-router-dom";

export function HeaderLanding() {

    const navigate = useNavigate();
    const { t } = useTranslation();
    
    return (
        <div id="head">
            <Logo></Logo>
            <div className="d-flex align-items-center justify-content-between btncontainer">
                <DropDownLanguage minWidth='120px'></DropDownLanguage>
                <ButtonMain color="red" text={t('header.button.1')} minWidth='80px' onClick={() => navigate('login')}></ButtonMain>
            </div>
        </div>
    );

}