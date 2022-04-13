const router = require('express').Router();
let sanbay = require('../models/sanbay');

router.route('/').get((req, res) => {
  sanbay.find()
    .then(sanbays => res.json(sanbays))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
router.post('/add', (req, res, next) => {
  
  // newsanbay.save()
  // .then(() => res.json('sanbay added!'))
  // .catch(err => res.status(400).json('Error: ' + err));
  if (req.body) {

    console.log(req.body,' sanbay add')

    const TenSanBay = req.body.TenSanBay;
    const QuocGia = req.body.QuocGia;

    const newsanbay = new sanbay({
        TenSanBay,
        QuocGia,
    });

    sanbay.create(newsanbay)
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
  console.log('sanbay find')
  // if (req.body){
    console.log(req.body)
    sanbay.findById(req.params.id)
    // sanbay.findById(req.body.id)
      .then(sanbay => res.json(sanbay))
      .catch(err => res.status(400).json('Error: ' + err));
  // }
});

router.route('/delete/:id').delete((req, res) => {
  sanbay.findByIdAndDelete(req.params.id)
    .then(() => res.json('sanbay deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log('sanbay update')
  sanbay.findById(req.params.id)
    .then(
      sanbay => {
      sanbay.TenSanBay = req.body.TenSanBay;
      sanbay.QuocGia = req.body.QuocGia;

      sanbay.save()
        .then(() => res.json('sanbay updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;