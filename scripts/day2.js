const readFile = require("../helpers/readfile");
const file = readFile("day2.txt");

var lineList = file.split("\r\n");

var sum = 0;

lineList.forEach((line) => {
    var numbers = line.split(" ");

    if (numbers[0] < numbers[1]) {
        // increasing
        for (var i = 0; i < numbers.length - 1; i++) {
            var delta = numbers[i] - numbers[i + 1];
            if (delta >= 1 && delta <= 3) sum += 1;
        }
    } else {
        for (var i = 0; i < numbers.length - 1; i++) {
            var delta = numbers[i + 1] - numbers[i];
            if (delta >= 1 && delta <= 3) sum += 1;
        }
        // decreasing
    }
});

console.log(sum);