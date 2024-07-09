import React, { useCallback, useEffect, useState } from "react";
import css from "./ordersummary.module.css";
import { checkUser, formatNumberWithCommas } from "../../assest/js/checker";
import { useDispatch, useSelector } from "react-redux";
import ChangeUser from "./ChangeUser";
import { getProductDetails } from "../../action/productdetailaction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons/faLessThanEqual";

const OrderSummary = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const dispatch = useDispatch()
    const userDetails = useSelector(state=>state?.getUser?.user)
    const user = checkUser()
    const [modal , setModal] = useState(false);
    const [quantity ,setQuantity] = useState(1)
    const [updating, setUpdating] = useState(false)
    const productDetails = useSelector(state=>state.productDetails?.product)

    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[dispatch])
  
    // console.log(productDetails,'pro')
    // if(productDetails){
    // }
    const handleAddress = useCallback(()=>{
        navigate('/profile/address')

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
        <div className={css.box}>
          <main>
            <div>
              <p className="text-primary">2</p>
            </div>
            <div className={`${css.addresscontent}`}>
              <h5 className="">DELIVERY ADDRESS</h5>
              <p className={css.address}>
                <span>samuelking</span> No.10, Main Market, Near State Bank of
                India, Nizamuddin West, New Delhi, Delhi <span> 110013</span>
              </p>
            </div>
          </main>
          <div className={css.buttonContent}>
            <button onClick={handleAddress}>change</button>
          </div>
        </div>
        <div className={css.summarybox}>
          <div>
            <p>3</p>
            <p>Order summary</p>
          </div>
          <main>
            <div>
              <img src={productDetails && productDetails.productImage} alt="" />
            </div>
            <section>
              <div className={css.toptext}>
                <main>
                  <div className={css.productnames}>
                    <p>{productDetails && productDetails.product_name}</p>
                    <p>{productDetails&& productDetails.category}</p>
                  </div>
                  <p>seller : name</p>
                </main>
                <div>
                  <p>delivery is by 5th august</p>
                </div>
              </div>
              <div className={css.priceoffer}>
                <p>₹{productDetails && productDetails.mrp_price}</p>
                <p>₹{productDetails && productDetails.selling_price}</p>
                <p>{productDetails&& (((productDetails.mrp_price - productDetails.selling_price)/productDetails.mrp_price)*100).toFixed(0)}% OFF</p>
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
              <span> price (item:{quantity}) </span> <span>₹{productDetails&& productDetails.selling_price * quantity}</span>
            </p>
            <p>
              <span>delivery charges</span>
              <span className="text-success">free</span>
            </p>
          </div>
          <div className={css.total}>
            <p>total payable</p>
            <p>₹{productDetails&& formatNumberWithCommas( productDetails.selling_price)}</p>
          </div>
          <div className={css.savings}>
            <p className="text-success">
              your total savings on this order is ₹{productDetails&& (productDetails.mrp_price - productDetails.selling_price)*quantity}
            </p>
          </div>
        </main>
      </section>
      {userDetails ? (
            modal ? (
                <ChangeUser user={userDetails} setModal={setModal}/>
            )  : (
                null
            )
      
      ):(
        null
      )}
    </section>
  );
};

export default OrderSummary;
