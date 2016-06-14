'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoThree extends React.Component{
	render(){
		return (
			<img className={this.props.className} src={'/assets/images/' + this.props.src}></img>
		)
	}
}

// ReactDom.render(
// 	<PhotoThree />, document.querySelector('.colusseum')
// );

export default PhotoThree;