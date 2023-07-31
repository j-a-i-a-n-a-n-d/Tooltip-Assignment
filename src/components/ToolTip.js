import React, { useState } from 'react';
import './tooltip.css';

const ToolTip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className='Tooltip-Wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {props.children === props?.data?.targetElement && active && (
        <div
          className={`Tooltip-Tip ${props.direction || 'top'}`}
          style={{
            background: `${props.data.backgroundColor}`,
            color: `${props.data.textColor}`,
            width: `${props.data.tooltipWidth}px`,
            borderRadius: `${props.data.cornerRadius}px`,
            fontSize: `${props.data.textSize}px`,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
