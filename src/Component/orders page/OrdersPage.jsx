import React, { useEffect } from 'react';

import './orderss.css';
import { useDispatch, useSelector } from 'react-redux';
import { myOrderAction } from '../../action/myorderActions';




const OrderPage = () => {

 const dispatch = useDispatch();
 const myOrders = useSelector(state=>state.myOrder?.data)

 useEffect(()=>{
  dispatch(myOrderAction())
 },[])

 console.log(myOrders)



  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Orders</h1>
      {myOrders&& myOrders.orders.map((order) => (
        <div key={order.orderNumber} className="order-card card mb-3">
          {order.products.map(item=>(
          <div className="card-body">
            <div className="row justify-content-between">
              <div className="col-md-2">
                <img src={'/img/pottery3.jpg'} className="img-fluid" alt="Product Image" />
              </div>
              <div className="col-md-8">
                <h5 className="card-title">{order.productName}</h5>
                <p className="card-text">Order Number: {order.orderNumber}</p>
                <p className="card-text">Order Date: {order.orderDate}</p>
                <p className="card-text">
                  Status: <span className={`badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>{order.status}</span>
                </p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
