import Loading from '../presentation/Loading'
import Modal from '../presentation/Modal'
import RangeList from '../containers/RangeList'
import IconCheckedList from '../containers/IconCheckedList'
import CheckedList from '../containers/CheckedList'
import { connect} from 'react-redux'
import {
  showAccomodationMatches,
  resetToAccomodationRequestForm,
  saveAccomodationReq
} from '../actions/actions'

var React = require('react');
var PropTypes = require('prop-types');

class AccomodationRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        furnished: false,
        price: {
          min: this.props.price.min,
          max: this.props.price.max
        },
        bedrooms: {
          min: this.props.bedroom.min,
          max: this.props.bedroom.max
        },
        internet_access: false,
        parking: false,
        hospital: false,
        train: false,
        taxi: false,
        beach: false
      },
      modalMessage: "",
      requestToCreateAccomReq: 'NOT_SUBMITTED', // NOT_SUBMITTED -> IN_PROGRESS -> SUCCESSFUL || FAILED
      loadingStatus: "inactive",
      location: "",
      view: 'NO_MATCHES',
      cardViewSettings: 'centered twelve wide column',
      listViewSettings: 'eight wide column'
    }
  }

  setPrice = (values) => {
    let filter = this.state.filter
    this.setState({
      filter: {
        ...filter,
        price: {
          min: values[0],
          max: values[1]
        }
      }
    })
  }

  setBedrooms = (values) => {
    let filter = this.state.filter
    this.setState({
      filter: {
        ...filter,
        bedrooms: {
          min: values[0],
          max: values[1]
        }
      }
    })
  }

  submitForm = ({ dispatch }) => {
    this.props.dispatch(saveAccomodationReq(this.state))
  }

  showRequestSuccessModal = () => {
    
  }

  setCheckedFn = (event) => {
    let updatedState = {filter: this.state.filter}
    updatedState.filter[event.target.name] = event.target.checked
    this.setState(updatedState)
  }

  handleLocationInput = (event) => {
    let filter = this.state.filter
    this.setState({
      filter: {
        ...filter,
        location: event.target.value
      }
    })
  }

  showMatches = ({ dispatch }) => {
    // let redux move the rest
    this.props.dispatch(showAccomodationMatches(this.state))

    // move the bedPrice
    let bedroomPrice = $('#accomodationRequestCardFirstChild').children('#bedroomPriceContainer')
    $('#accomodationRequestCardFirstChild').children('#bedroomPriceContainer').remove()
    $('#sizedParentContainer').before(bedroomPrice)
  }

  resetView = () => {

  }

  render () {
    const { loadingStatus, modalMessage, requestToCreateAccomReq } = this.props || this.state
    return  (
      <div className={this.props.cardViewSettings} id="sizedParentContainer">

        <Loading status={loadingStatus}/>
        <Modal  modalMessage={modalMessage}
                status={requestToCreateAccomReq} onSuccess={this.showMatches}/>

        <div className='card' id="accomodationRequestCard" style={{'textAlign':'left'}}>

          <div className='row'>
            <div className='ui fluid icon input'>
              <i className='marker icon'></i>
              <input type='text' placeholder='location for accomodation...'
                      value={this.state.location} onChange={this.handleLocationInput}/>
            </div>
          </div>

          <br />
          
          <div className='ui grid' id="accomodationRequestCardFirstChild">
            
            <div className='ui fourteen wide column unstackable list items' style={{marginBottom: '0px', paddingBottom: '0px'}} id="bedroomPriceContainer">
              <RangeList rangeItems={
                [
                  {name: "price", setItemValue: this.setPrice, ...this.state.filter.price},
                  {name: "bedroom", setItemValue: this.setBedrooms, ...this.state.filter.bedrooms}
                ]
              } />
            </div>
          
            <div className={this.props.listViewSettings + ' ui divided list items'} style={{marginTop: '0px'}}>
              <IconCheckedList setValueFn={this.setCheckedFn}
                items={[
                  {name: "furnished", label: "Furnished", icon: "tv"},
                  {name: "internet_access", label: "Internet Access", icon: "world"},
                  {name: "parking", label: "Parking", icon: "car"},
                ]} 
              />
            </div>

            <div className={this.props.listViewSettings} style={{marginTop: '0px'}}>
              Close to (within a 5km radius of)
              <div className='ui divided list'>
                <CheckedList setValueFn={this.setCheckedFn}
                items={[
                  {name: 'hospital', label: "Hospital"},
                  {name: 'taxi', label: "Taxi Stop"},
                  {name: 'train', label: 'Train Station'},
                  {name: 'beach', label: "Beach"}
                ]}
              />
              </div>

              <br />
              <br />

              <div style={{position: 'absolute', bottom:'10%', right:'10%'}}>
                <button className="ui primary basic button" onClick={this.submitForm}>Submit Request</button>
              </div>
            </div>
          </div>              
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { listViewSettings, cardViewSettings, view, requestToCreateAccomReq, loadingStatus, modalMessage } = state
  return {
    listViewSettings: listViewSettings,
    cardViewSettings: cardViewSettings,
    view: view,
    requestToCreateAccomReq: requestToCreateAccomReq,
    loadingStatus: loadingStatus,
    modalMessage: modalMessage
  }
}

module.exports = connect(mapStateToProps)(AccomodationRequestForm)
