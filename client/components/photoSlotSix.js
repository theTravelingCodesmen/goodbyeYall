'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoSix extends React.Component{
	render(){
		return (
			<img className={this.props.className} src={'/assets/images/' + this.props.src}></img>
		)
	}
}

// ReactDom.render(
// 	<PhotoSix />, document.querySelector('.taj')
// );

export default PhotoSix;