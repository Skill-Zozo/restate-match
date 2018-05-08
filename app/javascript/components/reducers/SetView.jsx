import React from 'react';

const defaultView = {
	cardViewSettings: 'centered twelve wide column',
  listViewSettings: 'eight wide column'
}

let SetView = (state = defaultView, action) => {
	switch(action.type) {
		case 'SET_TO_INITIAL':
			return {
				...state,
				view: 'NO_MATCHES',
				cardViewSettings: 'centered twelve wide column',
				listViewSettings: 'eight wide column'
			}
		case 'SET_TO_SHOW_MATCHES':
			return {
				...state,
				view: 'SHOW_MATCHES',
				cardViewSettings: 'four wide column',
				listViewSettings: 'fifteen wide column'

			}
		case 'START_REQUEST_TO_SAVE_ACCOMODATIONREQ':
			return {
				...state,
				loadingStatus: "active",
				requestToCreateAccomReq: 'IN_PROGRESS'
			}
		case 'REQUEST_TO_CREATE_ACCOMREQ_SUCCESSFUL':
			return {
				...state,
				loadingStatus: 'inactive',
				requestToCreateAccomReq: 'SUCCESSFUL',
				modalMessage: 'Your accomodation request has been successfully submitted'
			}
		case 'REQUEST_TO_CREATE_ACCOMREQ_FAILED': 
			return {
				...state,
				loadingStatus: 'inactive',
				requestToCreateAccomReq: 'FAILED',
				modalMessage: action.error
			}
		default:
			return state
	}
}

module.exports = SetView