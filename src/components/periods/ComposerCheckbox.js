import React, { useContext } from "react";
import ComposerContext from "../../contexts/ComposerContext";

const ComposerCheckbox = ({ composer }) => {
  const { selectedComposers, setSelectedComposers } = useContext(
    ComposerContext
  );

  const handleClick = composer => {
    return e => {
      const checked = document.getElementById(composer.displayName).checked;
      if (checked) {
        setSelectedComposers([...selectedComposers, composer.composer]);
      } else {
        setSelectedComposers(
          selectedComposers.filter(name => name !== composer.composer)
        );
      }
    };
  };

  const handleClickV2 = composer => {
    return e => {
      const currentClass = e.target.className
      if(!!currentClass.match("composer-selected-true")){
        e.target.className = "composer-checkbox composer-selected-false"
        setSelectedComposers(
          selectedComposers.filter(name => name !== composer.composer)
        );
      } else {
        e.target.className = "composer-checkbox composer-selected-true"
        setSelectedComposers([...selectedComposers, composer.composer]);
      }
    }
  }

  return (
    <div className="composer-checkbox composer-selected-false" onClick={handleClickV2(composer)}>
      {/* <input
        type="checkbox"
        id={composer.displayName}
        value={composer.composer}
        onClick={handleClick(composer)}
      />
      <label htmlFor={composer.displayName}>{composer.displayName}</label> */}
      {composer.displayName}
    </div>
  );
};

export default ComposerCheckbox;
