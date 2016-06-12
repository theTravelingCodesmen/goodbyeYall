import React from 'react'
import ReactDOM from 'react-dom'
import PhotoOne from '../components/photoSlotOne'
import PhotoTwo from '../components/photoSlotTwo'

class Test extends React.Component {
	render(){
		return (
			<div>
			Hello World!
			</div>						

		)
	}
	componentWillMount(){
		console.log('about to mount')
	}
};


ReactDOM.render( <Test />, document.getElementById('app'))