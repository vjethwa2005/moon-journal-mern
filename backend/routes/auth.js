/* eslint-disable no-undef */


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// Register User
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(`Signup attempt for: ${email}`);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(`User already exists: ${email}`);
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        console.log(`User created successfully: ${email}`);

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email, photo: newUser.photo } });
    } catch (error) {
        console.error(`Registration error for ${req.body.email}:`, error.message);
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, photo: user.photo } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/profile', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ message: "No headers provided" });

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);

        const { name, photo } = req.body;

        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = name || user.name;
        user.photo = photo || user.photo;
        await user.save();

        res.status(200).json({ message: "Profile updated", user: { id: user._id, name: user.name, email: user.email, photo: user.photo } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
