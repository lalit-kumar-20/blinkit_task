const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');

const authRoutes = require('./routes/AuthRoutes');
const ImageRoutes = require('./routes/ImageRoutes');


// Connect DB
const db = require('./db');

// app Use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Welcome');
});


app.use('/api/auth', authRoutes);
app.use('/api', ImageRoutes);

app.listen(port, () => {
    console.log('listening on port ' + port);
});
