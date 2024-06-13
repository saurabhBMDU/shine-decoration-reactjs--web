import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
import { useDispatch } from 'react-redux';
import { register } from '../../../action/authaction';


function Register() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };


  return (
    <>
      <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '420px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-2">
              <label htmlFor="username" className="">Username</label>
              <div>
                <input
                  type="text"
                  className='w-100'
                  placeholder='name'
                  value={form.name}
                  name='name'
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="mobile" className="">Mobile Number</label>
              <div className="input-group">
                <input
                  type="text"
                  className='w-100'
                  value={form.mobile}
                  placeholder='mobile'
                  name='mobile'
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="">Password</label>
              <div>
                <input
                  type="password"
                  className='w-100'
                  placeholder='password'
                  value={form.password}
                  name='password'
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="">
              <Link to={'/forget'}>Forgot your password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2" onClick={(e) => handleSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
