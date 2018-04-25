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
		this.state = { arrows: "hidden", ...props }
	}

	showArrows = () => {
		this.setState({arrows: "visible"})
	}

	hideArrows = () => {
		this.setState({arrows: "hidden"})
	}

	render() {
		let show = this.props.view == "SHOW_MATCHES"
		return (
        <div className={show ? "twelve wide column" : ""}>  
          { show && (<div className="ui list cards">
            <div className="ui raised card three wide column">
              <div className="ui image below" onMouseOver={this.showArrows} onMouseLeave={this.hideArrows}>
              	<i className="angle huge left icon onTop toTheLeft" style={{visibility: this.state.arrows}}></i>
                <i className="angle huge right icon onTop toTheRight" style={{visibility: this.state.arrows}}></i>
                <img src={Ade} className="visible content" />
              </div>
              
              <div className="ui tiny images" style={{paddingTop: "5px"}}>
              	<img src={Daniel} className="ui image rounded"/>
              	<img src={Jenny} className="ui image rounded"/>
              	<img src={Veronika} className="ui image rounded"/>
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