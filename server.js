const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// require('./route')(app);

app.use(require('./app/route/userRouter'));
app.use(require('./app/route/clientRouter'));
app.use(require('./app/route/roleRouter'));

app.all('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});