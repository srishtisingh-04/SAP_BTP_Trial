const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json'); 

//task 1 - 
function readData() {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}

//task 2 - 
function readDataPromise(){
    return new Promise((resolve, reject) => {
        fs.readFile(dataFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

module.exports = { readData, readDataPromise };