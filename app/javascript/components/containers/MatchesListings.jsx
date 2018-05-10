import React from 'react'
import { connect } from 'react-redux'
import ListingContainer from './ListingContainer'

// images
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

// <ListingContainer images={generateImageHashesFrom([Ade, Daniel, Veronika, Jenny])}/>
// 							<ListingContainer images={generateImageHashesFrom([Elloit, Helen, Chris])} />
// 							<ListingContainer images={generateImageHashesFrom([Justen, Nan, Steve, Veronika])} />
// 							<ListingContainer images={generateImageHashesFrom([Stevie, Jenny, Daniel])} />
// 							<ListingContainer images={generateImageHashesFrom([Veronika, Ade, Helen])} />	

function generateImageHashesFrom(images) {
	return images.map(function(image, idx){
		return { name: `${image}`, image: image, selectionClass: idx==0 ? "selectedImage " : "" }
	})
}

class MatchesListings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			...props
		}
	}

	render() {
		let loading = this.props.requestToFilter == 'IN_PROGRESS'
		let showMatches = this.props.requestToFilter == 'SUCCESSFUL'
		let failedToFindMatches = this.props.requestToFilter == 'FAILED'
		const { matches } = this.props
		return (
        <div className={show ? "twelve wide column" : ""}> 
        {
        	loading && <Loading message="Finding your matches"/>
        }
        {
        	showMatches && (
        		<div className="ui list cards">
        			{
        				matches.map((match) => {
        					<ListingContainer images={generateImageHashesFrom(match.images)} match={match} />
        				})
        			}            
        		</div>
        	)
    		}
    		{
    			failedToFindMatches && <div>NO MATCHES, SOZ</div>
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