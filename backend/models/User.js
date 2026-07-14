const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: "" }
}, {
    timestamps: true,
    collection: 'users', // Reverting to original collection name for entry linkage
    autoIndex: false    // Prevent blocking on index creation
});

module.exports = mongoose.model('User', userSchema);
