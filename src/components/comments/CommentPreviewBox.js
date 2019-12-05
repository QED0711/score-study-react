import React, { useContext } from 'react';

// STATE
import { ComposerContext } from '../../state/ComposerProvider';

// API
import { getWorkByID } from '../../js/apiRequests'

const CommentPreviewBox = ({ comment }) => {

    const { stateMethods: csm } = useContext(ComposerContext);
    
    const handleClick = e => {
        getWorkByID({ workID: comment.workID }, csm)
        csm.setSelectedScoreURL(comment.scoreURL)
    }

    return (
        <div className="comment-preview-box">
            <p className="comment-text comment-work-id">{comment.workID}</p>
            <p className="comment-text comment-content">{comment.content}</p>

            <button onClick={handleClick}>See Score</button>
        </div>
    )

}

export default CommentPreviewBox;