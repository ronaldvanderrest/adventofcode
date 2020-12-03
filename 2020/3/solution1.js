const { count } = require("console");
var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")

const countTrees = (input, steps_right, steps_down) => {
    let xcoordinate = 0;
    let countedtrees = 0;
    const patternlength = input[0].length;
    textByLine.forEach( (line, index) => {
        // check the index of the line to see if it matches the steps you should go down
        if (index % steps_down === 0){
            // substract the patternlength because of repeating pattern
            if (xcoordinate >= patternlength) {
                xcoordinate = xcoordinate - patternlength;
            }
            if (line[xcoordinate] === "#") {
                countedtrees++
            };
            // console.log("coordinate:" + xcoordinate);
            xcoordinate = xcoordinate + steps_right;
            // console.log("current tree count:" + countedtrees);
        }
        
    })
    return countedtrees;
}


const slope1 = countTrees(textByLine, 1, 1);
const slope2 = countTrees(textByLine, 3, 1);
const slope3 = countTrees(textByLine, 5, 1);
const slope4 = countTrees(textByLine, 7, 1);
const slope5 = countTrees(textByLine, 1, 2);

console.log(`${slope1} x ${slope2} x ${slope3} x ${slope4} x ${slope5} = ${slope1 * slope2 * slope3 * slope4 * slope5}`)