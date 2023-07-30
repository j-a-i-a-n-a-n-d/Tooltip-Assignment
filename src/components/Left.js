import React, { useState } from 'react';
import './left.css';

export default function Left() {
  const [formData, setFormData] = useState({
    targetElement: '',
    tooltipText: '',
    textSize: 0,
    padding: 0,
    textColor: '',
    backgroundColor: '',
    cornerRadius: 0,
    tooltipWidth: 0,
    arrowWidth: 0,
    arrowHeight: 0,
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='Left'>
        <div className='target-element'>
          <label htmlFor='targetElement'>Target Element :</label>
          <br />
          <select
            name='targetElement'
            id='targetElement'
            onChange={handleChange}
          >
            <option value='Button1'>Button 1</option>
            <option value='Button2'>Button 2</option>
            <option value='Button3'>Button 3</option>
            <option value='Button4'>Button 4</option>
            <option value='Button5'>Button 5</option>
          </select>
        </div>
        <div className='tooltip-text'>
          <label htmlFor='tooltipText'>Tooltip Text :</label>
          <br />
          <input
            type='text'
            id='tooltipText'
            name='tooltipText'
            onChange={handleChange}
          />
        </div>
        <div className='textsize-padding'>
          <label htmlFor='textSize'>Text Size :</label>
          <label htmlFor='padding'>Padding :</label>
          <br />
          <input
            type='number'
            id='textSize'
            name='textSize'
            onChange={handleChange}
          />
          <input
            type='number'
            id='padding'
            name='padding'
            onChange={handleChange}
          />
        </div>
        <div className='text-color'>
          <label htmlFor='textColor'>Text Color :</label>
          <br />
          <input
            type='text'
            id='textColor'
            name='textColor'
            onChange={handleChange}
          />
        </div>
        <div className='background-color'>
          <label htmlFor='backgroundColor'>Background Color :</label>
          <br />
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            onChange={handleChange}
          />
        </div>
        <div className='radius-tooltip'>
          <label htmlFor='radius'>Radius :</label>
          <label htmlFor='tooltip'>Tooltip :</label>
          <br />
          <input
            type='number'
            id='radius'
            name='cornerRadius'
            onChange={handleChange}
          />
          <input
            type='number'
            id='tooltip'
            name='tooltipWidth'
            onChange={handleChange}
          />
        </div>
        <div className='arrow-width-height'>
          <label htmlFor='arrowWidth'>Arrow Width :</label>
          <label htmlFor='arrowHeight'>Arrow Height :</label>
          <br />
          <input
            type='number'
            id='arrowWidth'
            name='arrowWidth'
            onChange={handleChange}
          />
          <input
            type='number'
            id='arrowHeight'
            name='arrowHeight'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='Right'>
        <div className='wrapper-right'>
          <div className='first'>
            <div className='btn-bgcolor'>Button 1</div>
            {formData.targetElement === 'Button1' && (
              <div className='tooltip'>{formData.tooltipText}</div>
            )}
            <div className='btn-bgcolor'>Button 2</div>
            {formData.targetElement === 'Button2' && (
              <div className='tooltip'>{formData.tooltipText}</div>
            )}
          </div>
          <div className='second'>
            <div className='btn-bgcolor'>Button 3</div>
            {formData.targetElement === 'Button3' && (
              <div className='tooltip'>{formData.tooltipText}</div>
            )}
          </div>
          <div className='third'>
            <div className='btn-bgcolor'>Button 4</div>
            {formData.targetElement === 'Button4' && (
              <div className='tooltip'>{formData.tooltipText}</div>
            )}
            <div className='btn-bgcolor'>Button 5</div>
            {formData.targetElement === 'Button5' && (
              <div className='tooltip'>{formData.tooltipText}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
