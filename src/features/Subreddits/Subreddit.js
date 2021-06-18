import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSubredditsList, loadSubreddits } from "./subredditsSlice";
import { IconContext } from "react-icons";
import { ImReddit } from "react-icons/im";
import "./Subreddits.css";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubredditsList);
  const defaultAvatar = <IconContext.Provider value={{ size: "1.5em", color: "orange"}}> <ImReddit /></IconContext.Provider>; 
  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddits-aside">
      <h2>Subreddits</h2>
      {subreddits.map((subreddit) => {
        return (
          <Link to={`/${subreddit.display_name_prefixed}`}>
            <div className="avatar-image">
              {subreddit.icon_img ? <img src={subreddit.icon_img} alt="avatar" /> : defaultAvatar}
              <div>{subreddit.display_name_prefixed}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Subreddits;
