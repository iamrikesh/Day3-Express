const express = require('express');
const app = express();
const PORT = 5000;
// const URL = "mongodb+srv://oj96cZE2kUNPaBP4:oj96cZE2kUNPaBP4@mern.oyvlr2s.mongodb.net/day3?retryWrites=true&w=majority"
const URL = "mongodb://localhost:27017/day3";

const mongoose = require('mongoose');

mongoose.connect(URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log("Error: ", err.message);
});

app.use(express.json());

// require('./route')(app);

const logger = require('./app/middleware/logger');

app.use(logger);
app.use('/user', require('./app/route/userRouter'));
app.use('/client', require('./app/route/clientRouter'));
app.use('/role', require('./app/route/roleRouter'));


app.all('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});