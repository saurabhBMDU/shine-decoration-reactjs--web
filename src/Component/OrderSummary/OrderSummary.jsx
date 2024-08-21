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
import { getOrderSummary, removeFromOrderSummary, updateOrderSummary } from "../../action/orderSummaryAction";
import Productdetail from "../Productdetail/productdetail";
import { retry } from "@reduxjs/toolkit/query";
import { RiFontSize } from "react-icons/ri";

const OrderSummary = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state?.getUser?.user)
    const user = checkUser()
    const [selectedAddress, setSelectedAddress ]= useState(null)
    const [modal , setModal] = useState(false);
    const [addressModal , setAddressModal] = useState(false)
    const [quantity ,setQuantity] = useState(1)
    const [updating, setUpdating] = useState(false)
    const productDetails = useSelector(state => state.OrderSummary?.data)


  useEffect(()=>{
    if(!updating){
      dispatch(getOrderSummary())
    }
  },[dispatch,updating])
    
 useEffect(() => {
   if(productDetails&& productDetails.orderItems){
       let quantityPack ={};
        productDetails.orderItems.map(product=>{
           quantityPack= {
            ...quantityPack,
            [product.product&& product.product._id]: product.quantity
           }
        })
        setQuantity(quantityPack)
     }

  },[productDetails])

   useEffect(()=>{
    if(userDetails?.shipping_address.length > 0 ){
      console.log(userDetails,'user')
      setSelectedAddress(userDetails.shipping_address[0])
    }
   },[userDetails])
 
    const handleAddress = useCallback(()=>{
        setAddressModal(true)
    })
    const handleIncreaseQuantity = (productId,quantity) => {
        setUpdating(true)
        setQuantity(state => ({
          ...state,
          [productId]: (state[productId] || 0) + 1
        }));
        dispatch(updateOrderSummary(productId,quantity+1)).then(()=>{
          setUpdating(false)
        }).catch(()=>{
          setUpdating(false)
        })
    }

    const handleDecreaseQuantity = (productId,quantity) => {
        setUpdating(true)
         if(quantity ===1 ) return
         setQuantity(state => ({
          ...state,
          [productId]: (state[productId] || 0) - 1
        }));
        dispatch(updateOrderSummary(productId,quantity-1)).then(()=>{
          setUpdating(false)
        }).catch(()=>{
          setUpdating(false)
        })
    }

    const handleContinue = useCallback(()=>{
      navigate('/cart/ordersummary/checkout')
    },[])
   
    const handleRemove = useCallback((productId)=>{
      setUpdating(true)
      dispatch(removeFromOrderSummary(productId)).then(()=>{
        setUpdating(false)
      }).catch(()=>{
        setUpdating(false)
      })

    },[dispatch])
   


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
      ):(
        <div className={css.box}>
        <main>
          <div>
            <p className="text-primary">2</p>
          </div>
          <div className={`${css.addresscontent}`}>
            <h5 className="">DELIVERY ADDRESS</h5>
            <p className={`${css.address} text-danger`} style={{fontWeight:500}}>
              please add address 
            </p>
          </div>
        </main>
        <div className={css.buttonContent}>
          <Link to={'/profile/address'} style={{fontSize:'.9rem',fontWeight:700,border:'solid lightgray 2px',padding:'3px 5px'}}>Add Address</Link>
        </div>
      </div>
      )}
        <div className={css.summarybox}>
          <div>
            <p>3</p>
            <p>Order summary</p>
          </div>
          {productDetails.orderItems && productDetails.orderItems.length > 0 && productDetails.orderItems.map(product=>{
            return (
              <main key={ product.product && product.product._id}>
                <div>
                  <img src={product.product && product.product.productImage} alt="" />
                </div>
                <section>
                  <div className={css.toptext}>
                    <main>
                      <div className={css.productnames}>
                        <p>{product.product && product.product.product_name}</p>
                        <p>{product.product && product.product.category}</p>
                      </div>
                      <p>seller : name</p>
                    </main>
                    <div>
                      <p>delivery is by 5th august</p>
                    </div>
                  </div>
                  <div className={css.priceoffer}>
                    <p>₹{product.product && product.product.mrp_price}</p>
                    <p>₹{product.product && product.product.selling_price}</p>
                    <p>{product.product && (((product.product.mrp_price - product.product.selling_price)/product.product.mrp_price)*100).toFixed(0)}% OFF</p>
                  </div>
                  <div className={css.summarybutns}>
                    <div className={css.quantityBox}>
                    
                    <CiSquareMinus size={34} onClick={()=>handleDecreaseQuantity(product.product._id, product.quantity)}/>
                    
                    <p className={css.statQuantity} style={{fontVariantNumeric:'tabular-nums'}}>{product.product &&  quantity[product.product&& product.product._id]}</p>
                    
                    <CiSquarePlus size={34} onClick={()=>handleIncreaseQuantity(product.product._id, product.quantity)}/>
                    
                    <button onClick={()=>handleRemove(product.product._id)}>Remove</button>
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
         {selectedAddress ? <button onClick={handleContinue}>continue</button> :<button onClick={()=>window.scroll(100,0)}>continue</button>}
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
          <div className="d-flex justify-content-between">
            <p style={{textTransform:"capitalize",fontWeight:500}}>discounted Price</p>
            <p className="text-success" style={{fontWeight:400}}>₹{productDetails&&productDetails.totalDiscountedPrice}</p>
          </div>
          <div className={css.total}>
            <p>total payable</p>
            <p>₹{productDetails.totalPayablePrice &&  formatNumberWithCommas(productDetails.totalPayablePrice)}</p>
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
