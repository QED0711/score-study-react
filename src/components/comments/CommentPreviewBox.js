import React from 'react';

const CommentPreviewBox = ({comment}) => {

    const handleClick = () => {
        console.log(comment.scoreURL)
    }

    return(
        <div className="comment-preview-box">
            <p>{comment.content}</p>
            <p>{comment.workID}</p>
            <button onClick={handleClick}>See Score</button>
        </div>
    )

}

export default CommentPreviewBox;