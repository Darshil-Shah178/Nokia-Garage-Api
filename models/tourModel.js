const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    equipmentName:{
      type:String,
      required:[true,"User must have name"],
      unique:true},
    date: {
      type:Date,
      required:true},
    imageUrl: {
      type:String,
      required:true} 
  });

const Tour = mongoose.model('bookings', tourSchema);

module.exports = Tour;