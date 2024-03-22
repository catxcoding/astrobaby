const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/astro-baby');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://turbobaby:<o9WGdxEItnP94Mec>@cluster0.djrwp59.mongodb.net/');

module.exports = mongoose.connection;
