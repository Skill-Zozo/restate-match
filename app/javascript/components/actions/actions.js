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

function createAccomodationRequest(state, dispatch) {
	let filter = state.filter
	$.ajax({
		url: '/accomodation/request',
	  type: 'PUT',
	  data: filter,
	  datatype: "json",
	  success: function(result) {
	    dispatch(successfullyCreatedAccomodationRequest(state))
	    $('#modal').modal('show')
	  }, error: function(err) {
	    let errorMessage = `Request for accomodation failed\nError code: ${err.status}\nResponse from server: ${err.responseText.substring(0,256)}...`
	    dispatch(failedToCreateAccomodationRequest(state, error))
	    $('#modal').modal('show')
	  }
	})
}

export function saveAccomodationReq(state) {
	return function (dispatch) {
		dispatch(startRequestToSaveAccomodationReq(state))

		return createAccomodationRequest(state, dispatch)
	}
}

export function startRequestToSaveAccomodationReq(state) {
	return {
		type: 'START_REQUEST_TO_SAVE_ACCOMODATIONREQ',
		state
	}
}

export function successfullyCreatedAccomodationRequest(state) {
	return {
		type: 'REQUEST_TO_CREATE_ACCOMREQ_SUCCESSFUL',
		state
	}
}

export function failedToCreateAccomodationRequest(state, errorMessage) {
	return {
		type: 'REQUEST_TO_CREATE_ACCOMREQ_FAILED',
		state,
		error: errorMessage
	}
}