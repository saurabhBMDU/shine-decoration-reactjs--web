import React, { useCallback, useEffect, useState, useRef } from "react";
import Sidebar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import SuggestionsList from "./SuggestionList";
import { fetchProduct } from "../../../action";
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchResult } from "../../../action/searchResultAction";
import UseTypewriterEffect from "../../UserTyperwriter/UseTypewriterEffect";
import { faL } from "@fortawesome/free-solid-svg-icons";

export function SearchBar({ SidebarOpen, handleCloseSidebar }) {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const products = useSelector((state) => state.productData.data?.result?.products || [] );
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const queryRef = useRef(query);
    const {pathname} = useLocation()

    useEffect(()=>{
        if(pathname==='/'){
            setQuery('')
            setActive(false)
        }

    },[pathname])

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
        
    }, [dispatch, navigate, filteredProducts, handleSearch]); // Include filteredProducts

    const listSearch = useCallback((search) => {
        handleSearch(search); // Update filteredProducts
        
        setActive(false);
    }, [handleSearch]);

    // Use the custom hook for the typewriter effect
    const placeholderTexts = ["Search Products...", "flower vase...", "furnitures..."];
    const placeholderText = UseTypewriterEffect(placeholderTexts, 100);

    return (
        <form className="gi-search-group-form position-relative" onSubmit={handleSubmit}>
            <input
                className="form-control gi-search-bar"
                placeholder={placeholderText}
                value={query}
                onChange={handleQuery}
                type="text"
                style={{
                    maxWidth: "28rem",
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
            {active && <SuggestionsList suggestions={filteredProducts} listSearch={listSearch} setQuery={setQuery} />}
            <Sidebar Open={SidebarOpen} onClose={handleCloseSidebar} query={query} />
        </form>
    );
}
