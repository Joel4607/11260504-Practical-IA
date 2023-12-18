const express = require('express');
const router = express.Router();
const Encounter = require('../models/Encounter');

router.post('/', async (req, res) => {
  try {
    const encounter = await Encounter.create(req.body);
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const encounters = await Encounter.find();
    res.json(encounters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:encounterId', async (req, res) => {
  try {
    const encounter = await Encounter.findById(req.params.encounterId);
    if (!encounter) {
      return res.status(404).json({ message: 'Encounter not found' });
    }
    res.json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:encounterId', async (req, res) => {
});

router.delete('/:encounterId', async (req, res) => {
});

module.exports = router;
