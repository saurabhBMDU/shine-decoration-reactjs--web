import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import { useDispatch } from 'react-redux';
import { doRegister } from '../../../action/authaction';


function Register() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doRegister(form, () => {
      navigate('/')
    }));
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };


  return (
    <>
     <section className="vh-100" style={{ backgroundColor: '#eee' }}>
    
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
      <img style={{padding:'0px 4rem'}} src="/img/shinedecoration-logo.png" alt="" />
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="tel"
                            id="form3Example3c"
                            className="form-control"
                            name="mobile"
                            value={form.mobile}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Phone number</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="repeatPassword"
                            value={form.repeatPassword}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value={form.agreeTerms}
                          id="form2Example3c"
                          name="agreeTerms"
                          checked={form.agreeTerms}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <Link to="/termsandcondition">Terms of service</Link>
                        </label>
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
