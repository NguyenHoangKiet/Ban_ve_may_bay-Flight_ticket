import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';

const SoLuongHangGhe = props => (
  <tr>
    {/* MaChuyenBay
    MaHangGhe
    SoLuong */}
    <td>{props.soluonghangghe.MaChuyenBay}</td>
    <td>{props.soluonghangghe.MaHangGhe}</td>
    <td>{props.soluonghangghe.SoLuong}</td>
    <td>
      <Link to={"/SoLuongHangGhe/SuaSoLuongHangGhe/"+props.soluonghangghe._id}>
      {/* <Link to={"/edit/"}> */}
        Sửa
      </Link> 
      | 
      <a href="#" onClick={() => { props.deletesoluonghangghe(props.soluonghangghe._id) }}>
        Xóa
      </a>
    </td>
  </tr>
)

export default class DanhSachSoLuongHangGhe extends Component {
  constructor(props) {
    super(props);

    this.deletesoluonghangghe = this.deletesoluonghangghe.bind(this)

    this.state = {soluonghangghes: [], hangghes : [], hangghe : {}, TenHangGhe : []};
  }

  componentDidMount() {
    axios.get('/soluonghangghes/')
      .then(response => {
        this.setState({ soluonghangghes: response.data })
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

  deletesoluonghangghe(id) {
    axios.delete('/soluonghangghes/delete/'+id)
      .then(response => { 
        this.setState({
          soluonghangghes: this.state.soluonghangghes.filter(el => el._id !== id),
          TenSanBay : []
        })
        console.log(response.data)
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
      });

    
  }

  soluonghanggheList() {
    return this.state.soluonghangghes.map(currentsoluonghangghe => {
      return <SoLuongHangGhe soluonghangghe={currentsoluonghangghe} deletesoluonghangghe={this.deletesoluonghangghe} key={currentsoluonghangghe._id}/>;
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
              <th>Tên hạng ghế</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            { this.soluonghanggheList() }
          </tbody>
        </table>
      </div>
    )
  }
}