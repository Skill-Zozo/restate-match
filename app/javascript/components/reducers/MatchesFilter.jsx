import React from 'react'

let MatchesFilter = (state = {}, action) => {
	switch(action.type) {
		case 'FETCHING_MATCHES':
			return {
				...state,
				requestToFilter: 'IN_PROGRESS'
			}
		case 'REQUEST_FOR_MATCHES_SUCCESSFUL':
			return {
				...state,
				matches: action.matches,
				requestToFilter: 'SUCCESSFUL'
			}
		case 'REQUEST_FOR_MATCHES_FAILED':
			return {
				...state,
				matches: [],
				requestToFilter: 'FAILED'
			}
		default:
			return state
	}
}

module.exports = MatchesFilter