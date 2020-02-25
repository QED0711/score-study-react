import React, { useContext } from "react";

import ComposerCheckbox from "./ComposerCheckbox";

const Period = ({ title, era, composers }) => {
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
    const periodComposers = document.querySelectorAll(`.period-${era} .composer-selected-false`)
    periodComposers.forEach(composer => composer.click())
  }

  return (
    <section className={`period period-${era}`}>
      <div className="period-title-banner">
        <h3 className="period-title">{title}</h3>
        <button onClick={selectAllFromPeriod}>Select All</button>
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
