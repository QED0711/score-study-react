import React, {useState} from 'react';

import GenreList from './GenreList'
import CloseModal from '../CloseModal';

const GenreModal = ({setShowGenreModal, genres, setSelectedGenres}) => {
    
    // STATE
    const [genreSearch, setGenreSearch] = useState("")

    // EVENTS
    const handleCloseGenreModal = e => {
        setShowGenreModal(false)
    }

    const handleResetGenres = e => {
        setSelectedGenres([]);
    }   

    // HELPERS
    const formatGenres = (genres) => {
        return Object.entries(genres).sort((a,b) => b[1] - a[1])
    }

    return (
        <div className="modal-background">
            <div className="modal-body">
                <CloseModal handleClose={handleCloseGenreModal} />
                <input type="text" value={genreSearch} onChange={e => setGenreSearch(e.target.value)} placeholder="Search genres..." />
                <button onClick={handleResetGenres}>Reset</button>

                <GenreList genres={formatGenres(genres)} genreSearch={genreSearch} />
            </div>

        </div>
    )
}

export default GenreModal;