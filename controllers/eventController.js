const Event = require('../models/eventModel');

/**
 * GET events and filter.
 * Filter events.
 * Includes a min-max price filter
 * and a start-end date filter
 */
exports.getEvents = async (req, res) => {
  try {
    // Extract filters and search query from query parameters
    const { searchText, minPrice, maxPrice, startDate, endDate, ...otherFilters } = req.query;

    // Create price filter
    const priceFilter = {};
    if (minPrice !== undefined) {
      priceFilter.$gte = Number(minPrice);
    }
    if (maxPrice !== undefined) {
      priceFilter.$lte = Number(maxPrice);
    }

    // Create date filter
    const dateFilter = {};
    if (startDate !== undefined) {
      dateFilter.$gte = startDate;
    }
    if (endDate !== undefined) {
      dateFilter.$lte = endDate;
    }

    // Create query object with other filters
    const query = {
      ...otherFilters,
    };

    // Apply price filter to query
    if (Object.keys(priceFilter).length > 0) {
      query.eventPrice = priceFilter;
    }

    // Apply date filter to query
    if (Object.keys(dateFilter).length > 0) {
      query.date = dateFilter;
    }

    // Add full-text search to the query if searchText is provided
    if (searchText) {
      query.$or = [
        { $text: { $search: searchText } },
        { description: { $regex: `.*${searchText}.*`, $options: 'i' } }
      ];
    }


    // Find events based on the query
    const events = await Event.find(query);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * GET an event by ID.
 */
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: `Cannot find any event with ID ${id}` });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * CREATE a new event.
 */
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json(event);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE an event by ID.
 */
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body);
    if (!event) {
      return res.status(404).json({ message: `Cannot find any event with ID ${id}` });
    }
    const updatedEvent = await Event.findById(id);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE an event by ID.
 */
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: `Cannot find any event with ID ${id}` });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE multiple events based on filters.
 */
exports.deleteEvents = async (req, res) => {
  try {
    const filters = req.query;
    const result = await Event.deleteMany(filters);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No events found matching the criteria' });
    }

    res.status(200).json({ message: 'Events deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE multiple events based on filters.
 */
exports.updateEvents = async (req, res) => {
  try {
    const filters = req.query;
    const update = req.body;

    const result = await Event.updateMany(filters, update);

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'No events found matching the criteria' });
    }

    res.status(200).json({ message: 'Events updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
