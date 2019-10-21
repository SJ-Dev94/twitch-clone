import React from "react";
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class SmallColumn extends React.Component {

  componentDidMount() {
  }



  renderColumn() {
    return (
      <div key={this.props.id}>
        <div>
          <Link to={`/streams/${this.props.title}`}>
            {this.props.title}
          </Link>
          <div>{this.props.tag}</div>
        </div>
      </div>
    )
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  renderCard() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.getRandomInt()}k viewers
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  render() {
    return (
      <div>
        {this.renderCard()}
      </div>
    )
  }
}

