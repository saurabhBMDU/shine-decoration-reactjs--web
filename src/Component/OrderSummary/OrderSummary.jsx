import React, { useCallback, useEffect, useState } from "react";
import css from "./ordersummary.module.css";
import { checkUser, formatNumberWithCommas } from "../../assest/js/checker";
import { useDispatch, useSelector } from "react-redux";
import ChangeUser from "./ChangeUser";
import { getProductDetails } from "../../action/productdetailaction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons/faLessThanEqual";
import ChangeAddress from "./ChangeAddress";

const OrderSummary = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state?.getUser?.user)
    const user = checkUser()
    const [selectedAddress, setSelectedAddress ]= useState({ })
    const [modal , setModal] = useState(false);
    const [addressModal , setAddressModal] = useState(false)
    const [quantity ,setQuantity] = useState(1)
    const [updating, setUpdating] = useState(false)
    const productDetails = useSelector(state=>state.OrderSummary?.data?.cartItems)

    useEffect(()=>{
        dispatch(getProductDetails(id))
       
    },[dispatch])
   useEffect(()=>{
    if(userDetails){
      setSelectedAddress(userDetails.shipping_address[0])
    }
   },[userDetails])
    // console.log(productDetails,'pro')
    // if(productDetails){
    // }
    const handleAddress = useCallback(()=>{
        setAddressModal(true)

    })
    const handleIncreaseQuantity = () => {
        setUpdating(true)
        setQuantity(prev => prev + 1)
        setUpdating(false)
    }

    const handleDecreaseQuantity = () => {
        setUpdating(true)
        setQuantity(prev => prev - 1)
        setUpdating(false)
    }

   


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
                <span className="flex-nowrap">{userDetails && userDetails.name }</span>{userDetails && userDetails.mobile}
              </p>
            </div>
          </main>
          <div className={css.buttonContent}>
            <button onClick={()=>setModal(true)}>change</button>
          </div>
        </div>
       {selectedAddress ?( 
        <div className={css.box}>
          <main>
            <div>
              <p className="text-primary">2</p>
            </div>
            <div className={`${css.addresscontent}`}>
              <h5 className="">DELIVERY ADDRESS</h5>
              <p className={css.address}>
                <span>{selectedAddress.fullName}</span> -<span>{selectedAddress.mobile}</span> ,{selectedAddress.billing_address}  <span>pinCode:{selectedAddress.pinCode}</span>
              </p>
            </div>
          </main>
          <div className={css.buttonContent}>
            <button onClick={handleAddress}>change</button>
          </div>
        </div>
      ):(null)}
        <div className={css.summarybox}>
          <div>
            <p>3</p>
            <p>Order summary</p>
          </div>
          {productDetails && productDetails.map(product=>{
            return (
              <main>
                <div>
                  <img src={product && product.productImage} alt="" />
                </div>
                <section>
                  <div className={css.toptext}>
                    <main>
                      <div className={css.productnames}>
                        <p>{product && product.product_name}</p>
                        <p>{product&& product.category}</p>
                      </div>
                      <p>seller : name</p>
                    </main>
                    <div>
                      <p>delivery is by 5th august</p>
                    </div>
                  </div>
                  <div className={css.priceoffer}>
                    <p>₹{product && product.mrp_price}</p>
                    <p>₹{product && product.selling_price}</p>
                    <p>{product&& (((product.mrp_price - product.selling_price)/product.mrp_price)*100).toFixed(0)}% OFF</p>
                  </div>
                  <div className={css.summarybutns}>
                    <div className={css.quantityBox}>
                    
                    <CiSquareMinus size={34} onClick={handleDecreaseQuantity}/>
                    
                    <p className={css.statQuantity} style={{fontVariantNumeric:'tabular-nums'}}>{quantity}</p>
                    
                    <CiSquarePlus size={34} onClick={handleIncreaseQuantity}/>
                    
                    </div>
                    <Link to={'/'}>Back to shopping</Link>
                  </div>
                </section>
              </main>
            )
          })}
        </div>

        <div className={css.continueSec}>
          <p>order confirmation will be sent to registered mobile number</p>
          <button>continue</button>
        </div>
      </section>
      <section className={css.priceDetails}>
        <div>
          <h4>price details</h4>
        </div>
        <main>
          <div className={css.priceTop}>
            <p>
              {/* <span> price (item:{quantity}) </span> <span>₹{product&& product.selling_price * quantity}</span> */}
            </p>
            <p>
              <span>delivery charges</span>
              <span className="text-success">free</span>
            </p>
          </div>
          <div className={css.total}>
            <p>total payable</p>
            {/* <p>₹{product&& formatNumberWithCommas( product.selling_price)}</p> */}
          </div>
          <div className={css.savings}>
            <p className="text-success">
              {/* your total savings on this order is ₹{product&& (product.mrp_price - product.selling_price)*quantity} */}
            </p>
          </div>
        </main>
      </section>
      {userDetails ? (
        <>
            {modal ? (
                <ChangeUser user={userDetails} setModal={setModal}/>
            )  : (
                null
            )}
          { addressModal ?  (
            <ChangeAddress userDetails={userDetails} setModal={setAddressModal} currentAdress={selectedAddress} setSelectedAddress={setSelectedAddress}/>
          ):(null)}
        </>
          
      
      ):(
        null
      )}
    </section>
  );
};

export default OrderSummary;
