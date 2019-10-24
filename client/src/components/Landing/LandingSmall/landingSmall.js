import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CategoryCard from './categoryCard.js';
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import chunk from 'lodash/chunk';


class LandingSmall extends React.Component {
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


  
  renderSm() {
    const myRow = {
      border: '3px solid red',
    }

    const myCol = {
      border: '3px dashed blue'
    }
    const pad = {
      padding: 'calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01)'
    }

    return (
      <div style={pad}>
         <Row className='no-gutters'>
        {this.state.categories.map((category, index) => {
          return (
            <Col className="" xs={6} sm={6} md={3}>
              <CategoryCard title={category.title} key={category.id} sizes={category.sizes} srcSet={category.srcSet} img={category.src} />
            </Col>
          )
        })}
      </Row>
      </div>
    );
  }




  /* <Col >
              <CardDeck>
                <CategoryCard title={category[1].title} key={category[1].id} img={category[1].thumbnailURL} />
              </CardDeck>
            </Col> */

  renderMd() {
    /*return this.state.categories.map((category, index) => {
      return (
        <Container>
          <Row>
            <Col>
              <CardGroup>
                <CategoryCard title={category.title} key={category.id} img={category.thumbnailURL} />
                {console.log(category)}
              </CardGroup>
            </Col>
            <Col >
              pppp
            </Col>
          </Row>
        </Container>
      );
    }

    )
    */
  }

  render() {
    const myContainer = {
      border: '1px solid green',
    }
    return (

      this.renderSm()


    );
  }

}

const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}

export default connect(mapStateToProps)(LandingSmall);