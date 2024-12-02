const fs = require("fs");
const path = require("path");

function readFile(filename) {
    const filePath = path.join(__dirname, `../input/${filename}`);
    
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

module.exports = readFile;