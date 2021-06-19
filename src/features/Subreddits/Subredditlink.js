import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import { loadPosts } from '../Posts/postsSlice';



const Subredditlink = ({match}) => {
    const dispatch = useDispatch();
    const current = match.params.id;
    const prefixCurrent = 'r/' + current;

    useEffect(() => {
        dispatch(loadPosts(prefixCurrent));
    }, [dispatch, prefixCurrent);

    return ( 
        <Posts />
    )

}

export default Subredditlink;