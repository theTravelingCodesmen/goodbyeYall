'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoTwo extends React.Component{
	render(){
		return (
			<img className={this.props.className} src={'/assets/images/' + this.props.src}></img>
		)
	}
}

// ReactDom.render(
// 	<PhotoTwo />, document.querySelector('.christ')
// );

export default PhotoTwo;