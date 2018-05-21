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
		let itemsKeys =  _.keys(this.state.rangeItems)
    // console.log(underscore)
    // if(['price'] != undefined) {
    //   debugger
    //   itemsKeys = underscore.keys(this.state.rangeItems)
    // }
    // console.log(itemsKeys)
    // console.log(this.state.rangeItems)
		return (
      <div className='ui grid'>
        { 
          itemsKeys.map((rangeItemName, i) => (
            <div className='item row spaced' key={rangeItemName}>
              <div className='ui grid' style={{margin: '12px', width:'100%'}}>
                <div className="ui two column wide horizontal left-borded-label basic label large" style={{padding: '12px 2px'}}> {rangeItemName}</div>
                <div className="middle eight wide column aligned content" style={{margin: '0px 10px 0px 10px'}}>
                  <Range className='column' min={this.state.rangeItems[rangeItemName].min} max={this.state.rangeItems[rangeItemName].max} 
                          handle={handles} marks={this.marks(this.state.rangeItems[rangeItemName].min, this.state.rangeItems[rangeItemName].max)} style={{fontSize: '150%'}}
                          onChange={this.setRangeMarks.bind(rangeItemName)} defaultValue={[this.state.rangeItems[rangeItemName].min, this.state.rangeItems[rangeItemName].max]}/>
                </div>
                <div className="ui three wide column input focus mini">
                  <input type="number" placeholder={`${this.state.rangeItems[rangeItemName].min}`} name={rangeItemName} value={this.state.rangeItems[rangeItemName].min} onChange={this.setMin}/>
                </div>
                <div style={{padding: '15px 0px', margin: '0'}}>-</div>
                <div className="ui three wide column input focus mini">
                  <input type="number" placeholder={`${this.state.rangeItems[rangeItemName].max}`} name={rangeItemName} value={this.state.rangeItems[rangeItemName].max} onChange={this.setMax}/>
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