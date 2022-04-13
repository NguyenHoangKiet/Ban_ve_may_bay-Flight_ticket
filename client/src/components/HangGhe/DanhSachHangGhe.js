import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';

const Hangghe = props => (
  <tr>
    <td>{props.hangghe.TenHangGhe}</td>
    <td>{props.hangghe.PhiThem}</td>
    <td>
      <Link to={"/HangGhe/SuaHangGhe/"+props.hangghe._id}>
      {/* <Link to={"/edit/"}> */}
        Sửa
      </Link> 
      | 
      <a href="#" onClick={() => { props.deletehangghe(props.hangghe._id) }}>
        Xóa
      </a>
    </td>
  </tr>
)

export default class DanhSachHangGhe extends Component {
  constructor(props) {
    super(props);

    this.deletehangghe = this.deletehangghe.bind(this)

    this.state = {hangghes: []};
  }

  componentDidMount() {
    axios.get('/hangghes/')
      .then(response => {
        this.setState({ hangghes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletehangghe(id) {
    axios.delete('/hangghes/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      hangghes: this.state.hangghes.filter(el => el._id !== id)
    })
  }

  hanggheList() {
    console.log(this.state.hangghes)
    return this.state.hangghes.map(currenthangghe => {
      return <Hangghe hangghe={currenthangghe} deletehangghe={this.deletehangghe} key={currenthangghe._id}/>;
    })
  }

  render() {
    return (
      <div className='container'>
       <NavbarCom></NavbarCom>
        <h3>Danh sách hạng ghế</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Tên hạng ghế</th>
              <th>Phí thêm</th>
            </tr>
          </thead>
          <tbody>
            { this.hanggheList() }
          </tbody>
        </table>
      </div>
    )
  }
}