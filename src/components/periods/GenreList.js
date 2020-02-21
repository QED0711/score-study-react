import React, { useContext, useEffect, useState } from 'react';

// STATE
import { ComposerContext } from '../../state/ComposerProvider';


const GenreList = ({ genres, genreSearch }) => {

    // STATE
    const { state: cs, stateMethods: csm } = useContext(ComposerContext);

    const [filteredGenres, setFilteredGenres] = useState(genres);

    // EVENTS
    const handleGenreSelected = genre => e => {
        const currentClass = e.target.className;
        if (!!currentClass.match("genre-selected-true")) {
            csm.setSelectedGenres(
                cs.selectedGenres.filter(name => name !== genre[0])
            );
        } else {
            csm.setSelectedGenres([...cs.selectedGenres, genre[0]]);
        }
    }


    const generateList = (genres) => {
        return genres.map((genre, i) => {
            return (
                <div key={i} className={`genre-checkbox genre-selected-${cs.selectedGenres.includes(genre[0])}`} onClick={handleGenreSelected(genre)}>
                    {`${genre[0]} (${genre[1]})`}
                </div>
            )
        })
    }

    // ON LOAD
    useEffect(() => {

        const pattern = new RegExp(genreSearch,"gi")
        setFilteredGenres(
            genres.filter(genre => pattern.test(genre[0]))
        )

    }, [genreSearch])

    return (
        <div className="genre-list">
            {generateList(filteredGenres)}
        </div>
    )
}

export default GenreList