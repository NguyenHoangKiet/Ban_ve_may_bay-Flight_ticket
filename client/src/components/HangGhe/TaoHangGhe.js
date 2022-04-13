import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';

export default class TaoHangGhe extends Component {
  constructor(props) {
    super(props);

    this.onChangeTenHangGhe = this.onChangeTenHangGhe.bind(this);
    this.onChangePhiThem = this.onChangePhiThem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      TenHangGhe: '',
      PhiThem : 100,
    }
  }

  onChangeTenHangGhe(e) {
    this.setState({
      TenHangGhe: e.target.value
    })
  }

  onChangePhiThem(e) {
    this.setState({
      PhiThem: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const hangghe = {
      TenHangGhe : this.state.TenHangGhe,
      PhiThem : this.state.PhiThem
    }

    //console.log(hangghe);
  
    axios.post('/hangghes/add', hangghe)
      .then(res => console.log(res.data));

    // window.location = '/';
    window.location = '/HangGhe/DanhSachHangGhe';
  }

  render() {
    return (
      <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Tạo hạng ghế</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Tên hạng ghế </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.TenHangGhe}
              onChange={this.onChangeTenHangGhe}
              />
        </div>
        <div className="form-group">
          <label>Phí thêm : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PhiThem}
              onChange={this.onChangePhiThem}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Tạo" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}