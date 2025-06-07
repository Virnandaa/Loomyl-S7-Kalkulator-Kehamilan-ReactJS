const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/route');

app.use(cors());

app.use(bodyParser.json());
app.use('/', router);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});