import React from 'react';

const SuggestionsList = ({ suggestions}) => {
  
    return (
        <>
        <div className='suggestion-container'>

            {suggestions.length > 0 ? (
                <ul className="bottom-0 suggestion-ul">
                    {suggestions.map(suggestion => (
                        <li key={suggestion._id}>
                            {suggestion.brand}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No suggestions found.</p>
            )}
        </div>
        </>
    );
};

export default SuggestionsList;
