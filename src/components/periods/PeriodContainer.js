import React, { useContext, useEffect } from "react";

import ComposerContext from '../../contexts/ComposerContext';
import { getAllWorks, getComposerWorks } from "../../js/apiRequests";

import Period from "./Period";


// FOR TESTING PURPOSES ONLY

const testComposers = [
    {composer: 'Webern, Anton', displayName: "Webern", period: "20th"},
    {composer: 'Beethoven, Ludwig van', displayName: "Beethoven", period: "classical"},
    {composer: 'Berlioz, Hector', displayName: "Berlioz", period: "romantic"},
    {composer: 'Bach, Johann Sebastian', displayName: "JS Bach", period: "baroque"},
    {composer: 'Perotin', displayName: "Perotin", period: "early"},
]

const PeriodContainer = () => {
    // Normally, when this component loads, we would load in the composers from a database call
    const composers = testComposers

    const {selectedComposers} = useContext(ComposerContext)
    
    useEffect(() => {
      getComposerWorks(selectedComposers)
    }, [selectedComposers])


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
