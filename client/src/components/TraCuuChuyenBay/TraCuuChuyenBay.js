import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';

class TraCuuChuyenBay extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Tra cứu chuyến bay</h1>
        </div>
    );
  }
}

export default TraCuuChuyenBay;