const betterThanAverage = (classPoints, yourPoints) => {
    let averageOfClass = classPoints.reduce((a, b) => a + b) / classPoints.length

    return averageOfClass >= yourPoints ? false : true
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) //true