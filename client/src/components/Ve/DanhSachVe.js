import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';

const Ve = props => (
  <tr>
    <td>{props.ve.MaChuyenBay}</td>
    <td>{props.ve.TenHangKhach}</td>
    <td>{props.ve.CMND}</td>
    <td>{props.ve.SoDienThoai}</td>
    <td>{props.ve.MaHangGhe}</td>
    <td>{props.ve.NgayTao.substring(0,10)}</td>
    <td>{ 
      ((Boolean(props.ve.ThanhToan) == false ) && 'Chưa thanh toán' ) 
      ||
      ((Boolean(props.ve.ThanhToan) == true ) && 'Đã thanh toán' )  }
     </td>
    <td>{props.ve.GiaVe}</td>
    <td>
      <Link to={"/Ve/SuaVe/"+props.ve._id}>
      {/* <Link to={"/edit/"}> */}
        Sửa
      </Link> 
      | 
      <a href="#" onClick={() => { props.deleteVe(props.ve._id) }}>
        Xóa
      </a>
    </td>
  </tr>
)

export default class DanhSachVe extends Component {
  constructor(props) {
    super(props);

    this.deleteVe = this.deleteVe.bind(this)

    this.state = {ves: [], hangghes : [], hangghe : {}, TenHangGhe : []};
  }

  componentDidMount() {
    axios.get('/ves/')
      .then(response => {
        this.setState({ ves: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    
    axios.get('/hangghes/')
      .then(response => {
        this.setState({ hangghes: response.data })
        for (var i = 0 ;i<this.state.ves.length;i++){
            this.state.TenHangGhe.push(
              this.state.hangghes.find(hangghe => 
                this.state.ves[i].MaHangGhe == hangghe._id
              )
            )
        }
        for (var i = 0 ;i<this.state.TenHangGhe.length;i++){
          const new_ves = this.state.ves
          new_ves[i].MaHangGhe = this.state.TenHangGhe[i].TenHangGhe;
          this.setState({
            ves : new_ves
          })
        }
        console.log(this.state.TenHangGhe)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteVe(id) {
    axios.delete('/ves/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      ves: this.state.ves.filter(el => el._id !== id)
    })
  }

  veList() {
    return this.state.ves.map( (currentve) => {
      return <Ve ve={currentve} deleteVe={this.deleteVe} 
              key={currentve._id}></Ve>;
    })
  }

  render() {
    return (
      <div className='container'>
       <NavbarCom></NavbarCom>
        <h3>Danh sách vé</h3>
        <table className="table">
          <thead className="thead-light">
            <tr> 
              <th>Mã chuyến bay</th>
              <th>Tên khách hàng</th>
              <th>CMND</th>
              <th>Số điện thoại</th>
              <th>Loại ghế</th>
              <th>Ngày tạo</th>
              <th>Thanh toán</th>
              <th>Giá vé</th>
            </tr>
          </thead>
          <tbody>
            { this.veList() }
          </tbody>
        </table>
      </div>
    )
  }
}