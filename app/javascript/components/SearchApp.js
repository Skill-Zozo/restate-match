import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

var React = require('react');
var PropTypes = require('prop-types');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handles = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class SearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: false,
      price: {
        min: 0,
        max: 0
      },
      bedrooms: {
        min: 0,
        max: 0
      },
      internet: false,
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

  submitForm() {
    let state = this.state;
    $.ajax({
      url: '/accomodation/request',
      type: 'PUT',
      data: state,
      success: function(result) {
        console.log("Request for house entered")
      }
    })
  }

  render () {
    return  (
      <div className="ui grid">
        <div className="centered twelve wide column">
          <div className='card' style={{'text-align':'left'}}>
            <div className='row'>
              <div className='ui centered grid transparent icon input'>
                <div className='column'><i className='marker icon'></i></div>
                <div className='twelve wide column bordered-bottom'><input type='text' placeholder='search for accomodation...' style={{width: '100%'}}/></div>
                <div className='column'><i className='search icon'></i></div>
              </div>
            </div>
            <br />
            <br />
            <div className='ui grid row'>
              <div className='ui eight wide column unstackable items'>
                <div className='item'>
                  <div className="ui horizontal left-borded-label">Price</div>
                  <div className="middle aligned content" style={{padding: '5px 0px 0px 5px'}}>
                    <Range className='column' min={0} max={20} handle={handles} defaultValue={[1, 9]} onChange={this.setPrice}/>
                  </div>
                </div>
                <div className='item'>
                  <div className="ui horizontal left-borded-label"> Bedrooms</div>
                  <div className="middle aligned content" style={{padding: '5px 0px 0px 5px'}}>
                    <Range className='column' min={0} max={20} handle={handles} defaultValue={[1, 9]} onChange={this.setBedrooms}/>
                  </div>
                </div>
                <div className='ui divided list items'>
                  <div className='item'>
                    <i className='tv icon'></i>
                    <input className='leftpad' type='checkbox' name='furnished' onChange={(e) => {this.setState({furniture: e.target.checked})}}/>
                    <label className='leftpad'>Furnished</label>
                  </div>

                  <div className='item'>
                    <i className='world icon'></i>
                    <input className='leftpad' type='checkbox' name='internet' onChange={(e) => {this.setState({internet: e.target.checked})}}/>
                    <label className='leftpad'>Internet Access</label>
                  </div>

                  <div className='item'>
                    <i className='car icon'></i>
                    <input className='leftpad' type='checkbox' name='parking' onChange={(e) => {this.setState({parking: e.target.checked})}}/>
                    <label className='leftpad'>Parking</label>
                  </div>
                </div>
              </div>

              <div className='eight wide column'>
                Close to (within a 5km radius of)
                <div className='ui divided list'>
                  <div className='item'>
                    <input type='checkbox' name='hospital' onChange={(e) => {this.setState({hospital: e.target.checked})}}/> <label>Hospital</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='taxi' onChange={(e) => {this.setState({taxi: e.target.checked})}}/> <label>Taxi Stop</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='train' onChange={(e) => {this.setState({train: e.target.checked})}}/> <label>Train Station</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='beach' onChange={(e) => {this.setState({beach: e.target.checked})}}/> <label>Beach</label>
                  </div>
                </div>

                <div style={{position: 'absolute', bottom:'10%', right:'10%'}}>
                  <button className="ui primary basic button" onClick={this.submitForm.bind(this)}>Submit Request</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

SearchApp.propTypes = {};

module.exports = SearchApp
