const { readData, readDataPromise } = require('./taskManager');
const express = require('express');
const dayjs = require('dayjs');

//task 1
const data = readData();
console.log("Data from taskManager (Sync):");
console.log(data);

//task 2
readDataPromise()
    .then(data => {
        console.log("Data using Promise:");
        console.log(data);
    })
    .catch(err => {
        console.error("Error reading data:", err);
    });

//task 2
async function main() {
    try {
        const data = await readDataPromise();
        console.log("Data using Async/Await:");
        console.log(data);
    } catch (err) {
        console.error("Error reading data:", err);
    }
}
main();

//task 3
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    res.send(`Current date and time: ${currentDate}`);
});

app.get('/data', async (req, res) => {
    try {
        const data = await readDataPromise();
        res.json(data);
    } catch (err) {
        res.status(500).send('Error reading data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});