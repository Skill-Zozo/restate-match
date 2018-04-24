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
		default:
			return state
	}
}

module.exports = SetView