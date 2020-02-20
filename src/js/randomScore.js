const randomScore = (scores, setSelectedScore) => {

    // if there is only one score available
    if(scores.length === 1) return setSelectedScore(scores[0])
    let randIndex = -1
    while(randIndex < 0){
        randIndex = Math.round(Math.random() * scores.length - 1, 0);
    }

    // console.log({numScores: scores.length, randIndex})
    setSelectedScore(scores[randIndex])
}

export default randomScore;