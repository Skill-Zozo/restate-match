 // essentially send avtions to the store

 export function showAccomodationMatches(state) {
 	return {
 		type: "SET_TO_SHOW_MATCHES",
 		state
 	}
 }

 export function resetToAccomodationRequestForm(state) {
 	return {
 		type: "SET_TO_INITIAL",
 		state
 	}
 }