import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IconContext } from "react-icons";

import { ImFire, ImNewspaper, ImRocket } from "react-icons/im";
import { loadNewPosts, loadPosts, loadTopPosts } from "../Posts/postsSlice";
import './Type.css';

const Type = () => {
  
  const dispatch = useDispatch();

  const handleHotOnClick = () => {
    dispatch(loadPosts());
  };

  const handleNewOnClick = () => {
      dispatch(loadNewPosts());
  };
  
  const handleTopOnClick = () => {
      dispatch(loadTopPosts());
  };

  return (
    <div className="icons">
      <Link to="/">
        <button className="btn-type-hot" onClick={() => handleHotOnClick()}>
          <IconContext.Provider value={{ size: "1.5em", className: "react-icons" }}>
          <ImFire /> <span>Hot</span>
          </IconContext.Provider>
        </button>
      </Link>
      <Link to="/new/">
        <button className="btn-type-new" onClick={() => handleNewOnClick()}>
        <IconContext.Provider value={{ size: "1.5em", className: "react-icons"}}>
          <ImNewspaper /> <span>New</span>
          </IconContext.Provider>
        </button>
      </Link>
      <Link to="/top/">
          <button className="btn-type-top" onClick={() => handleTopOnClick()}>
          <IconContext.Provider value={{ size: "1.5em", className: "react-icons"}}>
              <ImRocket /> <span>Top</span>
              </IconContext.Provider>
          </button>
      </Link>
    </div>
  );
};

export default Type;