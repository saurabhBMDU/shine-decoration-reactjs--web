import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchResult } from '../../../action/searchResultAction';
import { useNavigate } from 'react-router-dom';

const SuggestionsList = ({ suggestions, listSearch ,setQuery}) => {
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
        console.log('results from list' , results)
        setQuery(results[0].product_name)
        listSearch(keyword);
        navigate(`/result/${keyword}`);
    }, [dispatch, navigate, suggestions, listSearch]);

    return (
        <div className='suggestion-container'>
            {suggestions.length > 0 ? (
                <ul className="bottom-0 suggestion-ul">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleLiClick(suggestion.brand)} key={suggestion._id}>
                            <section className='section-sug'>
                                <div className='img-cont'  >
                                    <img src={suggestion.productImage} alt='' />
                                </div>
                                <div className='text-cont' style={{}}>
                                    <h5 className='fs-6'>{suggestion.product_name}</h5>
                                    <h6 className='  '>in {suggestion.category}</h6>
                                </div>
                                
                            </section>
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
