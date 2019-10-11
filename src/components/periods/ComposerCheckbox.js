import React, {useContext} from "react";
import ComposerContext from '../../contexts/ComposerContext';

const ComposerCheckbox = ({ composer }) => {

    const {selectedComposers, setSelectedComposers} = useContext(ComposerContext);

    const handleClick = (composer) => {
        return (e) => {
            const checked = document.getElementById(composer.displayName).checked
            if(checked){
                setSelectedComposers([...selectedComposers, composer.composer])
            } else {
                setSelectedComposers(selectedComposers.filter(name => name !== composer.composer))
            }
        }
    }

    return (
        <div className="composer-checkbox">
            <input type="checkbox" id={composer.displayName} value={composer.composer} onClick={handleClick(composer)}/>
            <label>{composer.displayName}</label>
        </div>
    )

};


export default ComposerCheckbox;