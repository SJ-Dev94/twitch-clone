import React from "react";
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default class SmallColumn extends React.Component {

  truncate(str) {
    return str.length > 17 ? str.substring(0, 14) + "..." : str;
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  renderCard() {
    const cardTitleStyle = {
      fontSize: ".8rem"
    }
    const myCard = {
      border: '1px solid yellow',
    }

    const hunna = {
      height: '100%'
    }

    const cardStyle = {
      margin: '0px 4px 7px 4px',
      height: '100%'
    }

    const truncate = {
      width: '250px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
    return (
      <Card style={cardStyle} className='h-100' >
        <Card.Img variant="top" sizes={this.props.sizes} srcSet={this.props.srcSet} src={this.props.img} />
        <Card.Body style={hunna}>
          <Card.Title className='' style={{ ...cardTitleStyle, ...truncate }} >
            <strong>{this.truncate(this.props.title)}</strong></Card.Title>
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
