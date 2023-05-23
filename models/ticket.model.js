const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Event",
  },
  ticketQnt: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
