'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoFive extends React.Component{
	render(){
		return (
			<img className={this.props.className} src={'/assets/images/' + this.props.src}></img>
		)
	}
}

// ReactDom.render(
// 	<PhotoFive />, document.querySelector('.petra')
// );

export default PhotoFive;