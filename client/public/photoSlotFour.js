'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class PhotoThree extends React.Component{
	render(){
		return (
			<img className=''src='/assets/images/colusseum.png'></img>
		)
	}
}

ReactDom.render(
	<PhotoThree />, document.querySelector('.colusseum')
);

export default PhotoThree;