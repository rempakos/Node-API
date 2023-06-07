const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

// GET all events and filter
router.get('/', eventController.getEvents);

// GET an event by ID
router.get('/:id', eventController.getEventById);

// CREATE a new event
router.post('/', eventController.createEvent);

// UPDATE an event by ID
router.put('/:id', eventController.updateEvent);

// DELETE an event by ID
router.delete('/:id', eventController.deleteEvent);

// DELETE multiple events based on filters
router.delete('/', eventController.deleteEvents);

// UPDATE multiple events based on filters
router.put('/', eventController.updateEvents);

module.exports = router;
