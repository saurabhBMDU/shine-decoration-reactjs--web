import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <div className="login-container">
        <div className="overlay"></div>
        <div className='col-md-4 col-lg-6 container'>
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign In</h3>
              <form>
                <div className='row'>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="username">Username</label>
                      <div className='from-control'>
                        <input type="text" className="w-100 px-2" id="username" placeholder="Enter username" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="password">Email Address</label>
                      <div className='from-control'>
                        <input type="text" className="w-100 px-2" id="password" placeholder="Enter password" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="password">Mobile Number</label>
                      <div className='from-control'>
                        <input type="number" className="w-100 px-2" id="password" placeholder="Enter password" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="password">Gender</label>
                      <div className='from-control'>
                        <select id="cars" className='w-100' style={{ height: "30px" }}>
                          <option value="volvo">--Select gender--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="password">Password</label>
                      <div className='from-control'>
                        <input type="password" className="w-100 px-2" id="password" placeholder="Enter password" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <div className='mt-3'>
                      <label htmlFor="password">Confirm Password </label>
                      <div className='from-control'>
                        <input type="password" className="w-100 px-2" id="password" placeholder="Enter password" />
                      </div>
                    </div>
                  </div>
                  <div className="form-check mt-3">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>
                  <div className="text-center mt-3">
                    <Link to="#" className="text-primary">Forgot Password?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
