const mongoose = require('mongoose');
const Listing = require('../models/listing');

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function checkImages() {
  await mongoose.connect(MONGO_URL);
  const listings = await Listing.find({});
  listings.forEach(l => {
    console.log({
      title: l.title,
      image: l.image,
      owner: l.owner
    });
  });
  await mongoose.disconnect();
}

checkImages(); 