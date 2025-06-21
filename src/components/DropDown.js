import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import { useTranslation } from 'react-i18next';
import './DropDown.css'

export function DropDown(props) {

    const { i18n } = useTranslation();

    function setLanguage(lng) {
        i18n.changeLanguage(lng);
    };
    
    return (
        <div className='formwrapper'>
            <select name='langselect' className='comp' style={{minWidth: props.minWidth}} onChange={(e) => setLanguage(e.target.value)} value={i18n.language}>
                <option lang="en" label="English" value="en">English</option>
                <option lang="uk" label="Українська" value="uk">Українська</option>
            </select>
        </div>
        
        // <div className="comp">
        //     <img src={props.img}/>
        //     <span>{props.text}</span>
        //     <div className="arrow">\/</div>
        // </div>
    );

}