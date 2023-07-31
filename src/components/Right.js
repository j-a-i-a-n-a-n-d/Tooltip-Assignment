import React, { useState } from 'react';
import './Right.css';
import Tooltip from './ToolTip';

export default function Right(props) {
  const formData = {
    targetElement: props.props.targetElement,
    tooltipText: props.props.tooltipText,
    textSize: props.props.textSize,
    padding: props.props.padding,
    textColor: props.props.textColor,
    backgroundColor: props.props.backgroundColor,
    cornerRadius: props.props.cornerRadius,
    tooltipWidth: props.props.tooltipWidth,
    arrowWidth: props.props.arrowWidth,
    arrowHeight: props.props.arrowHeight,
  };

  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredButton, setHoveredButton] = useState('');
  const handleButtonHover = (buttonText, isHovering) => {
    setShowTooltip(isHovering);
    setHoveredButton(isHovering ? buttonText : '');
  };

  return (
    <>
      <div className='Right'>
        <div className='wrapper-right'>
          <div className='first'>
            <div className='btn-bgcolor'>
              <Tooltip 
                content={props.props.tooltipText} 
                direction="bottom"
                textSize={props.props.textSize} // Pass textSize prop here
                padding= {props.props.padding}
                textColor= {props.props.textColor}
                backgroundColor= {props.props.backgroundColor}
                cornerRadius= {props.props.cornerRadius}
                tooltipWidth= {props.props.tooltipWidth}
                arrowWidth={props.props.arrowWidth}
                arrowHeight={props.props.arrowHeight}

              >
                Button 1
              </Tooltip>
            </div>
            
            <div
              className='btn-bgcolor'
            >
              <Tooltip content={props.props.tooltipText} direction="bottom">
                Button 2
              </Tooltip>
            </div>
          </div>
          <div className='second'>
          <div
              className='btn-bgcolor'
            >
              <Tooltip content={props.props.tooltipText} direction="bottom">
                Button 3
              </Tooltip>
            </div>
          </div>
          <div className='third'>
          <div className='btn-bgcolor'>
              <Tooltip content={props.props.tooltipText} direction="top">
                Button 4
              </Tooltip>
            </div>
            <div className='btn-bgcolor'>
              <Tooltip content={props.props.tooltipText} direction="top">
                Button 5
              </Tooltip>
            </div>
          </div>
          {showTooltip && (
            <Tooltip formdata={formData} hoveredButton={hoveredButton} textSize={formData.textSize}  />
          )}
        </div>
      </div>
    </>
  );
}
