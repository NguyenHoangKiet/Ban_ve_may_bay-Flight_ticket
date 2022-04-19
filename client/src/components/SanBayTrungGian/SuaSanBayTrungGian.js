import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import NavbarCom from '../navbar.component';
import { useHistory, useParams } from 'react-router-dom'


export default class SuaSanBay extends Component {
  constructor(props) {
    super(props);

    this.onChangeTenSanBay = this.onChangeTenSanBay.bind(this);
    this.onChangeQuocGia = this.onChangeQuocGia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      TenSanBay: '',
      QuocGia : '',
    }
    
  }

  componentDidMount() {
    axios.get('/sanbays/find/'+this.props.match.params.id)
    // axios.post('/exercises/find',task)
      .then(response => {
        this.setState({
          TenSanBay : response.data.TenSanBay,
          QuocGia : response.data.QuocGia
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeTenSanBay(e) {
    this.setState({
      TenSanBay: e.target.value
    })
  }

  onChangeQuocGia(e) {
    this.setState({
      QuocGia: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const sanbay = {
      TenSanBay : this.state.TenSanBay,
      QuocGia : this.state.QuocGia
    }

    console.log(sanbay);

    axios.post('/sanbays/update/' + this.props.match.params.id, sanbay)
      .then(res => console.log(res.data));

    window.location = '/SanBay/DanhSachSanBay';
  }

  render() {
    // console.log(this.props.match.params)
    return (
    <div className='container'>
      <NavbarCom></NavbarCom>
      <h3>Sửa sân bay</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Tên sân bay </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.TenSanBay}
              onChange={this.onChangeTenSanBay}
              />
        </div>
        <div className="form-group">
          <label>Quốc gia : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.QuocGia}
              onChange={this.onChangeQuocGia}
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