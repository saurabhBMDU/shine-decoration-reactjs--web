import React, { useCallback, useEffect, useState } from "react";
import "./viewcart.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../action/productdetailaction";
import { getCart, removeFromCart } from "../../action/getCartAction";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Card } from "react-bootstrap";
import { CartToOrderSummary } from "../../action/orderSummaryAction";

export default function Viewcart() {
  const cartData = useSelector((state) => state.CartData?.data);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate()
  const [updateq, setUpdateQ] = useState({});

  const fetchCartData = useCallback(async () => {
    try {
      await dispatch(getCart());
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Failed to fetch cart data");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  const removeCartProduct = useCallback(
    async (productId, quantity) => {
      try {
        await dispatch(removeFromCart({ productId, quantity }));
        fetchCartData(); // Fetch the updated cart data
      } catch (error) {
        console.error("Error removing product from cart:", error);
      }
    },
    [dispatch, fetchCartData]
  );

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  useEffect(() => {
    if (cartData?.cartItems) {
      const initialQuantities = {};
      cartData.cartItems.forEach((item) => {
        if (item.product) {
          initialQuantities[item.product._id] = item.quantity;
        }
      });
      setQuantities(initialQuantities);
    }
  }, [cartData]);

  const handleIncrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
    setUpdateQ((prevUpdateQ) => ({
      ...prevUpdateQ,
      [productId]: true,
    }));
  };

  const handleDecrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] > 1 ? prevQuantities[productId] - 1 : 1,
    }));
    setUpdateQ((prevUpdateQ) => ({
      ...prevUpdateQ,
      [productId]: true,
    }));
  };

  const handleUpdateCart = (productId) => {
    const quantity = quantities[productId];
    dispatch(updateCart({ productId, quantity })).then(() => {
      fetchCartData();
    }).then(() => {
      setUpdateQ((prevUpdateQ) => ({
        ...prevUpdateQ,
        [productId]: false,
      }));
    });
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Number(value),
    }));
    setUpdateQ((prevUpdateQ) => ({
      ...prevUpdateQ,
      [productId]: true,
    }));
  };

  const handleContinue =async () =>{
   await dispatch(CartToOrderSummary()).then(()=>{
    navigate('/cart/ordersummary')
   })

  }

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <section className="containerCart">
          <>
            <div className="cards">
              {cartData?.cartItems && cartData.cartItems.length > 0 ? (
                cartData.cartItems.map((item) => (
                  item.product && (
                    <section className="cartcard-container" key={item.product._id}>
                      <div className="cartcard">
                        <div className="cartcartImgContainer">
                          <img src={item.product.productImage} alt={item.product.product_name} />
                        </div>
                        <div className="cartcard-textPart">
                          <div>
                            <div>
                              <h5>{item.product.product_name}</h5>
                              <p>delivery in 5pm | <span className="text-success">FREE</span></p>
                            </div>
                            <p className="text-muted text-capitalize m-0">{item.product.category}</p>
                          </div>
                          <div className="cartcardPrice-sec">
                            <p>₹{item.product.mrp_price}</p>
                            <p>₹{item.product.selling_price}</p>
                            <p>{(((item.product.mrp_price - item.product.selling_price) / item.product.mrp_price) * 100).toFixed(0)}% off</p>
                          </div>
                        </div>
                      </div>
                      <div className="cartcard-buttons">
                        <div className="quantity-buttons">
                          <CiCircleMinus size={35} onClick={() => handleDecrease(item.product._id)} />
                          <div>
                            <input
                              type="number"
                              value={quantities[item.product._id] || item.quantity}
                              onChange={(e) => handleQuantityChange(item.product._id, e.target.value)}
                              onFocus={() => setUpdateQ((prevUpdateQ) => ({
                                ...prevUpdateQ,
                                [item.product._id]: true,
                              }))}
                              min="1"
                              style={{ width: "3rem", padding: "3px 4px", textAlign: "center" }}
                            />
                          </div>
                          <CiCirclePlus size={35} onClick={() => handleIncrease(item.product._id)} />
                        </div>
                        <button onClick={() => removeCartProduct(item.product._id, item.quantity)}>Remove</button>
                        {updateq[item.product._id] && <button className="card-button" onClick={() => handleUpdateCart(item.product._id)}>Update</button>}
                      </div>
                    </section>
                  )
                ))
              ) : (
                <div className="cards mx-auto" style={{ width: '50%', textAlign: 'center', marginTop: '3rem', fontSize: '1rem' }}>
                  <p style={{ fontWeight: 500, fontSize: '140%' }} className="--bs-warning">No Products in Cart</p>
                  <Link className="text-center badge text-bg-warning fs-3 mt-4" to={'/'}>shop now</Link>
                </div>
              )}
            { cartData?.cartItems && cartData.cartItems.length > 0 && <div className="placeorder">
                <button onClick={()=>handleContinue()}>Place order</button>
              </div>}
            </div>
          </>
          {cartData?.cartItems && cartData.cartItems.length > 0 && <div className=" col-md-4">
            <div className="price-details">
              <h5 className="product-title border-bottom py-2">Price Details</h5>
              <div className="py-1">
                Price ({cartData?.totalQuantity || 0} items):{" "}
                <span className="float-end">₹{cartData?.totalPrice || 0}</span>
              </div>
              <div className="py-1">
                Discount:{" "}
                <span className="text-success float-end"> ₹{cartData?.totalDiscountedPrice || 0}</span>
              </div>
              <div className="py-1 mb-3">
                Delivery Charges: <span className="text-success float-end">Free</span>
              </div>
              <div className="total-amount py-1 border-bottom border-top py-3">
                Total Amount
                <span className="text-success float-end"> ₹{cartData?.totalPayablePrice || 0}</span>
              </div>
              <div className="save-amount py-1">
                You will save ₹{cartData?.totalDiscountedPrice || 0} on this order
              </div>
            </div>
          </div>}
        </section>
      )}
    </>
  );
}
