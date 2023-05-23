const EventServices = require("../services/event.service");

const createEventController = async (req, res) => {
  EventServices.CreateEventService(req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Event created successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when creating event",
      });
    });
};

const getEventsController = async (req, res) => {
  EventServices.GetEventsService()
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Events fetched successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when fetching events",
      });
    });
};

const getEventByIdController = async (req, res) => {
  EventServices.GetEventByIdService(req.params.id)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Event fetched successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when fetching event",
      });
    });
};

const updateEventByIdController = async (req, res) => {
  EventServices.UpdateEventByIdService(req.params.id, req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Event updated successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when updating event",
      });
    });
};

const deleteEventByIdController = async (req, res) => {
  EventServices.DeleteEventByIdService(req.params.id)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Event deleted successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when deleting event",
      });
    });
};

module.exports = {
  createEventController,
  getEventsController,
  getEventByIdController,
  updateEventByIdController,
  deleteEventByIdController,
};
