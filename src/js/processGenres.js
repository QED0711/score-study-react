const processGenres = (scores) => {

    const genres = {};
    scores.forEach(score => {
        score.tags.forEach(tag => {
            genres[tag] = genres[tag] ? genres[tag] + 1 : 1
        })
    })

    return genres;

}

export default processGenres;