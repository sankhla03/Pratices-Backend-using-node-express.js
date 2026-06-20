const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;

    console.log(logItem);
    try {
        await fsPromises.appendFile(
            path.join(__dirname,  'index.txt'),
            logItem
        );

        console.log('Log Saved');
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvents;