import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../../../action/authaction';
import { useDispatch } from 'react-redux';


function Login() {


  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(doLogin(form).then(res => {
  //     const token = localStorage.getItem('token');
  //     console.log(token, "t---");
  //     if (token) {
  //       navigate('/');
  //     }
  //   }));
  // };

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
      <div className="login-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '320px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label htmlFor="username" className="">Username</label>
              <input
                type="text"
                className="form-control ps-2"
                name="mobile"
                placeholder="Enter username"
                value={form.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="">Password</label>
              <input
                type="password"
                className="form-control ps-2"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleInputChange}
              />
            </div>
            <Link to={'/forgot'}>Forgot your password?</Link>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
