import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Sidebar from './Sidebar.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCategoryCard from './LargeCategoryCard.js';



class LandingLarge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      small: false
    };
    this.result = [];

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
      })
      this.setState({ categories: this.result });
    }
    )
  };



  renderLarge() {
    const color = {
      backgroundColor: 'red'
    }
    const height = {
      height: '100vh'
    }

    const width = {
      width: '40vw'
    }

    const hunnawidth = {
      width: '100vw'
    }

    const wrapper = {
      display: 'flex',
      height: '100vh',
      backgroundColor: 'red'
    }

    const pad = {
      padding: 'calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01)',
      border: '1px dotted yellow'
    }




    return (
      <div style={wrapper}>
        <Sidebar />
        <Row className='no-gutters h-100' style={pad}>
          {this.state.categories.map((category, index) => {
            return (

              <Col>
                <LargeCategoryCard title={category.title} key={category.id} img={category.src} />
              </Col>
            )
          })}
        </Row>
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