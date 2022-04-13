const router = require('express').Router();
let hangghe = require('../models/hangghe');

router.route('/').get((req, res) => {
  console.log('Danh sach hang ghe')
  hangghe.find()
    .then(hangghes => res.json(hangghes))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
router.post('/add', (req, res, next) => {
  
  // newhangghe.save()
  // .then(() => res.json('hangghe added!'))
  // .catch(err => res.status(400).json('Error: ' + err));
  if (req.body) {

    console.log(req.body,' hangghe add')

    const TenHangGhe = req.body.TenHangGhe;
    const PhiThem = Number(req.body.PhiThem);

    const newhangghe = new hangghe({
        TenHangGhe,
        PhiThem
    });

    hangghe.create(newhangghe)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }

});

router.get('/find/:id', (req, res, next) => {
//router.route('/find/:id').get((req, res) => {
  console.log('hangghe find')
  // if (req.body){
    console.log(req.body)
    hangghe.findById(req.params.id)
    // hangghe.findById(req.body.id)
      .then(hangghe => res.json(hangghe))
      .catch(err => res.status(400).json('Error: ' + err));
  // }
});

router.route('/delete/:id').delete((req, res) => {
  hangghe.findByIdAndDelete(req.params.id)
    .then(() => res.json('hangghe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log('hangghe update')
  hangghe.findById(req.params.id)
    .then(
      hangghe => {
    
      hangghe.TenHangGhe = req.body.TenHangGhe;
      hangghe.PhiThem = Number(req.body.PhiThem);

      hangghe.save()
        .then(() => res.json('hangghe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;