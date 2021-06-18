import React from 'react';
import { subredditsSlice } from '../features/Subreddits/subredditsSlice';

const url = 'https://www.reddit.com';


// Fetch subredits 
export const fetchSubReddits = async () => {
    const endpoint = `${url}/subreddits.json`;
    const response = await fetch(endpoint);
    
    const jsonResponse = await response.json();

    return jsonResponse.data.children.map(subreddit => subreddit.data);
}

// Fetch Posts 

export const fetchPosts = async (subreddit) => {
    let endpoint;
    
    if (subreddit) {
        endpoint = `${url}/${subreddit}/hot.json`;
    } else {
        endpoint =`${url}/hot.json`
    }

    const response = await fetch(endpoint);
    const jsonResponse = await response.json();

    return jsonResponse.data.children;
}

// Fetch by Type: New
export const fetchNewPosts = async (subreddit) => {
    let endpoint;
    if (subreddit) {
        endpoint = `${url}/${subreddit}/new.json`;
    } else {
        endpoint = `${url}/new.json`;
    }
    
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
}

// Fetch by Type: Top
export const fetchTopPosts = async (subreddit) => {
    let endpoint;
    if (subreddit) {
        endpoint = `${url}/${subreddit}/top.json`;
    } else {
        endpoint = `${url}/top.json`;
    }

    const response = await fetch(endpoint);
    const jsonResponse = await response.json();

    return jsonResponse.data.children;
}
// Fetch About 

export const fetchAbout = async (subreddit, id) => {
    const endpoint = `${url}/r/${subreddit}/comments/${id}/.json`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    console.log("json Response: " + jsonResponse);
    console.log(jsonResponse);
    return jsonResponse;
}
// Search 

export const fetchSearch = async (searchTerm) => {
    const endpoint = `${url}/search.json?q=${searchTerm}`;
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();

    return jsonResponse.data.children;
}