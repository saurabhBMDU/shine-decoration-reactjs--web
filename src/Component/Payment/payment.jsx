import React, { useCallback, useEffect, useState } from "react";
import css from "../OrderSummary/ordersummary.module.css";
import { checkUser, formatNumberWithCommas } from "../../assest/js/checker";
import { useDispatch, useSelector } from "react-redux";
import ChangeUser from "../OrderSummary/ChangeUser";
import { getProductDetails } from "../../action/productdetailaction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons/faLessThanEqual";
import ChangeAddress from "../OrderSummary/ChangeAddress";
import { createOrder } from "../../action/createOrderAction";
import { verifyPayment } from "../../action/paymentVerifyAction";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state?.getUser?.user);
  const user = checkUser();
  const [selectedAddress, setSelectedAddress] = useState({});
  const [modal, setModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [updating, setUpdating] = useState(false);
  const orderDetails = useSelector(state => state.OrderSummary?.data);
  const [reqProducts, setReqProducts] = useState({});
  const orderedList = useSelector(state=>state.orderDetails.data);
  const [orderCreated ,setOrderCreated] = useState(false)
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userDetails) {
      setSelectedAddress(userDetails.shipping_address[0]);
    }
  }, [userDetails]);

  const handleAddress = useCallback(() => {
    setAddressModal(true);
  }, []);

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString().substring(2, 6);
    setCaptcha(randomCaptcha);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handlePaymentConfig = useCallback(()=>{
    if(orderDetails.data){
        // Open Razorpay checkout
    
    }

  })

  const handleReqBody = useCallback(() => {
    let products = [];
    orderDetails.orderItems.forEach(product => {
      let obj = {};
      obj.quantity = product.quantity;
      obj.product = product.product._id; // Fixed key
      obj.total_price = product.mrp_price; // Fixed key
      obj.payable_price = product.selling_price; // Fixed key
      obj.discount = product.discounting_price; // Fixed key
      products.push(obj);
    },[orderDetails]);
    return { products, shippingAddress: selectedAddress.billing_address, billingAddress: selectedAddress.billing_address, shippingMethod: 'Standard Shipping' };
  }, [orderDetails, selectedAddress]);

  const handlePaymentSuccess = useCallback(async(response)=>{
    await dispatch(verifyPayment(response))
    console.log('successss payment')

  })
 const handleRazorConfig = useCallback(()=>{
  console.log(orderedList , 'oooo')
  const options = {
    key:process.env.REACT_APP_RAZORPAY_ID_KEY, // Replace with your Razorpay key ID
    amount: parseInt(orderedList.amount),
    currency: orderedList.currency,
    name: 'Shine Decorations',
    description: 'Test Transaction',
    order_id: orderedList.id,
    handler: handlePaymentSuccess,
    prefill: {
      name: userDetails.name,
      email: userDetails.email,
      contact: userDetails.mobile
    },
    notes: {
      address: selectedAddress.billing_address
    },
    theme: {
      color: '#F37254'
    }
  };

  const rzp = new window.Razorpay(options);
  console.log(rzp,"rzp")
  rzp.open();

 },[orderedList,dispatch, selectedMethod])


  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const updatedReqProducts = handleReqBody();
    setReqProducts(updatedReqProducts);

    await dispatch(createOrder(updatedReqProducts)).then(async()=>{
      setOrderCreated(true)
    })

  },  [selectedMethod,dispatch,handleReqBody]);

  useEffect(()=>{
    if(orderCreated){
      handleRazorConfig()
      setOrderCreated(false)
    }
  },[orderCreated,handleRazorConfig])

  console.log(orderedList,'ordereddd',);

  return (
    <section className={css.maincontainer}>
      <section className={css.leftcontainer}>
        <div className={css.box}>
          <main>
            <div>
              <p className="text-primary">1</p>
            </div>
            <div className={`${css.textcontent}`}>
              <h5 className="">LOGIN</h5>
              <p>
                <span className="flex-nowrap">{userDetails && userDetails.name}</span>{userDetails && userDetails.mobile}
              </p>
            </div>
          </main>
          <div className={css.buttonContent}>
            <button onClick={() => setModal(true)}>change</button>
          </div>
        </div>
        {selectedAddress ? (
          <div className={css.box}>
            <main>
              <div>
                <p className="text-primary">2</p>
              </div>
              <div className={`${css.addresscontent}`}>
                <h5 className="">DELIVERY ADDRESS</h5>
                <p className={css.address}>
                  <span>{selectedAddress.fullName}</span> -<span>{selectedAddress.mobile}</span> ,{selectedAddress.billing_address} <span>pinCode:{selectedAddress.pinCode}</span>
                </p>
              </div>
            </main>
            <div className={css.buttonContent}>
              <button onClick={handleAddress}>change</button>
            </div>
          </div>
        ) : (null)}
        <div className={css.paymentSummary}>
          <div className="">
            <p>3</p>
            <p>Order summary</p>
          </div>
          <div className={`d-flex justify-content-between px-4 mt-2 `}>
            <p style={{ fontWeight: '600' }}>Items ({orderDetails && orderDetails.totalQuantity})</p>
            <Link to={'/cart/ordersummary'} className={css.linkbutton}>CHANGE</Link>
          </div>
        </div>

        <div className={css.paymentbox}>
          <div style={{ background: "#EDB70B" }}>
            <p>4</p>
            <p className='text-white'>PAYMENT OPTION</p>
          </div>
          <div className="p-3">
            <form onSubmit={handleSubmit}>
              <div className="form-check py-2 d-flex flex-column">
                <div>
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
                            <i className="fa-solid fa-arrows-rotate text-info px-2" onClick={generateCaptcha}></i>
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
                <button className="btn btn-warning" type="submit">
                  Continue
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
      <section className={css.priceDetails}>
        <div>
          <h4>price details</h4>
        </div>
        <main>
          <div className={css.priceTop}>
            <p>
              <span> price (item:{orderDetails && orderDetails.totalQuantity}) </span> <span>₹{orderDetails && orderDetails.totalPayablePrice}</span>
            </p>
            <p>
              <span>delivery charges</span>
              <span className="text-success">free</span>
            </p>
          </div>
          <div className={css.total}>
            <p>total payable</p>
            <p>₹{orderDetails.totalPayablePrice && formatNumberWithCommas(orderDetails.totalPayablePrice)}</p>
          </div>
        </main>
      </section>
      {userDetails ? (
        <>
          {modal ? (
            <ChangeUser user={userDetails} setModal={setModal} />
          ) : (
            null
          )}
          {addressModal ? (
            <ChangeAddress userDetails={userDetails} setModal={setAddressModal} currentAdress={selectedAddress} setSelectedAddress={setSelectedAddress} />
          ) : (null)}
        </>
      ) : (
        null
      )}
    </section>
  )
}
export default Payment;
