import React, { Component } from 'react'

class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...props
		}
	}

	render() {
		return (
			<div className="ui active dimmer" id="loading">
        <div className="ui huge indeterminate text loader">{this.props.message}</div>
      </div>
		)
	}
}

module.exports = Loading