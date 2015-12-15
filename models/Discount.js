var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

var DiscountSchema = new Schema({
    name: String,
    location: String,
    category: String,
    description: String,
    promotion_time_frame: String,
    terms_and_conditions: String,
    website: String,
    phone: String,
    gps: {
        x: Number,
        y: Number
    },
    images: {
        root: String,
        files: String
    }
});

module.exports = mongoose.model('Discount', DiscountSchema);
