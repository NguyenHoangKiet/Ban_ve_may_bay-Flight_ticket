import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';

export default class TaoSanBay extends Component {
  constructor(props) {
    super(props);

    this.onChangeMaChuyenBay = this.onChangeMaChuyenBay.bind(this);
    this.onChangeMaSanBay = this.onChangeMaSanBay.bind(this);
    this.onChangeThoiGianDung = this.onChangeThoiGianDung.bind(this);
    this.onChangeGhiChu = this.onChangeGhiChu.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // MaChuyenBay
    // MaSanBay
    // ThoiGianDung
    // GhiChu
    this.state = {
      MaChuyenBay: '',
      MaSanBay: '',
      ThoiGianDung : '1',
      GhiChu : '',
      sanbays : []
    }
    
  }

  componentDidMount() {
    axios.get('/sanbays/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            sanbays: response.data,
            MaSanBay : response.data[0]._id
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
  onChangeMaSanBay(e) {
    this.setState({
      MaSanBay: e.target.value
    })
  }
  onChangeThoiGianDung(e) {
    this.setState({
      ThoiGianDung: e.target.value
    })
  }    
  onChangeGhiChu(e) {
    this.setState({
      GhiChu: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const sanbay = {
      MaChuyenBay : this.state.MaChuyenBay,
      MaSanBay : this.state.MaSanBay,
      ThoiGianDung : Number(this.state.ThoiGianDung),
      GhiChu : this.state.GhiChu  
    }

    console.log(sanbay);

    axios.post('/sanbaytrunggians/add', sanbay)
      .then(res => console.log(res.data));

    // window.location = '/SanBayTrungGian/DanhSachSanBayTrungGian';
  }

  render() {
    // console.log(this.props.match.params)
    return (
    <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Tạo sân bay trung gian</h3>
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
          <label>Tên sân bay: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.MaSanBay}
              onChange={this.onChangeMaSanBay}>
              {
                this.state.sanbays.map(function(user) {
                  return <option 
                    key={user}
                    value={user._id}>{user.TenSanBay} ( {user.QuocGia} )
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Thời gian dừng : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.ThoiGianDung}
              onChange={this.onChangeThoiGianDung}
              />
        </div>
        <div className="form-group">
          <label>Ghi chú : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.GhiChu}
              onChange={this.onChangeGhiChu}
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