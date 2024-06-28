import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";
import SuggestionsList from "./SuggestionList";
import { Navigate, useNavigate } from "react-router-dom";

export function SearchBar({ SidebarOpen, handleCloseSidebar }) {
    const [query, setQuery] = useState('');
    const products = useSelector((state) => state.productData.data?.result?.products || []);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate()

    const handleQuery = useCallback((e) => {
        const { value } = e.target;
        setQuery(value);
        setActive(value.trim().length > 0);
    }, []);

    const handleSearch = useCallback((query) => {
        const lowercasedQuery = query.toLowerCase();
        const results = products.filter(product =>
            product.category.toLowerCase().includes(lowercasedQuery) ||
            product.sub_category.toLowerCase().includes(lowercasedQuery) ||
            product.tag_keywords.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredProducts(results);
    }, [products]);

    const handleNavigate= useCallback(()=>{
        
    })

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        navigate('/cart')
    }, [query, handleSearch]);

    useEffect(()=>{
        handleSearch(query)
    },[query])


    console.log(products, 'products');
    console.log(filteredProducts, 'filteredProducts');

    return (
        <form className="gi-search-group-form position-relative" onSubmit={handleSubmit}>
            <input
                className="form-control gi-search-bar rounded"
                placeholder="Search Products..."
                value={query}
                onChange={(e)=>handleQuery(e)}
                onClick={()=>handleSearch(query)}
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
            {active && <SuggestionsList suggestions={filteredProducts} />}
            
            <Sidebar Open={SidebarOpen} onClose={handleCloseSidebar} />
        </form>
    );
}
