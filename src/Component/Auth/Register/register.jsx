import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { doRegister } from "../../../action/authaction";
import Modal from "../../modals/Modal";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
  });
  const [otpVerify,setOtpVerify] = useState(false)
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (form.mobile) {
      if (form.mobile.length !== 10) newErrors.mobile = "Mobile number is invalid";
    }
    if (form.password) {
      if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    }
    
    if (form.password !== form.repeatPassword) newErrors.repeatPassword = "Passwords do not match";

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!otpVerify){
      const formErrors = validateForm();
      if (Object.keys(formErrors).length === 0) {
        const removableProps = ["repeatPassword", "agreeTerms"];
        removableProps.forEach((prop) => delete form[prop]);
        setOtpVerify(true)
    }else {
      setErrors(formErrors);
      setShowModal(true);
    }
      
      // dispatch(
      //   doRegister(form, () => {
      //     navigate("/");
      //   })
      // );

      console.log(form, "success entry");
    } else {
    
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    

      
      <section className="main-container">
        <form className="form" onSubmit={handleSubmit}>
          <img src="/img/shinedecoration-logo.png" alt="" style={{ objectFit: "contain", height: "3rem", margin: "0" }} />
          {!otpVerify ? (
               <>
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
                   By continuing, you agree to Shine Decoration's <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy.</Link>
                 </p>
               </div>
               <button type="submit" className="submit">
                 Send OTP
               </button>
             </>
          )
          :(
            <div>
              
            </div>

          )}
       
        </form>

            

        <Modal show={showModal} handleClose={handleCloseModal}>
          
        <ul className="modal-ul list-group list-group-flush ">
          {Object.values(errors).map((error, index) => (
            <li className="list-group-item fs-5" key={index}>{error}</li>
          ))}
        </ul>
      </Modal>

      </section>
    </>
  );
}

export default Register;
