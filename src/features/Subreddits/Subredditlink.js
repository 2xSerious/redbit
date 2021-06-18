import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../Posts/Posts';
import { loadPosts } from '../Posts/postsSlice';



const Subredditlink = ({match}) => {
    const dispatch = useDispatch();
    const current = match.params.id;
    const prefixCurrent = 'r/' + current;

    useEffect(() => {
        dispatch(loadPosts(prefixCurrent));
    }, [dispatch, match.params.id]);

    return ( 
        <Posts />
    )

}

export default Subredditlink;