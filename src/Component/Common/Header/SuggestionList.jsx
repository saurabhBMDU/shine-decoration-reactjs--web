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
                            <section className='d-flex   justify-content-start align-items-center ' style={{gap:'10%'}}>
                                <div className='' style={{width:'30%',backgroundColor:'inherit'}}  >
                                    <img src={suggestion.productImage} alt="" style={{width:'40% ' , height:"19%" ,objectFit:'contain'}} />
                                </div>
                                <div className='' style={{}}>
                                    <h5>{suggestion.product_name}</h5>
                                    <h6 className='text-warning'>in {suggestion.category}</h6>
                                </div>
                                <div className='justify-self-end'>
                                <h6>₹{suggestion.selling_price}</h6>
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
