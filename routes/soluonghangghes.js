const router = require('express').Router();
let soluonghangghe = require('../models/soluonghangghe');

router.route('/').get((req, res) => {
  soluonghangghe.find()
    .then(soluonghangghes => res.json(soluonghangghes))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
router.post('/add', (req, res, next) => {
  
  // newsoluonghangghe.save()
  // .then(() => res.json('soluonghangghe added!'))
  // .catch(err => res.status(400).json('Error: ' + err));
  if (req.body) {

    console.log(req.body,' soluonghangghe add')
    // MaChuyenBay
    // MaHangGhe
    // SoLuong
    const MaChuyenBay  = req.body.MaChuyenBay
    const MaHangGhe  = req.body.MaHangGhe
    const SoLuong  = Number(req.body.SoLuong)

    const newsoluonghangghe = new soluonghangghe({
        MaChuyenBay,
        MaHangGhe,
        SoLuong,
    });

    soluonghangghe.create(newsoluonghangghe)
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
  console.log('soluonghangghe find')
  // if (req.body){
    console.log(req.body)
    soluonghangghe.findById(req.params.id)
    // soluonghangghe.findById(req.body.id)
      .then(soluonghangghe => res.json(soluonghangghe))
      .catch(err => res.status(400).json('Error: ' + err));
  // }
});

router.route('/delete/:id').delete((req, res) => {
  soluonghangghe.findByIdAndDelete(req.params.id)
    .then(() => res.json('soluonghangghe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log('soluonghangghe update')
  soluonghangghe.findById(req.params.id)
    .then(
      soluonghangghe => {
        soluonghangghe.MaChuyenBay  = req.body.MaChuyenBay
        soluonghangghe.MaHangGhe  = req.body.MaHangGhe
        soluonghangghe.SoLuong  = Number(req.body.SoLuong)
      soluonghangghe.save()
        .then(() => res.json('soluonghangghe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;