import React, { Component } from 'react'
import connect from 'react-redux'

class ListingContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arrows: {
				left: "hidden",
				right: "hidden"
			},
			indexForActiveImage: 0,
			...props
		}
	}

	showArrows = () => {
		let updatedArrows = this.state.arrows
		if(this.state.indexForActiveImage > 0) {
			updatedArrows = { ...updatedArrows, left: "visible"}
		}
		if(this.state.indexForActiveImage < this.state.images.length-1) {
			updatedArrows = { ...updatedArrows, right: "visible"}
		}
		this.setState({arrows: updatedArrows})
	}

	hideArrows = () => {
		this.setState({
			arrows: {
				left: "hidden",
				right: "hidden"
			}
		})
	}

	shiftIndexToTheRight = () => {
		if(this.state.indexForActiveImage >= this.state.images.length-1) {
			return
		} else {
			let images = this.state.images
			let newIndex = this.state.indexForActiveImage + 1
			images[this.state.indexForActiveImage] = {...this.state.images[this.state.indexForActiveImage], selectionClass: ""}
			images[this.state.indexForActiveImage+1] = {...this.state.images[this.state.indexForActiveImage+1], selectionClass: "selectedImage "}
			this.setState({images: images, indexForActiveImage: newIndex})
		}
	}

	shiftIndexToTheLeft = () => {
		if(this.state.indexForActiveImage <= 0) {
			return
		} else {
			let images = this.state.images
			images[this.state.indexForActiveImage] = {...this.state.images[this.state.indexForActiveImage], selectionClass: ""}
			images[this.state.indexForActiveImage-1] = {...this.state.images[this.state.indexForActiveImage-1], selectionClass: "selectedImage "}
			this.setState({images: images, indexForActiveImage: this.state.indexForActiveImage - 1})
		}
	}

	render() {
		return (
			<div className="ui raised card three wide column">
        <div className="ui image below" onMouseOver={this.showArrows} onMouseLeave={this.hideArrows}>
        	<button class="circular ui icon primary basic button onTop toTheLeft" onClick={this.shiftIndexToTheLeft} style={{visibility: this.state.arrows.left, cursor: "pointer"}}>
        	 <i className="angle large left icon"></i>
          </button>
          <button className="circular ui primary basic icon button onTop toTheRight" onClick={this.shiftIndexToTheRight} style={{visibility: this.state.arrows.right, cursor: "pointer"}}>
          	<i className="angle large right icon"></i>
          </button>
          <img src={this.state.images[this.state.indexForActiveImage]["image"]} className="visible content" />
        </div>
        
        <div className="ui mini images" style={{paddingTop: "5px"}}>
        	{
        		this.state.images.map((imageHash) =>
        			<img key={imageHash.name} src={imageHash.image} className={imageHash.selectionClass + "ui image rounded"} />
        		)
        	}
        </div>

        <div className="content">
          <label className="header"> House available at Centurion </label>
          <div className="meta">
            <p> Manchester City winning represents the most depressing period
                the history of Englisg football, should not be tolerated honestly </p>
          </div>
        </div>
        
        <div className="extra content">
          <span><i className="bed icon"></i> 2</span>
        </div>
      </div>
		)
	}
}



module.exports = ListingContainer