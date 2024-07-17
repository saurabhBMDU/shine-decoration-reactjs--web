import React, { useCallback, useEffect, useState } from 'react';
import '../Home/index';
import css from './productdetails.module.css'
import Excusivecategory from '../Home/Excusivecategory';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, getProductDetails } from '../../action/productdetailaction';
import { addWishList } from '../../action/productdetailaction'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addRecentProduct } from '../../action/recentProductAction';
import { addSingleToOrderSummary } from '../../action/orderSummaryAction';

 



function Productdetail() {
 const navigate = useNavigate()
  const  product  = useSelector(state => state.productDetails?.product);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  console.log(id, "7890");
  console.log(product, "7890------");


  useEffect(() => {
    dispatch(getProductDetails(id));
    dispatch(addRecentProduct(id))
  }, [dispatch, id]);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const addToWishlist = (productId) => {
    dispatch(addWishList(productId));
  };

  const handeaddtoCart = useCallback((productId) => {
    dispatch(addtoCart({productId,quantity}));
    console.log(quantity,'qnty from details')
  },[quantity,dispatch])

  const handleBuynow = useCallback( async()=>{
     await dispatch(addSingleToOrderSummary(product._id)).then(()=>{
      navigate('/cart/ordersummary')
    })
  })
  

  

  return (
    <>
      <section className="container-fluid py-3">
        <div className="row">
          { product ? (
            <>
              <div className="col-lg-5">
              <div className='position-sticky top-0'>
                <div className='d-flex justify-content-start'>
                  <div className='p-1 d-none d-md-block'>
                    {product.image_gallery.map(image=>{
                      return(
                        <img src={image}alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />

                      )
                    })}
                   
                  
                  </div>
                  <div className='image-magnify-container' style={{ position: 'relative', height: "480px", width: "480px", display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #d0cece' }}>
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'e-commerce',
                        isFluidWidth: true,
                        src: product.productImage,
                      },
                      largeImage: {
                        src: product.productImage,
                        width: 1200,
                        height: 1800,
                        style: { borderRadius: '10px' }
                      },
                      enlargedImagePosition: 'beside',
                      enlargedImageContainerStyle: { zIndex: 9 },
                      enlargedImageContainerDimensions: { width: '200%', height: '130%' }
                    }} />
                    <i className="fa-regular fa-heart" onClick={() => addToWishlist(product._id)} style={{ position: 'absolute', top: '10px', right: '10px', color: 'gray', fontSize: '24px', cursor: 'pointer' }}></i>
                  </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap mt-2">
                  <button className="px-4 py-3 me-2 text-white" onClick={() => handeaddtoCart(product._id)} style={{ background: "#FF9F00", width: "200px" }}>
                    <i className="fas fa-shopping-cart px-2"></i> ADD TO CART
                  </button>
                  <button className=" px-3 py-2 text-white" style={{ background: "#FB641B", width: "200px" }}>
                    <button className='text-white' onClick={handleBuynow}><i className="fas fa-bolt px-2"></i> BUY NOW</button>
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
                    <span className="px-2 py-2 text-success" style={{ fontWeight: "500", fontSize: "12px" }}>{(((product.mrp_price - product.selling_price )/product.mrp_price)*100).toFixed(1)}% off</span>
                  </div>
                  <span style={{ fontSize: "12px" }}>include of all taxes</span>
                </div>
                <div className="qty-container mt-2">
                  <button className="qty-btn-minus btn-light  bg-light rounded" type="button"  onClick={handleDecrease}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="input-qty text-center mx-2"
                  />
                  <button className="qty-btn-plus btn-light rounded bg-light" type="button" onClick={handleIncrease}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <section style={{padding:'20px'}} className='d-flex flex-column gap-4 mt-4'>
                  <section className='d-flex justify-content-start align-items-start  ' style={{gap:'10%'}}>
                  <div>
                    <p className={`${css.p} text-secondary`}style={{fontWeight:'500'}}>Delivery</p>
                  </div>
                  <div>
                    <p className={`${css.p}`} style={{fontWeight:'400'}}>Delivery by20 Jul, Saturday|<span className='text-success'>Free</span></p>
                    <p className={`${css.p} `} style={{fontSize:'.6rem'}}>if order before 5pm</p>
                    <p className={`${css.p}`} style={{fontWeight:'400'}}>extra</p>
                  </div>
                  </section>
                  <section className='d-flex justify-content-start align-items-start  ' style={{gap:'10%', verticalAlign:'text-top'}}>
                  <div>
                    <p className={`${css.p} text-secondary`}style={{fontWeight:'500'}}>Version</p>
                  </div>
                  <div className='d-flex justify-content-start'>
                     <div className='d-flex justify-content-start align-items-center gap-3'>
                       <p className={`${css.p} ${css.pbutton} ${css.pbuttonSelected}p-2 `} style={{fontWeight:'400'}}>version 1</p>
                       <p className={`${css.p} ${css.pbutton} ${css.pbuttonSelected}p-2 `} style={{fontWeight:'400'}}>version 2</p>
                       <p className={`${css.p} ${css.pbutton}  ${css.pbuttonSelected}p-2 `} style={{fontWeight:'400'}}>version 3</p>
                     </div>
                  </div>
                  </section>
                  <section className='d-flex justify-content-start align-items-start  ' style={{gap:'10%', verticalAlign:'text-top'}}>
                  <div>
                    <p className={`${css.p} text-secondary`}style={{fontWeight:'500'}}>Highlights</p>
                  </div>
                  <div>
                     <ul className={`${css.highlights}`}>
                      <li> material: {product.material}</li>
                      <li> this product has feature 1</li>
                      <li> this product has feature 1</li>
                      <li> this product has feature 1</li>
                     </ul>
                  </div>
                  </section>
                  <section className='d-flex justify-content-start align-items-start  ' style={{gap:'15%', verticalAlign:'text-top'}}>
                  <div>
                    <p className={`${css.p} text-secondary`}style={{fontWeight:'500'}}>Policy</p>
                  </div>
                  <div>
                     <ul className={`${css.highlights}`}>
                      <li> {product.return_policy}</li>
                      <li> {product.shipping_option}</li>
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
                        <th style={{ fontSize: "15px", fontWeight: "500" }} >Model Number</th>
                        <td>Mystirio Black 35PC</td>
                      </tr>
                      <tr>
                        <th style={{ fontSize: "15px", fontWeight: "500" }} >Color</th>
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
                        <th style={{ fontSize: "15px", fontWeight: "500" }} >Dimensions</th>
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
          )
          :(
            <div className='loader'></div>
          )}
        
        </div>
      </section>
      <Excusivecategory />
    </>
  );
}
export default Productdetail;
