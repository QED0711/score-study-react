import React, { useContext, useEffect, useState } from 'react';

// STATE
import { UserContext } from '../../state/UserProvider';
import { ComposerContext } from '../../state/ComposerProvider';

// API
import { createComment, getUserWorkComment, editComment } from '../../js/apiRequests'

const CommentModal = ({ setShowCommentModal, scoreURL }) => {

    const { state: userState } = useContext(UserContext)
    const { state: composerState } = useContext(ComposerContext)

    const [previousCommentID, setPreviousCommentID] = useState(null);

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

        // If a user has already commented, update rather than create
        previousCommentID ?
        // send request to edit previously existing
        editComment({content, userID, commentID: previousCommentID})
        :
        // send request to create the comment
        createComment(commentData)

        // close the modal
        setShowCommentModal(false);

    }

    const handleCancelClick = e => {
        setShowCommentModal(false);
    }

    useEffect(() => {
        // on load, check if user has already submitted a comment for this work
        // if so, pre-populate the comment box with their previous comment for editing
        const checkForPreviousComments = async () => {
            const previousComment = await getUserWorkComment({
                userID: userState.user.userID,
                workID: composerState.selectedScore._id
            })

            // save previous comment ID for later so we can edit instead of creating new
            if (previousComment){
                setPreviousCommentID(previousComment._id)
            }
            
            document.getElementById("comment-content").value = previousComment ?
            previousComment.content
            :
            ""
        }

        checkForPreviousComments();

    })

    return (
        <div className="modal-background">
            <div className="modal-body">
                <h3>Comment</h3>
                <textarea id="comment-content"></textarea>
                <button className="btn" onClick={handleCancelClick}>
                    Cancel
                </button>
                <button className="btn" onClick={handleSaveComment}>
                    Save Comment
                </button>
            </div>
        </div>
    )

}

export default CommentModal