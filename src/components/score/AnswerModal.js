import React from 'react'

const AnswerModal = ({ setShowAnswerModal, selectedScore }) => {

    // EVENTS
    const handleCloseModal = e => {
        setShowAnswerModal(false)
    }

    return (
        <div className="modal-background">
            <div className="modal-body answer-modal">
                <h1>{selectedScore.composer}</h1>
                <h2>{selectedScore.title}</h2>
                <h3>*Date published: {selectedScore.date}</h3>
                <h4>Tags: {selectedScore.tags.join(", ")}</h4>

                <p><em>* Published dates are retrieved directly from IMSLP.org, and may not be accurate or representative of when the piece was actually written. Make sure to do additional research to confirm these dates.</em></p>

                <button onClick={handleCloseModal}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default AnswerModal;