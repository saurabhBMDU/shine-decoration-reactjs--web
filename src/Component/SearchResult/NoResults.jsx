import React, { useCallback, useEffect, useRef, useState } from "react";
import './searchResult.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResult } from "../../action/searchResultAction";
import { fetchProduct } from "../../action";
const NoResults = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const products = useSelector((state) => state.productData.data?.result?.products || [] );
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const queryRef = useRef(query);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    useEffect(() => {
        queryRef.current = query;
        handleSearch(query); // Call this here to avoid re-triggering
    }, [query]); // Ensure this only runs when `query` changes

    const handleQuery = useCallback((e) => {
        const { value } = e.target;
        setQuery(value);
        setActive(value.trim().length > 0);
    }, []);

    const handleSearch = useCallback((searchQuery) => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const results = products.filter(product =>
            product.category.toLowerCase().includes(lowercasedQuery) ||
            product.sub_category.toLowerCase().includes(lowercasedQuery) ||
            product.tag_keywords.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredProducts(results); // Set filtered products
    }, [products]); // Dependency on products

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const searchQuery = queryRef.current.trim();
        if (!searchQuery) return; // Prevent empty searches
        handleSearch(searchQuery); // Update filteredProducts
        dispatch(getSearchResult(filteredProducts));
        navigate(`/result/${searchQuery}`);
        setActive(false);
        setQuery('');
    }, [dispatch, navigate, filteredProducts, handleSearch]); // Include filteredProducts
  return (
    <div className="search-container-no position-relative">
        <form onSubmit={handleSubmit}>
        <input type="text"
        value={query}
        onChange={handleQuery}
         className="searchbar-no" placeholder="search bowl ,vase ,cup ,furniture etc"/>
        <button type="submit" className="position-absolute searchbtn" >
                <i
                    className="fa-solid fa-magnifying-glass px-3"
                    style={{
                        color: "#EDB70B",
                    }}
                ></i>
            </button>
        </form>
    </div>
  )
};

export default NoResults;
