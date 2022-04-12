const router = require('express').Router();
let User = require('../models/user');

router.get('/', (req, res, next) => {
// router.route('/').get((req, res) => {
    console.log('User load all')
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error '+ err));
});

router.post('/add', (req, res, next) => {
//router.route('/user/add').post((req, res) => {

    console.log(req.body,' hello');

    const username = req.body.username;
    const newUser = new User({username});

    // User.save()
    //     .then(users => res.json('User added!'))
    //     .catch(err => res.status(400).json('Error '+ err));

    if (req.body) {
          console.log(req.body)
          User.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
        } else {
          res.json({
            error: 'The input field is empty',
          });
        }
  
});

module.exports = router;