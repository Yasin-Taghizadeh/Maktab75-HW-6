//Sum elements of the array

let words = [1, 7, 3, 4, 5, 6, 7, 8];

const sumWords = function (words) {

   const result = words.map((value, index) => words.slice(0, index + 1).reduce((input, prev) => input + prev))
   return result
}

console.log(sumWords(words))
