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
			rangeItems: this.props.rangeItems
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

	render () {
		let items = this.state.rangeItems 
		return items.map((rangeItem, i) => (
				<div className='item row spaced' key={rangeItem.name}>
          <div className="ui horizontal left-borded-label"> {rangeItem.name}</div>
          <div className="middle aligned content" style={{margin: '0px 10px 0px 10px'}}>
            <Range className='column' min={rangeItem.min} max={rangeItem.max} 
            				handle={handles} marks={this.marks(rangeItem.min, rangeItem.max)} 
            				onChange={rangeItem['setItemValue']}  defaultValue={[rangeItem.min, rangeItem.max]}/>
          </div>
      	</div>
      )
		)
	}
}

module.exports = RangeList