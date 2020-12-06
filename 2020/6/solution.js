const { groupCollapsed, group } = require("console");
const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");


const splitInputInGroups = (input) => {
    const allGroupsArray = input.split(/\n\n/)
    allGroupsArray.forEach((group, index) => {
        allGroupsArray[index] = group.split(/\n/);
    })
    return allGroupsArray;

}

const createGroupObject = () => {
    const a = 97;
    const charArray = {};
    for (var i = 0; i<26; i++)
        charArray[String.fromCharCode(a + i)] = {count: 0, allPersonsYes: false};
    const groupAnswers = {
        answers: charArray,
        count: 0,
        persons: 0,
        allPersonsYesCount: 0
    }
    return groupAnswers
}

const updateAllPersonsYes = (groupAnswers) => {
    Object.entries(groupAnswers.answers).forEach(([key, value]) => {
        if(value.count === groupAnswers.persons){
            value.allPersonsYes = true
            groupAnswers.allPersonsYesCount++
        }
      });      
    return groupAnswers
}

const getSumOfGroupYes = (group) => {
    const groupAnswers = createGroupObject();
    group.forEach((person) => {
        groupAnswers.persons++
        for (let answer of person) {
            if(!groupAnswers.answers[answer].count){
                groupAnswers.count++
            }
            groupAnswers.answers[answer].count++
        }
    })
    updateAllPersonsYes(groupAnswers)
    console.log(groupAnswers)
    return groupAnswers
}

const getSumOfPlane = (input) => {
    const groupArray = splitInputInGroups(input);
    let sumOfPlane = 0;
    groupArray.forEach((group) => {
        sumOfPlane = sumOfPlane + getSumOfGroupYes(group).count;
    })
    return sumOfPlane
}

const getSumOfPlane2 = (input) => {
    const groupArray = splitInputInGroups(input);
    let sumOfPlane = 0;
    groupArray.forEach((group) => {
        sumOfPlane = sumOfPlane + getSumOfGroupYes(group).allPersonsYesCount;
    })
    return sumOfPlane
}

// part 1
// console.log(getSumOfPlane(text))


// part 2
console.log(getSumOfPlane2(text))