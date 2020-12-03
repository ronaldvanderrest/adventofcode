var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")

findValidPasswords = (array) => {
    let result = 0
    array.forEach(element => {
        const splittedelement = element.split(/[\s-:]+/);
        const min = Number(splittedelement[0]);
        const max = Number(splittedelement[1]);
        const char = splittedelement[2];
        const password = splittedelement[3];

        // find charachter on position min on string
        const position1 = password[min-1];

        // find character on position max on string
        const position2 = password[max-1];
        if ((position1 === char && position2 !== char) || (position1 !== char && position2 === char)) {
            result++
        }
        
    });
    return result
}

console.log(findValidPasswords(textByLine))
