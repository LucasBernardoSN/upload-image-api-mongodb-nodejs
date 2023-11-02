const mongoose = require("mongoose");

/**
 * Connection with MongoDB
 */
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce";

console.log("Connecting to MongoDB on URI: " + uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
