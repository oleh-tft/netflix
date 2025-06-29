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
  let ers = {...errors}

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 4 && value.length <= 60;
  };

  const validate = (name) => {

    if (name === 'email') {
      if (!validateEmailOrPhone(emailOrPhone)) {
        ers.emailOrPhone = 'Please enter a valid email or phone number.';
      } else {
        delete ers.emailOrPhone
      }
    } else if (name === 'password') {
      if (!validatePassword(password)) {
        ers.password = 'Your password must contain between 4 and 60 characters.';
      } else {
        delete ers.password
      }
    }
    setErrors(ers);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate('email');
    validate('password');

    if (Object.keys(ers).length === 0) {
      navigate('/browse');
    }
  };

  return (
    <div id="login">
      <div className="login-bg"></div>
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
                      validate('email');
                    }}
                    isInvalid={!!errors.emailOrPhone} />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.emailOrPhone && (
                    <>
                      <img src="invalid.svg" />
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
                      validate('password');
                    }}
                    isInvalid={!!errors.password} />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors.password && (
                    <>
                      <img src="invalid.svg" />
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