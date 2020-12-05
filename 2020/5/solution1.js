var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var inputArray = text.split("\n")

const findRow = (boardingPass) => {
    let availableRows = Array.from(Array(128).keys());
    for (i=0; i < 7; i++){
        if (boardingPass[i] === 'F'){
            availableRows.splice(availableRows.length / 2);
        } else {
            availableRows.splice(0, availableRows.length / 2);
        }
    }
    return availableRows[0]
}

const findSeat = (boardingPass) => {
    let availableChairs = Array.from(Array(8).keys())
    for (i=7; i < boardingPass.length; i++){
        if (boardingPass[i] === 'L') {
            availableChairs.splice(availableChairs.length / 2);
        } else {
            availableChairs.splice(0, availableChairs.length / 2)
        }
    }
    return availableChairs[0];
}

const findSeatID = (boardingPass) => {
    const row = findRow(boardingPass);
    const seat = findSeat(boardingPass);
    return (row * 8 + seat)
};

const getAllSeats = (input) => {
    const seatIDs = [];
    input.forEach(boardingPass => {
        seatIDs.push(findSeatID(boardingPass));
    });
    return (seatIDs.sort((a, b) => a - b))
}

const countHighestSeat = (input) => {
    const seatIDs = getAllSeats(input);
    return (seatIDs[seatIDs.length-1]);
}

const findMySeat = (input) => {
    const seatIDs = getAllSeats(input);
    for (i=1; seatIDs.length-1; i++) {
        if(seatIDs[i]-seatIDs[i-1] > 1) {
            return (seatIDs[i]-1)
        }
    }
}


console.log(countHighestSeat(inputArray));
console.log(findMySeat(inputArray))