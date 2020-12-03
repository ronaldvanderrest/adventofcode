var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")

findValidPasswords = (array) => {
    let result = 0
    array.forEach(element => {
        const splittedelement = element.split(/[\s-:]+/);
        const min = Number(splittedelement[0]);
        const max = Number(splittedelement[1]);
        const charRegEx = new RegExp(splittedelement[2], 'g');
        const password = splittedelement[3];
        const foundchars = password.match(charRegEx)

        if (foundchars != null) {
            const count = foundchars.length;
            if (count >= min && count <= max) {
                result++
            }
        }
        
    });
    return result
}

console.log(findValidPasswords(textByLine))
