import React from "react";
import { useTranslation } from 'react-i18next';
import { DropDown } from "./DropDown";
import './Header.css'
import { Logo } from "./Logo";
import { ButtonMain } from "./ButtonMain";

export function Header() {

    const { t } = useTranslation();
    
    return (
        <div id="head">
            <Logo></Logo>
            <div className="d-flex align-items-center justify-content-between btncontainer">
                <DropDown minWidth='120px'></DropDown>
                <ButtonMain color="red" text={t('header.button.1')} minWidth='80px'></ButtonMain>
            </div>
        </div>
    );

}