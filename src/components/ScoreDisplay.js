import React, { useContext, useEffect, useState } from "react";

import { ComposerContext } from "../state/ComposerProvider";

const ScoreDisplay = () => {
  const { state: composerState } = useContext(ComposerContext);

  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    if (composerState.selectedScore) {
      setPdf(composerState.selectedScore.pdfs[
        Math.floor(Math.random() * composerState.selectedScore.pdfs.length)
      ])
    }
  }, [composerState.selectedScore]);

  if (!composerState.selectedScore)
    return <div className="score-display"></div>;


  const pageNum = Math.floor(Math.random() * 10) + 5;
  return (
    <div className="score-display">
      <iframe
        src={`${pdf}#page=${pageNum}&toolbar=0&navpanes=1&scrollbar=0`}
        type="application/pdf"
        style={{ height: 800, width: "90%", overflow: "hidden" }}
      ></iframe>
    </div>
  );
};

export default ScoreDisplay;
