import React from "react";
import './Footer.css'
import { DropDownLanguage } from "./DropDownLanguage";

export function Footer() {
    
    return (
        <footer id="comp-footer">
            <div id="footer-wrapper">
                <div className="footer-contact">
                    <a href="#" target="_blank">Questions? Contact us.</a>
                </div>
                <div id="foot">
                    <ul>
                        <li><a href="#" target="_blank">FAQ</a></li>
                        <li><a href="#" target="_blank">Help Center</a></li>
                        <li><a href="#" target="_blank">Account</a></li>
                        <li><a href="#" target="_blank">Media Centre</a></li>
                        <li><a href="#" target="_blank">Investor Relations</a></li>
                        <li><a href="#" target="_blank">Jobs</a></li>
                        <li><a href="#" target="_blank">Ways to Watch</a></li>
                        <li><a href="#" target="_blank">Terms of Use</a></li>
                        <li><a href="#" target="_blank">Privacy</a></li>
                        <li><a href="#" target="_blank">Cookies Preferences</a></li>
                        <li><a href="#" target="_blank">Corporate Information</a></li>
                        <li><a href="#" target="_blank">Contact Us</a></li>
                        <li><a href="#" target="_blank">Speed Test</a></li>
                        <li><a href="#" target="_blank">Legal Notices</a></li>
                        <li><a href="#" target="_blank">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className="footer-lang">
                    <DropDownLanguage bgColor="rgba(50, 50, 50, 0.3)"/>
                </div>
                <div className="footer-copyright">Netflix Ukraine</div>
                <div className="footer-captcha">This page is protected by Google reCAPTCHA to ensure you're not a bot.</div>
            </div>
        </footer>
    );

}

