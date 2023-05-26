/**
 * Import dependencies.
 */
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')

/**
 * Import model.
 */
const Event = require('./models/eventModel')


/**
 * Create Express application.
 */
const app = express()

/**
 * Middleware.
 */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/**
 * Routes.
 */
app.get('/',(req, res) => {
    res.send('Hello NODE API!')
} )


/**
 * GET,  events by an id.
 */
app.get('/events/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const event = await Event.findById(id)
        res.status(200).json(event)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})


/**
 * GET events and filter.
 * Filter events.
 * Includes a min-max price filter
 */
app.get('/events', async (req, res) => {
    try {
      const filters = req.query;
      const { fullTextSearch, minPrice, maxPrice, ...otherFilters } = filters;
  
      const searchQuery = {};
  
      if (fullTextSearch) {
        const regexQuery = { $regex: '.*' + fullTextSearch + '.*', $options: 'i' };
        searchQuery.$or = [
          { name: regexQuery },
          { description: regexQuery },
          { detailedDescription: regexQuery },
          { eventCategory: regexQuery },
          { location: regexQuery },
          { date: regexQuery },
        ];
      }
  
      const priceFilter = {};
  
      if (minPrice !== undefined) {
        priceFilter.$gte = Number(minPrice);
      }
      if (maxPrice !== undefined) {
        priceFilter.$lte = Number(maxPrice);
      }
  
      const query = { ...otherFilters };
  
      if (Object.keys(priceFilter).length > 0) {
        query.eventPrice = priceFilter;
      }
  
      if (Object.keys(searchQuery).length > 0) {
        query.$and = [searchQuery];
      }
  
      const projection = { name: 1, description: 1, location: 1 }; // Projection object to include only desired fields
  
      const events = await Event.find(query, projection);
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });``````
  
/**
 * UPDATE, an event by id.
 */
app.put('/events/:id', async(req,res) => {
    try {

        const {id} = req.params;
        const event = await Event.findByIdAndUpdate(id,req.body);
        //We cannot find any event in database
        if(!event){
            return res.status(404).json({message: `Cannot find any event with ID ${id}`})
        }
        const updatedEvent = await Event.findById(id);
        res.status(200).json(updatedEvent);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

/**
 * WRITE, a new event
 */
app.post('/event', async(req,res) => {
    try {
        const event = await Event.create(req.body)
        res.status(200).json(event);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

/**
 * DELETE, an event.
 */

app.delete('/events/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndDelete(id);
        if(!event){
            return res.status(404).json({message: `Cannot find any event with ID ${id}`})
        }
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})


/**
 * Connect to MongoDB
 */
mongoose.set("strictQuery", false);
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect('mongodb+srv://rempakos:kappa@eventplannerapi.bv02rpj.mongodb.net/EventPlanner-API?retryWrites=true&w=majority');
        console.log('MongoDB Connected: ${conn.connection.host}');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Listening on port: ${PORT}');
    })
})
