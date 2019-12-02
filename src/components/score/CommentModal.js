import React, { useContext } from 'react';

// STATE
import { UserContext } from '../../state/UserProvider';
import { ComposerContext } from '../../state/ComposerProvider';

// API
import { createComment } from '../../js/apiRequests'

const CommentModal = ({ setShowCommentModal, scoreURL }) => {

    const { state: userState } = useContext(UserContext)
    const { state: composerState } = useContext(ComposerContext)

    const handleSaveComment = e => {
        // get comment content
        const content = document.getElementById("comment-content").value;

        // get other information to save content
        const { userID } = userState.user;
        const workID = composerState.selectedScore._id

        const commentData = {
            content,
            userID,
            workID,
            scoreURL
        }

        // send request to create the comment
        createComment(commentData)

        // close the modal
        setShowCommentModal(false);

    }

    return (
        <div className="comment-modal-background">
            <div className="comment-modal-content">
                <h3>Comment</h3>
                <textarea id="comment-content"></textarea>
                <button>
                    Cancel
                </button>
                <button onClick={handleSaveComment}>
                    Save Comment
                </button>
            </div>
        </div>
    )

}

export default CommentModal