import React, { useEffect, useState } from 'react';
import '../Home/index';
import Excusivecategory from '../Home/Excusivecategory';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../action/productdetailaction';
import { addWishList, addtoCart } from '../../action/productdetailaction'
import { useParams } from 'react-router-dom';




function Productdetail() {

  const { product } = useSelector(state => state.productDetails);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  console.log(id, "7890");
  console.log(product, "7890------");


  useEffect(() => {
    dispatch(getProductDetails(id));
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

  const handeaddtoCart = (productId) => {
    dispatch(addtoCart(productId));
  };

  // const handleWishList = async (productId) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     console.log("token", token);
  //     if (!token) {
  //       toast.error("User is not authenticated");
  //       return;
  //     }

  //     const response = await fetch(`${API_URL}/mobileApi/wishlist/add-to-wishlist/${productId}`, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log("oooo", productId);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('data', data);
  //       toast.success("Product added to wishlist successfully");
  //       // Optionally, you can dispatch an action or update local state here
  //     } else {
  //       const errorData = await response.json();
  //       console.log('errorData', errorData);
  //       toast.error(errorData.message || 'Failed to add product to wishlist');
  //     }
  //   } catch (error) {
  //     console.error('An unexpected error occurred:', error);
  //     toast.error("An unexpected error occurred while adding to wishlist");
  //   }
  // };

  return (
    <>
      <section className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-5">
            <div className='position-sticky top-0'>
              <div className='d-flex justify-content-start'>
                <div className='p-1 d-none d-md-block'>
                  <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/dinner-set/n/m/q/yes-17-8904350469963-cello-original-imagz7xtzuqybbac.jpeg?q=70&crop=false" alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />
                  <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/dinner-set/n/m/q/yes-17-8904350469963-cello-original-imagz7xtzuqybbac.jpeg?q=70&crop=false" alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />
                  <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/dinner-set/n/m/q/yes-17-8904350469963-cello-original-imagz7xtzuqybbac.jpeg?q=70&crop=false" alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />
                  <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/dinner-set/n/m/q/yes-17-8904350469963-cello-original-imagz7xtzuqybbac.jpeg?q=70&crop=false" alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />
                  <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/dinner-set/n/m/q/yes-17-8904350469963-cello-original-imagz7xtzuqybbac.jpeg?q=70&crop=false" alt="" style={{ height: "80px", width: "80px" }} className='border d-flex justify-content-center p-2 my-1' />
                </div>
                <div className='image-magnify-container' style={{ position: 'relative', height: "480px", width: "480px", display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #d0cece' }}>
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'e-commerce',
                      isFluidWidth: true,
                      src: "https://rukminim2.flixcart.com/image/416/416/xif0q/dinner-set/v/b/5/yes-34-htecom34dn1fnafl-larah-by-borosil-original-imahybvzgfdwgvh5.jpeg?q=70&crop=false",
                    },
                    largeImage: {
                      src: "https://rukminim2.flixcart.com/image/416/416/xif0q/dinner-set/v/b/5/yes-34-htecom34dn1fnafl-larah-by-borosil-original-imahybvzgfdwgvh5.jpeg?q=70&crop=false",
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
                  <i className="fas fa-bolt px-2"></i> BUY NOW
                </button>
              </div>

            </div>
          </div>
          <div className="col-lg-7 pl-1">
            <div>
              <h3>Lantern</h3>
              <span style={{ fontSize: "12px" }}>Stars And Moon Festive Metal Lantern With Handle</span>
              <div>
                <div className="d-flex justify-content-start">
                  <span className="fs-4" style={{ fontWeight: "500" }}>₹1,500</span>
                  <del className="px-2 py-1" style={{ fontWeight: "500", color: "gray" }}>₹1,910</del>
                  <span className="px-2 py-2 text-success" style={{ fontWeight: "500", fontSize: "12px" }}>13% off</span>
                </div>
                <span style={{ fontSize: "12px" }}>include of all taxes</span>
              </div>
              <div className="qty-container mt-2">
                <button className="qty-btn-minus btn-light rounded bg-light" type="button" onClick={handleDecrease}>
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
              <div className="py-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className='d-flex justify-content-start'>
                      <p className="highlight">Highlights</p>
                      <div className="highlight-text">
                        <ul>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>color: Black, white, pink</li></li>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2" style={{ fontSize: "6px", color: "gray" }}></i><li>Pack of: 35</li></li>
                          <li className="py-1 d-flex justify-content-start"><i className="fa-solid fa-circle p-2" style={{ fontSize: "6px", color: "gray" }}></i><li>Diameter: Full Plate - 11 inch, Q Plate - 7 inch, Veg. Bowl - 4 inch, Soup Bowl -4.5 inch, Serving Bowl - 8 inch, Weight: 1 kg</li></li>
                        </ul>
                      </div>
                    </div>
                    <div className='d-flex justify-content-start'>
                      <span className="highlight text-align-center py-2">Seller</span>
                      <div className="highlight-text">
                        <ul>
                          <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>7 Days Replacement Policy</li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-start'>
                  <p className="highlight">Description</p>
                  <div className="highlight-text">
                    <ul>
                      <li className="py-1 d-flex justify-content-start"> <i className="fa-solid fa-circle p-2 " style={{ fontSize: "6px", color: "gray" }}></i><li>Made From Opal Glass.Looks Like Bone China.Light Weight.Bone Ash Free.Have An Elegent Look.</li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <h3 className="mb-3 px-2">Specifications</h3>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Sales Package</th>
                      <td>6 Full Plate, 6 Quarter Plate, 6 Veg Bowl, 2 Casserole, 2 casserole lid, 1 Oval Platter, 6 Soup Bowl, 6 Spoon</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Model Number</th>
                      <td>Mystirio Black 35PC</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Color</th>
                      <td>Gold, silver</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Other Features</th>
                      <td>Rust Proof</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Weight</th>
                      <td>1 kg</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }} >Diameter</th>
                      <td>Full Plate - 11 inch, Veg. Bowl - 4 inch, Soup Bowl - 4.5 inch, Serving Bowl - 8 inch</td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: "15px", fontWeight: "500" }}>Net Quantity</th>
                      <td>35</td>
                    </tr>
                  </tbody>
                </table>
                {/* <Link to="#" className="d-block mt-3">Manufacturing, Packaging and Import Info</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Excusivecategory />
    </>
  );
}
export default Productdetail;
