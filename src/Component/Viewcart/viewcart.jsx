import React, { useCallback, useEffect, useState } from "react";
import "./viewcart.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../../service/api";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateCart } from "../../action/productdetailaction";


export default function Viewcart() {
  const [quantity, setQuantity] = useState(0);
  const [cartData, setCartData] = useState(null);
  const [productDetails, setProductDetails] = useState([]);
  const [updaterQ , setUpdaterQ] = useState(false)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  const fetchCartData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("please log In ");
        return;
      }
      const response = await fetch(`${API_URL}/mobileApi/cart/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const { message, statusCode } = data;
      if (statusCode === 200) {
        setCartData(data.result);
        toast.success("Cart items fetched successfully");
      } else {
        toast.error(message || "Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Failed to fetch cart data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData ]);

  const fetchProductDetails = useCallback(async (cartItems) => {
    try {
      if (cartItems) {
        const productDetailsArray = await Promise.all(
          cartItems.cartItems.map(async (item) => {
            const response = await fetch(`${API_URL}/admin/product/product/${item._id}`);
            const data = await response.json();
            const { statusCode } = data;
            console.log('check the whole iteration', data);
            if (statusCode !== 200) {
              toast(item.product, "is missing from cart data");
            }
            return {
              ...data.result,
              quantity: item.quantity,
              cartItemId: item._id,
              sellingPrice: item.selling_price,
              mrp: item.mrp_price,
              discount: item.discounting_price,
              productId: item.product};
          })
        );
        setProductDetails(productDetailsArray);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }, []);

  useEffect(() => {
    if (cartData) {
      fetchProductDetails(cartData);
    }
  }, [cartData, fetchProductDetails]);

  const removeFromCart = async (productId) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User is not authenticated");
        return;
      }
      const response = await fetch(
        `${API_URL}/mobileApi/cart/remove-cart-product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { statusCode, message, result } = data;
        if (statusCode === 200) {
          toast.success(message);
          fetchCartData();
        } else {
          toast.error(message || "Failed to remove product from cart");
        }
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message ||
            "Something went wrong while deleting the product from the cart"
        );
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (qnty) => {
    setQuantity(Number(qnty));
    setUpdaterQ(true);
  };

  const handleIncrease = (qnty) => {
    if(!updaterQ) {
      updateQuantity(qnty)
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
    setUpdaterQ(true);
  };

  const handleDecrease = (qnty) => {
    if(!updaterQ) {
      updateQuantity(qnty)
    }
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setUpdaterQ(true);
  };

  function handleUpdateCart (productId) {
    dispatch(updateCart({ productId, quantity })).then(() => {
      fetchCartData();
    });
    setQuantity(0);
    setUpdaterQ(false);
  };
  console.log(productDetails ,'product')
  console.log(loading,'loading');
  
  return (
    <>{loading ? ( 
    <div class="loader"></div>
  ):
  (
    <section className="containerCart  ">
    <div className="cards">
      { productDetails.length > 0 || productDetails ===null ? (productDetails.map((item) => {
        return (
          <main className="cartCard" key={item.productId}>
            <div className="cartcardTopContainer">
              <div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRr_QzMJ350TxU4PYbQv74ryOyEO6-94rSpH_0eU6U2Xx5SUir3UeOSyI_Epa_DJvC3nmEMXFwqWbg19c8q0h-0RCxWxjTZhxGlZtFTEdkpHmAlWKF19YPbvg"
                  alt=""
                />
              </div>
              <div className="cartTexttop">
                <p>{item.product_name}</p>
                <p>{item.description}</p>
                <p>
                  <span className="">₹{item.mrp}</span>{" "}
                  <span>₹{item.sellingPrice}</span>{" "}
                  <span className="off"> ₹{`${item.discount} `}saves </span>{" "}
                </p>
              </div>
            </div>
            <div className="cartbottom">
              <div className="buttonbox">
                <div className="buttongrp">
                  <div>
                    <FaMinus onClick={()=>handleDecrease(item.quantity)} />
                  </div>
                  {updaterQ ? (
                    <input
                      type="number"
                      min="1"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                      style={{ width: "3rem", padding: "3px 4px", textAlign:'center' }}
                    />
                  ) : (
                    <div>{item.quantity}</div>
                  )}
                  <div>
                    <FaPlus onClick={()=>handleIncrease(item.quantity)} />
                  </div>
                </div>
                <div className="buttongrp2">
                  {updaterQ ? (
                    <>
                      <button
                      onClick={()=>handleUpdateCart(item.productId._id,quantity)}
                       className=" py-1  px-2 fs-6 btn">save</button>
                      <button
                        onClick={() => setUpdaterQ(false)}
                        className="py-2 px-2 fs-6 badge bg-secondary"
                      >
                        cancel
                      </button>
                    </>
                  ) : (
                    null
                  )}
                  <div
                    className=" remove"
                    style={{ fontWeight: "700" }}
                    onClick={() => removeFromCart(item.productId._id)}
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
            <div className="last">
              <button className="orderbutton">Place Order</button>
            </div>
          </main>
        );
      })  ) :( 

        <div className="cards mx-auto " style={{width:'50%',textAlign:'center' , marginTop:'3rem', fontSize:'1rem'}}>
          <p style={{fontWeight:500, fontSize:'140%'}} className="--bs-warning">   NO products in cart </p>
       
          <Link className="text-center badge text-bg-warning fs-3 mt-4"  to={'/'}>shop now</Link>

        </div>
      )  }
      
    </div>

    <div className="col-md-4 ">
      <div className="price-details">
        <h5 className="product-title border-bottom py-2">Price Details</h5>
        <div className="py-1">
          Price ({cartData && cartData.totalQuantity}):{" "}
          <span className="float-end">
            ₹{cartData && cartData.totalPrice * cartData.totalQuantity}
          </span>
        </div>
        <div className="py-1">
          Discount:{" "}
          <span className="text-success float-end">
            {" "}
            ₹{cartData && cartData.totalDiscountedPrice}
          </span>
        </div>
        <div className="py-1 mb-3">
          Delivery Charges:{" "}
          <span className="text-success float-end">Free</span>
        </div>
        <div className="total-amount py-1 border-bottom border-top py-3">
          Total Amount
          <span className="text-success float-end">
            {" "}
            ₹{cartData && cartData.totalPayablePrice * cartData.totalQuantity}
          </span>
        </div>
        <div className="save-amount py-1">
          You will save ₹{cartData && cartData.totalDiscountedPrice} on this
          order
        </div>
      </div>
    </div>
  </section>

  )}
  
    </>
   
  );
}
