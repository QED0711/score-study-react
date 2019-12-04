import React, {useContext} from 'react';

// STATE
import {UserContext} from '../../state/UserProvider';

// API
import {getWorkByID} from '../../js/apiRequests'

const CommentPreviewBox = ({comment}) => {

    console.log(comment)
    const handleClick = e => {
        window.open(comment.scoreURL)
    }

    const handleEditComment = comment => e => {
        getWorkByID({workID: comment.workID})
    }

    return(
        <div className="comment-preview-box">
            <p className="comment-text comment-work-id">{comment.workID}</p>
            <p className="comment-text comment-content">{comment.content}</p>
            
            <button onClick={handleClick}>See Score</button>
            <button onClick={handleEditComment(comment)}>Edit Comment</button>
        </div>
    )

}

export default CommentPreviewBox;