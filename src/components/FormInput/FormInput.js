import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='formInput' onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } formInputLabel`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
