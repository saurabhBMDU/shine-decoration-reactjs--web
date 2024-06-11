import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ Open, onClose }) => {
  const [sortBy, setSortBy] = useState({});
  const [SizeBy, setSizeBy] = useState({});
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showSizeFilter, setShowSizeFilter] = useState(false);
  const [selectedColor, setSelectedColor] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filters = [
    'Categories',
    'Designers',
    'Price',
    'Size',
    'Color',
    'Shipping Time',
    'Occasion'
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);

    // Check if the clicked filter is 'Size', then show size filter
    if (filter === 'Size') {
      setShowSizeFilter(true);
    } else {
      setShowSizeFilter(false);
    }
  };

  const handleSizeSelection = (option) => {
    if (SizeBy.includes(option)) {
      setSizeBy(SizeBy.filter(item => item !== option));
    } else {
      setSizeBy([...SizeBy, option]);
    }
  };

  const handleClearAll = () => {
    setSelectedFilter(null);
  };

  const colors = [
    { name: 'Beige', hex: '#f5f5dc' },
    { name: 'White', hex: '#fff' },
    { name: 'Off White', hex: '#fff' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Black', hex: '#000000' },
    { name: 'Blue', hex: '#0000ff' },
    { name: 'Brown', hex: '#a52a2a' },
    { name: 'Coral', hex: '#ff7f50' },
    { name: 'Cream', hex: '#fffdd0' },
    { name: 'Fuchsia', hex: '#ff00ff' },
    { name: 'Gold', hex: '#ffd700' },
    { name: 'Green', hex: '#008000' },
    { name: 'Grey', hex: '#808080' },
    { name: 'Ivory', hex: '#fffff0' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Magenta', hex: '#ff00ff' },
    { name: 'Maroon', hex: '#800000' },
    { name: 'Multi Color', hex: '#000080' },
    { name: 'Mustard', hex: '#ffdb58' }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredColors = colors.filter(color =>
    color.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const toggleColorSelection = (color) => {
    setSelectedColor((prevSelectedColor) =>
      prevSelectedColor.includes(color)
        ? prevSelectedColor.filter((item) => item !== color)
        : [...prevSelectedColor, color]
    );
  };

  // Add a new function to check if a color is selected
  const isColorSelected = (color) => {
    return selectedColor.includes(color);
  };

  // const handleClearAll = () => {
  //   setSelectedColor([]);
  // };

  const getPlaceholder = (filter) => {
    switch (filter) {
      case 'Color':
        return 'Search Color';
      case 'Size':
        return 'Search Size';
      // Add more cases if needed
      default:
        return 'Search';
    }
  };




  return (
    <div style={{
      position: 'fixed',
      left: Open ? '0' : '-320px',
      top: '0',
      width: '320px',
      zIndex: 1,
      height: '100%',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      transition: 'left 0.3s ease'
    }}>
      <div className='d-flex justify-content-between px-3 mt-2'>
        {selectedFilter === null ? (
          <span className='' style={{ fontWeight: "500" }}>Filter</span>
        ) : (
          <div className='d-flex justify-content-start'>
            <h6 style={{ fontSize: "15px", cursor: "pointer" }} onClick={handleClearAll}>
              <i class="fa-solid fa-arrow-left"></i>
            </h6>
            <h6 className='px-3'>{selectedFilter}</h6>
          </div>
        )}
        <p onClick={onClose}><i class="fa-solid fa-xmark"></i></p>
      </div>
      <div className='justify-content-between px-3 mt-2'>
        {selectedFilter === null ? (
          ""
        ) : (
          <div className="search-container mb-1">
            <input
              type="text"
              placeholder={getPlaceholder(selectedFilter)} className='w-100 px-2'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        )}
      </div>
      <div className='px-3 filter-sec'>
        {selectedFilter === null ? (
          // Main filter content
          <div className="filter-menu">
            {/* Sort section */}
            <div className="sort-section">
              <h6 className='fw-bold'>Sort by</h6>
              <div className="sort-options px-2">
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
            {/* Filter section */}
            <div className="filter-section">
              <div className='d-flex justify-content-between py-2'>
                <h6 className='fw-bold'>Filter by</h6>
                <h6 style={{ fontSize: "15px", cursor: "pointer" }} onClick={handleClearAll}>Clear all</h6>
              </div>
              <ul className="filter-options px-2">
                {filters.map(filter => (
                  <li key={filter} className="filter-item">
                    <Link
                      to="#"
                      className="filter-link d-flex justify-content-between"
                      style={{ fontSize: "15px", color: selectedFilter === filter ? "#007bff" : "#234" }}
                      onClick={() => handleFilterClick(filter)}
                    >
                      <span className="filter-text">{filter}</span>
                      <i className="fa-solid fa-greater-than small-icon"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          // Size filter section
          <div className="filter-content">
            {showSizeFilter ? (
              // Size filter section
              <div className="sort-options px-2">
                {['S', 'M', 'L'].map(option => (
                  <div key={option} className="sort-option">
                    <input
                      type="checkbox"
                      id={option}
                      name="size"
                      value={option}
                      checked={SizeBy.includes(option)}
                      onChange={() => handleSizeSelection(option)}
                      className="large-checkbox"
                    />
                    <label htmlFor={option} style={{ fontSize: "13px" }}>{option}</label>
                  </div>
                ))}
              </div>
            ) : (
              // Color filter section
              <div className="color-filter-container">
                <div className="color-list">
                  <div className='row px-3'>
                    {filteredColors.map((color) => (
                      <div
                        key={color.name}
                        className={`color-item col-md-6 ${isColorSelected(color.name) ? 'selected' : ''}`}
                        onClick={() => toggleColorSelection(color.name)}>
                        <span
                          className="color-box"
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        <span style={{ fontSize: "14px" }}>{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className='actions-container bg-white' style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {selectedFilter === null ? (
          ''
        ) : (
          <>
            <button className="clear-button" onClick={handleClearAll}>
              CLEAR ALL
            </button>
            <button className="apply-button">
              APPLY
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
