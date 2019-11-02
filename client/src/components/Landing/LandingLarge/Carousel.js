import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { database } from '../../../firebaseconfig.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { FaAutoprefixer } from "react-icons/fa";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { flexbox } from "@material-ui/system";

export default function LandingCarousel() {


  const flexxem = {
    display: 'flex',
    flexDirection: 'row'
  }


  const iframeWrapper = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '60%',
  }

  const iframe = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }

  const carouselMargin = {
    marginLeft: '15%',
    marginRight: '15%'
  }
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={70}
      totalSlides={3}
      style={carouselMargin}
    >
      <Slider>
        <Slide index={0}>
          <Card>
            <Row>
              <Col sm={9} md={9} lg={9} xl={9}>
                <div style={iframeWrapper}>
                  <iframe style={iframe} width="560" height="500" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                </div>
              </Col>
              <Col>
                  <Row>
                    <Col md={3} lg={3}>
                      <div style={{display:'flex', alignItems: 'center'}}>
                      <Card.Img src='https://static-cdn.jtvnw.net/jtv_user_pictures/warcraft-profile_image-2a879ebd997a859b-70x70.jpeg' style={{ borderRadius: '50%', }} className='align-middle' />
                      </div>
                    </Col>
                    <Col>
                      <Card.Text>
                        <p>
                          Stream Title
                        </p>
                        <p>
                          Game Title
                        </p>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p>Tag</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                     <Card.Text>
                      <p>Lorem Ipsum Delore de fuck dis shits 
                      </p>
                    </Card.Text>
                  </Col>
                  </Row>
              </Col>
            </Row>

          </Card>



        </Slide>
        <Slide index={1}>
          <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
        </Slide>
        <Slide index={2}>
          <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
        </Slide>
      </Slider >
    </CarouselProvider >


  )
}