import React from 'react';
import '../Addmember/Addmembers.css'

function FormInput({ label, type = 'text' }) {
  const id = label.toLowerCase();
  return (
    <div className="formColumn">
      <div className="formGroup">
        <label htmlFor={id} className="formLabel">{label}</label>
        <input type={type} id={id} className="formInput" aria-label={label} />
      </div>
    </div>
  );
}

export default FormInput;