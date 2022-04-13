import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';

const Sanbay = props => (
  <tr>
    <td>{props.sanbay.TenSanBay}</td>
    <td>{props.sanbay.QuocGia}</td>
    <td>
      <Link to={"/SanBay/SuaSanBay/"+props.sanbay._id}>
      {/* <Link to={"/edit/"}> */}
        Sửa
      </Link> 
      | 
      <a href="#" onClick={() => { props.deletesanbay(props.sanbay._id) }}>
        Xóa
      </a>
    </td>
  </tr>
)

export default class DanhSachSanBay extends Component {
  constructor(props) {
    super(props);

    this.deletesanbay = this.deletesanbay.bind(this)

    this.state = {sanbays: []};
  }

  componentDidMount() {
    axios.get('/sanbays/')
      .then(response => {
        this.setState({ sanbays: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletesanbay(id) {
    axios.delete('/sanbays/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      sanbays: this.state.sanbays.filter(el => el._id !== id)
    })
  }

  sanbayList() {
    return this.state.sanbays.map(currentsanbay => {
      return <Sanbay sanbay={currentsanbay} deletesanbay={this.deletesanbay} key={currentsanbay._id}/>;
    })
  }

  render() {
    return (
      <div className='container'>
       <NavbarCom></NavbarCom>
        <h3>Danh sách sân bay</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Tên sân bay</th>
              <th>Quốc gia</th>
            </tr>
          </thead>
          <tbody>
            { this.sanbayList() }
          </tbody>
        </table>
      </div>
    )
  }
}