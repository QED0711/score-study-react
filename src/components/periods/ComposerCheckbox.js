import React from "react";

const ComposerCheckbox = ({ composer }) => {

    return (
        <div className="composer-checkbox">
            <input type="checkbox" value={composer.composer} />
            <label>{composer.displayName}</label>
        </div>
    )

};


export default ComposerCheckbox;