import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {

  const [selectedMethod, setSelectedMethod] = useState('');

  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString().substring(2, 6);
    setCaptcha(randomCaptcha);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (input === captcha) {
      alert('CAPTCHA verified successfully');
    } else {
      alert('Incorrect CAPTCHA');
    }
  };

  // Generate CAPTCHA when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Selected Payment Method: ${selectedMethod}`);
  // };
  return (
    <div>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-8">
            <div className='mb-3' style={{ border: "1px solid #F1F3F6" }}>
              <div className='row px-4'>
                <div className='p-2 col-md-10' >
                  <h6 style={{ fontSize: "15px", color: "#878787" }}>DELIVER ADDRESS</h6>
                  <span style={{ fontSize: "13px" }}><b>Aman</b> Office of Divisional Commissioner, Faridabad, Canal Rest House, Sector 16A, Faridabad, Haryana 121002</span>
                </div>
                <div className='p-2 py-3 col-md-2 d-flex justify-content-center'>
                  <button className='text ' style={{ border: "1px solid #F1F3F6", padding: "0px 25px", color: "#EDB70B" }}>CHANGE</button>
                </div>
              </div>
            </div>
            <div className='border'>
              <div className='p-2' style={{ background: "#EDB70B" }}>
                <span className='text-white'>PAYMENT OPTION</span>
              </div>
              <div className="p-3">
                <form onSubmit={handleSubmit}>
                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="upi" className="form-check-label">
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="UPI" height="20" /> UPI<br /><small>Pay by any UPI app</small>
                    </label>
                  </div>

                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="wallets"
                      name="paymentMethod"
                      value="wallets"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="wallets" className="form-check-label">
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="Wallets" height="20" /> Wallets
                    </label>
                  </div>

                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="card" className="form-check-label">
                      Credit / Debit / ATM Card<br /><small>Add and secure cards as per RBI guidelines</small>
                    </label>
                  </div>

                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="net-banking"
                      name="paymentMethod"
                      value="net-banking"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="net-banking" className="form-check-label">
                      Net Banking<br /><small>This instrument has low success, use UPI or cards for better experience</small>
                    </label>
                  </div>

                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="cod" className="form-check-label">
                      <div>
                        Cash on Delivery
                        <div className="mt-2">
                          <small className="text-warning border border-danger px-3 py-1">Due to handling costs, a nominal fee of ₹10 will be charged</small>
                          <div className="d-flex align-items-center mt-3">
                            <div className="input-group">
                              <span className="input-group-text text-success" id="captcha-image">
                                {captcha}
                                <i class="fa-solid fa-arrows-rotate text-info px-2" onClick={generateCaptcha}></i>
                              </span>
                              <input
                                type="text"
                                className="form-control px-2 py-2"
                                id="captcha"
                                value={input}
                                style={{ height: "38px" }}
                                onChange={handleInputChange}
                                placeholder="Enter CAPTCHA"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="form-check py-2">
                    <input
                      type="radio"
                      id="emi"
                      name="paymentMethod"
                      value="emi"
                      onChange={handleMethodChange}
                      className="form-check-input"
                    />
                    <label htmlFor="emi" className="form-check-label">
                      EMI (Easy Installments)<br /><small>Not applicable</small>
                    </label>
                  </div>

                  {selectedMethod && selectedMethod !== "cod" && (
                    <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>
                      Continue
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-details">
              <h5 className="product-title border-bottom py-2">Price Details</h5>
              <div className='py-1'>Price (1 item): <span className='float-end'>₹14,990</span></div>
              <div className='py-1'>Discount: <span className="text-success float-end"> ₹3,740</span></div>
              <div className='py-1 py-2'>Delivery Charges: <span className="text-success float-end">Free</span></div>
              <div className="total-amount py-1 border-bottom border-top py-3">Total Amount<span className="text-success float-end">₹11,250</span></div>
              <div className="save-amount py-1">You will save ₹3,740 on this order</div>
              {/* <button className="btn btn-warning w-100">PLACE ORDER</button> */}
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
export default Payment;
