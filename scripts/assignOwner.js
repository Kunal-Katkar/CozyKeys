const mongoose = require('mongoose');
const Listing = require('../models/listing');

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function assignOwner() {
  await mongoose.connect(MONGO_URL);
  const ownerId = '684c50302c24a181b2cc2674'; // User _id from db.users.find()
  const result = await Listing.updateMany({}, { owner: ownerId });
  console.log('All listings updated with new owner:', ownerId, '\nResult:', result);
  await mongoose.disconnect();
}

assignOwner(); 