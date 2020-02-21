import React, { useState, useContext } from 'react';
import { ComposerContext } from '../../state/ComposerProvider';

// --------------------------- COMPONENTS ---------------------------
import GenreModal from './GenreModal'

const GenreFilter = () => {

    // STATE
    const { state: cs } = useContext(ComposerContext);
    const [showGenreModal, setShowGenreModal] = useState(false)

    // EVENTS
    const handleShowGenresModal = e => {
        setShowGenreModal(true)
    }

    return (
        <div className="genre-filter">
            <button onClick={handleShowGenresModal}>
                Filter Genres
            </button>
            {
                showGenreModal
                &&
                <GenreModal setShowGenreModal={setShowGenreModal} genres={cs.genres} />
            }
        </div>
    )

}

export default GenreFilter;