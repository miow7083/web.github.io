// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Ladybug:M9AE6a4tYtb3n1Oc@blaze.b4faulz.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const ResponseSchema = new mongoose.Schema({
    name: String,
    email: String,
    group_link: String,
    bot: String,
    timestamp: { type: Date, default: Date.now }
});

const Response = mongoose.model('Response', ResponseSchema);

// Function to store a submitted response
async function storeResponse(responseData) {
    try {
        const response = await Response.create(responseData);
        console.log('Response stored:', response);
    } catch (error) {
        console.error('Error storing response:', error);
    }
}

// Function to get all submitted responses
async function getAllResponses() {
    try {
        const responses = await Response.find({});
        return responses;
    } catch (error) {
        console.error('Error getting responses:', error);
        return [];
    }
}

module.exports = {
    // ... Your existing functions ...
    storeResponse,
    getAllResponses
};