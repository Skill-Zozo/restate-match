import React, { Component } from 'react'

class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = { ...props }
	}

	render() {
		return (
			<div className="ui modal" id="modal">
        <i className="close icon"></i>
        <div className="header"> Request for Accomodation</div>
        <div className="content"> {this.props.modalMessage}</div>
        <div className="actions">
          <div className="ui black deny button"> Close </div>
          {this.props.requestSuccessful && <div className="ui positive right button" onClick={this.state.onSuccess}>View Matches</div>}
        </div>
      </div>
		)
	}

}

module.exports = Modal