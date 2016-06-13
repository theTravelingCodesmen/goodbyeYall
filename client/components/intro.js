'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class Intro extends React.Component{
	render(){
		return (
			<div className='intro'>placeholder for database entry</div>
		)
	}
}

ReactDom.render(
	<Intro />, document.querySelector('.intro')
);

export default Intro;