const randomScore = (scores, setSelectedScore) => {
    const randIndex = Math.floor(Math.random() * scores.length - 1);
    console.log(setSelectedScore)
    setSelectedScore(scores[randIndex])
}

export default randomScore;