import React from 'react';
import './tooltip.css';
import triangle from '../assets/traingle1.png';

const Tooltip = ({ data, hoveredButton }) => {
  console.log(data);
  console.log(hoveredButton);
  return (
    <>
      {data.targetElement === hoveredButton && (
        <div className='ToolTip'>
          <div>
            <img src={triangle} alt='' />
            {data.tooltipText}
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
