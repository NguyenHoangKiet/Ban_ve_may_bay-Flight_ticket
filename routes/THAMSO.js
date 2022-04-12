const router = require('express').Router();
let Thamso = require('../models/THAMSO');

router.route('/').get((req, res) => {
    Thamso.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error '+ err));
});

router.route('/add').get((req, res) => {

    const TenThamso = req.body.TenThamso;
    const GiaTri = req.body.GiaTri;
    const newUser = new User({username});

    Thamso.save()
        .then(users => res.json('User added!'))
        .catch(err => res.status(400).json('Error '+ err));
});

module.exports = router;