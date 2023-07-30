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
          <label className='bold' htmlFor='targetElement'>
            Target Element :
          </label>
          <br />
          <select
            className='input-boxes'
            name='targetElement'
            id='targetElement'
            onChange={handleChange}
          >
            <option value='Button1' className='input-boxes'>
              Button 1
            </option>
            <option value='Button2' className='input-boxes'>
              Button 2
            </option>
            <option value='Button3' className='input-boxes'>
              Button 3
            </option>
            <option value='Button4' className='input-boxes'>
              Button 4
            </option>
            <option value='Button5' className='input-boxes'>
              Button 5
            </option>
          </select>
        </div>
        <div className='tooltip-text'>
          <label className='bold' htmlFor='tooltipText'>
            Tooltip Text :
          </label>
          <br />
          <input
            type='text'
            id='tooltipText'
            name='tooltipText'
            onChange={handleChange}
            className='input-boxes'
          />
        </div>
        <div className='textsize-padding'>
          <div className='multi-use'>
            <div>
              <label className='bold' htmlFor='textSize'>
                Text Size :
              </label>
              <br />
              <input
                type='number'
                id='textSize'
                name='textSize'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
            <div>
              <label className='bold' htmlFor='padding'>
                Padding :
              </label>
              <br />
              <input
                type='number'
                id='padding'
                name='padding'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
          </div>
        </div>
        <div className='text-color'>
          <label className='bold' htmlFor='textColor'>
            Text Color :
          </label>
          <br />
          <input
            type='text'
            id='textColor'
            name='textColor'
            onChange={handleChange}
            className='input-boxes'
          />
        </div>
        <div className='background-color'>
          <label className='bold' htmlFor='backgroundColor'>
            Background Color :
          </label>
          <br />
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            onChange={handleChange}
            className='input-boxes'
          />
        </div>
        <div className='radius-tooltip'>
          <div className='multi-use'>
            <div>
              <label htmlFor='radius' className='bold'>
                Radius :
              </label>
              <br />
              <input
                type='number'
                id='radius'
                name='cornerRadius'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
            <div>
              <label htmlFor='tooltip' className='bold'>
                Tooltip Width:
              </label>
              <br />
              <input
                type='number'
                id='tooltip'
                name='tooltipWidth'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
          </div>
        </div>
        <div className='arrow-width-height'>
          <div className='multi-use'>
            <div>
              <label htmlFor='arrowWidth' className='bold'>
                Arrow Width :
              </label>
              <br />
              <input
                type='number'
                id='arrowWidth'
                name='arrowWidth'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
            <div>
              <label htmlFor='arrowHeight' className='bold'>
                Arrow Height :
              </label>
              <br />
              <input
                type='number'
                id='arrowHeight'
                name='arrowHeight'
                onChange={handleChange}
                className='input-boxes input-boxes-adv'
                min='0'
                step='1'
              />
            </div>
          </div>
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
