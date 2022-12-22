const express = require('express');
const app = express();
const PORT = 5000;

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