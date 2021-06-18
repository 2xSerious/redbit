import React from 'react';
import timeConvert from '../../../app/utils/timeConvert';
import './comments.css';

const Comments = ({ comment }) => {

    return (
        <div className='comment-container'>
            <span className='comment-details'>
                <div className='username'>
                    {comment.data.author}
                </div>
                <span className="time-posted">{timeConvert(comment.data.created_utc)}</span>
            </span>
            <div className="comment-body">
                {comment.data.body}
            </div>
        </div>
    )
}

export default Comments;