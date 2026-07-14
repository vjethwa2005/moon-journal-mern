/* eslint-disable no-undef */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

require('./models/User');
require('./models/Entry');

const authRoutes = require('./routes/auth');
const entryRoutes = require('./routes/entries');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/moon_journal';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB successfully connected');
        app.listen(5000,()=>{
            console.log('Server running on port 5000');
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
    });

app.use('/api/auth', authRoutes);
app.use('/api/entries', entryRoutes);
