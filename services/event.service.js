require("dotenv").config();

const Event = require("../models/event.model");

const CreateEventService = async (data) => {
  try {
    const {
      title,
      eventType,
      description,
      date,
      vanue,
      location,
      locationAddress,
      organizerName,
      organizerPhone,
      organizerWebsite,
      organizerDesc,
    } = data;

    const newEvent = new Event({
      title: title,
      eventType: eventType,
      description: description,
      date: date,
      vanue: vanue,
      location: location,
      locationAddress: locationAddress,
      organizerName: organizerName,
      organizerPhone: organizerPhone,
      organizerWebsite: organizerWebsite,
      organizerDesc: organizerDesc,
    });
    await newEvent.save();

    return {
      message: "Event created successfully",
      data: newEvent,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const GetEventsService = async () => {
  try {
    const events = await Event.find({ isActive: true });

    return {
      message: "Events fetched successfully",
      data: events,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const GetEventByIdService = async (id) => {
  try {
    const event = await Event.findOne({ _id: id, isActive: true });

    if (!event) {
      throw new Error("Event does not exist");
    }

    return {
      message: "Event fetched successfully",
      data: event,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const UpdateEventByIdService = async (id, data) => {
  try {
    const event = await Event.findOne({ _id: id, isActive: true });

    if (!event) {
      throw new Error("Event does not exist");
    }

    const {
      title,
      eventType,
      description,
      date,
      vanue,
      locationAddress,
      organizerName,
      organizerPhone,
      organizerWebsite,
      organizerDesc,
    } = data;

    event.title = title;
    event.eventType = eventType;
    event.description = description;
    event.date = date;
    event.vanue = vanue;
    event.locationAddress = locationAddress;
    event.organizerName = organizerName;
    event.organizerPhone = organizerPhone;
    event.organizerWebsite = organizerWebsite;
    event.organizerDesc = organizerDesc;

    await event.save();

    return {
      message: "Event updated successfully",
      data: event,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const DeleteEventByIdService = async (id) => {
  try {
    const event = await Event.findOne({ _id: id, isActive: true });

    if (!event) {
      throw new Error("Event does not exist");
    }

    event.isActive = false;

    await event.save();

    return {
      message: "Event deleted successfully",
      data: event,
    };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  CreateEventService,
  GetEventsService,
  GetEventByIdService,
  UpdateEventByIdService,
  DeleteEventByIdService,
};
