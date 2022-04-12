import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import NavbarCom from '../navbar.component';
import DangKi from '../DangKi';
import Todo from '../Todo';
import {withRouter} from '../withRouter';

class TrangLamViec extends Component {
    render(){
        return (
            <div className="container">
                <NavbarCom/>    
                {/* <DangKi></DangKi>  
                <Todo></Todo> */}
                {/* <Routes>
                    <Route exact path="/TrangLamViec/dangki" element={<DangKi/>} />
                    <Route exact path="/TrangLamViec/todo"  element={<Todo/>} />
                </Routes>  */}
            </div>         
        )
    }
}

export default withRouter(TrangLamViec);