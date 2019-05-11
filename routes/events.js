var express = require('express');
var router = express.Router();

const upcomingEvents = require('../mocked-resources/upcoming-events.json')
const pastEvents = require('../mocked-resources/past-events.json')

/* GET all events. */
router.get('/', function(req, res, next) {
  res.json(upcomingEvents.concat(pastEvents));
});

/* GET upcoming events. */
router.get('/upcoming', function(req, res, next) {
  res.json(upcomingEvents);
});

/* GET past events. */
router.get('/past', function(req, res, next) {
  res.json(pastEvents);
});

module.exports = router;
