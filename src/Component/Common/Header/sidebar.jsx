import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ Open, onClose }) => {
  const [sortBy, setSortBy] = useState('Popularity');

  return (
    <div style={{
      position: 'fixed',
      left: Open ? '0' : '-350px',
      top: '0',
      width: '350px',
      zIndex: 1,
      height: '100%',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      transition: 'left 0.3s ease'
    }}>
      <div className='d-flex justify-content-between p-3'>
        <p className='' style={{ fontWeight: "500" }}>Filter</p>
        <p onClick={onClose}><i class="fa-solid fa-xmark"></i></p>
      </div>
      <div className='px-4'>
        <div className="filter-menu">
          <div className="sort-section">
            <h6>Sort by</h6>
            <div className="sort-options">
              {['Popularity', 'New Arrivals', 'Price Low to High', 'Price High to Low', 'Discount High to Low'].map(option => (
                <div key={option} className="sort-option">
                  <input
                    type="radio"
                    id={option}
                    name="sort"
                    value={option}
                    checked={sortBy === option}
                    onChange={() => setSortBy(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="filter-section">
            <h6>Filter by</h6>
            <ul className="filter-options text-black">
              {['Categories', 'Designers', 'Price', 'Size', 'Color', 'Shipping Time', 'Occasion'].map(filter => (
                <li key={filter}>
                  <Link to="#" className='text-black'>{filter}</Link>
                </li>
              ))}
            </ul>
            <button className="clear-btn">Clear all</button>
          </div>
          <button className="show-results-btn">Show Results</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
