import React, {useState} from 'react';

import GenreList from './GenreList'

const GenreModal = ({setShowGenreModal, genres}) => {
    
    // STATE
    const [genreSearch, setGenreSearch] = useState("")

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

                <input type="text" value={genreSearch} onChange={e => setGenreSearch(e.target.value)} placeholder="Search genres..." />

                <GenreList genres={formatGenres(genres)} genreSearch={genreSearch} />

                <button onClick={handleCloseGenreModal}>
                    Close
                </button>
            </div>

        </div>
    )
}

export default GenreModal;