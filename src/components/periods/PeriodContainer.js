import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { ComposerContext } from "../../state/ComposerProvider";
import { UserContext } from "../../state/UserProvider";

import {
  getAllWorks,
  getComposerWorks,
  getComposers
} from "../../js/apiRequests";

import randomScore from "../../js/randomScore";

import Period from "./Period";
import GenreFilter from './GenreFilter'

const PeriodContainer = () => {

  const { state: cs, stateMethods: csm } = useContext(ComposerContext);
  const { state: us, statemethods: usm } = useContext(UserContext);

  const handleSelectAll = e => {
    const unselected = [...document.getElementsByClassName("composer-selected-false")]
    const newSelected = unselected.map(composer => composer.dataset.fullname)
    csm.setSelectedComposers([...cs.selectedComposers, ...newSelected])
  }

  const handleClearSelection = e => {
    csm.setSelectedComposers([])
  }

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
      {!us.user
        &&
        <h3>
          You are not signed in. <br /><Link to="/sign-in">Sign in</Link>, or <Link to="/create-account">create an account</Link> to save notes on the scores you view.
        </h3>
      }
      {cs.composers && (
        <div className="period-selection-container">
          <button className="btn" onClick={handleSelectAll}>Select All</button>
          <button className="btn" onClick={handleClearSelection}>Clear Selections</button>
          <Period title={"Medieval & Renaissance"} era={"early"} composers={cs.composers} />
          <Period title={"Baroque"} era={"baroque"} composers={cs.composers} />
          <Period title={"Classical"} era={"classical"} composers={cs.composers} />
          <Period title={"Romantic"} era={"romantic"} composers={cs.composers} />
          <Period title={"20th Century"} era={"20th"} composers={cs.composers} />

          {!!cs.scores.length && <GenreFilter />}


        </div>
      )}
      {
        !!cs.selectedComposers.length ?
          !!cs.filteredScores.length ?
            <button className="btn"
              onClick={e => {
                randomScore(cs.filteredScores, csm.setSelectedScore);
              }}
            >
              New Score ({cs.filteredScores.length})
        </button>

            :
            <h4>Searching for scores...</h4>
          :
          <h4>Please select at least one composer.</h4>
      }
    </div>
  );
};

export default PeriodContainer;
