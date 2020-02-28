import React, { useState, useEffect, useContext } from "react";

// STATE
import { ComposerContext } from "../../state/ComposerProvider";

// COMPONENTS
import ComposerCheckbox from "./ComposerCheckbox";

const Period = ({ title, era, composers }) => {

  // STATE
  const {state: cs, stateMethods: csm} = useContext(ComposerContext)
  const [allSelected, setAllSelected] = useState(false)
  const [anySelected, setAnySelected] = useState(false)


  // Filter only composers who match the specified era
  const validComposers = composers.filter(c => {
    return c.period === era;
  });

  // Render each valid composer to a checkbox
  const periodComposers = validComposers.map((composer, i) => {
    return <ComposerCheckbox key={i} composer={composer} />;
  });


  // HELPERS
  const selectAllFromPeriod = e => {
    const periodComposers = [...document.querySelectorAll(`.period-${era} .composer-selected-false`)]
    const newSelected = periodComposers.map(composer => composer.dataset.fullname)
    // debugger
    csm.setSelectedComposers([...cs.selectedComposers, ...newSelected])
  }

  const clearAllFromPeriod = e => {
    const selected =  [...document.querySelectorAll(`.period-${era} .composer-selected-true`)].map(composer => composer.dataset.fullname)
    csm.setSelectedComposers(cs.selectedComposers.filter(composer => !selected.includes(composer)))
  }


  // ON LOAD
  useEffect(() => {
    setAllSelected(document.querySelectorAll(`.period-${era} .composer-selected-true`).length === document.querySelectorAll(`.period-${era} .composer-checkbox`).length)

    setAnySelected(!!document.querySelectorAll(`.period-${era} .composer-selected-true`).length)
  }, [cs.selectedComposers])


  return (
    <section className={`period period-${era}`}>
      <div className="period-title-banner">
        <h3 className="period-title">{title}</h3>
        <button className="btn" onClick={selectAllFromPeriod} disabled={allSelected}>Select All</button>
        <button className="btn" onClick={clearAllFromPeriod} disabled={!anySelected}>Clear Selections</button>
      </div>
      <div className="period-background-overlay">
        <div className="period-checkboxes">
          {periodComposers}
        </div>
      </div>
    </section>
  );
};

export default Period;
