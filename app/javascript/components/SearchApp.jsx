import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SetView from './reducers/SetView'
import AccomodationRequestForm from './containers/AccomodationRequestForm'
import MatchesListings from './containers/MatchesListings'

const store = createStore(SetView)

class SearchApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="ui grid" id="fullWidthGrid" style={{padding: '0px 30px 0px 30px'}}>
          <AccomodationRequestForm price={this.props.price} bedroom={this.props.bedroom} />
          <MatchesListings />
        </div>
      </Provider>
    )
  }
}

module.exports = SearchApp