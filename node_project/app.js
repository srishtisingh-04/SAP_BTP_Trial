const{readData} = require('./taskManager');
const{readDataPromise} = require('./taskManager');
const express = require('express');
const dayjs = require('dayjs');

//task 1 - 
const data = readData();
console.log("Data from taskmanager");
console.log(data);

//task 2 - 
readDataPromise().then(data => {
    console.log("Data from taskmanager");
    console.log(data);
})
.catch(err => {
    console.error("Error reading data:", err);
});

async function main() {
    try {
        const data = await readDataPromise();
        console.log("Data from taskmanager using async");
        console.log(data);
    } catch (err) {
        console.error("Error reading data:", err);
    }
}

main();

//task 3 -
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
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
    console.log(`Server is running on http://localhost:${PORT}`);
});