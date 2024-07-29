import React from 'react';

import './orderss.css';

const orders = [
  {
    id: 1,
    productName: 'Product Name 1',
    orderNumber: '#123456',
    orderDate: '01/01/2024',
    status: 'Delivered',
    productImage: 'path/to/product-image1.jpg'
  },
  {
    id: 2,
    productName: 'Product Name 2',
    orderNumber: '#123457',
    orderDate: '02/01/2024',
    status: 'Processing',
    productImage: 'path/to/product-image2.jpg'
  }
  // Add more orders as needed
];

const OrderPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-card card mb-3">
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
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
