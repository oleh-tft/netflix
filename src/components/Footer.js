import React from "react";
import './Footer.css'

export function Footer() {
    
    return (
        <footer>
            <div className ="titlefooter">Questions? Call&nbsp;&nbsp;&nbsp;000-800-919-1694</div>
        <div id="foot">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Cookies Preferences</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Only on Netflix</a></li>
            </ul>
        </div>
        </footer>
    );

}