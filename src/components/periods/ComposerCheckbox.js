import React, { useContext } from "react";
import { ComposerContext } from "../../state/ComposerProvider";

const ComposerCheckbox = ({ composer }) => {
  const { state: s, stateMethods: sm } = useContext(ComposerContext);
  // const handleClick = composer => {
  //   return e => {
  //     const checked = document.getElementById(composer.displayName).checked;
  //     if (checked) {
  //       sm.setSelectedComposers([...s.selectedComposers, composer.composer]);
  //     } else {
  //       sm.setSelectedComposers(
  //         s.selectedComposers.filter(name => name !== composer.composer)
  //       );
  //     }
  //   };
  // };

  const handleClickV2 = composer => {
    return e => {
      const currentClass = e.target.className;
      if (!!currentClass.match("composer-selected-true")) {
        e.target.className = "composer-checkbox composer-selected-false";
        sm.setSelectedComposers(
          s.selectedComposers.filter(name => name !== composer.composer)
        );
      } else {
        e.target.className = "composer-checkbox composer-selected-true";
        sm.setSelectedComposers([...s.selectedComposers, composer.composer]);
      }
    };
  };

  const renderChecked = composer => {
    if (!s.selectedComposers) return false
    return s.selectedComposers.includes(composer.composer)
  }

  return (
    <div
      className={`composer-checkbox composer-selected-${renderChecked(composer)}`}
      onClick={handleClickV2(composer)}
      data-fullname={composer.composer}
    >
      {composer.displayName}
    </div>
  );
};

export default ComposerCheckbox;
