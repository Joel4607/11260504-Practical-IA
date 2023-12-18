const express = require('express');
const router = express.Router();
const Vitals = require('../models/Vitals');

router.post('/', async (req, res) => {
  try {
    const vitals = await Vitals.create(req.body);
    res.status(201).json(vitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const vitals = await Vitals.find();
    res.json(vitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:vitalsId', async (req, res) => {
  try {
    const vitals = await Vitals.findById(req.params.vitalsId);
    if (!vitals) {
      return res.status(404).json({ message: 'Vitals not found' });
    }
    res.json(vitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:vitalsId', async (req, res) => {
});

router.delete('/:vitalsId', async (req, res) => {
});

module.exports = router;
