const router = require('express').Router();
let ve = require('../models/ve');

router.route('/').get((req, res) => {
  ve.find()
    .then(ves => res.json(ves))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router.route('/add').post((req, res) => {
router.post('/add', (req, res, next) => {
  
  // newve.save()
  // .then(() => res.json('ve added!'))
  // .catch(err => res.status(400).json('Error: ' + err));
  if (req.body) {

    console.log(req.body,' ve add')

    const MaChuyenBay = req.body.MaChuyenBay
    const TenHangKhach = req.body.TenHangKhach
    const CMND = req.body.CMND
    const SoDienThoai = req.body.SoDienThoai
    const MaHangGhe = req.body.MaHangGhe
    const NgayTao = Date.parse(req.body.NgayTao)
    const GiaVe = Number(req.body.GiaVe)
    const ThanhToan = req.body.ThanhToan
    

    const newve = new ve({
        MaChuyenBay,
        TenHangKhach,
        CMND,
        SoDienThoai,
        MaHangGhe,
        NgayTao,
        GiaVe,
        ThanhToan  
    });

    ve.create(newve)
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
  console.log('ve find')
  // if (req.body){
    console.log(req.body)
    ve.findById(req.params.id)
    // ve.findById(req.body.id)
      .then(ve => res.json(ve))
      .catch(err => res.status(400).json('Error: ' + err));
  // }
});

router.route('/delete/:id').delete((req, res) => {
  ve.findByIdAndDelete(req.params.id)
    .then(() => res.json('ve deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log('ve update')
  ve.findById(req.params.id)
    .then(
      ve => {
         ve.MaChuyenBay = req.body.MaChuyenBay
         ve.TenHangKhach = req.body.TenHangKhach
         ve.CMND = req.body.CMND
         ve.SoDienThoai = req.body.SoDienThoai
         ve.MaHangGhe = req.body.MaHangGhe
         ve.NgayTao = Date.parse(req.body.NgayTao)
         ve.GiaVe = Number(req.body.GiaVe)
         ve.ThanhToan = req.body.ThanhToan

      ve.save()
        .then(() => res.json('ve updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;