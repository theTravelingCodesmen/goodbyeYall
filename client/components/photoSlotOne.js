'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class PhotoOne extends React.Component {
	render() {
		return(	
			<img className='chichen' src='/assets/images/chichen_itza.png'></img>
		)
	}
}

ReactDOM.render(
	<PhotoOne />, document.querySelector('.chichen')
);

export default PhotoOne;
