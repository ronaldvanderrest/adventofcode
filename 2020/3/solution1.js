var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")

const countTrees = (input, steps_right) => {
    let xcoordinate = 0;
    let countedtrees = 0;
    const patternlength = input[0].length;
    textByLine.forEach( (line) => {
       xcoordinate = xcoordinate + 3;
    // substract the patternlength because of repeating pattern
       if (xcoordinate >= patternlength) {
           xcoordinate = xcoordinate - patternlength;
       }

       console.log(line[xcoordinate]);

    } )
}


console.log(countTrees(textByLine, 3));