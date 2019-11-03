import React, { useContext } from "react";

import {ComposerContext} from "../state/ComposerProvider";

const ScoreDisplay = () => {
  const { state: cs } = useContext(ComposerContext);
  
  if(!cs.selectedScore) return <div className="score-display"></div>

  const pdf =
    cs.selectedScore.pdfs[Math.floor(Math.random() * cs.selectedScore.pdfs.length)];

  const pageNum = Math.floor(Math.random() * 10) + 5;
  return (
    <div className="score-display">
      <iframe
        onScroll={e => {
          e.preventDefault();
          console.log("SCROLLING")
        }}
        src={`${pdf}#page=${pageNum}`}
        scrolling="no"
        style={{ height: 800, width: "90%", overflow: "hidden" }}
      ></iframe>
    </div>
  );
};

export default ScoreDisplay;
