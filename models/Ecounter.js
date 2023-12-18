// models/Encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  // Define encounter schema fields here
  // ...
});

module.exports = mongoose.model('Encounter', encounterSchema);
