// send_data.js
const { getDb } = require('./db');

async function storeFormData(data) {
    const db = getDb();
    const collection = db.collection('form_submissions'); // Create a collection named 'form_submissions'

    try {
        await collection.insertOne(data);
        console.log('Form data stored in MongoDB');
    } catch (error) {
        console.error('Error storing form data in MongoDB:', error);
    }
}

module.exports = {
    storeFormData,
};
