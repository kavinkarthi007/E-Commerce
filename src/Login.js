import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import React, { useState } from "react";
export default function Login() {
    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
            
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Don't Have an Account?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>USER NAME</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter UserName"
                />
              </div>
              <div className="form-group mt-3">
                <label>PASSWORD</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <Link to={"/main"}>
                <button id='buttt' type="submit" className="btn btn-primary">
                  Submit
                </button>
                </Link>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
         
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already have an Account?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>USER_NAME</label>
              <input
                type=""
                className="form-control mt-1"
                placeholder="Enter UserName"
              />
            </div>
            <div className="form-group mt-3">
              <label>EMAIL_ID</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email ID"
              />
            </div>
            <div className="form-group mt-3">
              <label>ADDRESS</label>
              <input
                type="address"
                className="form-control"
                placeholder="Enter Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>PHONE NUMBER</label>
              <input
                type="tel"
                className="form-control mt-1"
                placeholder="Enter PhoneNumber"
              />
            </div>
            <div className="form-group mt-3">
              <label>PASSWORD</label>
              <input
                type="id"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group mt-3">
              <label>RE-ENTER PASSWORD</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Your Password"
              />
            </div>
           
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Create account
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
