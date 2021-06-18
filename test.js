import React from 'react';


const api = 'https://www.reddit.com/';

const getSubreddits = async () => {
    const response = await fetch(`${api}subreddits.json`);
    const json = await response.json();
   return  console.log(json);
}
getSubreddits();