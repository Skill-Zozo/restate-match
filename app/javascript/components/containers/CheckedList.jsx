import React, { Component } from 'react'

class CheckedList extends Component {
	constructor(props) {
		super(props)
		this.state = { ...props }
	}

	render() {
		return this.state.items.map((item) => (
			<div className='item' key={item.name}>
        <input type='checkbox' name={item.name} onChange={this.state.setValueFn}/> <label>{item.label}</label>
      </div>
    ))
	}
}

module.exports = CheckedList