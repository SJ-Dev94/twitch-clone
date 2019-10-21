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
    this.setSmallState();
  }

  setSmallState() {
    if (this.props.windowSize < 600) {
      this.setState({ small: true })
    } else {
      this.setState({ small: false });
    }
  }
  /*static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.windowSize !== prevState.windowSize) {
      return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
  } */

  chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size))
    }

    return results;
  }

  determineArrayState = () => {
    if (this.props.windowSize < 600) {
      this.twoColumnArray(this.result);
      console.log(this.state)
      console.log(this.props.windowSize);
    } else {
      this.setState(this.result);
    }
  }

  twoColumnArray = (x) => {
    const splitArray = chunk(x, 2);
    this.setState({ categories: splitArray });
  }



  //takes infinite number of objects in an array and splits into a multidimensional array of x length
  xColumnArray = (x) => {
    const splitArray = chunk(x, 1);
    this.setState({ categories: splitArray });
  }

  // Usage

  // Split in group of 3 items
  //var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)

  // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]



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


  renderCategorySm = () => {
    return this.state.categories.map((category, index) => {
      return (
        <Container>
          <Row>
            <Col>
              <CardGroup>
                <CategoryCard title={category[0].title} key={category[0].id} img={category[0].thumbnailURL} />
                {console.log(category)}
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
    }

    )
  }


  /* return(
           <Container>
   <Row>
     <Col>
       <CardGroup>
         <CategoryCard title={category[0].title} key={category[0].id} img={category[0].thumbnailURL} />
       </CardGroup>
     </Col>
   </Row>
           </Container >
         ); */

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
  renderSm() {
    return (
      <Row className="h-100">
        {this.state.categories.map((category, index) => {
          return (
            <Col xs={12} sm={6} md={6}>
              <CategoryCard title={category.title} key={category.id} img={category.thumbnailURL} />
            </Col>
          )
        })}
      </Row>
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
    const divStyle = {
      paddingTop: '65px'
    };
    const isSmall = this.state.small;
    return (
      <Container style={{ divStyle }}>
        {this.renderSm()}
      </Container>

    );
  }
  /*else {
return (
  <Container>
    <Row>
      <Col>
        <CardGroup>
          <CategoryCard title={category.title} key={category.id} img={category.thumbnailURL} />
          {console.log(category)}
        </CardGroup>
      </Col>
    </Row>
  </Container >
);
}
  }

  )
}
*/


  /*render() {
    if (this.props.windowSize < 600) {
      return (
        <div>
          <h2>Streams</h2>
          <div>
            <Container>
              <Row>
                <Col>
                  <CardGroup>
                    <CategoryCard title={category[0].title} key={category[0].id} img={category[0].thumbnailURL} />
                    {console.log(category)}
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
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Streams</h2>
          <div>{this.renderCategoryMd()}</div>
        </div>
      )
    }
  } */
}

const mapStateToProps = (state) => {
  return { windowSize: state.windowSize };
}

export default connect(mapStateToProps)(LandingSmall);