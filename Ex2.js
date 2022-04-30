//Give an Array of values, calculate the average star rating

let myWord = [1, 10, 15];

function calculateAvgRating(myWord) {

    const total = myWord.reduce((value, prev) => value + prev);
    let avg = total / myWord.length;

    let result = []
    let roundAvg = Math.round(avg)
    result.push(avg)

    for (let i = 0; i < roundAvg; i++)
        result.push("*")

    answer = result.splice(0, 1)
    result = result.toString()
    answer = `[${answer}]`
    answer += result

    console.log(answer);

}

calculateAvgRating(myWord)



