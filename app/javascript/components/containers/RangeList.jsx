import React, { Component } from 'react'
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

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
			...this.props.rangeItems
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
    let activeValues = this.state[rangeItemName]
    activeValues[rangeItemName].min = values[0]
    activeValues[rangeItemName].max = values[1]
    this.setState({rangeItemName: activeValues})
    rangeItem['setItemValue'](values)
  }

  setMin = (event) => {
    let activeValues = this.state[event.name]
    activeValues[event.name].min = event.val
    let values = [event.val, this.state[event.name].max]
    let changedObject = {}
    changedObject[event.name] = activeValues
    this.setState(changedObject)
    this.state[event.name]['setItemValue'](values)
  }

  setMax = (event) => {
    let activeValues = this.state[event.name]
    activeValues[event.name].max = event.val
    let values = [this.state[event.name].min, event.val]
    let changedObject = {}
    changedObject[event.name] = activeValues
    this.setState(changedObject)
    this.state[event.name]['setItemValue'](values)
  }

	render () {
		let itemsKeys = _.keys(this.state.rangeItems)
		return 
      <div className='ui grid'>
        items.map((rangeItemName, i) => (
          <div className='item row spaced' key={rangeItemName}>
            <div className="ui column horizontal left-borded-label"> {rangeItemName}</div>
            <div className="middle twelve column aligned content" style={{margin: '0px 10px 0px 10px'}}>
              <Range className='column' min={this.state.rangeItem[rangeItemName].min} max={this.state.rangeItem[rangeItemName].max} 
                      handle={handles} marks={this.marks(this.state.rangeItem[rangeItemName].min, this.state.rangeItem[rangeItemName].max)} style={{fontSize: '150%'}}
                      onChange={this.setRangeMarks.bind(rangeItemName)} defaultValue={[this.state.rangeItem[rangeItemName].min, this.state.rangeItem[rangeItemName].max]}/>
              <div className="ui column input focus">
                <input type="number" placeholder={`${this.state.rangeItem[rangeItemName].min}`} name={rangeItemName} value={this.state.rangeItem[rangeItemName].min} onChange={this.setMin}/>
              </div>
              <div className='column'>-</div>
              <div className="ui column input focus">
                <input type="number" placeholder={`${this.state.rangeItem[rangeItemName].max}`} name={rangeItemName} value={this.state.rangeItem[rangeItemName].max} onChange={this.setMax}/>
              </div>
            </div>
          </div>
        )
      </div>
		)
	}
}

module.exports = RangeList