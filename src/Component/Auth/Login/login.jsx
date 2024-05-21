import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './login.css'
import { Modal } from "react-bootstrap";


function Login() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      {/* <div className="login-container">
        <div className="overlay"></div>
        <div className="card shadow-lg p-4" style={{ width: "19rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Log In</h3>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>
              <div className="text-center mt-3">
                <Link to="#" className="text-primary">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <>
        <Modal
          show={show}
          onHide={(e) => handleClose(false)}
          backdrop="static"
        >
          <Modal.Header>
            <span>Withdraw Ammount</span>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    name="amount"

                    placeholder="Amount"
                    className="form-control"
                  />

                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-sm btn-danger"
            >
              Close
            </button>
            <button
              className="btn btn-sm btn-success"
            >
              Withdraw
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
export default Login;
