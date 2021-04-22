const express = require('express');
// for log in!
const session = require('express-session')
//const path = require('path');


const channelRoutes = require('./routes/channelRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes.js')
const programRoutes = require('./routes/programRoutes.js')

// user route
const userRoutes = require('./routes/userRoutes')
const userPrefix = ('/api/v1/users')

const port = 3001;


// server setup
const app = express();

// Make sure the server can read the req.body object
app.use(express.json());

app.use(session({
    secret: 'The Pantom Menace',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: 'auto'}
})
);

//Routes setup
app.use('/api/v1/channels', channelRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/programs', programRoutes)
app.use(userPrefix, userRoutes)

app.listen(port, (err) => {
    if(err) {
        console.log('Server could not start');
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}`);
})