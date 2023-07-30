import React, { useState } from 'react';
import './App.css';
import './components/Right.css';
import Right from './components/Right';
function App() {
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
  // console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='App'>
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
            <option value='Select target Element' className='input-boxes'>
              Select Target Element
            </option>
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
      <Right props={formData} />
    </div>
  );
}

export default App;
