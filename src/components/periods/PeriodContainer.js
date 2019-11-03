import React, { useContext, useEffect } from "react";

import { ComposerContext } from "../../state/ComposerProvider";
import { UserContext } from "../../state/UserProvider";

import {
  getAllWorks,
  getComposerWorks,
  getComposers
} from "../../js/apiRequests";

import randomScore from "../../js/randomScore";

import Period from "./Period";

const PeriodContainer = () => {

  const { state: cs, stateMethods: csm } = useContext(ComposerContext);
  const { state: us, statemethods: usm } = useContext(UserContext);

  useEffect(() => {
    if (!cs.composers) {
      getComposers(csm.setComposers);
    }

    if (cs.selectedComposers.length) {
      getComposerWorks(cs.selectedComposers, csm.setScores);
    } else {
      csm.setScores([]);
    }
  }, [cs.selectedComposers]);

  return (
    <div className="period-container">
      {us.user && <h3>Signed in as {us.user.username}</h3>}
      {cs.composers && (
        <div>
          <Period title={"Medieval & Ren."} era={"early"} composers={cs.composers}/>
          <Period title={"Baroque"} era={"baroque"} composers={cs.composers} />
          <Period title={"Classical"} era={"classical"} composers={cs.composers} />
          <Period title={"Romantic"} era={"romantic"} composers={cs.composers} />
          <Period title={"20th Century"} era={"20th"} composers={cs.composers} />
        </div>
      )}
      {!!cs.selectedComposers.length && (
        <button
          onClick={e => {
            randomScore(cs.scores, csm.setSelectedScore);
          }}
        >
          New Score
        </button>
      )}
    </div>
  );
};

export default PeriodContainer;
