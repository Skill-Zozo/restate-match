import React, { Component } from 'react'

class IconCheckedList extends Component {
	constructor(props) {
		super(props)
		this.state = { ...props }
	}

	render() {
		return this.state.items.map((item) => (
			<div className='item' key={item.name} style={{padding: '0.5em 0em'}}>
    		<i className={item.icon + ' icon'}></i>
    		<input className='leftpad' type='checkbox' name={item.name} onChange={this.state.setValueFn}/>
    		<label className='leftpad'> {item.label} </label>
    	</div>
    ))
	}

}

module.exports = IconCheckedList