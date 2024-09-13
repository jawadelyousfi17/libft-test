const fs = require('fs');
const path = require('path');
const { filesToCheck } = require("./data")
const currentDirectory = process.cwd();

console.log(currentDirectory);

const filesToCheckFullPath = filesToCheck.map(fileName => currentDirectory + '/' + fileName);

function checkFileExists(filePath) {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
}

async function checkFiles() {
    files = filesToCheckFullPath;
    let err = false;
    for (let index = 0; index < filesToCheckFullPath.length; index++) {
        const file = filesToCheckFullPath[index];
        const absolutePath = path.resolve(file);
        const exists = await checkFileExists(absolutePath);
        if (!exists) {
            console.log(`${filesToCheck[index]} ${exists ? 'exists' : 'is MISSING'}`);
            err = true;
        }
    }
    return err;
}

module.exports = { checkFiles }