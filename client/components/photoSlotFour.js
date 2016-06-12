'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoFour extends React.Component{
	render(){
		return (
			<img className='machu'src='/assets/images/machu_picchu.png'></img>
		)
	}
}

ReactDom.render(
	<PhotoFour />, document.querySelector('.machu')
);

export default PhotoFour;