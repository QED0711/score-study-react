import React, {useContext, useEffect} from 'react'

// STATE
import { ComposerContext } from '../../state/ComposerProvider'

// API
import {getWorkComments} from "../../js/apiRequests"
import OtherCommentCards from './OtherCommentsCards'

const OtherCommentsModeal = ({ setShowOtherCommentsModal }) => {

    // STATE
    const {state: cs, stateMethods: csm} = useContext(ComposerContext)

    // EVENTS
    const closeModal = e => {
        setShowOtherCommentsModal(false);
    }

    // ON LOAD
    useEffect(() => {
        console.log(cs)
        getWorkComments({workID: cs.selectedScore._id}, csm)
    }, [])

    return (
        <div className="modal-background">
            <div className="modal-body">
                {
                    cs.selectedScoreComments
                    &&
                    <OtherCommentCards comments={cs.selectedScoreComments} />
                }

                

                <button onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    )

}

export default OtherCommentsModeal;