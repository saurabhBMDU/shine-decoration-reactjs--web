import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
import { useDispatch } from 'react-redux';
import { forgotPassword, otpVerification } from '../../../action/authaction';



function Register() {
  const [form, setForm] = useState({})
  const [otpSent, setOtpSent] = useState(false);
  const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(forgotPassword(form, () => {
  //     console.log();
  //   }));
  // };
  // const handleOtpVerification = (e) => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpSent) {
      console.log('Verify OTP:', form.otp);
      setForm({});
      setOtpSent(false);
    } else {
      dispatch(forgotPassword(form, () => {
        setOtpSent(true);
        setForm({ mobile: '' });
      }));
    }
  };
  const handleOtp = (e) => {
    e.preventDefault();
    dispatch(otpVerification(form));
  }

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };


  return (
    <>
      <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '420px', borderRadius: '10px' }}>
          <h4 className="card-title text-center mb-4">OTP Verification</h4>
          {!otpSent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Mobile:</label>
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
              <button type="submit" className="btn btn-primary btn-block mt-2">Send OTP</button>
            </form>
          ) : (
            <form onSubmit={handleOtp}>
              <div className="form-group">
                <label>Enter OTP:</label>
                <input
                  type="text"
                  name='otp'
                  className="form-control"
                  value={form.otp}
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-2">Verify OTP</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
export default Register;
