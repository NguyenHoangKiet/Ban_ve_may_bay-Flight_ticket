import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from "react-router-dom";

import Todo from './components/Todo';
import './App.css';

// import Login from './components/Login';
import Login from './components/Dangnhap/Dangnhap';

import DangKi from './components/DangKi';


import NavbarCom from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

import TrangLamViec from './components/TrangLamViec/TrangLamViec'
import  ThayDoiQuyDinh from './components/ThayDoiQuyDinh/ThayDoiQuyDinh'

import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dangnhap from './components/Dangnhap/Dangnhap';
// Sân bay
import SuaSanBay from './components/SanBay/SuaSanBay';
import TaoSanBay from './components/SanBay/TaoSanBay';
import DanhSachSanBay from './components/SanBay/DanhSachSanBay';
// Sân bay trung gian
import SuaSanBayTrungGian from './components/SanBayTrungGian/SuaSanBayTrungGian';
import TaoSanBayTrungGian from './components/SanBayTrungGian/TaoSanBayTrungGian';
import DanhSachSanBayTrungGian from './components/SanBayTrungGian/DanhSachSanBayTrungGian';
// Vé
import BanVe from './components/Ve/BanVe';
import DanhSachVe from './components/Ve/DanhSachVe';
import DatVe from './components/Ve/DatVe';
import SuaVe from './components/Ve/SuaVe';
// Hạng ghế
import DanhSachHangGhe from './components/HangGhe/DanhSachHangGhe'
import SuaHangGhe from './components/HangGhe/SuaHangGhe'
import TaoHangGhe from './components/HangGhe/TaoHangGhe'
// Chuyen bay
import SuaChuyenBay from './components/ChuyenBay/SuaChuyenBay';
import TaoChuyenBay from './components/ChuyenBay/TaoChuyenBay';
import DanhSachChuyenBay from './components/ChuyenBay/DanhSachChuyenBay';
const App = () => {
  const Wrapper = (props) => {
    const params = useParams();
    return <EditExercise  {...{...props, match: {params}} } />
  }

  const Wrapper_SuaHangGhe = (props) => {
    const params = useParams();
    return <SuaHangGhe  {...{...props, match: {params}} } />
  }

  const Wrapper_SuaSanBay = (props) => {
    const params = useParams();
    return <SuaSanBay  {...{...props, match: {params}} } />
  }

  const Wrapper_SuaSanBayTrungGian = (props) => {
    const params = useParams();
    return <SuaSanBayTrungGian  {...{...props, match: {params}} } />
  }

  const Wrapper_SuaVe = (props) => {
    const params = useParams();
    return <SuaVe  {...{...props, match: {params}} } />
  }
  return (
      <div>
       
       <div className="container">
    
                 {/* <NavbarCom /> */}
                  <Routes>
                    <Route exact path="/"  element={<Dangnhap/>} />
                    {/* <Route exact path="/taikhoans" element={<DangKi/>} />
                    <Route exact path="/todos"  element={<Todo/>} /> */}

                    <Route exact path="/dangki"   element={<DangKi/>} />
                    <Route exact path="/todo"   element={<Todo/>} />
                    <Route exact path="/TrangLamViec"  element={<TrangLamViec/>} />

                    {/* Chuyen Bay */}
                    <Route exact path="/ChuyenBay/TaoChuyenBay"  element={<TaoChuyenBay/>} />
                    <Route exact path="/ChuyenBay/DanhSachChuyenBay"  element={<DanhSachChuyenBay/>} />
                    <Route exact path="/ChuyenBay/SuaChuyenBay/:id"  element={<SuaChuyenBay/>} />
                    {/* Vé */}
                    <Route exact path="/Ve/BanVe"  element={<BanVe/>} />
                    <Route exact path="/Ve/DanhSachVe"  element={<DanhSachVe/>} />
                    <Route exact path="/Ve/SuaVe/:id"  element={<Wrapper_SuaVe/>} />
                    <Route exact path="/Ve/DatVe"  element={<DatVe/>} />
                    {/* Sân bay */}
                    <Route exact path="/SanBay/TaoSanBay"  element={<TaoSanBay/>} />
                    <Route exact path="/SanBay/DanhSachSanBay"  element={<DanhSachSanBay/>} />
                    <Route exact path="/SanBay/SuaSanBay/:id"  element={<Wrapper_SuaSanBay/>} />
                     {/* Sân bay trung gian */}
                     <Route exact path="/SanBayTrungGian/TaoSanBayTrungGian"  element={<TaoSanBayTrungGian/>} />
                    <Route exact path="/SanBayTrungGian/DanhSachSanBayTrungGian"  element={<DanhSachSanBayTrungGian/>} />
                    <Route exact path="/SanBayTrungGian/SuaSanBayTrungGian/:id"  element={<Wrapper_SuaSanBayTrungGian/>} />
                    {/* Hạng ghế */}
                    <Route exact path="/HangGhe/TaoHangGhe"     element={<TaoHangGhe/>} />
                    <Route exact path="/HangGhe/DanhSachHangGhe"  element={<DanhSachHangGhe/>} />
                    <Route exact path="/HangGhe/SuaHangGhe/:id"  element={<Wrapper_SuaHangGhe/>} />
                    {/* Quy định */}
                    <Route exact path="/ThayDoiQuyDinh"  element={<ThayDoiQuyDinh/>} />

                    {/* <Route exact path="/" element={<ExercisesList/>} />
                   
                    <Route exact path="/edit/:id" element={<Wrapper />} />
                    <Route exact path="/create" element={<CreateExercise/>} />
                    <Route exact path="/user" element={<CreateUser/>} /> */}

                  </Routes>   
        </div>
         </div>
     // <Todo/>
  );
};

export default App;
