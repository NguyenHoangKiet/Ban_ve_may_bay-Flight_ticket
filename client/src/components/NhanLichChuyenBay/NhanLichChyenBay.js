import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';

class NhanLichChuyenBay extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Nhận lịch chuyến bay</h1>
        </div>
    );
  }
}

export default NhanLichChuyenBay;