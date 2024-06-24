
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');

// Middleware
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('CORS enabled for all origins!')
})

// Start server
const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

// Dummy data to simulate database
let events = [
    { id: 1, title: 'Event 1', date: '2024-06-20' },
    { id: 2, title: 'Event 2', date: '2024-06-22' },
    { id: 3, title: 'Event 3', date: '2024-06-24' },
    { id: 4, title: 'Event 4', date: '2024-06-24' },
    { id: 5, title: 'Event 5', date: '2024-06-24' },
    { id: 6, title: 'Event 6', date: '2024-06-24' },
    { id: 7, title: 'Event 7', date: '2024-06-24' },
    { id: 8, title: 'Event 8', date: '2024-06-24' },
    { id: 9, title: 'Event 9', date: '2024-06-24' },
    { id: 10, title: 'Event 10', date: '2024-06-24' },
    { id: 11, title: 'Event 11', date: '2024-06-24' }
]

// Routes

// GET all events or filter by title and/or date and pagination
app.get('/events', (req, res) => {
    const { title, date, page, size} = req.query;
    let filteredEvents = [...events];
    
    // Filter by title
    if(title) {                         //http://localhost:3000/events?title=event 10
        filteredEvents = filteredEvents.filter(event =>
            event.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    // Filter by date //http://localhost:3000/events?date=2024-06-24&page=2    OR http://localhost:3000/events?date=2024-06-24&page=1
    if (date) {filteredEvents = filteredEvents.filter(event => event.date === date);
    }

    // Pagination
    const pageSize = parseInt(size) || 5;
    const currentPage = parseInt(page) || 1;

    const startIndex = (currentPage - 1)* pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

    res.status(200).json({                      // http://localhost:3000/events?page=1&size=5
        totalItems: filteredEvents.length,
        currentPage,
        pageSize,
        totalPages: Math.ceil(filteredEvents.length / pageSize),
        events: paginatedEvents
    });
});

//GET a Single Event by ID
app.get('/events/:id', (req, res) => {
    const event = events.find(b => b.id === parseInt(req.params.id))
    if (!event) res.status(404).send('The event was not found')
    res.status(200).json(event)
})

//POST New Event
app.post('/events', (req, res) => {
    const { title, date } = req.body
    const newEvent = {
        id: events.length + 1,
        title,
        date
    }
    events.push(newEvent)
    res.status(201).send(newEvent)
})

//PUT Update an Existing Event by ID
app.put('/events/:id', validateEvent, (req, res) => {
    const event = events.find(b => b.id === parseInt(req.params.id))
    if (!event) res.status(404).send('The event was not found')

    const { title, date } = req.body
    event.title = title
    event.date = date
    res.status(200).send(event)
    res.json({ message: 'Event updated successfully' });
})

//DELETE a Event
app.delete('/events/:id', (req, res) => {
    const index = events.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) res.status(404).send('The event was not found')

    events.splice(index, 1)
    res.status(204).send()
    res.json({ message: 'Event deleted successfully' });
})

// Middleware for basic event validation
function validateEvent(req, res, next) {
    const { title, date } = req.body;

    if (!title || !date) {
        return res.status(400).json({ error: 'Title and date are required'})
    }

    // Additional validation for date format
    if (!isValidDateFormat(date)) {
        return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD'});
    }
    next();
}

// Function to validate date format (YYYY-MM-DD)
function isValidDateFormat(date) {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

// Error handler middleware
app.use((err, req, res, next) => {
    console.error (err.stack);
    res.status(500).json({ error: 'Something went wrong!'});
});
