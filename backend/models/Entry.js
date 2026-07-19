/* eslint-disable no-undef */
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true },
    mood: { type: String, required: true },
    content: { type: String, required: true }
}, {
    timestamps: true,
    autoIndex: false
});

module.exports = mongoose.model('Entry', entrySchema);
