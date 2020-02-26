import React, { useContext, useEffect, useState } from "react";

import { ComposerContext } from "../../state/ComposerProvider";
import { UserContext } from "../../state/UserProvider";

// COMPONTENTS
import CommentModal from './CommentModal';
import OtherCommentsModal from './OtherCommentsModal'
import AnswerModal from './AnswerModal';

const ScoreDisplay = ({ scoreURL }) => {

  // STATE
  const { state: composerState } = useContext(ComposerContext);
  const { state: userState } = useContext(UserContext);

  const [pdf, setPdf] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showOtherCommentsModal, setShowOtherCommentsModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  // EVENTS

  const handleCommentClick = e => {
    setShowCommentModal(true);
  }

  const handleShowOtherComments = e => {
    setShowOtherCommentsModal(true)
  }

  const handleShowAnswer = e => {
    setShowAnswerModal(true)
  }

  useEffect(() => {
    if (composerState.selectedScore) {
      if (!scoreURL) { // if no score url has been provided, generate one
        setPdf(composerState.selectedScore.pdfs[
          Math.floor(Math.random() * composerState.selectedScore.pdfs.length)
        ])
      }
    }
  }, [composerState.selectedScore]);

  if (!composerState.selectedScore)
    return <div className="score-display"></div>;

  let pageNum;
  if (!scoreURL) { // if no scoreURL has been provided, create random pagenum too
    pageNum = Math.floor(Math.random() * 10) + 5;
  }
  return (
    <div className="score-display">
      {
        userState.user
        &&
        <>
          <button onClick={handleCommentClick}>
            Comment
          </button>
          <button onClick={handleShowOtherComments}>
            See Other Comments
          </button>
        </>
      }

      <button onClick={handleShowAnswer}>
        See Answer
      </button>

      <br />

      <iframe
        src={scoreURL ? scoreURL : `${pdf}#page=${pageNum}&toolbar=0&navpanes=1&scrollbar=0`}
        type="application/pdf"
        style={{ height: 800, width: "90%", overflow: "hidden" }}
      ></iframe>

      {
        showCommentModal
        &&
        <CommentModal
          setShowCommentModal={setShowCommentModal}
          scoreURL={scoreURL ? scoreURL : `${pdf}#page=${pageNum}&toolbar=0&navpanes=1&scrollbar=0`}
        />
      }

      {
        showOtherCommentsModal
        &&
        <OtherCommentsModal setShowOtherCommentsModal={setShowOtherCommentsModal} />
      }
      
      {
        showAnswerModal
        &&
        <AnswerModal setShowAnswerModal={setShowAnswerModal} selectedScore={composerState.selectedScore} />
      }
    </div>
  );
};

export default ScoreDisplay;
