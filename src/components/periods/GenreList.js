import React from 'react';

const GenreList = ({genres}) => {
    
    console.log(genres)

    const generateList = (genres) => {
        return genres.map((genre, i) => {
            return (
                <li key={i}>
                    {`${genre[0]}: ${genre[1]}`}
                </li>
            )
        })
    }
    
    return (
        <div>
            <ul>
                {generateList(genres)}
            </ul>
        </div>
    )
}

export default GenreList