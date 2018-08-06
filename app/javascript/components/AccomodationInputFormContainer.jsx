import React, { Component } from 'react'
import connect from 'react-redux'

class AccomodationInputFormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			location: ''
		}
	}

	handleInputChange = (event) => {
		const inputName = event.target.name
		const val = event.target.value
		this.setState({
			[inputName]: val
		})
	}

	render() {
		return (
			<div className="ui grid">
				<form className='ui form centered twelve wide column'>
					
					<h4 className="ui header"> where is your property? </h4>
					<div className="fields ui raised segment">
						<input className="ui fluid" name="location" value={this.state.location} onChange={this.handleInputChange}/>
					</div>

				</form>
			</div>
		)
	}
}

module.exports = AccomodationInputFormContainer