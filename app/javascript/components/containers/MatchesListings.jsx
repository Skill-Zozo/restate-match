import React from 'react'
import { connect } from 'react-redux'
import Ade from 'images/ade.jpg'
import Chris from 'images/chris.jpg'
import Daniel from 'images/daniel.jpg'
import Elloit from 'images/elliot.jpg'
import Helen from 'images/helen.jpg'
import Jenny from 'images/jenny.jpg'
import Justen from 'images/justen.jpg'
import Nan from 'images/nan.jpg'
import Steve from 'images/steve.jpg'
import Stevie from 'images/stevie.jpg'
import Veronika from 'images/veronika.jpg'

class MatchesListings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [
				{ name: "Ade", image: Ade, selectionClass: "selectedImage " },
				{ name: "Daniel", image: Daniel, selectionClass: "" },
				{ name: "Veronika", image: Veronika, selectionClass: "" },
				{ name: "Jenny", image: Jenny, selectionClass: "" }
			],
			indexForActiveImage: 0,
			arrows: {
				left: "hidden",
				right: "hidden"
			}, 
			...props
		}
	}

	showArrows = () => {
		let updatedArrows = this.state.arrows
		if(this.state.indexForActiveImage > 0) {
			updatedArrows = { ...updatedArrows, left: "visible"}
		}
		if(this.state.indexForActiveImage < 3) {
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
		let show = this.props.view == "SHOW_MATCHES"
		return (
        <div className={show ? "twelve wide column" : ""}>  
          { show && (<div className="ui list cards">
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
            
            <div className="ui raised card three wide column">
              <div className="ui slide masked reveal image">
                <img src={Elloit} className="visible content" />
                <img src={Helen} className="hidden content" />
              </div>
              <div className="content">
                <label className="header"> House available at Centurion </label>
                <div className="meta">
                  <p> Manchester City winning represents the most depressing period
                      the history of Englisg football, should not be tolerated honestly </p>
                </div>
              </div>
              <div className="extra content">
                <i className="bed icon"> 2 </i>
              </div>
            </div>
            
            <div className="ui raised card three wide column">
              <div className="ui slide masked reveal image">
                <img src={Justen} className="visible content" />
                <img src={Nan} className="hidden content" />
                <img src={Steve} className="hidden content"/>
                <img src={Veronika} className="hidden content"/>
              </div>
              <div className="content">
                <label className="header"> House available at Centurion </label>
                <div className="meta">
                  <p> Manchester City winning represents the most depressing period
                      the history of Englisg football, should not be tolerated honestly </p>
                </div>
              </div>
              <div className="extra content">
                <i className="bed icon"> 2 </i>
              </div>
            </div>

            <div className="ui raised card three wide column">
              <div className="ui slide masked reveal image">
                <img src={Ade} className="visible content" />
                <img src={Chris} className="hidden content" />
                <img src={Daniel } className="hidden content"/>
              </div>
              <div className="content">
                <label className="header"> House available at Centurion </label>
                <div className="meta">
                  <p> Manchester City winning represents the most depressing period
                      the history of Englisg football, should not be tolerated honestly </p>
                </div>
              </div>
              <div className="extra content">
                <i className="bed icon"> 2 </i>
              </div>
            </div>
            
            <div className="ui raised card three wide column">
              <div className="ui slide masked reveal image">
                <img src={Elloit} className="visible content" />
                <img src={Helen} className="hidden content" />
                <img src={Jenny} className="hidden content"/>
              </div>
              <div className="content">
                <label className="header"> House available at Centurion </label>
                <div className="meta">
                  <p> Manchester City winning represents the most depressing period
                      the history of Englisg football, should not be tolerated honestly </p>
                </div>
              </div>
              <div className="extra content">
                <i className="bed icon"> 2 </i>
              </div>
            </div>
            
            <div className="ui raised card three wide column">
              <div className="ui slide masked reveal image">
                <img src={Justen} className="visible content" />
                <img src={Nan} className="hidden content" />
                <img src={Steve} className="hidden content"/>
                <img src={Veronika} className="hidden content"/>
              </div>
              <div className="content">
                <label className="header"> House available at Centurion </label>
                <div className="meta">
                  <p> Manchester City winning represents the most depressing period
                      the history of Englisg football, should not be tolerated honestly </p>
                </div>
              </div>
              <div className="extra content">
                <i className="bed icon"> 2 </i>
              </div>
            </div>
          </div>

        )
      }
      </div>
		)
	}
}

function mapStateToProps(state, ownProps) {
  const { view } = state

  return {
    view: view
  }
}

module.exports = connect(mapStateToProps)(MatchesListings)