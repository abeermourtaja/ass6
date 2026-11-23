const Log = require('./log.model.js');

// Create capped logs collection
async function createLogCollection() {
    return await Log.createCollection();
}

// Insert one log
async function insertLog(log) {
    return await Log.create(log);
}

module.exports = {
    createLogCollection,
    insertLog
};