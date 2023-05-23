require("dotenv").config();

const Ticket = require("../models/ticket.model");

const getTicketService = async (data) => {
  try {
    const { userId, eventId, ticketQnt, ticketPrice, totalPrice } = data;

    const newTicket = new Ticket({
      userId: userId,
      eventId: eventId,
      ticketQnt: ticketQnt,
      totalPrice: totalPrice,
    });
    await newTicket.save();

    return {
      message: "Ticket Purchased successfully",
      data: newTicket,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const getTicketsByUserIdService = async (userId) => {
  try {
    const tickets = await Ticket.find({ userId: userId }).populate(
      "userId eventId"
    );

    return {
      message: "Tickets fetched successfully",
      data: tickets,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const getTicketsByEventIdService = async (eventId) => {
  try {
    const tickets = await Ticket.find({ eventId: eventId });

    return {
      message: "Tickets fetched successfully",
      data: tickets,
    };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getTicketService,
  getTicketsByUserIdService,
  getTicketsByEventIdService,
};
