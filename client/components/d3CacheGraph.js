'use strict'
import React from 'react'
import ReactDom from 'react-dom'
import getd3Cachegraph from './d3CacheGraphFetch'

class D3Cache extends React.Component {
  render(){
    return ( <div className='d-three-cache d3-line-chart'> <button></button> </div> )
  }
  componentDidMount(){
    getd3Cachegraph();
  }
}


export default D3Cache;