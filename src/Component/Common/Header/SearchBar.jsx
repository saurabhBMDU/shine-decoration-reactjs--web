import React, { useCallback, useEffect, useState, useRef } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import SuggestionsList from "./SuggestionList";
import { fetchProduct } from "../../../action";
import { useNavigate } from 'react-router-dom';
import { getSearchResult } from "../../../action/searchResultAction";

export function SearchBar({ SidebarOpen, handleCloseSidebar }) {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const products = useSelector((state) => state.productData.data?.result?.products || []);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const queryRef = useRef(query);

    useEffect(() => {
        queryRef.current = query;
    }, [query]);

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
        setFilteredProducts(results);
    }, [products]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const searchQuery = queryRef.current;
        handleSearch(searchQuery); // Update filteredProducts
        setActive(false);
        setQuery('');
        // Dispatch with the updated filteredProducts
        dispatch(getSearchResult(filteredProducts));
        navigate(`/result/${searchQuery}`);
    }, [dispatch, navigate, filteredProducts, handleSearch]);

    const listSearch = useCallback((search) => {
        handleSearch(search); // Update filteredProducts
        setQuery('');
        setActive(false);
    }, [handleSearch]);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    useEffect(() => {
        handleSearch(query); // Initial search on mount or query change
    }, [query, handleSearch]);

    return (
        <form className="gi-search-group-form position-relative" onSubmit={handleSubmit}>
            <input
                className="form-control gi-search-bar rounded"
                placeholder="Search Products..."
                value={query}
                onChange={handleQuery}
                type="text"
                style={{
                    maxWidth: "32rem",
                }}
            />
            <button type="submit" className="position-absolute nav-searchicon-container">
                <i
                    className="fa-solid fa-magnifying-glass px-3"
                    style={{
                        color: "#EDB70B",
                    }}
                ></i>
            </button>
            {active && <SuggestionsList suggestions={filteredProducts} listSearch={listSearch} />}
            
            <Sidebar Open={SidebarOpen} onClose={handleCloseSidebar} />
        </form>
    );
}
