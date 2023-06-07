/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

/**
 * Event schema.
 */
const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter an eventName'],
      index: true,
    },
    date: {
      type: String,
      required: [true, 'Please enter a date'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
      index: true,
    },
    image: {
      type: String,
      required: [true, 'Please enter an Image URL'],
    },
    eventPrice: {
      type: Number,
      required: [true, 'Please enter an eventPrice'],
    },
    eventCategory: {
      type: String,
      required: [true, 'Please enter an eventCategory'],
      index: true,
    },
    totalTickets: {
      type: Number,
      required: [true, 'Please enter totalTickets'],
    },
    totalSoldTickets: {
      type: Number,
      default: 0,
    },
    detailedDescription: {
      type: String,
      required: [true, 'Please enter a detailedDescription'],
      index: true,
    },
    location: {
      type: String,
      required: [true, 'Please enter a location'],
      index: true,
    },
  },
  {
    timestamps: true, // Includes created at and updated at information
  }
);


/**
 * Text Index Event model.
 */
eventSchema.index({ name: 'text', description: 'text', eventCategory: 'text', detailedDescription: 'text', location: 'text' });


/**
 * Event model.
 */
const Event = mongoose.model('Event', eventSchema);

/**
 * Export the Event model.
 */
module.exports = Event;
