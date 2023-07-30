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
            <div
              className='btn-bgcolor'
              onMouseEnter={() => handleButtonHover('Button1', true)}
              onMouseLeave={() => handleButtonHover('Button1', false)}
            >
              Button 1
            </div>
            <div
              className='btn-bgcolor'
              onMouseEnter={() => handleButtonHover('Button2', true)}
              onMouseLeave={() => handleButtonHover('Button2', false)}
            >
              Button 2
            </div>
          </div>
          <div className='second'>
            <div
              className='btn-bgcolor'
              onMouseEnter={() => handleButtonHover('Button3', true)}
              onMouseLeave={() => handleButtonHover('Button3', false)}
            >
              Button 3
            </div>
          </div>
          <div className='third'>
            <div
              className='btn-bgcolor'
              onMouseEnter={() => handleButtonHover('Button4', true)}
              onMouseLeave={() => handleButtonHover('Button4', false)}
            >
              Button 4
            </div>
            <div
              className='btn-bgcolor'
              onMouseEnter={() => handleButtonHover('Button5', true)}
              onMouseLeave={() => handleButtonHover('Button5', false)}
            >
              Button 5
            </div>
          </div>
          {showTooltip && (
            <Tooltip data={formData} hoveredButton={hoveredButton} />
          )}
        </div>
      </div>
    </>
  );
}
