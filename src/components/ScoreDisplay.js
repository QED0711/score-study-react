import React, { useContext } from "react";

import ComposerContext from "../contexts/ComposerContext";

const ScoreDisplay = () => {
  const { selectedScore } = useContext(ComposerContext);
  console.log(selectedScore);
  const pdf =
    selectedScore.pdfs[Math.floor(Math.random() * selectedScore.pdfs.length)];

  const pageNum = Math.floor(Math.random() * 50) + 5;
  return (
    <div className="score-display">
      <iframe
        scrolling="no"
        src={`${pdf}#page=${pageNum}`}
        style={{ height: 800, width: "90%" }}
      ></iframe>
    </div>
  );
};

export default ScoreDisplay;
