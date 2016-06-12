'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoTwo extends React.Component{
	render(){
		return (
			<img className='christ_the_redeemer'src='/assets/images/christ_the_redeemer.png'></img>
		)
	}
}

ReactDom.render(
	<PhotoTwo />, document.querySelector('.christ')
);

export default PhotoTwo;