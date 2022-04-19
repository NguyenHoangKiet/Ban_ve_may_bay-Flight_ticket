import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';
import { useHistory, useParams } from 'react-router-dom'


export default class SuaVe extends Component {
  constructor(props) {
    super(props);

    this.onChangeMaChuyenBay =this.onChangeMaChuyenBay.bind(this);
    this.onChangeTenHangKhach =this.onChangeTenHangKhach.bind(this);
    this.onChangeCMND = this.onChangeCMND.bind(this);
    this.onChangeSoDienThoai =this.onChangeSoDienThoai.bind(this);
    this.onChangeMaHangGhe =this.onChangeMaHangGhe.bind(this);
    this.onChangeNgayTao =this.onChangeNgayTao.bind(this);
    this.onChangeThanhToan =this.onChangeThanhToan.bind(this);
    this.onChangeGiaVe= this.onChangeGiaVe.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

        
    // MaChuyenBay
    // TenHangKhach
    // CMND
    // SoDienThoai
    // MaHangGhe
    // NgayTao
    // ThanhToan
    // GiaVe
    // hangghes
    this.state = {
      MaChuyenBay : '',
      TenHangKhach : '',
      CMND: '',
      SoDienThoai: '',
      MaHangGhe: '',
      NgayTao : new Date(),
      ThanhToan : false,
      GiaVe : 0,
      hangghes: [],
      MaHangGheObj : {}
    }
  }

  componentDidMount() {
    // console.log(this.props.match.params.id)
    // const task = {
    //      id : this.props.match.params.id
    //     // id : this.props.params
    //   //id : '62529fb105ee230d4b056ab1'
    //   // username : 'kiet'
    // }
    // // console.log(task);
    axios.get('/ves/find/'+this.props.match.params.id)
    // axios.post('/ves/find',task)
      .then(response => {
        this.setState({
          MaChuyenBay: response.data.MaChuyenBay,
          TenHangKhach: response.data.TenHangKhach,
          CMND: response.data.CMND,
          SoDienThoai: response.data.SoDienThoai,
          MaHangGhe: response.data.MaHangGhe,
          NgayTao: new Date(response.data.NgayTao),
          ThanhToan: response.data.ThanhToan,
          GiaVe: response.data.GiaVe
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get('/hangghes/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            hangghes: response.data,
            MaHangGheObj : response.data[0],
            // MaHangGhe : response.data[0]._id
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeMaChuyenBay(e) {
    this.setState({
      MaChuyenBay: e.target.value
    })
  }
  onChangeTenHangKhach(e) {
    this.setState({
      TenHangKhach: e.target.value
    })
  }
  onChangeCMND(e) {
    this.setState({
      CMND: e.target.value
    })
  }
  onChangeSoDienThoai(e) {
    this.setState({
      SoDienThoai: e.target.value
    })
  }
  onChangeMaHangGhe(e) {
    this.setState({
      MaHangGhe: e.target.value
    })
  }
  onChangeMaHangGheObj(e) {
    this.setState({
      MaHangGheObj: e.target.value
    })
  }
  onChangeNgayTao(date) {
    this.setState({
      NgayTao: date
    })
  }
  onChangeThanhToan(e) {
    this.setState({
      ThanhToan: e.target.value
    })
  }
  onChangeGiaVe(e) {
    this.setState({
      GiaVe: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    
    const ve = {
      MaChuyenBay: this.state.MaChuyenBay,
      TenHangKhach: this.state.TenHangKhach,
      CMND: this.state.CMND,
      SoDienThoai: this.state.SoDienThoai,
      MaHangGhe: this.state.MaHangGhe,
      NgayTao: this.state.NgayTao,
      ThanhToan: this.state.ThanhToan,
      GiaVe: this.state.GiaVe,
    }

    axios.post('/ves/update/' + this.props.match.params.id, ve)
      .then(res => console.log(res.data));

    window.location = '/Ve/DanhSachVe';
  }

  render() {
    // console.log(this.props.match.params)
    return (
    <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Sửa vé</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Loại ghế: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.MaHangGhe}
              onChange={this.onChangeMaHangGhe}>
              {
                this.state.hangghes.map(function(user) {
                  return <option 
                    key={user}
                    value={user._id}>{user.TenHangGhe}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Tên hàng khách: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.TenHangKhach}
              onChange={this.onChangeTenHangKhach}
              />
        </div>
        <div className="form-group"> 
          <label>CMND: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.CMND}
              onChange={this.onChangeCMND}
              />
        </div>
        <div className="form-group"> 
          <label>Số điện thoại: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.SoDienThoai}
              onChange={this.onChangeSoDienThoai}
              />
        </div>
        <div className="form-group">
          <label>Giá vé: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.GiaVe}
              onChange={this.onChangeGiaVe}
              />
        </div>
        {/* <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div> */}

        <div className="form-group">
          <input type="submit" value="Sửa" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}