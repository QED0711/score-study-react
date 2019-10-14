import React, { useContext } from "react";

import ComposerContext from "../contexts/ComposerContext";

const ScoreDisplay = () => {
  const { selectedScore } = useContext(ComposerContext);
  console.log(selectedScore);
  const pdf =
    selectedScore.pdfs[Math.floor(Math.random() * selectedScore.pdfs.length)];

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
