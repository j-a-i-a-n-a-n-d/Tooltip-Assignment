import React from 'react';
import './tooltip.css';

const Tooltip = (props) => {
  const tooltipStyle = {
    fontSize: `${props.props.textSize}px`,
    padding: `${props.props.padding}px`,
    color: props.props.textColor,
    position: 'relative', // To position the triangle correctly
  };

  return (
    <div className='ToolTip'>
      <div style={tooltipStyle}>{props.props.tooltipText}</div>
    </div>
  );
};

export default Tooltip;
