import React from 'react'

const OtherCommentCards = ({ comments }) => {

    const renderOtherComments = () => {

        return comments.map((comment, i) => {
            return(
                <div key={i} className="comment-card">
                    {comment.content}
                </div>
            )
        })

    }

    return (
        <div className="other-comment-cards">
            {
                comments.length 
                ?
                renderOtherComments()
                :
                "No other user comments for this score. Be the first to comment!"
            }
        </div>
    )

}

export default OtherCommentCards;