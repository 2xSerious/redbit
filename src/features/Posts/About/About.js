import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadAboutPost, selectComments, selectPostAbout, selectIsLoadingAbout } from "./aboutSlice";
// import timeConvert  from "../../../app/utils/timeConvert";

import { ImUndo2 } from "react-icons/im";
import {IconContext} from "react-icons";
import Comments from "./Comments";
import LoaderPost from "../../Loader";
import "../Post.css";

function About ({match}){
  const dispatch = useDispatch();
  const post = useSelector(selectPostAbout);
  const isLoading = useSelector(selectIsLoadingAbout);
  let comments = useSelector(selectComments);
  let history = useHistory();
  const { subreddit, id } = match.params; 
  comments = comments.slice(0, comments.length-1);

  useEffect(() => {
      dispatch(loadAboutPost({subreddit: subreddit, id: id}));
  }, [dispatch, subreddit, id]);
  
 console.log(comments)
 console.log(post)

  return (
      <div> 
          <LoaderPost />
      {!isLoading && 
    <div className="post-container" >
      <span className="post-details">
        {/* <img src={post.data.icon_img} alt="avatar" className="subreddit-avatar" /> */}
        {/* <GrReddit /> */}
        <div className="profiles">
          <div className="subreddit-name">
            {post.subreddit_name_prefixed}
          </div>
          <div className="username">{post.author}</div>
        </div>
        <button className="go-back" onClick={history.goBack}>
            <IconContext.Provider value={{ size: "1.5em"}} >
            <ImUndo2 /> 
            </IconContext.Provider>
        </button>
        {/* <div className="time-posted">{timeConvert(post.created_utc)}</div> */}
      </span>
      <div className="post-inside">
        <h3>{post.title}</h3>
        {post.url ? (
          <img src={post.url} alt="" className="post-image" />
        ) : (
          ""
        )}
      </div>
      <div className="comments-section">
          {
              comments.map(comment => {
                  return (
                      <div className="comment" key={comment.data.id}>
                          <Comments comment={comment} />
                      </div>
                  )
              })
          }
      </div>
    </div>}
    </div>
  )
};

export default About;
