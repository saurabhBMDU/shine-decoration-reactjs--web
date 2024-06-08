import React from 'react';
import './viewcart.css';
import { Link } from 'react-router-dom';

export default function viewcart() {
  return (
    <div>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-8">
            <div style={{ border: "1px solid #F1F3F6" }}>
              <div className="mb-3">
                <div className="row px-4">
                  <div className="col-md-2 d-flex justify-content-center">
                    <div className='d-flex justify-content-center' style={{ position: "relative" }}>
                      <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/shopsy-jacket/s/y/g/m-o-black-fluffy-fullsleeve-jacket-fashlook-men-original-imagsjntvhgfttfv.jpeg?q=90" className="d-flex justify-content-center" alt="Product" style={{ height: "130px", position: "absolute", top: "40px" }} />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h6 className="card-title">BenQ GW2490T 24 inch Full HD LED Backlit IPS Panel with...</h6>
                      <p className="card-text">Seller: MTAILMODEECOM</p>
                      <p className="card-text"><small className="text-muted">Response Time: 5 ms, 100 Hz Refresh Rate</small></p>
                      <p className="card-text"><span className="text-decoration-line-through">₹14,990</span> <span className="fw-bold px-2">₹11,250</span> <span className="discount">24% Off</span></p>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="cad mb-3">

              </div>
              <div className='d-flex justify-content-end card-button'>
                <Link to="/checkout"><button className='btn btn-warning'>PLACE ORDER</button></Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-details">
              <h5 className="product-title border-bottom py-2">Price Details</h5>
              <div className='py-1'>Price (1 item): <span className='float-end'>₹14,990</span></div>
              <div className='py-1'>Discount: <span className="text-success float-end"> ₹3,740</span></div>
              <div className='py-1 mb-3'>Delivery Charges: <span className="text-success float-end">Free</span></div>
              <div className="total-amount py-1 border-bottom border-top py-3">Total Amount<span className="text-success float-end">₹11,250</span></div>
              <div className="save-amount py-1">You will save ₹3,740 on this order</div>
              {/* <button className="btn btn-warning w-100">PLACE ORDER</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
