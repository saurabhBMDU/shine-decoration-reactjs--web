import React from "react";
import  './orderDetails.css'
const OrderDetails = () => {
  return (
    
    <section className="od-main">
        <div className="od-topBox d-flex justify-content-between align-items-start px-4 py-4">
            <section className="od-addressbox col-md-6 px-4" >
                    <h5 className="mb-2">delivery Address</h5>
                    <div className="d-flex flex-column ">
                        <label style={{fontWeight:500}}>some smith</label>
                        <p>
                        Pullode (post) puthyankam ashtapathi(house) <br /> Thripllure, Near shiva temple Palakkad District <br /> 678545, Kerala
                        </p>
                        <div className="mt-2">
                            <label >phone number</label>
                            <p>8812397177, 9423450437</p>
                        </div>
                    </div>
            </section>
            <section className="col-md-6">
                <div className="d-flex flex-column align-item-center">
                    <h5 className="mb-2 text-capitalize">more actions</h5>
                </div>
            </section>
        </div>
        <main className="my-2 od-productbox px-4 py-4 ">
            <section className="px-3 od-productsecbox">
                <div className="d-flex justify-content- col-md-4">
                    <div className="od-product-imgcontainer">
                        <img src="/img/pottery3.jpg" alt="" />
                    </div>
                    <div className="od-product-textbox d-flex flex-column justify-content-around">
                        <h6> product name</h6>
                        <p>product category</p>
                        <div>
                            <label>$500</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>

                </div>
            </section>
            <div className="px-3">
                <p>product return policy:</p>

            </div>
        </main>
    </section>
  )
};

export default OrderDetails;
