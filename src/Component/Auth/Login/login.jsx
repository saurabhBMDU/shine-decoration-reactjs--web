import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
  return (
    <>
      <div className="login-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '320px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Login</h3>
          <form>
            <div className="mt-3">
              <label htmlFor="username" className="">Username</label>
              <input type="text" className="form-control ps-2" id="username" placeholder="Enter username" />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="">Password</label>
              <input type="password" className="form-control ps-2" id="password" placeholder="Enter password" />
            </div>
            <Link to={'/forget'}>Forgot your password?</Link>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
