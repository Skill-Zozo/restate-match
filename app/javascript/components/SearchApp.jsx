import Loading from './presentation/Loading'
import Modal from './presentation/Modal'
import RangeList from './containers/RangeList'
import IconCheckedList from './containers/IconCheckedList'
import CheckedList from './containers/CheckedList'

var React = require('react');
var PropTypes = require('prop-types');

class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMessage: "",
      loadingStatus: "inactive",
      requestSuccessful: false,
      location: "",
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
    }
  }

  setPrice = (values) => {
    this.setState({
      price: {
        min: values[0],
        max: values[1]
      }
    })
  }

  setBedrooms = (values) => {
    this.setState({
      bedrooms: {
        min: values[0],
        max: values[1]
      }
    })
  }

  marks(item) {

  }

  submitForm = () => {
    let app = this
    let state = this.state
    app.setState({loadingStatus: "active"})
    $.ajax({
      url: '/accomodation/request',
      type: 'PUT',
      data: state,
      datatype: "json",
      success: function(result) {
        app.setState({
          modalMessage: "Your request has been successfully submitted",
          requestSuccessful: true
        })
        app.setState({loadingStatus: "inactive"})
        app.showRequestSuccessModal()
      }, error: function(err) {
        app.setState({
          modalMessage: `Request for accomodation failed\nError code: ${err.status}\nResponse from server: ${err.responseText.substring(0,256)}...`,
          requestSuccessful: false
       })
        app.setState({loadingStatus: "inactive"})
        app.showRequestSuccessModal()
      }
    })
  }

  showRequestSuccessModal = () => {
    $('#modal').modal('show')
  }

  setCheckedFn = (event) => {
    let updatedState = {}
    updatedState[event.target.name] = event.target.checked
    this.setState(updatedState)
  }

  render () {
    return  (
      <div className="ui grid">
        <div className="centered twelve wide column">

          <Loading status={this.state.loadingStatus}/>
          <Modal modalMessage={this.state.modalMessage} requestSuccessful={this.state.requestSuccessful}/>

          <div className='card' style={{'text-align':'left'}}>

            <div className='row'>
              <div className='ui grid transparent icon input'>
                <div className='column'><i className='marker icon'></i></div>
                <div className='four wide column '><input type='text' placeholder='location for accomodation...' style={{width: '100%', border: '0'}}/></div>
              </div>
            </div>

            <br />
            
            <div className='ui grid'>
              
              <div className='ui fourteen wide column unstackable list items' style={{marginBottom: '0px', paddingBottom: '0px'}}>
                <RangeList rangeItems={
                  [
                    {name: "price", setItemValue: this.setPrice, ...this.state.price},
                    {name: "bedroom", setItemValue: this.setBedrooms, ...this.state.bedrooms}
                  ]
                } />
              </div>
            
              <div className='ui eight wide column divided list items' style={{marginTop: '0px'}}>
                <IconCheckedList setValueFn={this.setCheckedFn}
                  items={[
                    {name: "furnished", label: "Furnished", icon: "tv"},
                    {name: "internet_access", label: "Internet Access", icon: "world"},
                    {name: "parking", label: "Parking", icon: "car"},
                  ]} 
                />
              </div>

              <div className='eight wide column' style={{marginTop: '0px'}}>
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
      </div>
    );
  }
}

module.exports = SearchApp
