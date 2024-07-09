import React, { useCallback, useState } from "react";
import { addNewAdress} from "../../action/authaction";
import { useDispatch } from "react-redux";

const MangaeAdress = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    district:"",
    pincode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlesubmit = useCallback((e)=>{
    e.preventDefault()
    const body = {
        name:formData.fullName,
        billing_address :(formData.addressLine1 +','+ formData.addressLine2),
        email:formData.email,
        mobile:formData.phoneNumber,
        country:formData.country,
        state:formData.state,
        city:formData.city,
        district:formData.district,
        pinCode:formData.pincode

    }
    console.log(body,"body ")
    dispatch(addNewAdress(body))
    

  })

  return (
    <div className="container-fluid">
      <div className="container">
        {/* Title */}
        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0">
            <a href="../../pages/admin/customers.html" className="text-muted">
              <i className="bi bi-arrow-left-square me-2"></i>
            </a>
            Add new Address
          </h2>
         
        </div>

        {/* Main content */}
        <div className="row">
          {/* Left side */}
          <div className="col-lg-8">
          <form onSubmit={handlesubmit}>   
            {/* Basic information */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="h6 mb-4">Address</h3>
                <div className="mb-3">
                  <label className="form-label">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Country</label>
                      <input
                        className="select2 form-control"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    
                      
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">State</label>
                      <input
                        className="select2 form-control select2-hidden-accessible"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input
                        className="select2 form-control select2-hidden-accessible"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                      />
                        
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">District</label>
                      <input
                        type="text"
                        className="form-control"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Pincode</label>
                      <input
                        type="number"
                        className="form-control"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hstack gap-3">
            <button className="btn btn-light btn-sm btn-icon-text">
              <i className="bi bi-x"></i> <span className="text">Cancel</span>
            </button>
            <button className="btn btn-primary btn-sm btn-icon-text">
              <i className="bi bi-save"></i> <span className="text">Save</span>
            </button>
          </div>
          </form>
          </div>
          {/* Right side */}
          <div className="col-lg-4">
            <div className="border border-primary w-full">
              <h4 className="text-secondary text-center">Address-1</h4>
              <p className="px-2 m-0" style={{ fontWeight: "500", color: "black" }}>
                Name: alex ehem
              </p>
              <p className="px-2 m-0" style={{ fontWeight: "500", color: "black" }}>
                Ph: 8884039399
              </p>
              <p className="px-2 m-0" style={{ fontWeight: "500", color: "black" }}>
                Email: abcd@gmail.com
              </p>
              <p className="m-0 px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus tenetur nostrum aliquam deserunt.
              </p>
              <span className="px-2" style={{ fontWeight: 500, color: "black" }}>Zip Code: 78654</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MangaeAdress;
