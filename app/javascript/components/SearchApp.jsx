import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import SetView from './reducers/SetView'
import MatchesFilter from './reducers/MatchesFilter'
import AccomodationRequestForm from './containers/AccomodationRequestForm'
import MatchesListings from './containers/MatchesListings'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
  SetView: SetView,
  MatchesFilter: MatchesFilter
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

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