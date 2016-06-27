import React from 'react';
import { FACEBOOK_API } from '../../APIKEYS'
class login extends React.Component {
	render(){
		return (
			<div>
				Yo
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />WHayt
				<a href={`http://www.facebook.com/dialog/oauth?client_id=${FACEBOOK_API.facebookAuth.clientID}&scope=email&response_type=token&redirect_uri=http://localhost:4000/Preferences`}>facebook</a>
			</div>
			)
	}
}


export default login;