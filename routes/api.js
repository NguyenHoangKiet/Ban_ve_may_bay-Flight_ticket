const express = require('express');
const router = express.Router();


const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});


// Tai khoan
const TaiKhoan = require('../models/TAIKHOAN');

router.get('/TAIKHOAN/bangTAIKHOAN', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  TaiKhoan.find({})
    .then((data) => res.json(data))
    .catch(next);
  const test =  TaiKhoan.find({})
  //console.log(test);
});

router.post('/TAIKHOAN/ThemTAIKHOAN', (req, res, next) => {
  // 

  if (req.body) {
    console.log(req.body)
    TaiKhoan.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/TAIKHOAN/:id', (req, res, next) => {
  TaiKhoan.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/TAIKHOAN/dangnhap', (req, res, next) => {
  if (req.body) {
    console.log(req.body)
   // TaiKhoan.create(req.body)
     //TaiKhoan.find(req.body)
      TaiKhoan.find()
      .where('TenTaiKhoan').equals(req.body.TenTaiKhoan)
      .where('MatKhau').equals(req.body.MatKhau)
      .then((data) => res.json(data))
      .catch(next);
    //  TaiKhoan.create({TenTaiKhoan: 'kiet nek 1', MatKhau: 'kiet nek 1'})
    //   .then((data) => res.json(data))
    //   .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

// End TAIKHOAN

// Begin THAMSO
const ThamSo = require('../models/THAMSO');

router.get('/THAMSO', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  ThamSo.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/THAMSO', (req, res, next) => {
  // 
  if (req.body) {
    ThamSo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/THAMSO/:id', (req, res, next) => {
  ThamSo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
// End THAMSO

// Begin User
// let User = require('../models/user');

// router.route('/user').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error '+ err));
// });

// router.post('/user/add', (req, res, next) => {
// //router.route('/user/add').post((req, res) => {

//     console.log(req.body,' hello');

//     const username = req.body.username;
//     const newUser = new User({username});

//     // User.save()
//     //     .then(users => res.json('User added!'))
//     //     .catch(err => res.status(400).json('Error '+ err));

//     if (req.body) {
//           console.log(req.body)
//           User.create(req.body)
//             .then((data) => res.json(data))
//             .catch(next);
//         } else {
//           res.json({
//             error: 'The input field is empty',
//           });
//         }
  
// });
// End User

module.exports = router;