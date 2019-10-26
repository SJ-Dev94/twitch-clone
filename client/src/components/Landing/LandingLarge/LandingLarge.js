import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Sidebar from './sidebar.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../LandingSmall/categoryCard.js';



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
    return (
      <div>
        <Row className='no-gutters'>
          <Col>
            <Sidebar />
          </Col>
          {this.state.categories.map((category, index) => {
            return (

              <Col className="">
                <CategoryCard title={category.title} key={category.id} sizes={category.sizes} srcSet={category.srcSet} img={category.src} />
              </Col>
            )
          })}
        </Row>
      </div>
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