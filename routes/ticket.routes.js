const {
  getTicketController,
  getTicketsByUserIdController,
  getTicketsByEventIdController,
} = require("../controllers/ticket.controller");

const router = require("express").Router();

router.post("/ticket", getTicketController);
router.get("/ticket/:userId", getTicketsByUserIdController);
router.get("/ticket/:eventId", getTicketsByEventIdController);

module.exports = router;
