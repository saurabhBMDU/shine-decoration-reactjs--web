import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { useDispatch } from 'react-redux';
import { doRegister } from '../../../action/authaction';

function Register() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    password: '',
    repeatPassword: '',
    agreeTerms: false,
  });
  
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.mobile) newErrors.mobile = 'Mobile number is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password !== form.repeatPassword) newErrors.repeatPassword = 'Passwords do not match';
    if (!form.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      dispatch(doRegister(form, () => {
        navigate('/');
      }));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <img style={{ padding: '0px 4rem' }} src="/img/shinedecoration-logo.png" alt="" />
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas text-warning fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={form.name}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas text-warning fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Your Phone number</label>
                            <input
                              type="tel"
                              id="form3Example3c"
                              className="form-control"
                              name="mobile"
                              value={form.mobile}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas text-warning fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={form.password}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas text-warning fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="repeatPassword"
                              value={form.repeatPassword}
                              onChange={handleInputChange}
                              required
                            />
                            {errors.repeatPassword && <span className="error-text">{errors.repeatPassword}</span>}
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3c"
                            name="agreeTerms"
                            checked={form.agreeTerms}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <Link to="/termsandcondition">Terms of service</Link>
                          </label>
                          {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-warning btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://cdn.pixabay.com/photo/2023/06/01/16/43/man-8033909_640.png"
                        className="img-fluid"
                        alt="register"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
