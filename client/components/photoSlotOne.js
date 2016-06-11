'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class PhotoOne extends React.Component {
	render(){
		return(
			<div className='photoRoll'>
			
				<div className='chichen'>/assets/images/chichen_itz.png</div>
			</div>
			)
	}
}

ReactDOM.render(
	<PhoneOne />, document.getElementByClass('.chichen')
	);
