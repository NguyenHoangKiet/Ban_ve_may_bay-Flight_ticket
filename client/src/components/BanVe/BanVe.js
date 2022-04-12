import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';

class BanVe extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Bán vé</h1>
        </div>
    );
  }
}

export default BanVe;