import React, {useContext, useEffect} from 'react'

// STATE
import { ComposerContext } from '../../state/ComposerProvider'

// API
import {getWorkComments} from "../../js/apiRequests"
import OtherCommentCards from './OtherCommentsCards'
import CloseModal from '../CloseModal'

const OtherCommentsModeal = ({ setShowOtherCommentsModal }) => {

    // STATE
    const {state: cs, stateMethods: csm} = useContext(ComposerContext)

    // EVENTS
    const closeModal = e => {
        setShowOtherCommentsModal(false);
    }

    // ON LOAD
    useEffect(() => {
        getWorkComments({workID: cs.selectedScore._id}, csm)
    }, [])

    return (
        <div className="modal-background">
            <div className="modal-body">
                <CloseModal handleClose={closeModal} />
                {
                    cs.selectedScoreComments
                    &&
                    <OtherCommentCards comments={cs.selectedScoreComments} />
                }

            </div>
        </div>
    )

}

export default OtherCommentsModeal;