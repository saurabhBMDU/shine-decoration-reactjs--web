import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../../../action/authaction';
import { useDispatch } from 'react-redux';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doLogin(form, () => {
      const token = localStorage.getItem('token');
      console.log(token, "t---");
      if (token) {
        navigate('/');
      }
    }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section">
            <div className="brand-wrapper">
              <h1 className='hh'>
                <img src="/img/shinedecoration-logo.png" alt='logo' />
              </h1>
            </div>
            <div className="intro-content-wrapper">
              <h1 className="intro-title hh">Welcome to Shine Decoration!</h1>
              <p className="intro-text">
                Welcome back! Login to access your personalized wishlist and rediscover a world of handcrafted beauty, waiting just for you. Explore the latest creations from our artisans and continue crafting your own unique collection.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    id="mobile" 
                    className="form-control" 
                    placeholder="phone number" 
                    value={form.mobile} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={form.password} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <button type='submit' className='badge bg-warning px-4 py-2 fs-5'>Login</button>
                  <a href="#!" className="forgot-password-link">Forgot Password?</a>
                </div>
                <div className='text-wrap' style={{ width: '120%' }}>
                  By continuing, you agree to Shine Decoration's <Link to={'/termsandcondition'}>Terms of Service</Link> and <Link to={'/Privacy'}>Privacy Policy.</Link>
                </div>
              </form>
              <p className="login-wrapper-footer-text mt-2">
                Need an account? <a href="#!" className="text-reset">Signup here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
