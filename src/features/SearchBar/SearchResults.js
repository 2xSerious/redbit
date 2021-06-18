import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loadSearchResults } from '../Posts/postsSlice';

import Posts from '../Posts/Posts';

const SearchResults = ({ match }) => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(loadSearchResults(match.params.id));
    }, [dispatch, match.params.id]);

    return ( 
      <Posts />
    )
}
export default SearchResults;

