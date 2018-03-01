import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

var React = require('react');
var PropTypes = require('prop-types');
const Handle = Slider.Handle;

const handle = (props) => {
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
                    <Slider className='column' min={0} max={20} defaultValue={3} handle={handle} />
                  </div>
                </div>
                <div className='item'>
                  <div className="ui horizontal left-borded-label"> Bedrooms</div>
                  <div className="middle aligned content" style={{padding: '5px 0px 0px 5px'}}>
                    <Slider className='column' min={0} max={20} defaultValue={3} handle={handle} />
                  </div>
                </div>
                <div className='ui divided list items'>
                  <div className='item'>
                    <i className='tv icon'></i>
                    <input className='leftpad' type='checkbox' name='furnished'/>
                    <label className='leftpad'>Furnished</label>
                  </div>

                  <div className='item'>
                    <i className='world icon'></i>
                    <input className='leftpad' type='checkbox' name='internet'/>
                    <label className='leftpad'>Internet Access</label>
                  </div>

                  <div className='item'>
                    <i className='car icon'></i>
                    <input className='leftpad' type='checkbox' name='parking'/>
                    <label className='leftpad'>Parking</label>
                  </div>
                </div>
              </div>

              <div className='eight wide column'>
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
