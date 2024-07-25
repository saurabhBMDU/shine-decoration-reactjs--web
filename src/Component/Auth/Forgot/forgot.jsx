import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword, otpVerification } from '../../../action/authaction';
import './register.css';
import { LuPhone } from "react-icons/lu";

const Register = () => {
  const [form, setForm] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const dispatch = useDispatch();
  const otpRefs = useRef([]);

  useEffect(() => {
    if (otpSent) {
      otpRefs.current[0]?.focus();
    }
  }, [otpSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpSent) {
      const otpValue = otp.join('');
      dispatch(otpVerification({ ...form, otp: otpValue }, () => {
        setForm({});
        setOtpSent(false);
        setOtp(new Array(6).fill(''));
      }));
    } else {
      dispatch(forgotPassword(form, () => {
        setOtpSent(true);
        setForm({ mobile: '' });
      }));
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) && value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        otpRefs.current[index + 1].focus();
      }
    } else if (e.keyCode === 8 && index > 0) {
      
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      otpRefs.current[index - 1].focus();
    }
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '420px', borderRadius: '10px' }}>
        <div className="text-center">
          <h3><i className="fa fa-lock fa-4x"></i></h3>
          <h2 className="text-center mb-4">Forgot Password?</h2>
          <p>You can reset your password here.</p>
          <div className="panel-body">
            {!otpSent ? (
              <form onSubmit={handleSubmit} id="register-form"  autoComplete="off" className="d-flex flex-column justify-content-center align-items-center gap-2">
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon mx-3"><LuPhone size={24} color='black'/></span>
                    <input
                      id="mobile"
                      name="mobile"
                      placeholder="mobile number"
                      className="form-control"
                      type="tel"
                      value={form.mobile || ''}
                      onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-lg btn-warning btn-block">Send OTP</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} id="otp-form"  autoComplete="off" className="d-flex flex-column justify-content-center align-items-center gap-0 otp-form">
                <div className="title text-black">
                  <h3>OTP VERIFICATION</h3>
                  <p className="text-primary">An OTP has been sent to your Mobile Number</p>
                  <p className="msg">Please enter OTP to verify</p>
                </div>
                <div className="otp-input-fields">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className={`otp__digit otp__field__${index + 1}`}
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      ref={(el) => otpRefs.current[index] = el}
                      maxLength={1}
                      onKeyDown={(e) => e.key === 'Backspace' && handleOtpChange(e, index)}
                    />
                  ))}
                </div>
                <div className="result"><p id="_otp" className="_notok"></p></div>
                <button type="submit" className="btn btn-lg btn-warning btn-block mt-2">Verify OTP</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
