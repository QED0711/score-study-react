import React from 'react';

import GenreList from './GenreList'

const GenreModal = ({setShowGenreModal, genres}) => {
    // EVENTS
    const handleCloseGenreModal = e => {
        setShowGenreModal(false)
    }

    // HELPERS
    const formatGenres = (genres) => {
        return Object.entries(genres).sort((a,b) => b[1] - a[1])
    }

    return (
        <div className="modal-background">
            <div className="modal-body">

                <GenreList genres={formatGenres(genres)} />

                <button onClick={handleCloseGenreModal}>
                    Close
                </button>
            </div>

        </div>
    )
}

export default GenreModal;