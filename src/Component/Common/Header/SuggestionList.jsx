import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchResult } from '../../../action/searchResultAction';
import { useNavigate } from 'react-router-dom';

const SuggestionsList = ({ suggestions, listSearch }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLiClick = useCallback((keyword) => {
        const lowercasedKeyword = keyword.toLowerCase();
        const results = suggestions.filter(suggestion =>
            suggestion.brand.toLowerCase().includes(lowercasedKeyword) ||
            suggestion.category.toLowerCase().includes(lowercasedKeyword) ||
            suggestion.sub_category.toLowerCase().includes(lowercasedKeyword) ||
            suggestion.tag_keywords.toLowerCase().includes(lowercasedKeyword)
        );
        dispatch(getSearchResult(results));
        listSearch(keyword);
        navigate(`/result/${keyword}`);
    }, [dispatch, navigate, suggestions, listSearch]);

    return (
        <div className='suggestion-container'>
            {suggestions.length > 0 ? (
                <ul className="bottom-0 suggestion-ul">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleLiClick(suggestion.brand)} key={suggestion._id}>
                            {suggestion.brand}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No matching products found.</p>
            )}
        </div>
    );
};

export default SuggestionsList;
