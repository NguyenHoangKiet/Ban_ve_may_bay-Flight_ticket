import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import NavbarCom from '../navbar.component';
import {Card,Button} from 'react-bootstrap'

const ChuyenBay = props => (
  <tr>
    <td>{props.chuyenbay.username}</td>
    <td>{props.chuyenbay.discription}</td>
    <td>{props.chuyenbay.duration}</td>
    <td>{props.chuyenbay.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.chuyenbay._id}>
      {/* <Link to={"/edit/"}> */}
        edit
      </Link> 
      | 
      <a href="#" onClick={() => { props.deleteExercise(props.chuyenbay._id) }}>
        delete
      </a>
    </td>
  </tr>
)

export default class DanhSachChuyenBay extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {chuyenbays: []};
  }

  componentDidMount() {
    axios.get('/chuyenbays/')
      .then(response => {
        this.setState({ chuyenbays: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/chuyenbays/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      chuyenbays: this.state.chuyenbays.filter(el => el._id !== id)
    })
  }

  chuyenbayList() {
    return this.state.chuyenbays.map(currentchuyenbay => {
      return <ChuyenBay chuyenbay={currentchuyenbay} deleteExercise={this.deleteExercise} key={currentchuyenbay._id}/>;
    })
  }

  render() {
    return (
      <div className='container'>
       <NavbarCom></NavbarCom>
        <h3>Danh sách chuyến bay</h3>
        <table className="table">
          {/* <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead> */}
          <tbody>
            { 
            // this.chuyenbayList() 
            <div>
            <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
            }
          </tbody>
        </table>
      </div>
    )
  }
}