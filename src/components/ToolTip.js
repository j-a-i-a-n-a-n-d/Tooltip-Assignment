// import React, { useState } from 'react';
// import './tooltip.css';
// import triangle from '../assets/traingle1.png';

// const Tooltip = ({ data, hoveredButton }) => {
//   console.log(data);
//   console.log(hoveredButton);
//   return (
//     <>
//       {data.targetElement === hoveredButton && (
//         <div className='ToolTip'>
//           <div>
//             <img src={triangle} alt='' />
//             {data.tooltipText}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


// export default Tooltip;



import React, { useState } from "react";
import "./tooltip.css";

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
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div
          className={`Tooltip-Tip ${props.direction || "top"}`}
          style={{ fontSize: `${props.textSize}px` }}
        >
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
