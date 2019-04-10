const express = require('express');
const router = express.Router();
const rental = require('../models/rental');


router.get('', (req, res ) => {
    rental.find({}, (err, foundRentals) => {
                res.json(foundRentals);
    })
});

router.get('/:id',(req,res) => {
    const id = req.params.id;

    rental.findById(id,(err, foundRental) => {
        if(err){
            res.status(422).send({errors : [
                {
                    title: 'Rental Error!',
                    detail: 'Could not find Rental!'
                }
            ]});
        }

        res.json(foundRental);
    });
});


module.exports = router;