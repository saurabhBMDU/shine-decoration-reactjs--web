import React, { useCallback } from "react";
import './whishlist.css'
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../service/api";

const Whishlist = () => {

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
                <tr className="align-middle tr">
                    <td><MdClose size={20} /></td>
                    <td><img style={{width:'14rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHj0hOjWdiyBdda2WGGgaWNjVg7eprmbVsg&s" alt="" /></td>
                    <td className="max-sm">
                        <div>
                            <p>product name</p>
                            <p>price</p>
                            <button>Add to Cart &rarr;</button>
                        </div>
                    </td>
                    <td className="min-lg">bowl</td>
                    <td className="min-lg">600</td>
                    <td className="min-xl">available</td>
                    <td className="min-lg"><button>Add to Cart <span className="btn-arrow">&rarr;</span></button></td>
                </tr>
                <tr className="align-middle tr">
                    <td><MdClose size={20} /></td>
                    <td><img style={{width:'14rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHj0hOjWdiyBdda2WGGgaWNjVg7eprmbVsg&s" alt="" /></td>
                    <td className="max-sm">
                        <div>
                            <p>product name</p>
                            <p>price</p>
                            <button>Add to Cart &rarr;</button>
                        </div>
                    </td>
                    <td className="min-lg">bowl</td>
                    <td className="min-lg">600</td>
                    <td className="min-xl">available</td>
                    <td className="min-lg"><button>Add to Cart <span className="btn-arrow">&rarr;</span></button></td>
                </tr>
                <tr className="align-middle tr">
                    <td><MdClose size={20} /></td>
                    <td><img style={{width:'14rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHj0hOjWdiyBdda2WGGgaWNjVg7eprmbVsg&s" alt="" /></td>
                    <td className="max-sm">
                        <div>
                            <p>product name</p>
                            <p>price</p>
                            <button>Add to Cart &rarr;</button>
                        </div>
                    </td>
                    <td className="min-lg">bowl</td>
                    <td className="min-lg">600</td>
                    <td className="min-xl">available</td>
                    <td className="min-lg"><button>Add to Cart <span className="btn-arrow">&rarr;</span></button></td>
                </tr>

            </tbody>
          </table>

        </main>
    </section>
    </>
  )
};

export default Whishlist;
