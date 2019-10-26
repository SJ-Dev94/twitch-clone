import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, Dropdown, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Following: [],
      small: false
    };
    this.result = [];

  }

  async componentDidMount() {
    // await this.fetchFollowing()
  }




  fetchFollowing = async (props) => {
    const ref = database.ref(`User/${props}/Following`);
    await ref.once('value', snapshot => {
      snapshot.forEach(snapshot2 => {
        const streamListSnapshot = snapshot2.val();
        this.result.push(streamListSnapshot);
      })
      this.setState({ Following: this.result });
    }
    )
  };




  render() {

    return (
      <Accordion>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
      </Accordion.Toggle>
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
  </Nav.Link>
        </Nav>
      </Accordion>
    );
  }
}


const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}

export default connect(mapStateToProps)(Sidebar);