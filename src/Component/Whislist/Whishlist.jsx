import React, { useCallback, useEffect } from "react";
import './whishlist.css'
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../service/api";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../action/wishListAciton";

const Whishlist = () => {
    const wishlistData = useSelector(state =>state?.WishlistData?.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWishlist())
    },[dispatch])


 const fetchWihslistData = useCallback( async()=>{
    try {
        const token = localStorage.getItem('token');
        if(!token){
            toast.error('please login ')
            return;
        }
        const response = await axios.get(`${API_URL}/mobileApi/remove-from-wishlist/:productId `,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              }
        });
        if(response.ok) {
            
        }
    } catch (error) {
        
    }
 },[])





  return(
    <>
    <section>
        <div className="wish-banner position-relative"> 
            <div className="wishlist-head position-absolute " >
              <h2 >Wishlist</h2>
              <p>Mastery of Handcrafts</p>

            </div>
          
        </div>
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
                {wishlistData&& wishlistData.products.map((product)  => (
                    <tr className="align-middle tr" key={product._id}>
                        <td><MdClose size={25}  className="x-close" /></td>
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
                        <td className="min-lg"><button>Add to Cart <span className="btn-arrow">&rarr;</span></button></td>
                    </tr>
                ))}
              
            </tbody>
          </table>

        </main>
    </section>
    </>
  )
};

export default Whishlist;
