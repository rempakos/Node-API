/**
 * Import dependencies.
 */
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
 * GET, all events.
 */
app.get('/events', async(req,res)=> {
    try {
        const events = await Event.find({});
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

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
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://rempakos:kappa@eventplannerapi.bv02rpj.mongodb.net/EventPlanner-API?retryWrites=true&w=majority')
.then(()=>{

    console.log('Connected to MongoDB')

    //Server Start
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000')
    })


}).catch((error) => {
    console.log(error)
})