import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts, selectIsLoading } from './postsSlice';
import PostContainer from './postContainer';
import LoaderPost from '../Loader';
import "./Post.css";



const Posts = () => {
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);
    
    return (
      <div>
      <LoaderPost />

       { !isLoading &&
          <div>
            
        {posts.map((post) => {
          return (
            <div key={post.data.id}>
              <PostContainer post={post} />
            </div>
          );
        })}
        
      </div>}
      </div>
    )
    
    
};

export default Posts;