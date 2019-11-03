const randomScore = (scores, setSelectedScore) => {
    const randIndex = Math.floor(Math.random() * scores.length - 1);
    setSelectedScore(scores[randIndex])
}

export default randomScore;