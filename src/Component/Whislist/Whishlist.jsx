import React, { useCallback, useEffect } from "react";
import './whishlist.css'
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist, moveToCart, removeFromWishlist } from "../../action/wishListAciton";
import { useNavigate } from "react-router-dom";
const Whishlist = () => {
    const navigate = useNavigate()
    const wishlistData = useSelector(state =>state?.WishlistData?.data )
    const dispatch = useDispatch()
    
    const RemoveFromWishlist = useCallback((productId)=>{
        dispatch(removeFromWishlist(productId))
    },[dispatch ])

  useEffect(()=>{
   dispatch(getWishlist())
  },[dispatch])

  const handleMoveToCart = useCallback((id)=>{
    dispatch(moveToCart(id));
    navigate('/cart')
  },[dispatch])



  return(
    <>
    <section>
        <div className="wish-banner position-relative"> 
            <div className="wishlist-head position-absolute " >
              <h2 >Wishlist</h2>
              <p>Mastery of Handcrafts</p>

            </div>
          
        </div>
        {wishlistData && wishlistData.products && wishlistData.products.length > 0 ? (
        <main className="wishlist-list">
          <table className="table table-align-middle">
            <thead>
                <tr className="table-head-tr">
                    <th className="cls-btn"></th>
                    <th className="wish-thumb"></th>
                    <th className="max-sm"></th>
                    <th className="min-lg">product name</th>
                    <th className="min-lg">Unit price</th>
                    <th className="min-xl">stock status</th>
                    <th className="min-lg"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {wishlistData && wishlistData.products.map((product)  => (
                    <tr className="align-middle tr" key={product._id}>
                        <td><MdClose size={25}  className="x-close"  onClick={()=>RemoveFromWishlist(product._id)}/></td>
                        <td><img style={{width:'14rem'}} src={product.productImage} alt="" /></td>
                        <td className="max-sm">
                            <div>
                                <p>product name</p>
                                <p>price</p>
                                <button>Add to Cart &rarr;</button>
                            </div>
                        </td>
                        <td className="min-lg">{product.product_name}</td>
                        <td className="min-lg">₹{product.selling_price}</td>
                        <td className="min-xl">{ product.remaining_quantity >0 ? 'In stock' : 'not available'}</td>
                        <td className="min-lg"><button onClick={()=>handleMoveToCart(product._id)}>Add to Cart <span className="btn-arrow">&rarr;</span></button></td>
                    </tr>
                ))}
              
            </tbody>
          </table>

        </main>
        ):(
            <div className="mt-2 text-center">
                <p className="text-center fs-4 text-black">No products in wihslist Continue shopping</p>
                <button className="badge text-bg-warning py-2 py-3 fs-5"
                onClick={()=>{navigate('/')}}> shop now</button>
            </div>
        )}
    </section>
    </>
  )
};

export default Whishlist;
