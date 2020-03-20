import React, { useContext, useEffect, useState } from "react";

import { ComposerContext } from "../../state/ComposerProvider";
import { UserContext } from "../../state/UserProvider";

// HELPERS
import processRandomPDF from '../../js/processRandomPDF';

// COMPONTENTS
import CommentModal from './CommentModal';
import OtherCommentsModal from './OtherCommentsModal'
import AnswerModal from './AnswerModal';
import ScoreFrame from "./ScoreFrame";

const ScoreDisplay = ({ scoreURL }) => {

  // STATE
  const { state: composerState } = useContext(ComposerContext);
  const { state: userState } = useContext(UserContext);

  const [pdf, setPdf] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showOtherCommentsModal, setShowOtherCommentsModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [pageNum, setPageNum] = useState(0)

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
        console.log("GEN SCORE AND PAGE NUM")
        setPdf(processRandomPDF(composerState.selectedScore.pdfs))
        setPageNum(Math.floor(Math.random() * 10) + 5)
      }
    }
  }, [composerState.selectedScore]);

  if (!composerState.selectedScore)
    return <div className="score-display"></div>;

  // let pageNum;
  // if (!scoreURL) { // if no scoreURL has been provided, create random pagenum too
  //   console.log("GENERATED PAGE NUM")
  //   pageNum = Math.floor(Math.random() * 10) + 5;
  // }

  return (
    <div className="score-display">

      {
        userState.user
        &&
        <>
          <button className="btn" onClick={handleCommentClick}>
            Comment
          </button>
          <button className="btn" onClick={handleShowOtherComments}>
            See Other Comments
          </button>
        </>
      }

      <button className="btn" onClick={handleShowAnswer}>
        See Answer
      </button>

      <br />
      {
        (scoreURL || pdf)
        &&
        <ScoreFrame pdf={scoreURL ? scoreURL : pdf} pageNum={pageNum} applyPageNum={!scoreURL} />
      }
      {/* {
        pdf && pdf.secure 
        ?
        <iframe
          src={scoreURL ? scoreURL : `${pdf.processedPDF}#page=${pageNum}&toolbar=0&navpanes=1&scrollbar=0`}
          type="application/pdf"
          style={{ height: 800, width: "90%", overflow: "hidden" }}
        ></iframe>
        :
        <h3>
          The requested score is not served over a secure connection, and cannot be loaded in this application. 
          You can view the score in another window 
            {
            pdf ? <a href={pdf.pdf} target="_blank"> here</a> : "here"
            }
        </h3>
      } */}

      {
        showCommentModal
        &&
        <CommentModal
          setShowCommentModal={setShowCommentModal}
          // pdf={scoreURL ? scoreURL : pdf}
          // pageNum={pageNum}
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
