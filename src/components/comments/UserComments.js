import React, { useContext, useEffect } from 'react'

// STATE
import { UserContext } from '../../state/UserProvider';

// API
import { getUserComments } from '../../js/apiRequests';

// ROUTER
import {Redirect} from 'react-router-dom';

// COMPONENTS
import CommentPreviewBox from './CommentPreviewBox';
import ScoreDisplay from '../score/ScoreDisplay';

const UserComments = () => {

    const { state, stateMethods } = useContext(UserContext);

    // HELPERS
    const renderComments = (comments) => {
        return comments.map((c, i) => {
            return <CommentPreviewBox key={i} comment={c} />
        })
    }


    // ON LOAD
    useEffect(() => {
        state.user
        &&
        getUserComments({userID: state.user.userID}, stateMethods)
    }, [])

    if(!state.user){
        return <Redirect to="/" />
    } else {
        return (
            <>
            <div className="container user-comments-container">
                {renderComments(state.userComments)}
            </div>
            <ScoreDisplay />
            </>
        )
    }


}

export default UserComments;