const router = require('express').Router();
let sanbaytrunggian = require('../models/sanbaytrunggian');

router.route('/').get((req, res) => {
  sanbaytrunggian.find()
    .then(sanbaytrunggians => res.json(sanbaytrunggians))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
router.post('/add', (req, res, next) => {
  
  // newsanbaytrunggian.save()
  // .then(() => res.json('sanbaytrunggian added!'))
  // .catch(err => res.status(400).json('Error: ' + err));
  if (req.body) {

    console.log(req.body,' sanbaytrunggian add')
    // MaChuyenBay
    // MaSanBay
    // ThoiGianDung
    // GhiChu

    const MaChuyenBay = req.body.MaChuyenBay
    const MaSanBay = req.body.MaSanBay
    const ThoiGianDung = Number(req.body.ThoiGianDung)
    const GhiChu = req.body.GhiChu

    const newsanbaytrunggian = new sanbaytrunggian({
        MaChuyenBay,
        MaSanBay,
        ThoiGianDung,
        GhiChu
    });

    sanbaytrunggian.create(newsanbaytrunggian)
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
  console.log('sanbaytrunggian find')
  // if (req.body){
    console.log(req.body)
    sanbaytrunggian.findById(req.params.id)
    // sanbaytrunggian.findById(req.body.id)
      .then(sanbaytrunggian => res.json(sanbaytrunggian))
      .catch(err => res.status(400).json('Error: ' + err));
  // }
});

router.route('/delete/:id').delete((req, res) => {
  sanbaytrunggian.findByIdAndDelete(req.params.id)
    .then(() => res.json('sanbaytrunggian deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log('sanbaytrunggian update')
  sanbaytrunggian.findById(req.params.id)
    .then(
      sanbaytrunggian => {
        sanbaytrunggian.MaChuyenBay = req.body.MaChuyenBay
        sanbaytrunggian.MaSanBay = req.body.MaSanBay
        sanbaytrunggian.ThoiGianDung = Number(req.body.ThoiGianDung)
        sanbaytrunggian.GhiChu = req.body.GhiChu

      sanbaytrunggian.save()
        .then(() => res.json('sanbaytrunggian updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;