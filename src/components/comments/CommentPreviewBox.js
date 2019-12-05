import React, { useContext } from 'react';

// STATE
import { ComposerContext } from '../../state/ComposerProvider';

// API
import { getWorkByID, deleteComment } from '../../js/apiRequests'

const CommentPreviewBox = ({ comment }) => {

    const { stateMethods: csm } = useContext(ComposerContext);
    
    const handleClick = e => {
        getWorkByID({ workID: comment.workID }, csm)
        csm.setSelectedScoreURL(comment.scoreURL)
    }

    const handleDeleteClick = e => {
        console.log(comment)
        deleteComment({commentID: comment._id})
    }

    return (
        <div className="comment-preview-box">
            <p className="comment-text comment-work-id">{comment.workID}</p>
            <p className="comment-text comment-content">{comment.content}</p>

            <button onClick={handleClick}>See Score</button>
            <button onClick={handleDeleteClick}>Delete Comment</button>
        </div>
    )

}

export default CommentPreviewBox;