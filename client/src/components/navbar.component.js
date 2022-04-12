import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import DangKi from './DangKi';
import { withRouter } from './withRouter';

class NavbarCom extends Component {

  // ChuyenTrangDangki(){
  //   this.props.navigate('/TrangLamViec/dangki')
  // }

  // ChuyenTrangTodo(){
  //   this.props.navigate('/todo')
  // }
 
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Phần mềm bán vé máy bay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link as={Link} to="/dangki">Đăng kí</Nav.Link>
                <Nav.Link as={Link} to="/todo">ToDo</Nav.Link> */}
                <Nav.Link as={Link} to="/NhanLichChuyenBay">Nhận lịch chuyến bay</Nav.Link>
                <Nav.Link as={Link} to="/BanVe">Bán vé</Nav.Link>      
                <Nav.Link as={Link} to="/GhiNhanDatVe">Ghi nhận đặt vé</Nav.Link>    
                <Nav.Link as={Link} to="/TraCuuChuyenBay">Tra cứu chuyến bay</Nav.Link>
                <Nav.Link as={Link} to="/LapBaoCao">Lập báo cáo</Nav.Link>

                <Nav.Link as={Link} to="/ThayDoiQuyDinh">Thay đổi quy định</Nav.Link>  

                {/* <Nav.Link as={Link} to="/">Exercises List</Nav.Link>
                <Nav.Link as={Link} to="/edit/:id">Edit Exercise</Nav.Link>
                <Nav.Link as={Link} to="/create">Create Exercise</Nav.Link>
                <Nav.Link as={Link} to="/user">Create User</Nav.Link> */}

                {/* <NavDropdown title="Thay đổi quy định" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Sân bay</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Loại ghế</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Khác</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
           </Navbar.Collapse>
          </Container>
        </Navbar>
     </div>
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //   {/* <a to="/" className="navbar-brand">ExcerTracker</a> */}
      //   <div className="collpase navbar-collapse">
      //   <ul className="navbar-nav mr-auto">
      //     <li className="navbar-item">
      //     {/* <a href="/dangki" className="nav-link">Đăng kí</a> */}
      //     <Link to="/dangki" className="nav-link">Đăng kí</Link>
      //     </li>
      //     <li className="navbar-item">
      //     {/* <a href="/dangnhap" className="nav-link">Đăng nhập</a> */}
      //     <Link to="/" className="nav-link">Đăng nhập</Link>
      //     </li>
      //     <li className="navbar-item">
      //     {/* <a href="/todo" className="nav-link">Todo</a> */}
      //     <Link to="/todo" className="nav-link">Todo</Link>
      //     </li>
      //   </ul>
      //   </div>
      // </nav>
    );
  }
}

// export default withRouter(NavbarCom)

export default NavbarCom