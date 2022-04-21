import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';

export default class TaoSoLuongHangGhe extends Component {
  constructor(props) {
    super(props);

    this.onChangeMaChuyenBay = this.onChangeMaChuyenBay.bind(this);
    this.onChangeMaHangGhe = this.onChangeMaHangGhe.bind(this);
    this.onChangeSoLuong = this.onChangeSoLuong.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // MaChuyenBay
    // MaHangGhe
    // SoLuong
    this.state = {
      MaChuyenBay : '',
      MaHangGhe : '',
      SoLuong : 0,
      hangghes : []
    }
    
  }

  componentDidMount() {
    axios.get('/hangghes/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            hangghes: response.data,
            MaHangGhe : response.data[0]._id
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
  onChangeMaHangGhe(e) {
    this.setState({
      MaHangGhe: e.target.value
    })
  }
  onChangeSoLuong(e) {
    this.setState({
      SoLuong: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const soluonghangghe = {
      MaChuyenBay : this.state.MaChuyenBay,
      MaHangGhe : this.state.MaHangGhe,
      SoLuong : Number(this.state.SoLuong),
    }

    console.log(soluonghangghe);

    axios.post('/soluonghangghes/add', soluonghangghe)
      .then(res => console.log(res.data));

    // window.location = '/SanBayTrungGian/DanhSachSanBayTrungGian';
  }

  render() {
    // console.log(this.props.match.params)
    return (
    <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Tạo số lượng hạng ghế</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Mã chuyến bay </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.MaChuyenBay}
              onChange={this.onChangeMaChuyenBay}
              />
        </div>
        <div className="form-group"> 
          <label>Tên hạng ghế: </label>
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
          <label>Số lượng : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.SoLuong}
              onChange={this.onChangeSoLuong}
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