const readFile = require("../helpers/readfile");
const file = readFile("day1.txt");

var lineList = file.split("\r\n");
var leftList = [];
var rightList = [];
var sum1 = 0;
var sum2 = 0;

lineList.forEach((line) => {
    var pairs = line.split("   ");
    leftList.push(pairs[0]);
    rightList.push(pairs[1]);
});

leftList = leftList.sort();
rightList = rightList.sort();

for (var i = 0; i < leftList.length; i++) {
    var delta1 = Math.abs(leftList[i] - rightList[i]);
    var delta2 = leftList[i] * rightList.filter((v) => (v === leftList[i])).length;

    sum1 += delta1;
    sum2 += delta2;
}

console.log(sum1); // Part 1
console.log(sum2); // Part 2