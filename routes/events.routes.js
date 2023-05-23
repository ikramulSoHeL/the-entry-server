const {
  createEventController,
  getEventsController,
  getEventByIdController,
  updateEventByIdController,
  deleteEventByIdController,
} = require("../controllers/events.controller");

const router = require("express").Router();

router.post("/events", createEventController);
router.get("/events", getEventsController);
router.get("/events/:id", getEventByIdController);
router.put("/events/:id", updateEventByIdController);
router.delete("/events/:id", deleteEventByIdController);

module.exports = router;
