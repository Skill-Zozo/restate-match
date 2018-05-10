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
				requestToFilter: 'SUCCESSFUL'
			}
		case 'REQUEST_FOR_MATCHES_FAILED':
			return {
				...state,
				requestToFilter: 'FAILED'
			}
	}
}

module.exports = MatchesFilter