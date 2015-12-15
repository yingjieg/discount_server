var express = require('express');
var router = express.Router();
var Discount = require('../models/Discount');


router.route('/discounts').post(function(req, res, next) {
    var discount = new Discount();
    var json = req.body;

    console.log('--- data ---');
    console.log(json);
    
    discount.name = json.name;
    discount.location = json.location;
    discount.category = json.category;
    discount.description = json.description;
    discount.promotion_time_frame = json.promotion_time_frame;
    discount.terms_and_conditions = json.terms_and_conditions;
    discount.website = json.website;
    discount.phone = json.phone;
    discount.gps.x = json.gps.x;
    discount.gps.y = json.gps.y;
    discount.images.root = json.images.root;
    discount.images.files = json.images.files;

    discount.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Discount created!'
        });
    });

}).get(function(req, res) {
    Discount.find(function(err, discounts) {
        if (err)
            res.send(err);

        res.json(discounts);
    });

});

router.route('/discounts/:discount_id').get(function(req, res) {
    Discount.findById(req.params.discount_id, function(err, discount) {
        if (err)
            res.send(err);

        res.json(discount);
    });
}).put(function(req, res) {
    Discount.findById(req.params.discount_id, function(err, discount) {
        if (err)
            res.send(err);

        discount.name = req.body.name;

        discount.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'Discount updated!'
            });
        });
    });
}).delete(function(req, res) {
    Discount.remove({
        _id: req.params.discount_id
    }, function(err, discount) {
        if (err)
            res.send(err);
        res.json({
            message: 'Successfully deleted'
        });

    });
});

module.exports = router;
