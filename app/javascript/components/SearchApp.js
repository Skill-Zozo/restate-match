// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

var React = require('react');
var PropTypes = require('prop-types');

class SearchApp extends React.Component {
  render () {
    return  (
      <div className="ui grid">
        <div className="centered twelve wide column">
          <div className='card'>
            <div className='row'>
              <div className='ui transparent icon input'>
                <div className='column'><i className='marker icon'></i></div>
                <div className='column'><input type='text' placeholder='search for accomodation...'/></div>
                <div className='column'><i className='search icon'></i></div>
              </div>
            </div>

            <div className='row'>
              <div className='five wide column'>
                <a className="item left-borded-label">
                  <div className="ui horizontal label">Price</div>
                  <Slider
                    min=0
                    max=1000
                  />
                </a>
                <a className="item left-borded-label">
                  <div className="ui horizontal label">Bedrooms</div>
                  <Slider
                    min=0
                    max=3
                  />
                </a>

                <div className='ui divided list'>
                  <div className='item'>
                    <i className='TV icon'></i>
                    <input type='checkbox' name='furnished'/> <label>Furnished</label>
                  </div>

                  <div className='item'>
                    <i className='world icon'></i>
                    <input type='checkbox' name='internet'/> <label>Internet Access</label>
                  </div>

                  <div className='item'>
                    <i className='car icon'></i>
                    <input type='checkbox' name='parking'/><label>Parking</label>
                  </div>
                </div>
              </div>

              <div className='five wide column'>
                Close to (within a 5km radius of)
                <div className='ui divided list'>
                  <div className='item'>
                    <input type='checkbox' name='hospital'/> <label>Hospital</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='taxi'/> <label>Taxi Stop</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='train'/> <label>Train Station</label>
                  </div>

                  <div className='item'>
                    <input type='checkbox' name='beach'/> <label>Beach</label>
                  </div>
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
