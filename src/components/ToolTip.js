import React, { useState, useEffect } from 'react';
import './tooltip.css';

const ToolTip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  useEffect(() => {
    const h = props?.data?.arrowHeight === '' ? '6' : props.data.arrowHeight;
    const w = props?.data?.arrowWidth === '' ? '6' : props.data.arrowWidth;
    document.documentElement.style.setProperty(
      '--tooltip-background-color',
      props.data.backgroundColor
    );
    document.documentElement.style.setProperty(
      '--tooltip-arrow-width',
      w + 'px'
    );
    document.documentElement.style.setProperty(
      '--tooltip-arrow-height',
      h + 'px'
    );
  }, [
    props.data.backgroundColor,
    props.data.arrowWidth,
    props.data.arrowHeight,
  ]);

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
