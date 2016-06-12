'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoSix extends React.Component{
	render(){
		return (
			<img className='taj'src='/assets/images/taj_mahal.png'></img>
		)
	}
}

ReactDom.render(
	<PhotoSix />, document.querySelector('.taj')
);

export default PhotoSix;