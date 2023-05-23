const TicketServices = require("../services/ticket.service");

const getTicketController = async (req, res) => {
  TicketServices.getTicketService(req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Ticket Purchased successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message:
          error?.message || "Something went wrong when purchasing ticket",
      });
    });
};

const getTicketsByUserIdController = async (req, res) => {
  TicketServices.getTicketsByUserIdService(req.params.userId)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Tickets fetched successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when fetching tickets",
      });
    });
};

const getTicketsByEventIdController = async (req, res) => {
  TicketServices.getTicketsByEventIdService(req.params.eventId)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "Tickets fetched successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when fetching tickets",
      });
    });
};

module.exports = {
  getTicketController,
  getTicketsByUserIdController,
  getTicketsByEventIdController,
};
