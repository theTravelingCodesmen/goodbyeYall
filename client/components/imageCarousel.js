'use strict'

import React from 'react';
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

//renders images at bottom of landing page
class ImageCarousel extends React.Component{

	render(){
		return(
      <Carousel>
        <LinkContainer to={{pathname:'/package/American Cities'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/filmstrip-5.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/American Cities'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/filmstrip-6.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Global Explorer'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/filmstrip-7.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Global Explorer'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/filmstrip-8.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-1.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Seven Natural Wonders'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-2.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-3.jpg"/>
        </Carousel.Item></LinkContainer>
        <LinkContainer to={{pathname:'/package/Seven Wonders'}}><Carousel.Item>
          <img width={910} alt="450x250" src="/assets/images/seven-wonders-filmstrip-4.jpg"/>
        </Carousel.Item></LinkContainer>
      </Carousel>
    )
  };
};

// 'export' is for enzyme testing, 'export default' is for regular react functionality
export { ImageCarousel, Carousel };

export default ImageCarousel;
