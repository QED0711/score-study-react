import React, { useContext, useEffect } from "react";

import ComposerContext from "../../contexts/ComposerContext";
import { UserContext } from "../../state/UserProvider";
import {
  getAllWorks,
  getComposerWorks,
  getComposers
} from "../../js/apiRequests";

import randomScore from "../../js/randomScore";

import Period from "./Period";

const PeriodContainer = () => {
  const {
    composers,
    selectedComposers,
    scores,
    setScores,
    setSelectedScore
  } = useContext(ComposerContext);
  const { state: s, statemethods: sm } = useContext(UserContext);

  useEffect(() => {
    if (selectedComposers.length) {
      getComposerWorks(selectedComposers, setScores);
    } else {
      setScores([]);
    }
  }, [selectedComposers]);

  return (
    <div className="period-container">
      {s.user && <h3>Signed in as {s.user.username}</h3>}
      {composers && (
        <div>
          <Period
            title={"Medieval & Ren."}
            era={"early"}
            composers={composers}
          />
          <Period title={"Baroque"} era={"baroque"} composers={composers} />
          <Period title={"Classical"} era={"classical"} composers={composers} />
          <Period title={"Romantic"} era={"romantic"} composers={composers} />
          <Period title={"20th Century"} era={"20th"} composers={composers} />
        </div>
      )}
      {!!selectedComposers.length && (
        <button
          onClick={e => {
            randomScore(scores, setSelectedScore);
          }}
        >
          New Score
        </button>
      )}
    </div>
  );
};

export default PeriodContainer;
