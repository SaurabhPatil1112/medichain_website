import React from "react";
import "../../App.css";
import { Button } from "../Button";

export default function SignUp() {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Get Started with us!!</h1>
        <div className="from-inputs">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="from-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="from-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
          />
        </div>
        <div className="from-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password2"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
          />
        </div>
        <button className="form-input-btn" type="Submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an Account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
}
