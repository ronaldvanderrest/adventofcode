var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")
var array = textByLine.map((i) => Number(i))

sumOfThree = (arr, target) => {
    arr.sort((a,b) => a-b);
    const result = []
    for (indexA = 0; indexA < arr.length-2; indexA++){
        let indexB = indexA+1;
        let indexC = arr.length-1;
    
        while (indexB < indexC){
            let sum = arr[indexA] + arr[indexB] + arr[indexC]
            if (sum < target) {
                indexB++;
            } else if (sum > target) {
                indexC--;
            } else {
                return(`The values that add to 2020 are: ${arr[indexA]} and ${arr[indexB]} and ${arr[indexC]}, and multiplying them gives: ${arr[indexA]*arr[indexB]*arr[indexC]} `)
            }
        }
     }
}




console.log(sumOfThree(array, 2020))
