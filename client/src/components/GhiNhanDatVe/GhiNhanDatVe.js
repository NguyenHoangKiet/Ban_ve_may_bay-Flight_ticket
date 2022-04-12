import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';

class GhiNhanDatVe extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Ghi nhận đặt vé</h1>
        </div>
    );
  }
}

export default GhiNhanDatVe;