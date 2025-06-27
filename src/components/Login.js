import React, { useState } from 'react';
import './Login.css';
import { Footer } from "./Footer";
import { Logo } from './Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ButtonMain } from './ButtonMain';
import { Button } from 'react-bootstrap';

export function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 4 && value.length <= 60;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!validateEmailOrPhone(emailOrPhone)) {
      formErrors.emailOrPhone = 'Please enter a valid email or phone number.';
    }

    if (!validatePassword(password)) {
      formErrors.password = 'Your password must contain between 4 and 60 characters.';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      navigate('/browse');
    }
  };

  return (
    <div id="login">
      <div className="bg"></div>
      <div className="login-faded"></div>
      <div className="bggrad"></div>

      <NavLink to='/' className="login-logo">
        <Logo />
      </NavLink>
      <div className="login-box">
        <div className="login-form">
          <h1>Sign In</h1>

          <div className="login-fields">
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formEmailOrPhone">
                <FloatingLabel controlId="formEmailOrPhone" label="Email or phone number">
                  <Form.Control required type="text" placeholder="" value={emailOrPhone}
                    onChange={(e) => {
                      setEmailOrPhone(e.target.value);
                      validateEmailOrPhone(e.target.value);
                    }}
                    isInvalid={!!errors.emailOrPhone} />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.emailOrPhone && (
                    <>
                      <img src="invalid.svg"/>
                      {errors.emailOrPhone}
                    </>
                  )}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <FloatingLabel controlId="formPassword" label="Password" className='login-mb-1'>
                  <Form.Control required type="password" placeholder="" value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                    isInvalid={!!errors.password} />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.password && (
                    <>
                      <img src="invalid.svg"/>
                      {errors.password}
                    </>
                  )}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">Sign In</Button>
              <div className='d-flex align-items-center'>
                <input type="checkbox" /> <span>Remember me</span>
              </div>
            </Form>
          </div>

          <div className="login-signup login-mb-1">
            <p>New to Netflix? <a href="#">Sign up now</a>.</p>
            <p className="login-note">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}