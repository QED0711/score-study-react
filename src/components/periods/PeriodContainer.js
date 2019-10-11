import React, { useContext } from "react";

import ComposerContext from '../../contexts/ComposerContext';

import Period from "./Period";

const PeriodContainer = () => {
  
    const composers = useContext(ComposerContext)
    console.log(composers)
  
    return (
    <div className="period-container">
      <h1>Period Container</h1>
      <Period title={"Medieval & Ren."} era={"early"} composers={composers} />
      <Period title={"Baroque"} era={"baroque"} composers={composers} />
      <Period title={"Classical"} era={"classical"} composers={composers} />
      <Period title={"Romantic"} era={"romantic"} composers={composers} />
      <Period title={"20th Century"} era={"20th"} composers={composers} />
    </div>
  );
};

export default PeriodContainer;
