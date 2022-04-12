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
              <Row lg={2}>
                <Col 
                // xs={8} 
                    md={4}
                >
                  <ListGroup as="ul">
                    <ListGroup.Item as="li"
                    //  active
                     >
                      Danh sách sân bay
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Tạo sân bay</ListGroup.Item>
                    {/* <ListGroup.Item as="li" disabled>
                      Tạo sân bay
                    </ListGroup.Item> */}
                    {/* <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item> */}
                </ListGroup>
                </Col>

                <Col xs={12} md={6}>
                  xs=12 md=8
                </Col>
                
              </Row>
            </div>
        </div>
    );
  }
}

export default ThayDoiQuyDinh;