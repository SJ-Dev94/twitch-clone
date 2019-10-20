import React from "react";
import { Link } from 'react-router-dom'
import { database } from '../../firebaseconfig.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CategoryCard from './categoryCard.js';
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'

export default class LandingSmall extends React.Component {
  constructor(props) {
    super(props)
    this.state = { categories: [] };
    this.categoryArray = [[], []];
  }

  async componentDidMount() {
    await this.fetchCategories();
  }

  // split array into 2
  //find array.length
  //set to variable:  const x = array.length
  //set variable: const y = array.length / 2;
  //set variable: const roundedLength= (Math.round(y));
  //ex: categoryArray = [[1/2 array.length], [1/2 array.length]];
  // array.slice(0, roundedLength ).concat(categoryArray[0]);
  //array.slice(roundedLength, array.length).concat(categoryArray[1]); 
  splitArray = (x) => {
    const arrayLength = x.length;
    const halfArrayLength = Math.round(arrayLength / 2);
    const firstColumn = x.slice(0, halfArrayLength);
    const secondColumn = x.slice(halfArrayLength, arrayLength);
    x = [[...firstColumn], ...[secondColumn]];
    this.setState({ categories: x });
  }

  fetchCategories = () => {
    const ref = database.ref("Categories");
    const result = [];
    ref.once('value', snapshot => {
      snapshot.forEach(snapshot2 => {
        const streamListSnapshot = snapshot2.val();
        result.push(streamListSnapshot);
      })
      this.splitArray(result);
    }
    )
  };


  renderList() {

    return this.state.categories.map((category, index) => {
      console.log(this.state);
      console.log(category);
      console.log(index);
      return (
        <Container className="container-fluid">
          <Row>
            <Col>
              <CardGroup>
                <CategoryCard title={category[0].title} key={category[0].id} img={category[0].thumbnailURL} />
              </CardGroup>
            </Col>
            <Col >
              <CardGroup>
                <CategoryCard title={category[1].title} key={category[1].id} img={category[1].thumbnailURL} />
              </CardGroup>
            </Col>
          </Row>
        </Container>
      );
    })
  }

  /* <Col>
   <div key={category.id}>
     <div>
       <Link to={`/streams/${category.title}`}>
         {category.title}
       </Link>
       <div>{category.tag}</div>
     </div>
   </div>
  </Col> */

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div>{this.renderList()}</div>
      </div>
    )
  }
}

