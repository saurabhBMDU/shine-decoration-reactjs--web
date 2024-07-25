import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { doRegister } from "../../../action/authaction";
import Modal from "../../modals/Modal";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
  });
  const [otpVerify, setOtpVerify] = useState(true);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpRef = useRef([]);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.mobile) newErrors.mobile = "Mobile number is required";
    else if (form.mobile.length !== 10) newErrors.mobile = "Mobile number is invalid";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (form.password !== form.repeatPassword) newErrors.repeatPassword = "Passwords do not match";

    if (!form.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) && value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        otpRef.current[index + 1].focus();
      }
    } else if (e.keyCode === 8 && index > 0) {
      console.log('bakspace')
      otpRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerify) {
      const formErrors = validateForm();
      if (Object.keys(formErrors).length === 0) {
        const removableProps = ["repeatPassword", "agreeTerms"];
        removableProps.forEach((prop) => delete form[prop]);
        setOtpVerify(true);
      } else {
        setErrors(formErrors);
        setShowModal(true);
      }
    } else {
      // Handle OTP verification logic here
      console.log("OTP:", otp.join(""));
      // After successful OTP verification, proceed with registration
      // dispatch(doRegister(form, () => {
      //   navigate("/");
      // }));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="main-container">
        {!otpVerify ? (
          <form className="form" onSubmit={handleSubmit}>
            <img
              src="/img/shinedecoration-logo.png"
              alt=""
              style={{ objectFit: "contain", height: "3rem", margin: "0" }}
            />
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
              <input
                required
                id="name"
                className="input"
                name="name"
                onChange={handleInputChange}
                value={form.name}
                type="text"
                placeholder=" "
              />
              <label htmlFor="name" className="placeholder">
                Full name
              </label>
            </div>
            <div className="input-container ic2">
              <input
                required
                id="mobile"
                className="input"
                type="tel"
                name="mobile"
                placeholder=" "
                onChange={handleInputChange}
                value={form.mobile}
              />
              <label htmlFor="mobile" className="placeholder">
                Mobile number
              </label>
            </div>
            <div className="input-container ic2">
              <input
                required
                id="password"
                className="input"
                name="password"
                type="password"
                onChange={handleInputChange}
                value={form.password}
                placeholder=" "
              />
              <label htmlFor="password" className="placeholder">
                Password
              </label>
            </div>
            <div className="input-container ic2">
              <input
                required
                id="repeatPassword"
                className="input"
                name="repeatPassword"
                type="password"
                onChange={handleInputChange}
                value={form.repeatPassword}
                placeholder=" "
              />
              <label htmlFor="repeatPassword" className="placeholder">
                Confirm Password
              </label>
            </div>
            <div className="input-check">
              <input
                required
                className="checkbox"
                name="agreeTerms"
                type="checkbox"
                onChange={handleInputChange}
                value={form.agreeTerms}
                placeholder=" "
              />
              <p>
                By continuing, you agree to Shine Decoration's{" "}
                <Link to="#">Terms of Service</Link> and{" "}
                <Link to="#">Privacy Policy.</Link>
              </p>
            </div>
            <button type="submit" className="submit">
              Send OTP
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="form d-flex flex-column justify-content-center align-items-center gap-2"
          >
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
              <label className="text-warning">Enter OTP</label>
              <div className="d-flex gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    style={{ width: "40px" }}
                    value={digit}
                    ref={(el) => (otpRef.current[index] = el)}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength={1}
                    type="text"
                  />
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-warning ">
              Submit
            </button>
          </form>
        )}

        <Modal show={showModal} handleClose={handleCloseModal}>
          <ul className="modal-ul list-group list-group-flush">
            {Object.values(errors).map((error, index) => (
              <li className="list-group-item fs-5" key={index}>
                {error}
              </li>
            ))}
          </ul>
        </Modal>
      </section>
    </>
  );
}

export default Register;
