import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    Accounts: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get('/api/todos')
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { todos } = this.state;

    return (
      <div>
        <h1>Chào mừng bạn đến với website bán vé máy bay!</h1>
        <div>
            <label>Tên tài khoản</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Mật khẩu</label>
            <input type="text"></input>
        </div>
        <button>Đăng nhập</button>
      </div>
    );
  }
}

export default Login;