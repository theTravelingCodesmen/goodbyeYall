'use strict'
import React from 'react'
import ReactDom from 'react-dom'
import getd3Cachegraph from './d3CacheGraphFetch'

class D3Cache extends React.Component {
  render(){
    return ( <div></div> )
  }
  componentDidMount(){
    console.log('line 11');
    getd3Cachegraph();
  }
}

ReactDom.render(
  <D3Cache />, document.querySelector('.d-three')
);

export default D3Cache;