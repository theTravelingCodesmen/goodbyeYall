'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoFour extends React.Component{
	render(){
		return (
			<img className={this.props.className} src={'/assets/images/' + this.props.src}></img>
		)
	}
}

// ReactDom.render(
// 	<PhotoFour />, document.querySelector('.machu')
// );

export default PhotoFour;