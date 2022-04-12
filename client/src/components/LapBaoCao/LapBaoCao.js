import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';

class LapBaoCao extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Lập báo cáo</h1>
        </div>
    );
  }
}

export default LapBaoCao;