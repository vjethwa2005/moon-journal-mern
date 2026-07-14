const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Entry = require('../models/Entry');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Access denied" });
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};

// Get all entries for logged-in user
router.get('/', authMiddleware, async (req, res) => {
    try {
        const entries = await Entry.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new entry
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { date, mood, content } = req.body;
        const newEntry = new Entry({
            user: req.user.id,
            date,
            mood,
            content
        });
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
