'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class PhotoOne extends React.Component {
	render() {
		return(	
			//<img className='chichen' src='/assets/images/chichen_itza.png'></img>
			<img className={this.props.className} src={"/assets/images/" + this.props.src} />

		)
	}
}

// ReactDOM.render(
// 	<PhotoOne />, document.querySelector('.chichen')
// );

export default PhotoOne;
