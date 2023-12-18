const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/medical_records', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Routes
const patientRoutes = require('./routes/patients');
const encounterRoutes = require('./routes/encounters');
const vitalsRoutes = require('./routes/vitals');

app.use('/api/patients', patientRoutes);
app.use('/api/encounters', encounterRoutes);
app.use('/api/vitals', vitalsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
