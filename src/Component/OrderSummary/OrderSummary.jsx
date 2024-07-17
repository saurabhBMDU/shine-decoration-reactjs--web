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
import { getOrderSummary, updateOrderSummary } from "../../action/orderSummaryAction";
import Productdetail from "../Productdetail/productdetail";
import { retry } from "@reduxjs/toolkit/query";

const OrderSummary = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state?.getUser?.user)
    const user = checkUser()
    const [selectedAddress, setSelectedAddress ]= useState({ })
    const [modal , setModal] = useState(false);
    const [addressModal , setAddressModal] = useState(false)
    const [quantity ,setQuantity] = useState(1)
    const [updating, setUpdating] = useState(false)
    const productDetails = useSelector(state => state.OrderSummary?.data)

  useEffect(()=>{
       dispatch(getOrderSummary())
  },[dispatch])
    
 useEffect(() => {
    let quantityPack;
     if(productDetails.orderItems){
        productDetails.orderItems.map(product=>{
           quantityPack= {
            ...quantityPack,
            [product.product._id]: product.quantity
           }
        })
        console.log(quantityPack,'qunnnnnnnnnnnnn')
        setQuantity(quantityPack)
     }

  },[productDetails])

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
    const handleIncreaseQuantity = (productId,quantity) => {
        setUpdating(true)
        setQuantity(state=>{
          return {...state, [productId]: state[productId]+1}
        })
        dispatch(updateOrderSummary(productId,quantity))
        setUpdating(false)
    }

    const handleDecreaseQuantity = (productId,quantity) => {
        setUpdating(true)
        setQuantity(state=>{
          if(state[productId] === 1) return state;
      return{ ...state, [productId]:state[productId]-1 }
        })
        dispatch(updateOrderSummary(productId,quantity))


        setUpdating(false)
    }

    const handleContinue = useCallback(()=>{
      navigate('/cart/ordersummary/checkout')
    })

   


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
          {productDetails.orderItems && productDetails.orderItems.map(product=>{
            return (
              <main key={product.product._id}>
                <div>
                  <img src={product && product.product.productImage} alt="" />
                </div>
                <section>
                  <div className={css.toptext}>
                    <main>
                      <div className={css.productnames}>
                        <p>{product && product.product.product_name}</p>
                        <p>{product&& product.product.category}</p>
                      </div>
                      <p>seller : name</p>
                    </main>
                    <div>
                      <p>delivery is by 5th august</p>
                    </div>
                  </div>
                  <div className={css.priceoffer}>
                    <p>₹{product && product.product.mrp_price}</p>
                    <p>₹{product && product.product.selling_price}</p>
                    <p>{product&& (((product.product.mrp_price - product.product.selling_price)/product.product.mrp_price)*100).toFixed(0)}% OFF</p>
                  </div>
                  <div className={css.summarybutns}>
                    <div className={css.quantityBox}>
                    
                    <CiSquareMinus size={34} onClick={()=>handleDecreaseQuantity(product.product._id, product.quantity)}/>
                    
                    <p className={css.statQuantity} style={{fontVariantNumeric:'tabular-nums'}}>{quantity[product.product._id]}</p>
                    
                    <CiSquarePlus size={34} onClick={()=>handleIncreaseQuantity(product.product._id, product.quantity)}/>
                    
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
          <button onClick={handleContinue}>continue</button>
        </div>
      </section>
      {productDetails && 
      <section className={css.priceDetails}>
        <div>
          <h4>price details</h4>
        </div>
        <main>
          <div className={css.priceTop}>
            <p>
              <span> price (item:{productDetails.totalQuantity}) </span> <span>₹{productDetails.totalPrice}</span>
            </p>
            <p>
              <span>delivery charges</span>
              <span className="text-success">free</span>
            </p>
          </div>
          <div className={css.total}>
            <p>total payable</p>
            <p>₹{productDetails && productDetails.totalPayablePrice}</p>
          </div>
          <div className={css.savings}>
            <p className="text-success">
              your total savings on this order is ₹{productDetails&& (productDetails.totalDiscountedPrice)}
            </p>
          </div>
        </main>
      </section>}
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
