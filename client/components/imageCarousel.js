'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


class ImageCarousel extends React.Component{

	render(){
		return(
  <Carousel>
    <LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
      <img width={685} alt="450x250" src="/assets/images/seven-wonders-filmstrip-1.jpg"/>
    </Carousel.Item></LinkContainer>
    <LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
      <img width={685} alt="450x250" src="/assets/images/seven-wonders-filmstrip-2.jpg"/>
    </Carousel.Item></LinkContainer>
    <LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
      <img width={685} alt="450x250" src="/assets/images/seven-wonders-filmstrip-3.jpg"/>
    </Carousel.Item></LinkContainer>
    <LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
      <img width={685} alt="450x250" src="/assets/images/seven-wonders-filmstrip-4.jpg"/>
    </Carousel.Item></LinkContainer>
  </Carousel>
	)};
};

export default ImageCarousel;
