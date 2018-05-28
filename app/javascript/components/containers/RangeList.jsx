import React, { Component } from 'react'
import _ from 'lodash'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'
import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

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


class RangeList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...this.props
		}
	}

	marks = (min, max) => {
		let finalMarks = {}
    let mid = min + (max - min)/2
    finalMarks[max] = `${max}`
    finalMarks[min] = `${min}`
    finalMarks[mid] = `${mid}`

    return finalMarks;
	}

  setRangeMarks = (values) => {
    let activeValues = this.state[this]
    activeValues[this].min = values[0]
    activeValues[this].max = values[1]
    this.setState({rangeItemName: activeValues})
    rangeItem['setItemValue'](values)
  }

  setMin = (event) => {
    let values = [event.target.value, this.state.rangeItems[event.target.name].max]
    this.state.rangeItems[event.target.name]['setItemValue'](values)
  }

  setMax = (event) => {
    let values = [this.state.rangeItems[event.target.name].min, event.target.value]
    this.state.rangeItems[event.target.name]['setItemValue'](values)
  }

	render () {
		let itemsKeys =  _.keys(this.state.rangeItems)
		return (
      <div className='ui form' style={{padding: '15px'}}>
        { 
          itemsKeys.map((rangeItemName, i) => (
            <div className='field' key={rangeItemName}>
              <h4 className="ui header">{rangeItemName}</h4>
              <div className="fields">
                <div className='eleven wide field'>
                  <Range className='column' min={this.state.rangeItems[rangeItemName].min} max={this.state.rangeItems[rangeItemName].max} 
                          handle={handles} marks={this.marks(this.state.rangeItems[rangeItemName].min, this.state.rangeItems[rangeItemName].max)} style={{fontSize: '150%'}}
                          onChange={this.state.rangeItems[rangeItemName]['setItemValue']} defaultValue={[this.state.rangeItems[rangeItemName].min, this.state.rangeItems[rangeItemName].max]}/>
                </div>
                <div className='two wide field'>
                  <input type="number" placeholder={`${this.state.rangeItems[rangeItemName].min}`} name={rangeItemName} value={this.props.rangeItems[rangeItemName].min} onChange={this.setMin}/>
                </div>
                <div className='one wide field' style={{textAlign: 'center'}}>
                  -
                </div>
                <div className='two wide field'>
                  <input type="number" placeholder={`${this.state.rangeItems[rangeItemName].max}`} name={rangeItemName} value={this.props.rangeItems[rangeItemName].max} onChange={this.setMax}/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

module.exports = RangeList