'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoFive extends React.Component{
	render(){
		return (
			<img className='petra'src='/assets/images/petra.png'></img>
		)
	}
}

ReactDom.render(
	<PhotoFive />, document.querySelector('.petra')
);

export default PhotoFive;