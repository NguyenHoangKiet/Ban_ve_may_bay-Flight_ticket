import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';
import { useHistory, useParams } from 'react-router-dom'


export default class SuaHangGhe extends Component {
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

  componentDidMount() {
    axios.get('/hangghes/find/'+this.props.match.params.id)
    // axios.post('/exercises/find',task)
      .then(response => {
        this.setState({
          TenHangGhe : response.data.TenHangGhe,
          PhiThem : response.data.PhiThem
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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

    console.log(hangghe);

    axios.post('/hangghes/update/' + this.props.match.params.id, hangghe)
      .then(res => console.log(res.data));

    window.location = '/HangGhe/DanhSachHangGhe';
  }

  render() {
    // console.log(this.props.match.params)
    return (
    <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Sửa hạng ghế</h3>
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
          <input type="submit" value="Sửa" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}