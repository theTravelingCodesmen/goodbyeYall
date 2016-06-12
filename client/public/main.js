import React from 'react'
import ReactDOM from 'react-dom'
import CardTitle from '../components/cardTitle'
import PhotoOne from '../components/photoSlotOne'
import PhotoTwo from '../components/photoSlotTwo'
import PhotoThree from '../components/photoSlotThree'
import PhotoFour from '../components/photoSlotFour'
import PhotoFive from '../components/photoSlotFive'
import PhotoSix from '../components/photoSlotSix'


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