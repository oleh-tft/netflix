import React from 'react';
import './Login.css';
import { Footer } from "./Footer";
import { Logo } from './Logo';

export function Login() {
  return (
    <div id="login">
        <div className="bg"></div>
        <div className="faded"></div>
        <div className="bggrad"></div>

      <a href="/" className="login-logo">
        <Logo />
      </a>
            <div className="login-box">
        <form className="login-form">
          <h1>Sign In</h1>

          <div className="login-fields">
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit">Sign In</button>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Need help?</a>
          </div>

          <div className="login-signup">
            <p>New to Netflix? <a href="#">Sign up now</a>.</p>
            <p className="login-note">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </form>
      </div>
          <div className="Footer">
                      <Footer></Footer>
             </div>
    </div>
  );
}
