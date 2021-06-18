import React from "react";

import "./postContainer.css";
import timeConvert from "../../app/utils/timeConvert";
import { Link } from "react-router-dom";
import { ImArrowUp, ImArrowDown, ImBubbles2 } from "react-icons/im";
import { IconContext } from "react-icons";

function PostContainer({ post }) {
  return (
    <Link to={`/${post.data.subreddit_name_prefixed}/${post.data.id}/`}>
      <div className="post-container">
        <span className="post-details">
          {/* <img src={post.data.icon_img} alt="avatar" className="subreddit-avatar" /> */}
          {/* <GrReddit /> */}
          <div className="profiles">
            <div className="subreddit-name">
              {post.data.icon_img ? (
                <img src={post.data.icon_img} alt="avatar" />
              ) : (
                ""
              )}
              {post.data.subreddit_name_prefixed}
            </div>
            <div className="username">by {post.data.author}</div>
          </div>
          <div className="time-posted">
            {timeConvert(post.data.created_utc)}
          </div>
        </span>
        <div className="post-inside">
          <h3>{post.data.title}</h3>
          {post.data.url ? (
            <img src={post.data.url} alt="" className="post-image" />
          ) : (
            ""
          )}
          <div className="post-footer">
            <div className="post-score">
              <IconContext.Provider value={{ className: "arrows" }}>
                <ImArrowUp />
                {post.data.score > 1000
                  ? (post.data.score / 1000).toFixed(1) + "k"
                  : post.data.score}
                <ImArrowDown />
              </IconContext.Provider>
            </div>
            <div className="post-comments">
              <IconContext.Provider value={{ className: "comments"}}>
                  <ImBubbles2 />
                {post.data.num_comments > 1000 ? (post.data.num_comments / 1000).toFixed(1) + "k" : post.data.num_comments}
                </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostContainer;
