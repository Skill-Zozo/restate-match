import React from 'react'
import { connect } from 'react-redux'
import Ade from 'images/ade.jpg'

class MatchesListings extends React.Component {
	constructor(props) {
		super(props)
		this.state = { ...props }
	}

	render() {
		let show = this.props.view == "SHOW_MATCHES"
		return (
        <div className={show ? "ten wide column" : ""}>  
          { show && (<div className="ui list items">
            <div className="ui card">
              <div className="ui slide masked reveal image">
                <img src={Ade} className="visible content" />
                <img src='/images/chris.jpg' className="hidden content" />
                <img src='/images/daniel.jpg' className="hidden content"/>
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
            
            <div className="ui card">
              <div className="ui slide masked reveal image">
                <img src='/images/elloit.jpg' className="visible content" />
                <img src='/images/helen.jpg' className="hidden content" />
                <img src='/images/jenny.jpg' className="hidden content"/>
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
            
            <div className="ui card">
              <div className="ui slide masked reveal image">
                <img src='/images/justen.jpg' className="visible content" />
                <img src='/images/nan.jpg' className="hidden content" />
                <img src='/images/stevie.jpg' className="hidden content"/>
                <img src='/images/veronika.jpg' className="hidden content"/>
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