'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class PassiveDestination extends React.Component {
	render() {
		return(	
//change className to passiveDestination - then do CSS stuff
			<img className='chichen' src={this.props.main_image_url} onClick={(()=>console.log(this.props._id))}/>
		) 
	}
}

// ReactDOM.render(
// 	<PhotoOne />, document.querySelector('.chichen')
// );

export default PassiveDestination;
 