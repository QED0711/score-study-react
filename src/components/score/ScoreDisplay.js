import React, { useContext, useEffect, useState } from "react";

import { ComposerContext } from "../../state/ComposerProvider";
import { UserContext } from "../../state/UserProvider";

// COMPONTENTS
import CommentModal from './CommentModal';

const ScoreDisplay = ({ scoreURL }) => {
  const { state: composerState } = useContext(ComposerContext);
  const { state: userState } = useContext(UserContext);

  const [pdf, setPdf] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleCommentClick = e => {
    setShowCommentModal(true);
  }

  const handleShowOtherComments = e => {
    
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
          <button>
            See Other Comments
          </button>
        </>
      }

      
      <button>
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
    </div>
  );
};

export default ScoreDisplay;
