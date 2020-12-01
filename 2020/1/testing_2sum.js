var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n")
var array = textByLine.map((i) => Number(i))

const sumOfTwo = (arr, target) => {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;
    }
	for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return(`The values that add to 2020 are: ${arr[i]} and ${diff}, and multiplying them gives: ${arr[i]*diff} `);
		}
	}
}
console.log(sumOfTwo(array, 2020));
