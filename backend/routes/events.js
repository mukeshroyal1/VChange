const express = require('express')
const {
  createEvent,
  getEvents,
  getEvent,
  deleteEvent,
  updateEvent
} = require('../controllers/eventController')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

// this will require auth for all workout routes
router.use(requireAuth)

// This is to get all events
router.get('/', getEvents)

// This is to get a single event
router.get('/:id', getEvent)

// POST a new event

router.post('/', createEvent) 



// DELETE a event
router.delete('/:id', deleteEvent)

// UPDATE a event
router.patch('/:id', updateEvent)

module.exports = router 