import React, { useCallback, useEffect, useState } from 'react';
import css from './productdetails.module.css';
import Excusivecategory from '../Home/Excusivecategory';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, getProductDetails } from '../../action/productdetailaction';
import { addWishList } from '../../action/productdetailaction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addRecentProduct } from '../../action/recentProductAction';
import { addSingleToOrderSummary } from '../../action/orderSummaryAction';
import HeartButton from '../Home/HeartButton';
import { checkDelivery } from '../../action/Delivery';

function Productdetail() {
  const navigate = useNavigate();
  const [deliveryData , setDeliveryData] = useState([])
  const [pincodeError, setPincodeError] = useState('')
  const [timeOutId, setTimeoutId] = useState('');
  const product = useSelector(state => state.productDetails.product);
  const [quantity, setQuantity] = useState(1);
  const [pincode,setPincode] = useState('')
  const params = useParams();
  const id = params.id;
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();
  const [buttonLoader, setButtonLoader] = useState({
    addtocart: false,
    buynow: false
  });
  const checkDeliveryData = useSelector(state=>state.checkDelivery?.data?.delivery_codes)


  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(addRecentProduct(id));
  }, [dispatch, id,buttonLoader.addtocart]);

  useEffect(() => {
    if (product) {
      setMainImage(product.productImage);
    }
  }, [product]);

  const handleImageClick = useCallback((image) => {
    setMainImage(image);
  }, []);

  const handleIncrease = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  }, []);

  const addToWishlist = useCallback((productId) => {
    dispatch(addWishList(productId));
  }, [dispatch]);

  const handeaddtoCart = useCallback((productId) => {
    setButtonLoader(prevState => ({
      ...prevState,
      addtocart: true
    }));
    dispatch(addtoCart({ productId, quantity })).then(() => {
      setButtonLoader(prevState => ({
        ...prevState,
        addtocart: false
      }));
    });
  }, [quantity, dispatch]);

  const handleBuynow = useCallback(async () => {
    setButtonLoader(prevState => ({
      ...prevState,
      buynow: true
    }));
    await dispatch(addSingleToOrderSummary(product._id, quantity)).then(() => {
      setButtonLoader(prevState => ({
        ...prevState,
        buynow: false
      }));
      navigate('/cart/ordersummary');
    });
  }, [dispatch, navigate, product, quantity]);
 
const handlePincodeChange = useCallback(async(e) => {
  
  const newPincode = e.target.value;
  setPincode(newPincode);
  clearTimeout(timeOutId);
    
  if (newPincode.length < 6 || isNaN(Number(e.target.value))) {
    setPincodeError('please Enter valid pincode')
    console.log('error in pincode')
    return
  }else{
    setPincodeError('')
    const timePincodeTimeOut = setTimeout(() => {
        dispatch(checkDelivery(Number(newPincode)))
        console.log(Number(newPincode))
        console.log('deliivery')
    }, 2000);
    console.log('success pincode');
    
      setTimeoutId(timePincodeTimeOut);
  }

}, [timeOutId,pincodeError,checkDeliveryData]);
  
  useCallback(()=>{
    return clearTimeout(timeOutId)
   },[handlePincodeChange,setTimeoutId])

   console.log(checkDeliveryData,'delivery data')
  return (
    <>
      <section className="container-fluid py-3">
        <div className="row">
          {product ? (
            <>
              <div className="col-lg-5">
                <div className='position-sticky top-0'>
                  <div className='d-flex justify-content-start '>
                    <div className='p-1 d-none d-md-block'
                     style={{ maxHeight: '480px', overflowY: 'auto' }}>
                      {product.image_gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt=""
                          onClick={() => handleImageClick(image)}
                          style={{ height: "80px", width: "80px" }}
                          className='border d-flex justify-content-center p-2 my-1'
                        />
                      ))}
                    </div>
                    <div className='image-magnify-container' style={{ position: 'relative', height: "480px", width: "480px", display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #d0cece'}}>
                      <ReactImageMagnify {...{
                        smallImage: {
                          alt: 'e-commerce',
                          isFluidWidth: true,
                          src: mainImage || product.productImage,
                        },
                        largeImage: {
                          src: mainImage || product.productImage,
                          width: 1200,
                          height: 1800,
                          style: { borderRadius: '10px' }
                        },
                        enlargedImagePosition: 'beside',
                        enlargedImageContainerStyle: { zIndex: 20},
                        enlargedImageContainerDimensions: { width: '200%', height: '130%' }
                      }} />
                      <div style={{ position: 'absolute', top: '30px', right: '10px', color: 'gray', fontSize: '24px', cursor: 'pointer' }}>
                        <HeartButton productId={product._id} check={product.isWishlist} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center  mt-2">
                    {product.isCart ? (
                       <Link to={'/cart'} className="px-4 py-3 me-2 text-white"  style={{ background: "#FF9F00", width: "200px" }}>
                       <i className="fas fa-shopping-cart px-2"></i> Go to Cart
                       </Link>

                    ):(

                    <button className="px-4 py-3 me-2 text-white" onClick={() => handeaddtoCart(product._id)} style={{ background: "#FF9F00", width: "200px" }}>
                      {buttonLoader.addtocart ? (
                        <div className="spinner"></div>
                      ) : (
                        <>
                          <i className="fas fa-shopping-cart px-2"></i> ADD TO CART
                        </>
                      )}
                    </button>
                    )}
                    <button className="px-3 py-2 text-white" style={{ background: "#FB641B", width: "200px" }}>
                      <button className='text-white' onClick={handleBuynow}>
                        {buttonLoader.buynow ? (
                          <div className="spinner"></div>
                        ) : (
                          <>
                            <i className="fas fa-bolt px-2"></i> BUY NOW
                          </>
                        )}
                      </button>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 pl-1">
                <div>
                  <h3>{product.product_name}</h3>
                  <span style={{ fontSize: "12px" }}>{product.category} &#62; {product.sub_category}</span>
                  <div>
                    <div className="d-flex justify-content-start">
                      <span className="fs-4" style={{ fontWeight: "500" }}>₹{product.selling_price}</span>
                      <del className="px-2 py-1" style={{ fontWeight: "500", color: "gray" }}>₹{product.mrp_price}</del>
                      <span className="px-2 py-2 text-success" style={{ fontWeight: "500", fontSize: "12px" }}>{(((product.mrp_price - product.selling_price) / product.mrp_price) * 100).toFixed(1)}% off</span>
                    </div>
                    <span style={{ fontSize: "12px" }}>include of all taxes</span>
                  </div>
                  <div className="qty-container mt-2">
                    <button className="qty-btn-minus btn-light bg-light rounded" type="button" onClick={handleDecrease}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      className="input-qty text-center mx-2"
                      readOnly
                    />
                    <button className="qty-btn-plus btn-light rounded bg-light" type="button" onClick={handleIncrease}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <section style={{ padding: '20px' }} className='d-flex flex-column gap-4 mt-4  position-static'>
                    <section className='d-flex justify-content-start align-items-start position-static' style={{ gap: '10%' }}>
                      <div>
                        <p className={`${css.p} text-secondary`} style={{ fontWeight: '500' }}>Delivery</p>
                      </div>
                      <div>
                      <div className='deliv'>
                      <p className={`${css.p}`} style={{ fontWeight: '400' }}> Check Delivery Available</p>
                      <label className='d-block'>Enter your pincode</label>
                      <input type="text" 
                      className='numinputt' 
                      pattern='\d{6}' 
                      maxLength={6}
                      required
                      value={pincode}
                      onBlur={()=>setPincodeError('')}
                      onChange={(e)=>handlePincodeChange(e)}
                      style={{ width:'8rem',height:'2rem' ,padding:'0 5px'}}/>
                        
                      </div>
                     
                        <p className={`${css.p} text-danger`} style={{ fontSize: '.6rem' }}>{pincodeError&& pincodeError}</p>
                        {checkDeliveryData && checkDeliveryData.map(item=>(
                        <p className={`${css.deliveryinfo} ${item.postal_code.cod==='Y' || item.pre_paid==='Y' ? 'text-success':'text-danger'} `} style={{ fontWeight: '400' }}>{ item.postal_code.cod==='Y' || item.pre_paid==='Y' ? 'Available for Delivery' : 'Currently not Available'}</p>
                        ))}
                      </div>
                    </section>
                    <section className='d-flex justify-content-start align-items-start position-static' style={{ gap: '10%', verticalAlign: 'text-top' }}>
                      <div>
                        <p className={`${css.p} text-secondary`} style={{ fontWeight: '500' }}>Version</p>
                      </div>
                      <div className='d-flex justify-content-start position-static'>
                        <div className='d-flex justify-content-start align-items-center gap-3'>
                          <p className={`${css.p} ${css.pbutton} ${css.pbuttonSelected} p-2`} style={{ fontWeight: '400' }}>version 1</p>
                          <p className={`${css.p} ${css.pbutton} ${css.pbuttonSelected} p-2`} style={{ fontWeight: '400' }}>version 2</p>
                          <p className={`${css.p} ${css.pbutton} ${css.pbuttonSelected} p-2`} style={{ fontWeight: '400' }}>version 3</p>
                        </div>
                      </div>
                    </section>
                    <section className='position-static d-flex justify-content-start align-items-start' style={{ gap: '10%', verticalAlign: 'text-top' }}>
                      <div>
                        <p className={`${css.p} text-secondary`} style={{ fontWeight: '500' }}>Highlights</p>
                      </div>
                      <div>
                        <ul className={`${css.highlights}`}>
                          <li>material: {product.material}</li>
                          <li>this product has feature 1</li>
                          <li>this product has feature 1</li>
                          <li>this product has feature 1</li>
                        </ul>
                      </div>
                    </section>
                    <section className='d-flex justify-content-start align-items-start position-static' style={{ gap: '15%', verticalAlign: 'text-top' }}>
                      <div>
                        <p className={`${css.p} text-secondary`} style={{ fontWeight: '500' }}>Policy</p>
                      </div>
                      <div>
                        <ul className={`${css.highlights}`}>
                          <li>{product.return_policy}</li>
                          <li>{product.shipping_option}</li>
                        </ul>
                      </div>
                    </section>
                  </section>
                  <div className="container">
                    <h3 className="mb-3 px-2">Specifications</h3>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Sales Package</th>
                          <td>{product.salesPackage}</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Model Number</th>
                          <td>Mystirio Black 35PC</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Color</th>
                          <td>{product.color}</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Other Features</th>
                          <td>Rust Proof</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Weight</th>
                          <td>{product.weight}</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Dimensions</th>
                          <td>{product.dimensions}</td>
                        </tr>
                        <tr>
                          <th style={{ fontSize: "15px", fontWeight: "500" }}>Net Quantity</th>
                          <td>{product.netQuantity}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <Link to="#" className="d-block mt-3">Manufacturing, Packaging and Import Info</Link> */}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='loader'></div>
          )}
        </div>
      </section>
      <Excusivecategory />
    </>
  );
}

export default Productdetail;
