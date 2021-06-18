import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadPosts } from "./postsSlice";


import Posts from "./Posts";

const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  
  return (
    <Posts />
  );
};

export default Home;
