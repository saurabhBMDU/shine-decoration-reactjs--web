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
import ReviewComments from '../ReviewDisplay/Reviewcomments';
import { checkUser } from '../../assest/js/checker';


function Productdetail() {
  const [pincodeMessage , setPincodeMessage] = useState('')
  const navigate = useNavigate();
  const [deliveryData, setDeliveryData] = useState(null);
  const [pincodeError, setPincodeError] = useState('');
  const [timeOutId, setTimeoutId] = useState('');
  const product = useSelector(state => state.productDetails.product);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const params = useParams();
  const id = params.id;
  const [updatepage, setUpdatepage] = useState(false)
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();
  const [buttonLoader, setButtonLoader] = useState({
    addtocart: false,
    buynow: false
  });
  const checkDeliveryData = useSelector(state => state.checkDelivery?.data?.delivery_codes);

  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(addRecentProduct(id));
  }, [dispatch, id, buttonLoader.addtocart,updatepage]);

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
    if(!checkUser()){
      navigate('/wishlist')
      return
    }
    dispatch(addWishList(productId));
  }, [dispatch]);

  const handeaddtoCart = useCallback((productId) => {
    if(!checkUser()){
      navigate('/cart')
      return
    }
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
        
    if(!checkUser()){
      navigate('/login')
      return
    }
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

  const handlePincodeChange = useCallback((e) => {
    setPincodeMessage('')
    const newPincode = e.target.value;
    setPincode(newPincode);
    clearTimeout(timeOutId);

    if (newPincode.length < 6 || isNaN(Number(newPincode))) {
      setPincodeError('Please enter a valid pincode');
      return;
    } else {
      setPincodeError('');
      dispatch(checkDelivery(Number(newPincode)));
    }
  }, [timeOutId, dispatch]);

  useEffect(() => {
    if (checkDeliveryData && checkDeliveryData.length > 0) {
        const deliveryInfo = checkDeliveryData[0]?.postal_code;
        if (deliveryInfo) {
            setPincodeMessage(deliveryInfo.cod === 'Y' ? 'Delivery Available' : 'Currently not Available');
            setDeliveryData(deliveryInfo);
        } else {
            setPincodeMessage('Currently not Available');
        }
    } else {
        setPincodeMessage('Currently not Available');
    }
}, [checkDeliveryData]);




  const specification = product?.specifications[0] || null;
    console.log(deliveryData)
  return (
    <>
      <section className="container-fluid py-3">
        <div className="row">
          {product ? (
            <>
              <div className="col-lg-5">
                <div className='position-sticky top-0'>
                  <div className='d-flex justify-content-start '>
                    <div className={`${css.picGrid} d-none d-md-block`}>
                      {product.image_gallery && product.image_gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt=""
                          onClick={() => handleImageClick(image)}
                          style={{ height: "80px", width: "80px" }}
                          className={`border d-flex justify-content-center p-2 my-1 `}
                        />
                      ))}
                    </div>
                    <div className={css.imageMagnifyContainer} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #d0cece' }}>
                      <ReactImageMagnify {...{
                        smallImage: {
                          alt: 'e-commerce',
                          isFluidWidth: true,
                          src: mainImage || product.productImage,
                        },
                        largeImage: {
                          src: mainImage || product.productImage,
                          width: 600,
                          height: 800,
                          style: { borderRadius: '10px' }
                        },
                        enlargedImagePosition: 'beside',
                        enlargedImageContainerStyle: { zIndex: 20 },
                        enlargedImageContainerDimensions: { width: '100%', height: '100%' }
                      }} />
                      <div style={{ position: 'absolute', top: '30px', right: '10px', color: 'gray', fontSize: '24px', cursor: 'pointer' }}>
                        <HeartButton productId={product._id} check={product.isWishlist} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    {product.isCart ? (
                      <Link to={'/cart'} className="px-4 py-3 me-2 text-white" style={{ background: "#FF9F00", width: "200px" }}>
                        <i className="fas fa-shopping-cart px-2"></i> Go to Cart
                      </Link>
                    ) : (
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
              <div className="col-lg-7 pl-1 ">
                <div>
                  <section className='px-4' style={{position:'static'}}>

                    <div>
                    <h3>{product.product_name}</h3>
                    <span style={{ fontSize: "12px" }}>{product.category} &#62; {product.sub_category}</span>
                    </div>
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
                    <section className="mt-2 position-static">
                      <div className="delivery-section">
                        <h6 className={css.SubHeads}>Check Delivery</h6>
                        <div>
                          <input
                            type="text"
                            value={pincode}
                            onChange={handlePincodeChange}
                            placeholder="Enter Pincode"
                            maxLength={6}
                            onBlur={()=>setPincodeError('')}
                          />
                          {pincodeError && <span className="text-danger d-block">{pincodeError}</span>}
                        
                        </div>
                        {pincode.length === 6 && (
                            <div>
                                <p className={deliveryData ? 'text-success' : 'text-danger'} style={{ fontSize: '.8rem' }}>
                                    {pincodeMessage}
                                </p>
                            </div>
                        )}
                      </div>
                    </section>
                  </section>
                  <section className="mt-2 position-static">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 py-2">
                          <h6 className={css.SubHeads}>Description</h6>
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mt-2 position-static">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 py-2">
                          <h6 className={css.SubHeads}>Specifications</h6>
                          <table className={css.specificationTable}>
                            <tbody>
                              {specification && Object.entries(specification).map(([key, value], index) => (
                                <tr key={index}>
                                  <th>{key}</th>
                                  <td>{value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      {product&&
      <ReviewComments product={product} setUpdatepage={setUpdatepage}/>
      }
      <Excusivecategory />
    </>
  );
}

export default Productdetail;
