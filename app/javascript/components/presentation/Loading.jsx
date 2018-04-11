import React, { Component } from 'react'

class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: props.status
		}
	}

	render() {
		return (
			<div className={this.props.status + " ui dimmer"} id="loading">
        <div className="ui massive indeterminate text loader">Submitting request for accomodation</div>
      </div>
		)
	}
}

module.exports = Loading