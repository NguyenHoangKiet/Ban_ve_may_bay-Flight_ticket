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
import NhanLichChuyenBay from './components/NhanLichChuyenBay/NhanLichChyenBay'
import BanVe from './components/BanVe/BanVe'
import GhiNhanDatVe from './components/GhiNhanDatVe/GhiNhanDatVe'
import TraCuuChuyenBay from './components/TraCuuChuyenBay/TraCuuChuyenBay'
import  LapBaoCao from './components/LapBaoCao/LapBaoCao'
import  ThayDoiQuyDinh from './components/ThayDoiQuyDinh/ThayDoiQuyDinh'
// import testBootstrap from './components/testBootstrap'

import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dangnhap from './components/Dangnhap/Dangnhap';

const App = () => {
  const Wrapper = (props) => {
    const params = useParams();
    return <EditExercise  {...{...props, match: {params}} } />
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
                    <Route exact path="/NhanLichChuyenBay" element={<NhanLichChuyenBay/>} />
                    <Route exact path="/BanVe"  element={<BanVe/>} />
                    <Route exact path="/GhiNhanDatVe"  element={<GhiNhanDatVe/>} />
                    <Route exact path="/TraCuuChuyenBay"  element={<TraCuuChuyenBay/>} />
                    <Route exact path="/LapBaoCao"  element={<LapBaoCao/>} />
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
