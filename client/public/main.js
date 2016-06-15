import React from 'react'
import ReactDOM from 'react-dom'
import CardBox from '../components/cardBox'

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