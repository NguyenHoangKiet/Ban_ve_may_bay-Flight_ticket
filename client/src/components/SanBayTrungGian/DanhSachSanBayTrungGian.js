import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';

const SanbayTrungGian = props => (
  <tr>
    <td>{props.sanbayTrungGian.MaChuyenBay}</td>
    <td>{props.sanbayTrungGian.MaSanBay}</td>
    <td>{props.sanbayTrungGian.ThoiGianDung}</td>
    <td>{props.sanbayTrungGian.GhiChu}</td>
    <td>
      <Link to={"/SanBayTrungGian/SuaSanBayTrungGian/"+props.sanbayTrungGian._id}>
      {/* <Link to={"/edit/"}> */}
        Sửa
      </Link> 
      | 
      <a href="#" onClick={() => { props.deletesanbayTrungGian(props.sanbayTrungGian._id) }}>
        Xóa
      </a>
    </td>
  </tr>
)

export default class DanhSachSanBayTrungGian extends Component {
  constructor(props) {
    super(props);

    this.deletesanbayTrungGian = this.deletesanbayTrungGian.bind(this)

    this.state = {sanbayTrungGians: [], sanbays : [], TenSanBay : []};
  }

  componentDidMount() {
    axios.get('/sanbaytrunggians/')
      .then(response => {
        this.setState({ sanbayTrungGians: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('/sanbays/')
      .then(response => {
        this.setState({ sanbays: response.data })
        for (var i = 0 ;i<this.state.sanbayTrungGians.length;i++){
          this.state.TenSanBay.push(
            this.state.sanbays.find(sanbay => 
              this.state.sanbayTrungGians[i].MaSanBay == sanbay._id
            )
          )
      }
      for (var i = 0 ;i<this.state.TenSanBay.length;i++){
        const new_sanbayTrungGians = this.state.sanbayTrungGians
        new_sanbayTrungGians[i].MaSanBay = this.state.TenSanBay[i].TenSanBay;
        this.setState({
          sanbayTrungGians : new_sanbayTrungGians
        })
      }
      console.log(this.state.sanbayTrungGians)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletesanbayTrungGian(id) {
    axios.delete('/sanbaytrunggians/delete/'+id)
      .then(response => { 
        this.setState({
          sanbayTrungGians: this.state.sanbayTrungGians.filter(el => el._id !== id),
          TenSanBay : []
        })
        console.log(response.data)
        for (var i = 0 ;i<this.state.sanbayTrungGians.length;i++){
          this.state.TenSanBay.push(
            this.state.sanbays.find(sanbay => 
              this.state.sanbayTrungGians[i].MaSanBay == sanbay._id
            )
          )
      }
      for (var i = 0 ;i<this.state.TenSanBay.length;i++){
        const new_sanbayTrungGians = this.state.sanbayTrungGians
        new_sanbayTrungGians[i].MaSanBay = this.state.TenSanBay[i].TenSanBay;
        this.setState({
          sanbayTrungGians : new_sanbayTrungGians
        })
      }
      });

    
  }

  sanbayTrungGianList() {
    return this.state.sanbayTrungGians.map(currentsanbayTrungGian => {
      return <SanbayTrungGian sanbayTrungGian={currentsanbayTrungGian} deletesanbay={this.deletesanbayTrungGian} key={currentsanbayTrungGian._id}/>;
    })
  }

  render() {
    return (
      <div className='container'>
       <NavbarCom></NavbarCom>
        <h3>Danh sách sân bay trung gian</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Mã chuyến bay</th>
              <th>Tên sân bay bay</th>
              <th>Thời gian dừng</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            { this.sanbayTrungGianList() }
          </tbody>
        </table>
      </div>
    )
  }
}