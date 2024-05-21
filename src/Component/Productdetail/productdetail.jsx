import React from 'react';
import Productimages from './Productimages';
import '../Home/index';
import Excusivecategory from '../Home/Excusivecategory';

function Productdetail() {
  return (
    <>
      <section className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-5">
            <img src="https://nestasia.in/cdn/shop/files/lantern_11_ae0adc63-35cc-4f7d-911b-95119255a724.jpg?v=1712713864&width=600" alt="" className="img-fluid" />
            <div>
              <Productimages />
            </div>
          </div>
          <div className="col-lg-7 pl-3">
            <div>
              <h3>Lantern</h3>
              <p>Stars And Moon Festive Metal Lantern With Handle</p>
              <div>
                <div className="d-flex justify-content-start">
                  <span className="fs-4" style={{ fontWeight: "500" }}>₹1,500</span>
                  <del className="px-2 py-1" style={{ fontWeight: "500", color: "gray" }}>₹1,910</del>
                  <span className="px-2 py-1 text-success" style={{ fontWeight: "500" }}>13% off</span>
                </div>
                <p>include of all taxes</p>
              </div>
              <div className="qty-container">
                <button className="qty-btn-minus btn-light" type="button"><i class="fa fa-minus"></i></button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button className="qty-btn-plus btn-light" type="button"><i class="fa fa-plus"></i></button>
              </div>

              <div className="py-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className='d-flex justify-content-start'>
                      <p className="highlight">Highlights</p>
                      <div className="highlight-text">
                        <ul>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>color: Black, white, pink</li></li>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2" style={{ fontSize: "6px", color: "gray" }}></i><li>Pack of: 35</li></li>
                          <li className="py-1 d-flex justify-content-start"><i className="fa-solid fa-circle p-2" style={{ fontSize: "6px", color: "gray" }}></i><li>Diameter: Full Plate - 11 inch, Q Plate - 7 inch, Veg. Bowl - 4 inch, Soup Bowl -4.5 inch, Serving Bowl - 8 inch, Weight: 1 kg</li></li>
                        </ul>
                      </div>
                    </div>
                    <div className='d-flex justify-content-start'>
                      <p className="highlight">Seller</p>
                      <div className="highlight-text">
                        <ul>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>7 Days Replacement Policy</li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start'>
                  <p className="highlight">Description</p>
                  <div className="highlight-text">
                    <ul>
                      <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>Made From Opal Glass.Looks Like Bone China.Light Weight.Bone Ash Free.Have An Elegent Look.</li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container mt-4">
                <h3 className="mb-3 px-2">Specifications</h3>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Sales Package</th>
                      <td>6 Full Plate, 6 Quarter Plate, 6 Veg Bowl, 2 Casserole, 2 casserole lid, 1 Oval Platter, 6 Soup Bowl, 6 Spoon</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Model Number</th>
                      <td>Mystirio Black 35PC</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Color</th>
                      <td>Gold, silver</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Other Features</th>
                      <td>Rust Proof</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Weight</th>
                      <td>1 kg</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Diameter</th>
                      <td>Full Plate - 11 inch, Veg. Bowl - 4 inch, Soup Bowl - 4.5 inch, Serving Bowl - 8 inch</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Net Quantity</th>
                      <td>35</td>
                    </tr>
                  </tbody>
                </table>
                {/* <Link to="#" className="d-block mt-3">Manufacturing, Packaging and Import Info</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Excusivecategory />
    </>
  );
}
export default Productdetail;
