import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../action/authaction';


function Register() {
  const [form, setForm] = useState({})
  const [otpSent, setOtpSent] = useState(false);
  const dispatch = useDispatch();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(forgotPassword(form));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpSent) {
      console.log('Verify OTP:', form.otp);
      setForm({});
      setOtpSent(false);
    } else {
      dispatch(forgotPassword(form));
      setOtpSent(true);
      setForm({ mobile: '' });
    }
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };


  return (
    <>
      {/* <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '420px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-2">
              <label htmlFor="username" className="">Mobile</label>
              <div>
                <input
                  type="mobile"
                  className='w-100'
                  placeholder='mobile'
                  value={form.mobile}
                  name='mobile'
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4" onClick={(e) => handleSubmit(e)}>Send OTP</button>
          </form>
        </div>
      </div> */}

      <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '420px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            {!otpSent ? (
              <div className="mt-2">
                <label htmlFor="mobile">Mobile</label>
                <div>
                  <input
                    type="text"
                    className='w-100'
                    placeholder='mobile'
                    value={form.mobile || ''}
                    name='mobile'
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="mt-2">
                <label htmlFor="otp">OTP</label>
                <div>
                  <input
                    type="text"
                    className='w-100'
                    placeholder='Enter OTP'
                    value={form.otp}
                    name='otp'
                    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    required
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100 mt-4">
              {otpSent ? 'Verify OTP' : 'Send OTP'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
