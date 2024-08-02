import React, { useEffect } from "react";
import  './orderDetails.css'
import { FaStar } from "react-icons/fa6";
import { Link, useFetcher, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getsingleOrderDetails } from "../../action/myorderActions";
const OrderDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const  order = useSelector(state=>state.singleOrder?.data)
    useEffect(()=>{
        dispatch(getsingleOrderDetails(id))
    },[dispatch])

    console.log(order,'orrrr')
  return (
    
    <section className="od-main">
        <div className="od-topBox d-flex justify-content-between align-items-start px-md-4 py-md-4 py-2 px-1 flex-column flex-md-row">
            <section className="od-addressbox col-md-6 px-md-4 px-2" >
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
            <section className="col-md-6 md-px-0 px-2 mt-md-0 mt-2">
                <div className="d-flex flex-column align-item-center">
                    <h5 className="mb-2 text-capitalize">more actions</h5>
                </div>
            </section>
        </div>
        <main className="my-2 od-productbox px-md-4  py-md-4 py-2 ">
            <section className="px-3 od-productsecbox ">
                <div className="d-flex justify-content- col-md-4 gap-3">
                    <div className="od-product-imgcontainer">
                        <img src="/img/pottery3.jpg" alt="" />
                    </div>
                    <div className="od-product-textbox d-flex flex-column justify-content-start gap-2 align-items-start">
                        <h6> product name</h6>
                        <p>product category</p>
                        <div>
                            <label>₹500</label>
                        </div>
                    </div>
                </div>
                
                <div className="container " style={{margin:0,padding:0}}>
                    <div className="row">
						<div className="col-12 col-md-10 hh-grayBox pt45 pb20">
							<div className="row justify-content-between">
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>Ordered<br/><span>Mon, June 24</span></p>
								</div>
								<div className="order-tracking completed">
									<span className="is-complete"></span>
									<p>Shipped<br/><span>Tue, June 25</span></p>
								</div>
								<div className="order-tracking">
									<span className="is-complete"></span>
									<p>Delivered<br/><span>Fri, June 28</span></p>
								</div>
							</div>
						</div>
					</div>
                </div>
            </section>
            <div className="d-flex justify-content-center align-items-center mt-2 " style={{borderTop:'1px solid lightgray'}}>
                <Link to={`/product/review/${22}`} className="text-center pt-1 ratinglink d-flex justify-content-center align-items-center gap-2" style={{fontWeight:500,fontSize:'.9rem'}}><FaStar color="whited"/> Rate & Review Product</Link>
            </div>
            <div className="px-3 od-returnpolicy">
                <p style={{margin:0,fontWeight:400,textTransform:"capitalize",fontSize:'.8rem'}}>product return policy:</p>
                <ul>
                    <li>You have 30 calendar days to return an item from the date you received it.</li>
                    <li>To be eligible for a return, your item must be unused and in the same condition that you received it.
                    Your item must be in the original packaging.</li>
                    <li>Your item needs to have the receipt or proof of purchase.</li>
                </ul>

            </div>
        </main>
    </section>
  )
};

export default OrderDetails;
