import React, { useContext } from "react";

import ComposerContext from '../../contexts/ComposerContext';

import Period from "./Period";

const PeriodContainer = () => {
  
    const composers = useContext(ComposerContext)
    console.log(composers)
  
    return (
    <div className="period-container">
      <h1>Period Container</h1>
      <Period era={"early"} composers={composers} />
      <Period era={"baroque"} composers={composers} />
      <Period era={"classical"} composers={composers} />
      <Period era={"romantic"} composers={composers} />
      <Period era={"20th"} composers={composers} />
    </div>
  );
};

export default PeriodContainer;
