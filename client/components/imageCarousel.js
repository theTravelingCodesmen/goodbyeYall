'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-bootstrap';


class ImageCarousel extends React.Component{

	render(){
		return(
  <Carousel>
    <Carousel.Item>
      <img width={650} alt="450x250" src="/assets/images/seven-wonders-filmstrip-1.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={650} alt="450x250" src="/assets/images/seven-wonders-filmstrip-2.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={650} alt="450x250" src="/assets/images/seven-wonders-filmstrip-3.jpg"/>
    </Carousel.Item>
  </Carousel>
	)};
};

export default ImageCarousel;