import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Container from 'react-bootstrap/Container'
import Sidebar from '../../Sidebar/Sidebar.js';
import MiniDrawer from '../../Sidebar/MiniDrawer.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCategoryCard from './LargeCategoryCard.js';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


class LandingLarge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      small: false
    };
    this.result = [];
    //test
  }

  async componentDidMount() {
    await this.fetchCategories();
  }

  chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size))
    }

    return results;
  }






  fetchCategories = async () => {
    const ref = database.ref("Categories");
    await ref.once('value', snapshot => {
      snapshot.forEach(snapshot2 => {
        const streamListSnapshot = snapshot2.val();
        this.result.push(streamListSnapshot);
        console.log(this.result);
      })
      this.setState({ categories: this.result });
    }
    )
  };


  renderLarge() {
    const color = {
      backgroundColor: 'red'
    }
    const sidebar = {
      height: '100vh',
      width: '2rem'
    }

    const width = {
      width: '40vw'
    }

    const hunnawidth = {
      width: '100vw'
    }

    const colHeight = {


    }

    const wrapper = {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red',
      height: '100vh',
    }

    const pad = {
      padding: 'calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01)',
      border: '1px dotted yellow',
      backgroundColor: 'purple',
    }

    const flexCol = {
      position: 'sticky',
      top: '0rem',
    }




    return (
      <div style={wrapper}>
        <div style={flexCol}>
          <MiniDrawer />
        </div>
        <Container fluid={true}>
          <h4 style={{ fontSize: '1.2rem' }}>Categories</h4>
          <Row className='no-gutters' style={pad}>
            {this.state.categories.map((category, index) => {
              return (
                <Col style={colHeight} xs={6} sm={4} lg={3} xl={2}>
                  <LargeCategoryCard style={colHeight} title={category.title} key={category.id} srcSetLarge={category.srcSetLarge} img={category.srcLarge} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div >
    );
  }






  render() {
    return (
      <div>

        {this.renderLarge()}
      </div>


    );
  }

}

const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}

export default connect(mapStateToProps)(LandingLarge);