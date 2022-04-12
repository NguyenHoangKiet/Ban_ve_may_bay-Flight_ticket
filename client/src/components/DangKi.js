import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from './navbar.component';

class DangKi extends Component {
  state = {
    TaiKhoans: [],
    TenTaiKhoan:'',
    MatKhau: '',
    NhapLaiMatKhau : '',
  
  };

  componentDidMount() {
    this.getTaiKhoan();
  }

  getTaiKhoan = () => {
    axios
      .get('/api/TAIKHOAN/bangTAIKHOAN')
      .then((res) => {
        if (res.data) {
          this.setState({
            TaiKhoans: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

//   deleteTodo = (id) => {
//     axios
//       .delete(`/api/todos/${id}`)
//       .then((res) => {
//         if (res.data) {
//           this.getTodos();
//         }
//       })
//       .catch((err) => console.log(err));
//   };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleDangKi = () => {
    const task = { 
       TenTaiKhoan: this.state.TenTaiKhoan, 
       MatKhau: this.state.MatKhau, 
    };

     console.log(task.TenTaiKhoan,' ',task.MatKhau,' ',this.state.NhapLaiMatKhau);
  

   if (task.TenTaiKhoan && task.TenTaiKhoan.length > 0 
     && task.MatKhau && task.MatKhau.length > 0
      // && this.state.NhapLaiMatKhau && this.state.NhapLaiMatKhaulength > 0
      // && task.MatKhau === this.state.NhapLaiMatKhau 
      )
    {
     
      //console.log(task.TenThamSo,' ',task.GiaTri);
      axios
        .post('/api/TAIKHOAN/themTAIKHOAN', task)
        .then((res) => {
          if (res.data) {
            this.getTaiKhoan();
            this.setState({ 
              TenTaiKhoan:'',
              MatKhau: '',
              NhapLaiMatKhau : ''
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  render() {
    let { taikhoans } = this.state;

    return (
      <div className='container'>
        <NavbarCom></NavbarCom>
        <h1>Tạo tài khoản</h1>
        <div >
            <label >Tên tài khoản</label>
            <input name="TenTaiKhoan" type="text" onChange={this.handleInputChange}></input>
        </div>
        <div>
            <label >Mật khẩu</label>
            <input  name="MatKhau" type="text" onChange={this.handleInputChange}></input>
        </div>
        <div>
            <label >Nhập lại mật khẩu</label>
            <input  name="NhapLaiMatKhau" type="text" onChange={this.handleInputChange}></input>
        </div>
        <button onClick={this.handleDangKi}>Đăng kí</button>
      </div>
    );
  }
}

export default DangKi;