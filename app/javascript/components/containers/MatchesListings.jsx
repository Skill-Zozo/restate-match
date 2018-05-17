import React from 'react'
import { connect } from 'react-redux'
import ListingContainer from './ListingContainer'
import Loading from '../presentation/Loading'

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
		let active = this.props.view == "SHOW_MATCHES"
		
		return (
            <div className={active ? "twelve wide column" : ""}> 
            {
            	loading && <Loading message="Finding your matches"/>
            }
            {
            	showMatches && (
            		<div className="ui list cards">
            			{
            				this.props.matches.map((match, idx) => (
            					<ListingContainer key={idx} images={generateImageHashesFrom(match.images)} match={match} />
            				))
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
  const { matches, requestToFilter } = state.MatchesFilter
  const { view } = state.SetView
  return {
    matches: matches,
    requestToFilter: requestToFilter,
    view: view
  }
}

module.exports = connect(mapStateToProps)(MatchesListings)