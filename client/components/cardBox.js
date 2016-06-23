'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import CardTitle from './cardTitle';
import PackageDestinations from '../containers/packageDestinations';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
	promise
	)(createStore);

class CardBox extends React.Component {
	render() {
		return(			
			<div className='seven-view'>
				<div className='nav-spacing'></div>
				<CardTitle className='card-title' /> 
				<PackageDestinations  className='row' />
			</div>
		)
	}
}


export default CardBox;
