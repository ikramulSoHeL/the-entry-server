const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  vanue: {
    type: String,
  },
  location: {
    type: String,
  },
  locationAddress: {
    type: String,
  },
  organizerName: {
    type: String,
  },
  organizerEmail: {
    type: String,
  },
  organizerPhone: {
    type: String,
  },
  organizerWebsite: {
    type: String,
  },
  organizerDesc: {
    type: String,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model("Event", eventSchema);

Event.prototype.toJSON = function () {
  const event = this;

  const eventObject = event.toObject();

  return eventObject;
};

module.exports = Event;
