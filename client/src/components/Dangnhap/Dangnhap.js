import React, { Component } from 'react';
import './Dangnhap.css';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import { Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {withRouter} from '../withRouter';

class Dangnhap extends Component {
    state = {
      TAIKHOAN: [],
      TenTaiKhoan:'',
      MatKhau: '',
      check : 0
    };
  
    componentDidMount() {
      // this.getTaiKhoan();
    }
  
    getTaiKhoan = () => {
      axios
        .get('/api/TAIKHOAN/bangTAIKHOAN')
        .then((res) => {
          if (res.data) {
            this.setState({
              TAIKHOAN: res.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  
    handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    };
  
    handleDangnhap = () => {
      const task = { 
        TenTaiKhoan: String(this.state.TenTaiKhoan), 
        MatKhau: String(this.state.MatKhau), 
      };
      if (task.TenTaiKhoan && task.TenTaiKhoan.length > 0 
        && task.MatKhau && task.MatKhau.length > 0
        )
      {
        axios
          // truyền tham số dùng post
          .post('/api/TAIKHOAN/dangnhap', task)
          .then((res) => {
            if (res.data) {
               this.setState({ 
                  TenTaiKhoan:'',
                  MatKhau: '',
                  TAIKHOAN : res.data
               });
            }
             if (this.state.TAIKHOAN.length > 0 ){
                //Chuyen trang
                alert('Đăng nhập thành công')
                this.props.navigate('/TrangLamViec')
              }
              else {
                alert('Đăng nhập thất bại, vui lòng kiểm tra lại tài khoản/mật khẩu')
              }
          })
          .catch((err) => console.log(err));
      } else {
        console.log('input field required');
      }
    };
  
    render() {
      return (  
      <div>
        <Form>
          <h2>Đăng nhập</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tài khoản</Form.Label>
            <Form.Control 
                type="input" placeholder="Nhập tài khoản" 
                name="TenTaiKhoan"
                onChange={this.handleInputChange}
                /> 
            <Form.Text className="text-muted">
                Vui lòng sử dụng tài khoản đã được cấp
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control 
                type="password" placeholder="Nhập mật khẩu" 
                name="MatKhau"
                onChange={this.handleInputChange}/>   
          </Form.Group>
          <Button 
            variant="primary"
            //type="submit" 
            onClick={this.handleDangnhap}>
             Đăng nhập
          </Button>
        </Form>    
        {/* <ul>
          {
                  this.state.TAIKHOAN.map((todo) => {
                    return (
                      <li key={todo._id} >
                             {todo.TenTaiKhoan}
                      </li>
                    );
                  })  
          }
        </ul>    */}
      </div>
      )
    }
  }
  
  export default withRouter(Dangnhap);