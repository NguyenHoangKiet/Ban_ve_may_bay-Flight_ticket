import React, { Component } from 'react';
import axios from 'axios';
import NavbarCom from '../navbar.component';
import {Row,Col, Container,Nav, Navbar, ListGroup} from 'react-bootstrap'
import './ThayDoiQuyDinh.css';
import { Link } from 'react-router-dom';

class ThayDoiQuyDinh extends Component {
  render() {
    return (
        <div className='container'>
            <NavbarCom></NavbarCom>
            <h1>Thay đổi quy định</h1>
        
            <div>
             
            </div>
        </div>
    );
  }
}

export default ThayDoiQuyDinh;